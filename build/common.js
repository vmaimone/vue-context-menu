window.VueContextMenu = function install(Vue) {
  var component = Vue.component('context-menu', require('../index.js'))
  return component
}
