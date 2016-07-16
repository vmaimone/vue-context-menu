var VueContextMenu = require('../index.js')

VueContextMenu.install = function install(Vue) {
  var component = Vue.component('context-menu', VueContextMenu)
  return component
}

window.VueContextMenu = VueContextMenu

module.exports = VueContextMenu
