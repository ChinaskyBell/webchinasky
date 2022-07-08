<template>
  <footer>
    <div class="Width1400" style="overflow: initial">
      <div class="footDiv">
        <div class="div1">
          <img src="../assets/img/flogo.png" alt="Logo" />
          <ul class="footIconDiv">
            <li @click="toLink(1,'https://www.facebook.com/chinaskynet')"><i class="iconfont icon-facebook"></i></li>
            <li>
              <i class="iconfont icon-weixin"></i>
              <div class="wechatCode">
                <img src="../assets/img/weixin.png" alt="Wechat Code"/>
              </div>
            </li>
            <li @click="toLink(1,'https://api.whatsapp.com/send?phone=85251750111')"><i class="iconfont icon-whatsapp1"></i></li>
          </ul>
        </div>
        <div class="footerConnect">
          <div>{{$t("message.GongSiHK")}}</div>
          <div>{{$t("message.DiZhiHK")}}</div>
          <div>{{$t("message.DianYou")}}: <span @click="toLink(2,'mailto:'+emailHk)">{{emailHk}}</span></div>
          <div class="phone"><span @click="toLink(2,'tel:(852)24902300')">(852) 24902300</span></div>
        </div>
        <div class="footerConnect">
          <div>{{$t("message.GongSiSZ")}}</div>
          <div>{{$t("message.DiZhiSZ")}}</div>
          <div>{{$t("message.DianYou")}}: <span @click="toLink(2,'mailto:'+emailHk)">{{emailHk}}</span></div>
          <div class="phone"><span @click="toLink(2,'tel' + ':(0755)25100512')">(0755) 25100512</span></div>
        </div>
      </div>
      <p class="footCopy">Copyright © {{ dateYear }} China Sky Technology System Limited. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      dateYear: '',
      emailCn: 'info@chinaskynet.net.cn',
      emailHk: 'info@chinaskynet.net'
    }
  },
  created () {
    this.dateYear = new Date().getFullYear()
  },
  methods: {
    toLink (Type,Url) {
      if (Type === 1) {
        window.open(Url)
      } else {
        window.location.href = Url
      }
    }
  }
}
</script>
<style scoped>
</style>
