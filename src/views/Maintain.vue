<template>
  <div>
<!--内页banner-->
    <section class="">
      <img src="../assets/img/network_banner.png" class="bannerImg">
      <div class="bannerTit wow fadeInDown" data-wow-delay="0.5s">
        <strong>{{$t("message.WangLuoWH")}}</strong>
      </div>
    </section>
<!--數據備份及保護服務-->
    <section class="BgF2F5F6 pad_50">
      <div class="Width1400">
        <div class="MTableDiv">
          <div class="MLeftDiv">
            <div class="wow fadeInUp" data-wow-delay="0.15s">
              <router-link :to="{path:'/ITArticle',query:{id:1}}"><strong>{{$t("message.ZiLiaoBFHeBZ")}}</strong></router-link>
              <p>{{$t("message.ITFuWuText1")}}</p>
            </div>
            <div class="wow fadeInUp" data-wow-delay="0.3s">
              <router-link :to="{path:'/ITArticle',query:{id:2}}"><strong>{{$t("message.ZhuoMianWH")}}</strong></router-link>
              <p>{{$t("message.ITFuWuText2")}}</p>
            </div>
            <div class="wow fadeInUp" data-wow-delay="0.45s">
              <router-link :to="{path:'/ITArticle',query:{id:3}}"><strong>{{$t("message.DianNaoJSZC")}}</strong></router-link>
              <p>{{$t("message.ITFuWuText3")}}</p>
            </div>
            <div class="wow fadeInUp" data-wow-delay="0.6s">
              <router-link :to="{path:'/ITArticle',query:{id:4}}"><strong>{{$t("message.ITWeiHu")}}</strong></router-link>
              <p>{{$t("message.ITFuWuText4")}}</p>
            </div>
            <div class="wow fadeInUp" data-wow-delay="0.75s">
              <router-link :to="{path:'/ITArticle',query:{id:5}}"><strong>{{$t("message.WangLuoGL")}}</strong></router-link>
              <p>{{$t("message.ITFuWuText5")}}</p>
            </div>
            <div class="wow fadeInUp" data-wow-delay="0.9s">
              <router-link :to="{path:'/ITArticle',query:{id:6}}"><strong>{{$t("message.FuWuQiGL")}}</strong></router-link>
              <p>{{$t("message.ITFuWuText6")}}</p>
            </div>
          </div>
          <div class="MRightDiv">
            <img src="../assets/img/network_image1.png">
            <img src="../assets/img/network_image2.png">
          </div>
        </div>
      </div>
    </section>
<!--中天會幫助您为您的业务找到合适的IT解决方案-->
    <section class="pad_50">
      <div class="Width1400">
        <div class="textCenter">
          <h1 class="h1Title col_254051">{{$t("message.maintainDiv1")}}</h1>
        </div>
        <div class="MaintainDiv3">
          <div class="wow fadeInUp" data-wow-delay="0.15s">
            <p>1.{{$t("message.maintainDiv1Tit1")}}</p>
            {{$t("message.maintainDiv1Text1")}}
          </div>
          <div class="wow fadeInUp" data-wow-delay="0.3s">
            <p>2.{{$t("message.maintainDiv1Tit2")}}</p>
            {{$t("message.maintainDiv1Text2")}}
          </div>
          <div class="wow fadeInUp" data-wow-delay="0.45s">
            <p>3.{{$t("message.maintainDiv1Tit3")}}</p>
            {{$t("message.maintainDiv1Text3")}}
          </div>
        </div>
      </div>
    </section>
<!--使用中天服務的好處-->
    <section class="BgF2F5F6 pad_50">
      <div class="Width1000">
        <div class="textCenter">
          <h1 class="h1Title col_254051">{{$t("message.maintainDiv2")}}</h1>
        </div>
        <div class="">
          <div class="separateUl separateUl3li">
            <ul>
              <li v-for="item in coreArr" class="wow fadeInUp" :data-wow-delay="item.time+'s'">
                <img :src="item.img">
                <p>{{ item.title }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img src="../assets/img/network_bg1.png" class="MaintainDiv4BgImg">
    </section>
    <Offer></Offer>
  </div>
</template>

<script>
import Offer from '../components/Offer'
export default {
  name: 'Maintain',
  data () {
    return {
      coreArr:[
        {"title": this.$t("message.maintainDiv2Text1"),"img":"https://test41.chinaskynet.net/assets/image/Maintain1.png","time":0.15},
        {"title": this.$t("message.maintainDiv2Text2"),"img":"https://test41.chinaskynet.net/assets/image/Maintain2.png","time":0.3},
        {"title": this.$t("message.maintainDiv2Text3"),"img":"https://test41.chinaskynet.net/assets/image/Maintain3.png","time":0.45},
        {"title": this.$t("message.maintainDiv2Text4"),"img":"https://test41.chinaskynet.net/assets/image/Maintain4.png","time":0.6},
        {"title": this.$t("message.maintainDiv2Text5"),"img":"https://test41.chinaskynet.net/assets/image/Maintain5.png","time":0.75},
        {"title": this.$t("message.maintainDiv2Text6"),"img":"https://test41.chinaskynet.net/assets/image/Maintain6.png","time":0.9}
      ]
    }
  },
  components:{
    Offer
  }
}
</script>

<style scoped>
@import "../assets/css/Maintain.css";
</style>
