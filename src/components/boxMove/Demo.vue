<template>
  <div class='demo'>
    <box-move :btnSize="100">
      <!-- <template #btn>cccc</template> -->
    </box-move>
  </div>
</template>

<script>
import BoxMove from './BoxMove.vue';

export default {
  components: {
    BoxMove
  },
  data() {
    return {

    };
  },
};
</script>

<style lang='scss' scoped>
.demo {
  
}
</style>