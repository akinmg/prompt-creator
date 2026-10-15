export function createStore(modules) {
  const definitions = new Map(modules.map(module => [module.id, module]));
  const state = Object.fromEntries(modules.map(module => [
    module.id,
    Object.fromEntries(module.menus.map(menu => [
      menu.id, menu.defaultValue ?? menu.options[0].value
    ])),
  ]));
  const subscribers = new Set();

  function getState() {
    return Object.fromEntries(
      Object.entries(state).map(([id, options]) => [id, { ...options }])
    );
  }

  return {
    getState,
    update(moduleId, optionId, value) {
      const module = definitions.get(moduleId);
      if (!module) throw new Error(`Unknown module: ${moduleId}`);
      const menu = module.menus.find(menu => menu.id === optionId);
      if (!menu) throw new Error(`Unknown option: ${moduleId}.${optionId}`);
      if (!menu.options.some(option => option.value === value)) {
        throw new Error(`Invalid value: ${moduleId}.${optionId}`);
      }
      if (state[moduleId][optionId] === value) return;
      state[moduleId][optionId] = value;
      const snapshot = getState();
      for (const listener of subscribers) listener(snapshot);
    },
    subscribe(listener) {
      if (typeof listener !== "function") throw new TypeError("Listener must be a function");
      subscribers.add(listener);
      return () => subscribers.delete(listener);
    },
  };
}
