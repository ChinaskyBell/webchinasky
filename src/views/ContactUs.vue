<template>
  <div class="mianDiv ui-content">
<!-- 顶部标题 -->
    <section class="">
      <img src="../assets/img/contactUs_banner.jpg" class="bannerImg">
      <div class="bannerTit">
        <div class="wow fadeInDown" data-wow-delay="0.5s">
          <strong>{{$t("message.LianXiWM")}}</strong>
        </div>
      </div>
    </section>
<!--    联络我们-->
    <section class="pad_100">
      <div class="Width1200">
        <h1 class="h1Title col_254051">{{$t("message.LianLuoWm")}}</h1>
        <div class="disTable contactDiv">
          <div class="">
            <ul class="contactConnect">
              <li>
                <strong>{{$t("message.GongSiHK")}}</strong>
              </li>
              <li>
                <strong>{{$t("message.DiZhiHK")}}</strong>
              </li>
              <li>
                {{$t("message.DianHua")}}: <span @click="toLink('tel:(852)24902300')">(852) 24902300</span>
              </li>
              <li>
                {{$t("message.DianYou")}}: <span @click="toLink('mailto:'+emailHk)">{{ emailHk }}</span>
              </li>
            </ul>
            <ul class="contactConnect">
              <li>
                <strong>{{$t("message.GongSiSZ")}}</strong>
              </li>
              <li>
                <strong>{{$t("message.DiZhiSZ")}}</strong>
              </li>
              <li>
                {{$t("message.DianHua")}}: <span @click="toLink('tel' +':(0755)25100512')">(0755) 25100512</span>
              </li>
              <li>
                {{$t("message.DianYou")}}: <span @click="toLink('mailto:'+emailHk)">{{ emailHk }}</span>
              </li>
            </ul>
            <div>
              <ul class="footIconDiv">
                <li @click="toLink(1,'https://www.facebook.com/chinaskynet')"><i class="iconfont icon-facebook"></i></li>
                <li>
                  <i class="iconfont icon-weixin"></i>
                  <div class="wechatCode">
                    <img src="../assets/img/weixin.png"/>
                  </div>
                </li>
                <li @click="toLink(1,'https://api.whatsapp.com/send?phone=85251750111')"><i class="iconfont icon-whatsapp1"></i></li>
              </ul>
            </div>
          </div>
          <div>
            <div class="contactInput">
              <div class="inputDiv">
                <input type="text" :placeholder='$t("message.LianLuoRen")' v-model="aboutName" @blur="blurName">
                <p>{{name}}</p>
              </div>
              <div class="inputDiv">
                <input type="text" :placeholder='$t("message.DianYou")' v-model="aboutEmail" @blur="blurEmail">
                <p>{{email}}</p>
              </div>
              <div class="inputDiv">
                <input type="text" :placeholder='$t("message.DianHua")' v-model="aboutPhone" oninput="value=value.replace(/[^\d]/g, '')" @blur="blurPhone">
                <p>{{tel}}</p>
              </div>
              <div class="inputDiv">
                <textarea :placeholder='$t("message.LiuYan")' ref="textarea" :style="{'height': textAreaH}" v-model="aboutMessage"></textarea>
              </div>
            </div>
            <div class="">
              <div class="buttonIcon border_205085" @click="aboutSubmit">
                <span>{{$t("message.TiJiao")}}</span><i class="iconfont icon-Right-"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--彈窗-->
      <div class="modalBigDiv">
        <transition name="codeModal"
        enter-active-class="animated fadeInDown"
        leave-active-class="animated fadeOutDown"
        >
          <div class="modalBgDiv" v-if="isCodeModal">
            <div class="modalCenterDiv">
              <div class="modalContact">
                <p class="modalClose" @click="modalClose"><i class="iconfont icon-cha"></i></p>
                <div>
                  <slide-verify :l="42"
                    :r="10"
                    :w="310"
                    :h="155"
                    :slider-text='$t("message.codeText")'
                    @success="onSuccess"
                  ></slide-verify>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </section>
<!--    地图-->
    <section>
      <div class="googleMap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.5936695248754!2d114.10767737979234!3d22.37254927203976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f8e5707631e1%3A0x2ef537658d4502e8!2sOne+Midtown%2C+11+Hoi+Shing+Rd%2C+Tsuen+Wan!5e0!3m2!1szh-CN!2shk!4v1547459323144"
          frameborder="0" style="width:100%; height:100%;" allowfullscreen></iframe>
      </div>
    </section>
  </div>
</template>

<script>
import {
  contentService
} from "../common/api"
import calcTextareaHeight from '../assets/js/calcTextareaHeight'
export default {
  name: 'ContactUs',
  data () {
    return {
      dateYear: '',
      emailCn: 'info@chinaskynet.net.cn',
      emailHk: 'info@chinaskynet.net',

      // 联络我们
      textAreaH: '50px',
      aboutName: '',
      aboutEmail: '',
      aboutPhone: '',
      aboutMessage: '',
      //提示语
      name: '',
      email: '',
      tel: '',
      // 驗證
      isCodeModal:false
    }
  },
  created () {
  },
  watch: {
    aboutMessage() {
      this.getHeight();
    }
  },
  methods: {
    onSuccess() {
      let that = this
      contentService({
        "name": that.aboutName,
        "email": that.aboutEmail,
        "tel": that.aboutPhone,
        "message": that.aboutMessage
      }).then(res => {
         that.isCodeModal = false
         if (res.code === 200){
          that.aboutName = that.aboutEmail = that.aboutPhone = that.aboutMessage = ""
          that.$tips({
            msg: that.$t("message.TiJiaoCG")
          })
        }else {
          that.$tips({
            msg: that.$t("message.Error")
          })
        }
        // window.location.reload()

      })
    },
    modalClose() {
      this.isCodeModal = false
    },
    getHeight() {
      this.textAreaH = calcTextareaHeight(this.$refs.textarea, 3, 8).height;
    },
    toLink (Url) {
      window.location.href = Url
    },
    aboutSubmit () {
      let that = this
      if (that.aboutName === ""){
        this.$tips({
					msg:  that.$t("message.QSRLianLuoRen")
        });
        return
      }

      if (this.aboutEmail === ""){
        this.$tips({
					msg: that.$t("message.QSRDianYou")
        });
        return
      }

      if (this.aboutPhone === ""){
        this.$tips({
					msg: that.$t("message.QSRDianHua")
        });
        return
      }
      that.isCodeModal = true
    },
    blurName (){
      if (this.aboutName === ""){
        this.name = this.$t("message.QSRLianLuoRen")
      }else {
        this.name = ""
      }
    },
    blurPhone() {
      if (this.aboutPhone === ""){
        this.tel = this.$t("message.QSRDianHua")
      }else {
        this.tel = ""
      }
    },
    blurEmail (){
      let verifyEmail =/^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
      if (this.aboutEmail === ""){
        this.email = this.$t("message.QSRDianYou")
      }else if (!verifyEmail.test(this.aboutEmail)){
        this.email = this.$t("message.QSRZQGSDianYou")
      }else {
        this.email = ""
      }
    }
  }
}
</script>

<style scoped>
</style>
