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
              <h1 class="h1Title col_254051">關於我們</h1>
            </div>
            <div class="itemTitle">現今網絡世界的進化速度驚人，為了讓客戶感到更親切和方便，企業必須擁有完善的IT系統和網絡平台。</div>
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
              <h1 class="h1Title col_254051">我們的使命</h1>
            </div>
            <pre class="preText">
              {{ mission.showWord }}
            </pre>
            <ul  class="wow fadeInLeft" data-wow-delay="0.3s">
              <li><i class="iconfont icon-gou1"></i><span>優質服務</span></li>
              <li><i class="iconfont icon-gou1"></i><span>高效及主動</span></li>
              <li><i class="iconfont icon-gou1"></i><span>一站式聯繫</span></li>
              <li><i class="iconfont icon-gou1"></i><span>尊重和誠信</span></li>
              <li><i class="iconfont icon-gou1"></i><span>團隊合作</span></li>
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
          <h1 class="h1Title col_254051">為什麼選擇我們</h1>
        </div>
        <div class="ChooseDiv">
          <div class="rowHDiv">
            <div class="wow fadeInUp" data-wow-delay="0.3s">
              <div class="divs">
                <i class="iconfont icon-jingyanzhi"></i>
                <p>經驗豐富</p>
                <div>
                  我們有15年在不同行業為不同的客戶提供不同的IT服務的經驗。
                </div>
              </div>
            </div>
            <div class="wow fadeInUp" data-wow-delay="0.6s">
              <div class="divs">
                <i class="iconfont icon-zhuanye"></i>
                <p>專業員工</p>
                <div>
                  我們的員工有豐富的經驗提供優質的服務。我們非常重視員工的專業發展。
                </div>
              </div>
            </div>
            <div class="wow fadeInUp" data-wow-delay="0.9s">
              <div class="divs">
                <i class="iconfont icon-jiagebiao"></i>
                <p>價格合理</p>
                <div>
                  最優惠旳價格享用個性化的服務。
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
        content: '中天科技系統有限公司，於2004年在香港成立，同年於深圳開設分公司。' +
          '我們一直為香港和內地的企業提供IT外包服務：包括固定檢查、網路管理、網路安全、VPN解決方案等。由於我們於中港均有專業的技術人員，所以不論客戶於香港或內地遇上IT問題都可以提供最即時和合適的支援。\n\n' +
          '近年網絡行銷為企業提供了全新的商業機會，社交平台的相關程式和服務成為了各企業強大的工具。中天科技對每個項目由設計，開發及線上推廣，都掌握了全面相關的技術，更擁有強大的開發和市場推廣團隊，為客戶提供各類型的市場策略和對應的開發服務，用最合理的成本獲得更大的回報。\n\n' +
          '為配合大灣區和一帶一路發展，無論國內和國外的企業都需要進一步優化生意流程和成本，拓展商機。我們擁有中國及國外的網絡顧問經驗，能為客戶設計最合適的網絡營銷解決方案，讓客戶的業務獲得更大的成功。',
        isShowWord: 0
      },
      mission:{
        timer: null,
        showWord: "",
        content: '我們的使命是不斷開創和改進我們的服務，以滿足並超越客戶的期望。我們提供專業及高質量的IT解決方案，為企業的戰略計劃奠定基礎，為企業的成功做出貢獻。',
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
          },4);
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
