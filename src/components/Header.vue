<template>
  <header class="headerDiv" :class="{'scrollHeader':isHeader}">
<!--语言切换-->
    <div class="Width1400 headerTopDiv">
      <div class="languageDiv" :class="{'languageShow':isMenu}">
        <ul>
          <li :class="{'active': lang === 'tw'}" @click="getLang('tw',2,0)">繁</li>
          <li :class="{'active': lang === 'cn'}" @click="getLang('cn',1,2)">简</li>
          <li :class="{'active': lang === 'en'}" @click="getLang('en',3,3)">EN</li>
        </ul>
      </div>
      <div class="headerNav">
        <div class="headerNavTop">
          <div class="div1" @click="routerLink('/')">
            <img src="../assets/img/logo.png" alt="Logo">
          </div>
          <div class="div2">
            <ul>
              <li class="phone" @click="toLink(1,'https://api.whatsapp.com/send?phone=85251750111')">
               <i class="iconfont icon-whatsapp1"></i>
              </li>
              <li class="phone">
                <i class="iconfont icon-phoneLoudspeaker" @click="toLink(2,'tel:(852)24902300')"></i>
                <span>（852）24902300</span>
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
        <video v-if="isAppHide" autoplay="" loop="" muted="" preload="none" class="videoBg" data-ll-status="loaded"
               :src="this.$store.state.UrlApi + 'looped.mp4'">
          <source :src="this.$store.state.UrlApi + 'looped.mp4'" type="video/mp4">
        </video>
        <ul class="menu_main_menu">
          <li class="pointer" @click="routerLink('/')">
              <p>{{$t("message.Home")}}</p>
              <span class="span1">{{$t("message.HomeSpan")}}</span>
          </li>
          <li>
            <p><span class="pointer" @click="routerLink('/Maintain')">{{$t("message.WangLuoWH")}}</span> <label class="open" @click="phoneMenu(1)">{{isAppMenu === 1  ? '-' : '+'}}</label></p>
            <div :class='["span1","menuUl","menuUlHeight1",isAppMenu === 1 ? "openItem" : "downItem"]'>
              <ul class="menu_main_item">
                <li><label @click="routerLink('/ITArticle',1)">{{$t("message.ZiLiaoBFHeBZ")}}</label></li>
                <li><label @click="routerLink('/ITArticle',2)">{{$t("message.ZhuoMianWH")}}</label></li>
                <li><label @click="routerLink('/ITArticle',3)">{{$t("message.DianNaoJSZC")}}</label></li>
                <li><label @click="routerLink('/ITArticle',4)">{{$t("message.ITWeiHu")}}</label></li>
                <li><label @click="routerLink('/ITArticle',5)">{{$t("message.WangLuoGL")}}</label></li>
                <li><label @click="routerLink('/ITArticle',6)">{{$t("message.FuWuQiGL")}}</label></li>
              </ul>
            </div>
          </li>
          <li>
            <p @click="phoneMenu(2)">{{$t("message.ChanPinKF")}} <label class="open">{{isAppMenu === 2  ? '-' : '+'}}</label></p>
            <div :class='["span1","menuUl","menuUlHeight2",isAppMenu === 2 ? "openItem" : "downItem"]'>
              <ul class="menu_main_item">
                <li><label @click="routerLink('/Software')">{{$t("message.RuanJianKF")}}</label></li>
                <li><label @click="routerLink('/Website')">{{$t("message.WangZhanKF")}}</label></li>
                <li><label @click="routerLink('/App')">{{$t("message.AppKF")}}</label></li>
                <li><label @click="routerLink('/WeChat')">{{$t("message.WeiXinKF")}}</label></li>
                <li><label @click="routerLink('/Mall')">{{$t("message.WangShangSC")}}</label></li>
              </ul>
            </div>
          </li>
          <li>
            <label class="pointer" @click="routerLink('/AboutUs')">
              <p>{{$t("message.GuanYuWM")}}</p>
              <span class="span1">{{$t("message.GuanYuWMSpan")}}</span>
            </label>
          </li>
          <li>
            <label class="pointer" @click="routerLink('/ContactUs')">
              <p>{{$t("message.LianXiWM")}}</p>
              <span class="span1">{{$t("message.LianXiWMSpan")}}</span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'Header',
  props:['isAppHide'],
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
      document.addEventListener('scroll', this.handleScroll, {passive: true})
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
    getLang (Type,Id,Lid) {
      this.$store.commit('set_languageName', Type)
      this.$store.commit('set_languageId',  Id)
      this.$store.commit('set_leveChatId',  Lid)
      this.$i18n.locale = this.lang = Type
      window.location.reload()
      // this.$router.go(0)
    },
    routerLink (Link,Id) {
      // console.log(this.$route)
      if (Id) {
        console.log(Number(this.$route.query.id) , Id)
        if (Number(this.$route.query.id) === Id) {
          window.location.reload()
        }else {
          this.$router.push({path:Link,query:{id:Id}})
        }
      }else {
        if (this.$route.path === Link){
          window.location.reload()
        }else {
          this.$router.push(Link)
        }
      }
      this.isAppActive = 0
      this.isMenu = false
    }
  }
}
</script>
<style>
/*@import "../assets/css/header.css";*/
</style>
