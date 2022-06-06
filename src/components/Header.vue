<template>
  <header class="headerDiv" :class="{'scrollHeader':isHeader}">
<!--语言切换-->
    <div class="Width1400 headerTopDiv">
      <div class="languageDiv" :class="{'languageShow':isMenu}">
        <ul>
          <li :class="{'active': lang === 'tw'}" @click="getLang('tw',2)">繁</li>
          <li :class="{'active': lang === 'cn'}" @click="getLang('cn',1)">简</li>
          <li :class="{'active': lang === 'en'}" @click="getLang('en',3)">EN</li>
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
                <router-link to="/ContactUs" tag="button">{{$t("message.SuoQuBJ")}}</router-link>
              </li>
              <li class="menu" @click="appNavBtn" :class="{'open':isMenu}">
                <div class="p1">
                  <div class="nav-hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span>{{$t("message.MuLu")}}</span>
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
        <router-link to="/ContactUs" tag="button">{{$t("message.SuoQuBJ")}}</router-link>
      </div>
      <div class="menusBg">
        <video autoplay="" loop="" muted="" preload="none" class="videoBg" data-ll-status="loaded"
               src="https://test41.chinaskynet.net/assets/looped.mp4">
          <source src="https://test41.chinaskynet.net/assets/looped.mp4" type="video/mp4">
        </video>
        <ul class="menu_main_menu">
          <li>
            <router-link to="/">
              <p>{{$t("message.Home")}}</p>
<!--              <span class="span1">擁有15年為不同行業客戶提供不同的IT服務的經驗</span>-->
            </router-link>
          </li>
          <li>
            <p><router-link to="/Maintain">{{$t("message.WangLuoWH")}}</router-link> <label class="open" @click="phoneMenu(1)">{{isAppMenu === 1  ? '-' : '+'}}</label></p>
            <div :class='["span1","menuUl","menuUlHeight1",isAppMenu === 1 ? "openItem" : "downItem"]'>
              <ul class="menu_main_item">
                <li><router-link :to="{path:'/ITArticle',query:{id:1}}">{{$t("message.ZiLiaoBFHeBZ")}}</router-link></li>
                <li><router-link :to="{path:'/ITArticle',query:{id:2}}">{{$t("message.ZhuoMianWH")}}</router-link></li>
                <li><router-link :to="{path:'/ITArticle',query:{id:3}}">{{$t("message.DianNaoJSZC")}}</router-link></li>
                <li><router-link :to="{path:'/ITArticle',query:{id:4}}">{{$t("message.ITWeiHu")}}</router-link></li>
                <li><router-link :to="{path:'/ITArticle',query:{id:5}}">{{$t("message.WangLuoGL")}}</router-link></li>
                <li><router-link :to="{path:'/ITArticle',query:{id:6}}">{{$t("message.FuWuQiGL")}}</router-link></li>
              </ul>
            </div>
          </li>
          <li>
            <p @click="phoneMenu(2)">{{$t("message.ChanPinKF")}} <label class="open">{{isAppMenu === 2  ? '-' : '+'}}</label></p>
            <div :class='["span1","menuUl","menuUlHeight2",isAppMenu === 2 ? "openItem" : "downItem"]'>
              <ul class="menu_main_item">
                <li><router-link to="/Software">{{$t("message.RuanJianKF")}}</router-link></li>
                <li><router-link to="/Website">{{$t("message.WangZhanKF")}}</router-link></li>
                <li><router-link to="/Move">{{$t("message.AppKF")}}</router-link></li>
                <li><router-link to="/WeChat">{{$t("message.WeiXinKF")}}</router-link></li>
                <li><router-link to="/Mall">{{$t("message.WangShangSC")}}</router-link></li>
              </ul>
            </div>
          </li>
          <li>
            <router-link to="/AboutUs">
              <p>{{$t("message.GuanYuWM")}}</p>
            </router-link>
          </li>
          <li>
            <router-link to="/ContactUs">
              <p>{{$t("message.LianXiWM")}}</p>
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
      isAppMenu: 0,
      lang: this.$store.state.languageName || 'tw'
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
    phoneMenu (Type) {
      let that = this
      if (that.isAppMenu === Type){
        that.isAppMenu = 0
      } else {
        that.isAppMenu = Type
      }
    },
    // 跳转外部链接
    toLink (Type,Url) {
      if (Type === 1) {
        window.open(Url)
      } else {
        window.location.href = Url
      }
    },
    // 切换语言
    getLang (Type,Id) {
      this.$store.commit('set_languageName', Type)
      this.$store.commit('set_languageId',  Id)
      this.$i18n.locale = this.lang = Type
      window.location.reload()
    }
  },
  watch:{
    $route:{
      handler(){
        location.reload()
      }
    }
  }
}
</script>
<style>
@import "../assets/css/header.css";
</style>
