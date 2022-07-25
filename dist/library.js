'use strict';

var script = {
    name: 'VDatatable'
  };

script.__file = "src/VDatatable.vue";

var components = { VDatatable: script };

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

module.exports = plugin;
