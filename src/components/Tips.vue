<template>
  <div class="tips_shade">
    <div class="tips_box ">{{ msg }}</div>
  </div>
</template>

<script>
  export default {
    name: 'Tips',
    data() {
      return {
        msg: 'Tips'
      }
    },
    mounted() {
      setTimeout(() => {
        this.$el.remove()
      }, 2000)
    }
  }
</script>

<style scoped="scoped">
  .tips_shade {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    /*pointer-events: none;*/
    z-index: 5;
    font-size: 14px;
  }
  .tips_box {
    pointer-events: none;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    padding: 10px 20px;
    box-sizing: border-box;
    color: white;
    background: rgba(0, 0, 0, .7);
    z-index: 9;
    animation: tips .5s;
  }
  @keyframes tips {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>

