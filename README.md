# vue-context-menu

> vue context-menu component

Demo: https://vmaimone.github.io/vue-context-menu

# Example Usage
```

<div @contextmenu.prevent="$refs.ctxMenu.open">
  ...
</div>

<context-menu id="context-menu" ref="ctxMenu">
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

# runs webpack-dev-server
npm run dev
```
## Vue 1.x Support
Haven't migrated to Vue 2.x yet?

`npm install vue-context-menu@0.0.13`
