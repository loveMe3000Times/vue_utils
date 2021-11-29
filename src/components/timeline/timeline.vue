<script>
export default {
  provide() {
    return {
      timeline: this
    };
  },

  render() {
    const defaultSlots = this.$slots.default || [];

    return (<div class="timeline">
      {defaultSlots}
    </div>)
  }
};
</script>