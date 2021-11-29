<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import './assets/css/reset.css'
import './assets/iconfont/iconfont.css'
import './assets/iconfont/iconfont'

export default {
  data() {
    return {

    }
  }
}
</script>


<style lang="scss">
#app {
  height: 100%;
  width: 100%;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
