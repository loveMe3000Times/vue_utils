<template>
  <div class='demo'>

    <time-line>

      <time-line-item :lineStyle="{width: '4px', backgroundColor: '#F56C6C'}" :iconStyle="{backgroundColor: '#E6A23C', width: '16px', height: '16px'}"
                      icon="icon el-icon-more">
        <div class="box">自定义样式</div>
      </time-line-item>

      <time-line-item iconBgColor="#409EFF" iconfontColor="#fff" lineColor="#67C23A" icon="icon el-icon-bottom">
        <div class="box">使用属性设置样式 ： 更多样式，查看 timelineItem.vue 的 props</div>
      </time-line-item>

      <time-line-item>
        <div slot="icon">
          <div class="rect"></div>
        </div>
        <div class="box">icon slot</div>
      </time-line-item>
    </time-line>

  </div>
</template>

<script>
import TimeLineItem from './timelineItem.vue'
import TimeLine from './timeline.vue';

export default {
  components: {
    TimeLineItem,
    TimeLine,
  },
  data() {
    return {

    };
  },
};
</script>

<style lang='scss' scoped>
.demo {
  .box {
    margin-top: 10px;
    padding: 10px;
    height: 100px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  .rect {
    width: 20px;
    height: 20px;
    background-color: #67c23a;
  }
}
</style>