export function renderMenus(modules, store, container) {
  const state = store.getState();
  const fragment = document.createDocumentFragment();

  for (const module of modules) {
    const section = document.createElement("section");
    const heading = document.createElement("h2");
    heading.textContent = module.title;
    section.append(heading);

    for (const menu of module.menus) {
      const field = document.createElement("div");
      const label = document.createElement("label");
      const select = document.createElement("select");
      select.id = `${module.id}-${menu.id}`;
      label.htmlFor = select.id;
      label.textContent = menu.label;

      for (const option of menu.options) {
        const element = document.createElement("option");
        element.value = option.value;
        element.textContent = option.label;
        select.append(element);
      }

      select.value = state[module.id][menu.id];
      select.addEventListener("change", () => {
        store.update(module.id, menu.id, select.value);
      });
      field.append(label, select);
      section.append(field);
    }
    fragment.append(section);
  }
  container.replaceChildren(fragment);
}
