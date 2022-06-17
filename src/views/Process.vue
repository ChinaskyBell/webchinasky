<template>
  <div>
<!--内页banner-->
    <section class="processBanner">
      <img src="../assets/img/process.jpg" class="bannerImg">
      <div class="bannerTit wow fadeInDown" data-wow-delay="0.5s">
        <strong>{{this.$t("message.KaiFaLC")}}</strong>
        <p>{{this.$t("message.KaiFaLCText1")}}</p>
      </div>
    </section>

    <section class="">
      <div class="processBigDiv">
        <!--        item1-->
        <div class="clearfix processDivItem" id="process1">
          <div class="processImg">
            <img src="https://test41.chinaskynet.net/assets/image/process1.jpg">
            <i class="iconfont icon-jiantou"></i>
          </div>
          <div class="processText">
            <div class="textItem">
              <div class="tit">
                <i class="iconfont icon-tounaofengbao"></i>
                <strong>{{ $t("message.ZhuCe") }}</strong>
              </div>
              <div class="text">
                {{$t("message.processText1_1")}}<router-link to="/ContactUs">{{$t("message.processText1_a1")}}</router-link>{{$t("message.processText1_2")}}<router-link to="/ContactUs">{{$t("message.processText1_a2")}}</router-link>{{$t("message.processText1_3")}}
              </div>
            </div>
          </div>
        </div>
<!--        item-->
        <div class="clearfix processDivItem" :id="'process'+(index+2)" v-for="(item,index) in processArr" :key="index">
          <div class="processImg">
            <img :src="item.img">
            <i class="iconfont icon-jiantou"></i>
          </div>
          <div class="processText">
            <div class="textItem">
              <div class="tit">
                <i :class="'iconfont '+item.icon"></i>
                <strong>{{ item.title }}</strong>
              </div>
              <div class="text">
                {{item.content}}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    <!--索取报价-->
    <Offer></Offer>
  </div>
</template>

<script>
import Offer from "../components/Offer"
export default {
  name: 'Process',
  data () {
    return {
      processArr:[
        {"title":this.$t("message.DiaoYan"),"content":this.$t("message.processText2"),"img":"https://test41.chinaskynet.net/assets/image/process2.jpg","icon":"icon-tuanduichengyuan"},
        {"title":this.$t("message.SheJi"),"content":this.$t("message.processText3"),"img":"https://test41.chinaskynet.net/assets/image/process3.jpg","icon":"icon-xiangmutixi"},
        {"title":this.$t("message.Dajian"),"content":this.$t("message.processText4"),"img":"https://test41.chinaskynet.net/assets/image/process4.jpg","icon":"icon-xiangmuzhouqi"},
        {"title":this.$t("message.QiDong"),"content":this.$t("message.processText5"),"img":"https://test41.chinaskynet.net/assets/image/process5.jpg","icon":"icon-shichangtuiguang"},
        {"title":this.$t("message.ZhiChi"),"content":this.$t("message.processText6"),"img":"https://test41.chinaskynet.net/assets/image/process6.jpg","icon":"icon-shujufenxi"},
      ]
    }
  },
  components:{
    Offer
  },
  created() {
    let that = this
    if (this.$route.query.id){
      setTimeout(function (){
        that.clickNum()
      },1000)
    }
  },
  methods: {
    clickNum (){
      let id = '#'+this.$route.query.id
      // console.log(id)
      document.querySelector(id).scrollIntoView({
         behavior: "smooth"
      });
    }
  }
}
</script>

<style scoped>
@import "../assets/css/process.css";
</style>
