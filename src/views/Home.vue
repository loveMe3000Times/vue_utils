<template>
  <div class="home">
    <box-move />
  </div>
</template>

<script>
import BoxMove from '../components/boxMove/Demo.vue'

export default {
  components: {
    BoxMove
  }
}
</script>

<style lang="scss" scoped>
.home{
  height: 100%;
  width: 100%;
}
</style>
