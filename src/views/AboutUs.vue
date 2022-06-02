<template>
  <div>
<!-- 顶部标题 -->
   <section class="">
     <div class="fixedBgImg funfactImg"></div>
      <div class="indexVideo">
        <video id="bgVideo" autoplay="autoplay" loop="true" muted="true">
          <source src="https://test41.chinaskynet.net/assets/WeChat.mp4" type="video/mp4">
        </video>
        <!--  声音按钮 -->
        <div class="indexVideoMuted" :class="{'active':isActive == 1}" @click="mutedBtn">
          <i class="iconfont icon-shengyin"></i>
          <i class="iconfont icon-cha"></i>
        </div>
      </div>
   </section>
<!--    关于我们-->
    <section class="pad_50" ref="aboutSection">
      <div class="Width1400">
        <div class="aboutUsDiv disTable">
          <div class="aboutLeftDiv">
            <img src="../assets/img/aboutUs2.png">
          </div>
          <div class="aboutRightDiv">
            <div class="">
              <h1 class="h1Title col_254051">{{$t("message.GuanYuWM")}}</h1>
            </div>
            <div class="itemTitle">{{$t("message.GuanYuWMText1")}}</div>
            <pre class="preText aboutPreText">
              {{about.showWord}}
            </pre>
          </div>
        </div>
      </div>
    </section>
<!--    我們的使命-->
    <section class="pad_50 BgF2F5F6" ref="missionSection">
      <div class="Width1400">
        <div class="missionDiv disTable">
          <div class="missionLeftDiv">
            <div class="">
              <h1 class="h1Title col_254051">{{$t("message.WoMenDSM")}}</h1>
            </div>
            <pre class="preText">
              {{ mission.showWord }}
            </pre>
            <ul  class="wow fadeInLeft" data-wow-delay="0.3s">
              <li><i class="iconfont icon-gou1"></i><span>{{$t("message.WoMenDSM1")}}</span></li>
              <li><i class="iconfont icon-gou1"></i><span>{{$t("message.WoMenDSM2")}}</span></li>
              <li><i class="iconfont icon-gou1"></i><span>{{$t("message.WoMenDSM3")}}</span></li>
              <li><i class="iconfont icon-gou1"></i><span>{{$t("message.WoMenDSM4")}}</span></li>
              <li><i class="iconfont icon-gou1"></i><span>{{$t("message.WoMenDSM5")}}</span></li>
            </ul>
          </div>
          <div class="missionRightDiv">
            <img src="../assets/img/aboutUs3.jpg">
          </div>
        </div>
      </div>
    </section>
<!--    为什么选择我们-->
    <section class="pad_100">
      <div class="Width1000">
        <div class="textCenter">
          <h1 class="h1Title col_254051">{{$t("message.WhyXuanZeWM")}}</h1>
        </div>
        <div class="ChooseDiv">
          <div class="rowHDiv">
            <div class="wow fadeInUp" data-wow-delay="0.3s">
              <div class="divs">
                <i class="iconfont icon-jingyanzhi"></i>
                <p>{{$t("message.JinYanFF")}}</p>
                <div>
                  {{$t("message.JinYanFFText")}}
                </div>
              </div>
            </div>
            <div class="wow fadeInUp" data-wow-delay="0.6s">
              <div class="divs">
                <i class="iconfont icon-zhuanye"></i>
                <p>{{$t("message.ZhuanYeYG")}}</p>
                <div>
                  {{$t("message.ZhuanYeYGText")}}
                </div>
              </div>
            </div>
            <div class="wow fadeInUp" data-wow-delay="0.9s">
              <div class="divs">
                <i class="iconfont icon-jiagebiao"></i>
                <p>{{$t("message.JiaGeHL")}}</p>
                <div>
                  {{$t("message.JiaGeHLText")}}
                </div>
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
  name: 'AboutUs',
  components:{
    Offer
  },
  data() {
    return {
      about:{
        timer: null,
        showWord: "",
        content: this.$t("message.GuanYuWMText2"),
        isShowWord: 0
      },
      mission:{
        timer: null,
        showWord: "",
        content: this.$t("message.WoMenDSMText"),
        isShowWord: 0
      },
      isActive: 0
    }
  },
  mounted() {
    window.addEventListener('scroll',this.handleScroll,true)
  },
  methods: {
    handleScroll(e){
      const that =this
      // let scrollTop = e.target.documentElement.scrollTop || e.target.body.scrollTop;
      // 关于我们
      let aboutSection = this.$refs.aboutSection.getBoundingClientRect().top
      if ( aboutSection > 0 && 400 > aboutSection){
        if (this.about.isShowWord === 0){
          // console.log("可調用1")
          this.about.isShowWord = 1
          let index=0
          that.about.timer=setInterval(function(){
            that.about.showWord = that.about.content.substring(0,index++);
            if (that.about.content.length+1 === index){
              clearInterval(that.about.timer)
            }
          },2);
        }
      }
      // 我們的使命
      let missionSection = this.$refs.missionSection.getBoundingClientRect().top
      if ( missionSection > 0 && 400 > missionSection){
       if (this.mission.isShowWord === 0){
          // console.log("可調用1")
          this.mission.isShowWord = 1
          let index=0
          that.mission.timer=setInterval(function(){
            that.mission.showWord = that.mission.content.substring(0,index++);
            if (that.mission.content.length+1 === index){
              clearInterval(that.mission.timer)
            }
          },10);
        }
      }
    },
    // 视频声音
    mutedBtn () {
      const that = this
      let bgm = document.getElementById('bgVideo')
      if (bgm.muted) {
        bgm.muted = false
        that.isActive = 1
      } else {
        bgm.muted = true
        that.isActive = 0
      }
    }
  }

}
</script>

<style scoped>
@import '../assets/css/aboutUs.css';
</style>
