<template>
  <div id="app" v-cloak>
    <keep-alive>
      <Header :isAppHide="isAppHide"></Header>
    </keep-alive>
    <keep-alive>
      <router-view :isAppHide="isAppHide" class="view"/>
    </keep-alive>
    <BackTop></BackTop>
    <Footer v-show="showFooter"></Footer>
  </div>
</template>

<script>
const header = () => import("./components/Header")
const footer = () => import("./components/Footer")
const backTop = () => import("./components/Back-Top")
export default {
  name: 'App',
  components: {
    "Header":header,
    "Footer":footer,
    "BackTop":backTop,
  },
  data () {
    return {
      showFooter: false,
      isAppHide: false
    }
  },
  mounted(){
    let that =this
    // 防止伪类失效
    document.body.addEventListener('touchstart',function(){},{passive: true});
    // 判断是否移动端
    if (document.documentElement.clientWidth < 800){
      this.isAppHide = false
    } else {
      this.isAppHide = true
    }
    setTimeout(function (){
       that.showFooter = true
    },800)

    // livechat
    setTimeout(function () {
      window.__lc = window.__lc || {};
      window.__lc.license = 8938924;
      // window.__lc.chat_between_groups = false;
      window.__lc.group = localStorage.getItem('LiveChatId') || 0;
      (function () {
        let lc = document.createElement('script');
        lc.type = 'text/javascript';
        lc.async = true;
        lc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.livechatinc.com/tracking.js';
        let s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(lc, s);
      })();
    },8000)
  }


}
</script>

<style>
</style>
