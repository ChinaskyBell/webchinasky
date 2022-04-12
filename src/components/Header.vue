<template>
  <header class="headerDiv" :class="{'scrollHeader':isHeader}">
<!--语言切换-->
    <div class="Width1400 headerTopDiv">
      <div class="languageDiv" :class="{'languageShow':isMenu}">
        <ul>
          <li class="active">繁</li>
          <li>简</li>
          <li>EN</li>
        </ul>
      </div>
      <div class="headerNav">
        <div class="headerNavTop">
          <div class="div1">
            <router-link to="/">
              <img src="../assets/img/logo.png">
            </router-link>
          </div>
          <div class="div2">
            <ul>
              <li class="phone" @click="toLink(1,'https://api.whatsapp.com/send?phone=85251750111')">
               <i class="iconfont icon-whatsapp1"></i>
              </li>
              <li class="phone">
                <i class="iconfont icon-phoneLoudspeaker" @click="toLink(2,'tel:(852)24902300')"></i>
                <span>（852）2490-2300</span>
              </li>
              <li class="quote">
                <button>索取報價</button>
              </li>
              <li class="menu" @click="appNavBtn" :class="{'open':isMenu}">
                <div class="p1">
                  <div class="nav-hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span>目錄</span>
                </div>
                <div class="nav-cross"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="menusWrapper" :class="{'menuShow':isMenu}">
      <div class="menuButton">
        <button>索取報價</button>
      </div>
      <div class="menusBg">
        <video autoplay="" loop="" muted="" preload="none" class="videoBg" data-ll-status="loaded"
               src="https://test41.chinaskynet.net/assets/looped.mp4">
          <source src="https://test41.chinaskynet.net/assets/looped.mp4" type="video/mp4">
        </video>
        <ul class="menu_main_menu">
          <li>
            <router-link to="/">
              <p>首頁</p>
<!--              <span class="span1">擁有15年為不同行業客戶提供不同的IT服務的經驗</span>-->
            </router-link>
          </li>
          <li>
            <router-link to="/Maintain">
              <p>網絡維護</p>
            </router-link>
          </li>
          <li>
            <p @click="phoneMenu">產品開發 <label class="open">{{isAppMenu  ? '+' : '-'}}</label></p>
            <div :class='["span1","menuUl",isAppMenu ? "downItem" : "openItem"]'>
              <ul class="menu_main_item">
                <li><router-link to="/Software">軟件開發</router-link></li>
                <li><router-link to="#22">網站開發</router-link></li>
                <li><router-link to="#23">App開發</router-link></li>
                <li><router-link to="#24">微信開發</router-link></li>
                <li><router-link to="#25">網上商城</router-link></li>
              </ul>
            </div>
          </li>
          <li>
            <router-link to="/AboutUs">
              <p>關於我們</p>
            </router-link>
          </li>
          <li>
            <router-link to="/ContactUs">
              <p>聯繫我們</p>
            </router-link>
          </li>
        </ul>
      </div>

    </div>

  </header>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
      isHeader: false,
      isMenu: false,
      isAppActive: 0,
      isAppMenu: false
    }
  },
  mounted () {
    this.listenerFunction()
  },
  methods: {
    listenerFunction (e) {
      document.addEventListener('scroll', this.handleScroll, true)
    },
    beforeDestroy () {
      document.removeEventListener('scroll', this.listenerFunction)
    },
    handleScroll () {
      if (window.pageYOffset > 80) {
        this.isHeader = true
      } else {
        this.isHeader = false
      }
    },
    // 移动端头部目录
    appNavBtn () {
      let that = this
      if (that.isAppActive) {
        that.isAppActive = 0
        that.isMenu = false
      } else {
        that.isAppActive = 1
        that.isMenu = true
      }
    },
    // 移动端子目录
    phoneMenu () {
      let that = this
      if (that.isAppMenu){
        that.isAppMenu = false
      } else {
        that.isAppMenu = true
      }
    },
    // 跳转外部链接
    toLink (Type,Url) {
      if (Type === 1) {
        window.open(Url)
      } else {
        window.location.href = Url
      }
    }
  },
  watch:{
    $route:{
      handler(){
        location. reload()
      }
    }
  }
}
</script>
<style>
@import "../assets/css/header.css";
</style>
