export function createModuleRegistry() {
  const modules = new Map();

  return {
    register(module) {
      if (!module || typeof module.id !== "string" || !module.id.trim() ||
          !Array.isArray(module.menus) || typeof module.generatePrompt !== "function") {
        throw new Error("Invalid module definition");
      }
      if (modules.has(module.id)) throw new Error(`Duplicate module: ${module.id}`);
      const ids = new Set();
      for (const menu of module.menus) {
        if (!menu?.id || ids.has(menu.id) || !Array.isArray(menu.options) || !menu.options.length) {
          throw new Error(`Invalid menu in module: ${module.id}`);
        }
        ids.add(menu.id);
        const defaultValue = menu.defaultValue ?? menu.options[0].value;
        if (!menu.options.some(option => option.value === defaultValue)) {
          throw new Error(`Invalid default for ${module.id}.${menu.id}`);
        }
      }
      modules.set(module.id, module);
    },
    get(id) { return modules.get(id); },
    getAll() { return [...modules.values()]; },
  };
}
