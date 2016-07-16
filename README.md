# vue-context-menu

> vue context-menu component

Demo: https://vmaimone.github.io/vue-context-menu/#!/demo



# Example Usage
```

<div @contextmenu.prevent="$refs.ctxMenu.open($event, localMenuData)">
  ...
</div>

<context-menu id="context-menu" v-ref:ctx-menu>
  <li @click="doSomething(...)">option 1</li>
  <li class="disabled">option 2</li>
  <li>option 3</li>
</context-menu>

<script>
import contextMenu from 'vue-context-menu'
export default {
  name: 'my-component',
  components: { contextMenu },
  methods: { doSomething }
  ...
}
</script>
```

# Build Setup

```
# install dependencies
npm install

# compiles src/*.vue and builds a bundle for static linking
npm run build

# runs Karma with test/*.js
npm run test

# runs vue-dev-server with the content of dev/
npm run dev
```
