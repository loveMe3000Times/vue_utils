<!-- 
<box-move /> 

* 属性
  - btnSize { Number | String } : 按钮区域大小（默认50px）;
  - clickOtherClose { Boolean } ：是否点击遮罩层关闭(默认： true)

-->
<template>
  <div class='box-move'>

    {{ btnStyle }}

    <div class="monto" v-if="montoShow" @click="montoClickHandle">
      <slot />
    </div>

    <div class="btn-box" :style="btnStyle" ref="btnBox">
      <nav class="btn" ref="btn" @mouseup="mouseupHandle">
        <slot name="btn">
          <div class="btn-warp">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-caidan"></use>
            </svg>
          </div>
        </slot>
      </nav>
      <div class="spread">
        <div class="spread-item"></div>
        <div class="spread-item"></div>
        <div class="spread-item"></div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    btnSize: {
      type: [Number, String],
      default: 50,
    },
    clickOtherClose: {
      type: Boolean,
      default: true,
    }
  },
  data() {
    return {
      montoShow: false,
      isDrag: false, // 是否是(激活)点击事件
      dragTime: 200, // 点击与拖动事件间隔（区分）
      setDragTimer: null,
      btnStyle: {
        top: 0,
        left: 0,
        width: '50px',
        height: '50px',
      }
    };
  },
  watch: {
    btnSize: {
      handler() {
        let width = typeof this.btnSize === 'string' ? this.btnSize : this.btnSize + 'px';
        this.btnStyle.width = width;
        this.btnStyle.height = width;

      },
      immediate: true,
    }
  },
  mounted() {
    this.btnStyle.top = `calc(100vh - 100px - ${this.btnSize}px)`;
    this.btnStyle.left = `calc(100vw - 100px - ${this.btnSize}px)`;

    this.$nextTick(_ => {
      this.$refs['btn'].addEventListener('mousedown', this.mousedownHandle);
    })
  },
  beforeDestroy() {

  },
  methods: {
    menuClick() {
      if (this.isDrag === false) {
        this.montoShow = !this.montoShow
      }
    },
    closeMonto() {
      if (this.isDrag === false) {
        this.montoShow = false;
      }
    },
    montoClickHandle() {
      if (this.clickOtherClose) {
        this.closeMonto();
      }
    },
    mousedownHandle(e) {
      const btnDom = this.$refs['btnBox'];
      this.isDrag = false;

      this.$refs['btn'].removeEventListener('mousedown', this.mousedownHandle);
      this.setDragTimer = setTimeout(() => {
        document.addEventListener('mousemove', this.moveBtn);
        this.isDrag = true;
      }, this.dragTime);

      return false;
    },
    mouseupHandle(e) {
      const btnDom = this.$refs['btnBox'];
      this.$refs['btn'].addEventListener('mousedown', this.mousedownHandle);

      if (this.isDrag === false) {
        this.menuClick();
      }

      document.removeEventListener('mousemove', this.moveBtn);
      this.isDrag = false;
      if (this.setDragTimer) {
        clearTimeout(this.setDragTimer);
        this.setDragTimer = null;
      }

      return false;
    },
    moveBtn(e) {
      // console.log(e);
      // return false;
      const { clientX, clientY } = e;
      this.btnStyle.top = clientY - this.btnSize / 2 + 'px';
      this.btnStyle.left = clientX - this.btnSize / 2 + 'px';
    }
  }
};
</script>

<style lang='scss' scoped>
.box-move {
  position: absolute;
  top: 0;
  left: 0;
  /*** 蒙层 ***/
  .monto {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.3);
    // filter: blur(5px);
  }

  /*** 按钮  ***/
  .btn-box {
    position: absolute;
    background-color: transparent;

    .btn {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      cursor: pointer;
      user-select: none;
      z-index: 2;
      .btn-warp {
        padding: 5px;
        width: 100%;
        height: 100%;
        background-color: #fff;
        border-radius: 50%;
        border: 1px solid #ddd;
        box-sizing: border-box;

        &:active {
          box-shadow: 0px 0px 5px #ccc inset;
        }

        .icon {
          width: 100%;
          height: 100%;
        }
      }
    }

    .spread {
      position: absolute;
      top: 0;
      left: -50%;
      right: 0;
      bottom: 0;
      margin: auto;
      height: 200%;
      width: 200%;
      &-item {
        $time: 2s; // 动画时间
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        border-radius: 50%;
        animation: spread $time infinite linear;
        &:nth-child(1) {
          animation-delay: 0.5s;
        }
        &:nth-child(2) {
          animation-delay: 1s;
        }
      }
    }
  }

  @keyframes spread {
    from {
      width: 0px;
      height: 0px;
      box-shadow: 0px 0px 10px rgba(64, 160, 255, 1),
        0px 0px 10px rgba(64, 160, 255, 1) inset;
    }
    to {
      width: 100%;
      height: 100%;
      box-shadow: 0px 0px 30px 5px rgba(64, 160, 255, 0),
        0px 0px 15px rgba(64, 160, 255, 0) inset;
    }
  }
}
</style>