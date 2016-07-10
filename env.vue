<template lang="html">
  <div>
    <div
      v-for="color in colors"
      class="colored-box"
      :style="{background: color}"
      @contextmenu.prevent="$refs.ctx.open($event, {color: color, index: $index})">
    </div>

    <div class="rhs">
      Selection: <pre class="example">{{ menuData | json }}</pre>
    </div>
    <div style="clear:both;"></div>

    <hr style="margin: 2rem auto">

    <pre class="example">{{ contextClicks | json }}</pre>


    <context-menu
      id="testingctx"
      v-ref:ctx
      :ctx-data.sync="menuData"
      :ctx-visible.sync="showCtx">
        <li class="ctx-header" v-if="menuData!==null">{{menuData.color}}</li>
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
    height: 10vh;
    width: 10vh;
    display: inline-block;
    margin: .5rem;
  }

  .example {
    border: 1px solid lightgray;
    padding: 1rem;
    margin: 0;
  }

  .rhs {
    float: right;
    width: 40vw;
    padding: .5rem 0;
  }
</style>
<script>
import { default as contextMenu } from '../src/index.vue'
export default {
  components: {
    contextMenu
  },
  data() {
    return {
      colors: ['pink', 'lightblue', 'green', 'gray', 'red', 'turquoise'],
      showCtx: false,
      menuData: null,
      contextClicks: []
    }
  },
  methods: {
    logClick(e, context) {
      this.contextClicks.push(context)
      console.log('logged!', context)
    }
  }
}
</script>