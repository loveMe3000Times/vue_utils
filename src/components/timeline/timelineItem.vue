<template>
  <div class="timeline-item">

    <div class="line-box">
      <div class="line-top" :style="{ height: iconTopValue, background: lineColor }"></div>
      <div class="dot-box" :style="{top: iconTopValue}" ref="iconBox">
        <div v-if="!$slots.icon" class="dot" :style="{ background: iconBgColor, color: iconfontColor, ...iconStyle }">
          <span v-if="icon" :class="icon"></span>
        </div>
        <slot name="icon"></slot>
      </div>
      <div class="line-bottom" :style="{ background: lineColor, ...lineStyle }"></div>
    </div>

    <div class="content-box">
      <slot />
    </div>

  </div>

</template>

<script>
const defaultLineColor = "#e4e7ed"; // 时间线默认颜色

export default {
  // inject: ['timeline'],
  props: {
    align: { // 时间戳对齐的方式: top | center | bottom
      type: String,
      default: 'center',
    },
    icon: { // `icon el-icon-more`
      type: String,
      default: '',
    },
    iconTop: { // 可以为数值(10)、 字符('10px' | '10%')
      type: [String, Number],
      default: '',
    },
    iconBgColor: { // icon(小圆点背景色)
      type: String,
      default: defaultLineColor,
    },
    iconStyle: {
      type: Object,
      default: () => { },
    },
    iconfontColor: {
      type: String,
      default: '',
    },
    lineColor: { // 线条颜色
      type: String,
      default: defaultLineColor,
    },
    lineStyle: {
      type: Object,
      default: () => { },
    },
  },
  data() {
    return {
      iconTopValue: '', // 时间戳(时间线上的圆点)，距离顶部的距离 
    };
  },
  watch: {
    iconTop() {
      this.updateIconTop();
    }
  },
  mounted() {
    this.updateIconTop();
  },
  methods: {
    updateIconTop() {
      // icon 偏移
      const IconDOMRect = this.$refs.iconBox.getBoundingClientRect();
      const iconBoxHeight = IconDOMRect.height;
      const preset = {
        top: `${iconBoxHeight / 2}px`,
        center: '50%',
        bottom: `calc(100% + ${iconBoxHeight / 2}px)`,
      }

      this.iconTopValue = preset[this.align];

      if (this.iconTop) {
        if (typeof this.iconTop === 'number') this.iconTopValue = this.iconTop + 'px';
        if (typeof this.iconTop === 'string') this.iconTopValue = this.iconTop;
      }

    }
  }
};
</script>

<style lang='scss' scoped>
.timeline-item {
  display: flex;
  border-radius: 10px;
  // border: 1px solid #ccc;

  &:first-of-type .line-box .line-top,
  &:last-of-type .line-box .line-bottom {
    visibility: hidden;
    width: 0;
  }

  .line-box {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 14px;

    .dot-box {
      position: absolute;
      top: 0;
      transform: translateY(-50%);

      .dot {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 14px;
        height: 14px;
        border-radius: 50%;
      }
    }

    .line-top {
      width: 2px;
    }

    .line-bottom {
      flex: 1;
      width: 2px;
    }
  }

  .content-box {
    flex: 1;
    margin-left: 20px;
  }
}
</style>