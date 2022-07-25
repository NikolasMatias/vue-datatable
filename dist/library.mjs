var script = {
    name: 'VDataTable'
  };

script.__file = "src/VDataTable.vue";

var components = { VDataTable: script };

const plugin = {
    install (Vue) {
        for (const prop in components) {
            if (components.hasOwnProperty(prop)) {
                const component = components[prop];
                Vue.component(component.name, component);
            }
        }
    }
};

export { plugin as default };
