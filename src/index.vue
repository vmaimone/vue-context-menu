<template lang="html">
	<div
		v-el:context-menu
		@click.stop
		@contextmenu.stop
    :id="id"
    class="ctx-menu-container"
		:ctx="ctxFocus"
		:style="ctxStyle">
		<div style="background-color:transparent" class="ctx open">
      <ul
        role="menu"
        class="ctx-menu"
        :class="{
          'ctx-menu-right': align==='right',
          'ctx-menu-left': align==='left'
        }"
      >
        <slot></slot>
      </ul>
		</div>
	</div>
</template>
<style src="./ctx-menu.css"></style>
<script src="./ctx-menu.js"></script>

