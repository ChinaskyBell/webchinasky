<template>
  <!-- 返回顶部 -->
  <div class="returnTop" :class="{'show':isShow}" @click="backTop">
    <i class="iconfont icon-jiantoushang"></i>
  </div>
</template>

<script>

export default {
  name: 'Back-Top',
  data () {
    return {
      isShow: false
    }
  },
  mounted () {
    this.listenerFunction()
  },
  methods: {
    listenerFunction (e) {
      document.addEventListener('scroll', this.handleScroll, {passive: true})
    },
    beforeDestroy () {
      document.removeEventListener('scroll', this.listenerFunction)
    },
    handleScroll () {
      if (window.pageYOffset > 300) {
        this.isShow = true
      } else {
        this.isShow = false
      }
    },
    // 返回顶部
    backTop () {
      let top = document.documentElement.scrollTop || document.body.scrollTop
      // 实现滚动效果
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50
        if (top <= 0) {
          clearInterval(timeTop)
        }
      }, 10)
    }
  }
}
</script>

<style scoped>
/*返回顶部*/
.returnTop{
  position: fixed;
  bottom: 90px;
  right: 20px;
  background: #205085;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0px 15px 30px rgba(0,0,0,0.1);
  transform:scale(0);
  transition: .4s;
  cursor: pointer;
  opacity:0;
  z-index: 5;
}
.returnTop i{
  color: #FFFFFF;
  font-size: 20px;
}
.returnTop.show{
  transform: scale(1);
  opacity: 1;
  transition: all 0.2s, transform 0.2s cubic-bezier(0.5, 0, 1, 2);
}
</style>
