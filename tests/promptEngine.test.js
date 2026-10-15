import test from "node:test";
import assert from "node:assert/strict";
import { createModuleRegistry } from "../src/core/moduleRegistry.js";
import { createStore } from "../src/core/store.js";
import { generateFullPrompt } from "../src/core/promptEngine.js";
import photography from "../src/modules/photography/index.js";

test("preserves existing photography defaults and prompt", () => {
  const store = createStore([photography]);
  assert.equal(generateFullPrompt([photography], store.getState()),
    "Edit the uploaded photo into a highly realistic vertical 9:16 fashion photograph, captured as if shot naturally with an iPhone 17 Pro Max.");
});

test("updates values and prevents invalid selections", () => {
  const store = createStore([photography]);
  let count = 0;
  const unsubscribe = store.subscribe(() => count++);
  store.update("photography", "orientation", "horizontal");
  store.update("photography", "orientation", "horizontal");
  assert.equal(count, 1);
  assert.equal(store.getState().photography.orientation, "horizontal");
  assert.throws(() => store.update("photography", "orientation", "bogus"));
  unsubscribe();
  store.update("photography", "orientation", "vertical");
  assert.equal(count, 1);
});

test("combines independent modules in registry order", () => {
  const registry = createModuleRegistry();
  const extra = {
    id: "lighting", title: "Lighting",
    menus: [{ id: "light", options: [{ value: "soft" }] }],
    generatePrompt: state => `Lighting: ${state.light}`,
  };
  registry.register(photography);
  registry.register(extra);
  assert.throws(() => registry.register(extra), /Duplicate/);
  const modules = registry.getAll();
  const store = createStore(modules);
  assert.match(generateFullPrompt(modules, store.getState()), /\n\nLighting: soft$/);
  const copiedState = store.getState();
  copiedState.photography.orientation = "modified";
  assert.equal(store.getState().photography.orientation, "vertical");
});

test("rejects invalid default values", () => {
  const registry = createModuleRegistry();
  assert.throws(() => registry.register({
    id: "bad",
    menus: [{ id: "menu", options: [{ value: "valid" }], defaultValue: "invalid" }],
    generatePrompt: () => "",
  }), /Invalid default/);
});
