<template>
  <div>
<!-- 顶部标题 -->
   <section class="aboutBannet">
     <img src="../assets/img/aboutUsBanner.jpg" class="bannerImg">
     <div class="bannerTit" >
       <div class="wow fadeIn" data-wow-delay="0.5s">
         <strong>{{$t("message.GuanYuWM")}}</strong>
         <p>{{$t("message.GuanYuWMTitText1")}}</p>
         <div class="playBtn" @click="playVideo">
           <i class="iconfont icon-24gl-playCircle"></i>
           Play Video
         </div>
       </div>
     </div>
<!--     弹窗-->
       <div class="modalBigDiv">
        <transition name="caseModal"
        enter-active-class="animated fadeInDown"
        leave-active-class="animated fadeOutDown"
        >
          <div class="modalBgDiv" v-if="isAboutModal">
            <div class="modalTextDiv">
              <div class="modalAbout">
                <p class="modalClose" @click="modalClose"><i class="iconfont icon-cha"></i></p>
                <div class="indexVideoMuted">
                  <video autoplay="autoplay" loop="true" controls>
                    <source :src="this.$store.state.UrlApi + 'WeChat_'+this.$store.state.languageName+'.mp4'" type="video/mp4">
                  </video>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
   </section>
<!--    关于我们-->
    <section class="pad_50" ref="aboutSection">
      <div class="Width1400">
        <div class="aboutUsDiv disTable">
          <div class="aboutLeftDiv">
            <img src="../assets/img/aboutUs2.jpg">
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
const offer = () => import("../components/Offer")
export default {
  name: 'AboutUs',
  components:{
    "Offer": offer
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
      isAboutModal: false
    }
  },
  created() {

    let vm =this
    let index = 0
    vm.about.timer = setInterval(function () {
      vm.about.showWord = vm.about.content.substring(0, index++);
      if (vm.about.content.length + 1 === index) {
        clearInterval(vm.about.timer)
      }
    }, 2);
  },
  mounted() {
    document.addEventListener('scroll',this.handleScroll2,{passive: true})
  },
  methods: {
    handleScroll2(e){
      let vm =this
      // let scrollTop = e.target.documentElement.scrollTop || e.target.body.scrollTop;
      // 关于我们
      // let aboutSection = vm.$refs.aboutSection.getBoundingClientRect().top
      // if ( aboutSection > 0 && 400 > aboutSection){
      //   if (this.about.isShowWord === 0){
      //     // console.log("可調用1")
      //     this.about.isShowWord = 1
      //   }
      // }
      // 我們的使命
      let missionSection = vm.$refs.missionSection.getBoundingClientRect().top
      if ( missionSection > 0 && 400 > missionSection){
       if (this.mission.isShowWord === 0){
          // console.log("可調用1")
          this.mission.isShowWord = 1
          let index=0
          vm.mission.timer=setInterval(function(){
            vm.mission.showWord = vm.mission.content.substring(0,index++);
            if (vm.mission.content.length+1 === index){
              clearInterval(vm.mission.timer)
            }
          },10);
        }
      }
    },
    // playVideo
    playVideo () {
      this.isAboutModal = true
    },
    modalClose() {
      this.isAboutModal = false
    }
  },
  beforeDestroy() {
    // 銷毀監聽
    document.removeEventListener("scroll", this.handleScroll2);
  }
}
</script>

<style scoped>
/*@import '../assets/css/aboutUs.css';*/
</style>
