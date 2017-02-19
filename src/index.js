Vue = require("vue")
Vue.config.debug = true
Router = require("/Users/vin/@vmaimone/vue-context-menu/node_modules/vue-router/dist/vue-router.common.js")
Vue.use(Router)
routes = [
  {path: "/index", component: require("./index.vue")},

]
router = new Router({routes:[
  {path: "/index", component: require("./index.vue")},

  {path:"/",component: require("/Users/vin/@vmaimone/vue-context-menu/node_modules/vue-dev-server/app/main.js")}
]})
router.afterEach(function(to) {
  document.title = to.path + " - vue-dev-server"
})
app = new Vue({
  data: function() {return {availableRoutes: routes}},
  template: "<router-view></router-view>",
  router: router
  }).$mount("#app")