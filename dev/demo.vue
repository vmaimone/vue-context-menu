<template lang="html">
  <div>
    <div
      v-for="(color, index) in colors"
      class="colored-box"
      :style="{background: color}"
      @click="sayColor(color)"
      @contextmenu.prevent="$refs.ctx.open($event, {color: color, index: index})">
    </div>

    <div class="rhs">
      Local Menu Data: <pre class="example">{{ menuData }}</pre>
    </div>
    <div style="clear:both;"></div>

    <hr style="margin: 2rem auto">

    <pre class="example">{{ contextClicks }}</pre>


    <context-menu id="testingctx" ref="ctx" @ctx-open="onCtxOpen" @ctx-cancel="resetCtxLocals" @ctx-close="onCtxClose">
        <li class="ctx-header">{{menuData.color}}</li>
        <li class="ctx-item">option one</li>
        <li class="ctx-item disabled">option two (disabled)</li>
        <li class="ctx-item" @click="logClick($event, menuData)">add to log</li>
    </context-menu>
  </div>
</template>
<style>
  html {
    font-family: sans-serif;
    font-size: 14px;
  }

  .colored-box {
    height: 11vh;
    width: 11vh;
    display: inline-block;
    margin: .25rem;
  }

  .example {
    border: 1px solid lightgray;
    padding: 1rem;
    margin: 0;
  }

  .rhs {
    float: right;
    width: 40vw;
    padding: .5rem 0 1rem 0;
  }
</style>
<script>
import contextMenu from '../src/index.vue'

const newMenuData = () => ({ color: null })

export default {
  components: {
    contextMenu
  },
  data() {
    return {
      colors: ['pink', 'lightblue', 'green', 'red', 'turquoise'],
      showCtx: false,
      menuData: newMenuData(),
      contextClicks: []
    }
  },
  methods: {
    onCtxOpen(locals) {
      console.log('open', locals)
      this.menuData = locals
    },

    onCtxClose(locals) {
      console.log('close', locals)
      window.bbbb = locals
    },

    resetCtxLocals() {
      this.menuData = newMenuData()
    },

    logClick(e,context) {
      this.contextClicks.push(Object.assign({},this.menuData))
      return logger('click')(context)
    },
    sayColor(color) {
      window.alert(color)
    }
  }
}

function logger(n) {
  let name = 'event:ctx-' + n
  return function(...more) {
    console.log(name, ...more)
  }
}
</script>