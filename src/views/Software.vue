<template>
  <div>
    <!--内页banner-->
    <section class="">
      <img src="../assets/img/software_banner.png" class="bannerImg">
      <div class="bannerTit wow fadeInDown" data-wow-delay="0.5s">
        <strong>為企業定制開發<br>專用軟件</strong>
      </div>
    </section>
    <!--開發服務-->
    <section id="swiperBoxDiv">
      <div class="swiperBoxDiv">
        <div class="swiperBox1">
          <h1 class="h1Title">軟件開發</h1>
          <div class="Width1400">
            <div class="swiper gallery_thumbs">
              <div class="swiper-wrapper">
                <div class="swiper-slide wow fadeInUp" data-wow-delay="0.5s">
                  <div class="gallery_topBox">
                    <i class="iconfont icon-kaifa"></i>
                    <span>外包軟體開發服務</span>
                  </div>
                </div>
                <div class="swiper-slide wow fadeInUp" data-wow-delay="1s">
                  <div class="gallery_topBox">
                    <i class="iconfont icon-qianbao"></i>
                    <span>貸款管理系統</span>
                  </div>
                </div>
                <div class="swiper-slide wow fadeInUp" data-wow-delay="1.5s">
                  <div class="gallery_topBox">
                    <i class="iconfont icon-quxiantu"></i>
                    <span>貿易系統</span>
                  </div>
                </div>
                <div class="swiper-slide wow fadeInUp" data-wow-delay="2s">
                  <div class="gallery_topBox">
                    <i class="iconfont icon-mrpcount"></i>
                    <span>MRP生產管理系統</span>
                  </div>
                </div>
              </div>
              <div class="swiper-button-prev gallery_topPrev">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="46" viewBox="0 0 24 46">
                  <path fill="#FFFFFF" d="M23.23.156L13.056 22.808 23.23 45.844.77 22.808z"></path>
                </svg>
              </div>
              <div class="swiper-button-next gallery_topNext">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="46" viewBox="0 0 24 46">
                  <path fill="#FFFFFF" d="M.77.156l10.174 22.652L.77 45.844l22.46-23.036z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper gallery_top">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="gallery_thumbsBox">
                <div class="thumbsImg">
                  <img src="../assets/img/development_pic1.png">
                </div>
                <div class="thumbsText">
                  <div>
                    <div class="run_txt run_txtTit">
                      <p class="title">提供最合適的</p>
                      <p>我們提供最佳質量的軟件開發服務，無論是web開發、</p>
                      <p>企業軟件還是移動應用程式開發，我們都提供有質量保證的服務。</p>
                      <p>因此無論您是需要一些編碼外包，</p>
                      <p>還是需要一個完整的產品開發，我們都會幫助您。</p>
                    </div>
                  </div>
                </div>
                <div class="thumbsBg">
                  <div></div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="gallery_thumbsBox">
                <div class="thumbsImg">
                  <img src="../assets/img/development_pic2.png">
                </div>
                <div class="thumbsText">
                  <div>
                    <div class="run_txt run_txtTit">
                      <p class="title">貸款管理系統</p>
                      <p>貨款管理系統的流程包括申請、審批、放款、還款、月平息及實際年利率的計算。</p>
                      <p>計算功能包括還款本金、利息、過期利息、行政費、續借、提早清還、</p>
                      <p>無款更改、利率更改、期數更改等，另有多種分析報表提供。</p>
                    </div>
                  </div>
                </div>
                <div class="thumbsBg">
                  <div></div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="gallery_thumbsBox">
                <div class="thumbsImg">
                  <img src="../assets/img/development_pic3.png">
                </div>
                <div class="thumbsText">
                  <div>
                    <div class="run_txt run_txtTit">
                      <p class="title">貿易系統</p>
                      <p>貿易系統的流程包括報價單、採購、收貨、退貨、出單等。另有多種分析報表提供。</p>
                    </div>
                  </div>
                </div>
                <div class="thumbsBg">
                  <div></div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="gallery_thumbsBox">
                <div class="thumbsImg">
                  <img src="../assets/img/development_pic4.png">
                </div>
                <div class="thumbsText">
                  <div>
                    <div class="run_txt run_txtTit">
                      <p class="title">MRP生產管理系統</p>
                      <p>生產管理MRP系統是一套嚴密的生產過程管控系統，</p>
                      <p>能夠使企業管理從生產訂單生成到訂單完工入庫的全過程。 </p>
                      <p>生產管理MRP系統還提供豐富的生產管理報表，可以隨時瞭解各生產訂單當前的生產狀況。</p>
                      <p>解決現場管理困難，生產的進度不明，績效評估困難等一系列生產管理問題。</p>
                      <p>生產管理MRP系統迋要包括產品結構管理(BOM表)，</p>
                      <p>廠內作業管理、外發作業管理及多次加工管理等功能。</p>
                    </div>
                  </div>
                </div>
                <div class="thumbsBg">
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

<!--详细内容 -->
      <div class="softwareDivs" :style="{'display': isSoftware?'block':'none'}" id="softwareDivs">
        <div class="softwareHeight"></div>
<!--        外包軟件開發服務  :style="{'display': isSoftwareIndex === 0?'block':'none'}"-->
        <div class="softwareDivsItem softwareDiv1" :class="isSoftwareIndex === 0?'showSoftwareDiv':''"  >
          <p class="closeIcon" @click="hideSoftware"><i class="iconfont icon-cha"></i></p>
          <div class="Width1400">
            <p class="softwareTit">外包軟件開發服務</p>
            <div class="softwareDivFlex flexRow3">
              <div>
                <div class="title">
                  <i class="iconfont icon-paper"></i>
                  <span>產品開發</span>
                </div>
                <div class="text">
                  中天科技是一站式的電腦程式設計外包服務商：需求分析、定制解決方案、體系結構、UI/UX設計、開發、測試、部署、維護、系統管理和支持。
                </div>
              </div>
              <div>
                <div class="title">
                  <i class="iconfont icon-tuandui"></i>
                  <span>專業團隊</span>
                </div>
                <div class="text">
                  我們會反復檢查您的目標及需求，並為您提供最適合實施方案。
                </div>
              </div>
              <div>
                <div class="title">
                  <i class="iconfont icon-shengji"></i>
                  <span>現有系統支持及升級</span>
                </div>
                <div class="text">
                  我們提供將現有系統支持及升級到新興技術，同時亦保留原有的數據。
                </div>
              </div>
              <div>
                <div class="title">
                  <i class="iconfont icon-xinhao"></i>
                  <span>除錯服務</span>
                </div>
                <div class="text">
                  我們提供遠端除錯服務，不管相隔多遠，我們的團隊都會像在你身旁與你溝通。
                </div>
              </div>
              <div>
                <div class="title">
                  <i class="iconfont icon-quanqiu"></i>
                  <span>支持與維護</span>
                </div>
                <div class="text">
                  客戶可以通過電話或電子郵件跟我們的軟件工程師溝通，我們的軟件工程師會作出最快的響應，並修復代碼中的錯誤。
                </div>
              </div>
              <div>
                <div class="title">
                  <i class="iconfont icon-insert"></i>
                  <span>代碼審查服務</span>
                </div>
                <div class="text">
                  將徹底檢查現有產品的代碼，以確保其可靠性、可維護性、效率和安全性方面符合最佳狀況。
                </div>
              </div>
            </div>
          </div>
        </div>
<!--        貸款管理系統-->
        <div class="softwareDivsItem softwareDiv2" :class="isSoftwareIndex === 1?'showSoftwareDiv':''" >
          <p class="closeIcon" @click="hideSoftware"><i class="iconfont icon-cha"></i></p>
          <div class="Width1400">
            <p class="softwareTit">貸款管理系統</p>
            <div class="softwareDivFlex flexRow3">
              <div class="borderTop">
                <div class="title">
                  <span>客戶資料模組</span>
                </div>
                <div class="text">
                  <p>客戶資料</p>
                  <p>黑名單資料</p>
                  <p>物業資料</p>
                  <p>日常溝通數據</p>
                  <p>樓宇 / 屋契資料</p>
                </div>
              </div>
              <div class="borderTop">
                <div class="title">
                  <span>還款管理模組</span>
                </div>
                <div class="text">
                  <p>再次借款申請</p>
                  <p>帳號資料審核</p>
                  <p>放貸資料</p>
                  <p>還款預覽</p>
                  <p>利率變動</p>
                  <p>退款管理</p>
                  <p>撥備管理</p>
                </div>
              </div>
              <div class="borderTop">
                <div class="title">
                  <span>還款管理模組</span>
                </div>
                <div class="text">
                  <p>還款資料</p>
                  <p>快速還款</p>
                  <p>各式還款方法</p>
                  <p>逾期還款</p>
                </div>
              </div>
            </div>
          </div>
        </div>
<!--        貿易系統-->
        <div class="softwareDivsItem softwareDiv3" :class="isSoftwareIndex === 2?'showSoftwareDiv':''" >
          <p class="closeIcon" @click="hideSoftware"><i class="iconfont icon-cha"></i></p>
          <div class="Width1400">
            <p class="softwareTit">貿易系統</p>
            <div class="softwareDivFlex flexRow4">
              <div class="borderTop">
                <div class="title">
                  <span>業務模組</span>
                </div>
                <div class="text">
                  <p>報價單</p>
                  <p>銷售確認單</p>
                  <p>出倉單</p>
                  <p>Backorder</p>
                  <p>送貨單</p>
                  <p>發票</p>
                </div>
              </div>
              <div class="borderTop">
                <div class="title">
                  <span>採購模組</span>
                </div>
                <div class="text">
                  <p>採購單</p>
                </div>
              </div>
              <div class="borderTop">
                <div class="title">
                  <span>庫存模組</span>
                </div>
                <div class="text">
                  <p>入倉單</p>
                  <p>出倉單</p>
                  <p>轉倉單</p>
                  <p>退倉單</p>
                  <p>盤點單</p>
                  <p>庫存查詢</p>
                </div>
              </div>
              <div class="borderTop">
                <div class="title">
                  <span>財務模組</span>
                </div>
                <div class="text">
                  <p>付款維護</p>
                  <p>平均價歷史查詢</p>
                </div>
              </div>
            </div>
          </div>
        </div>
<!--        MRP生產管理系統-->
        <div class="softwareDivsItem softwareDiv4" :class="isSoftwareIndex === 3?'showSoftwareDiv':''" >
          <p class="closeIcon" @click="hideSoftware"><i class="iconfont icon-cha"></i></p>
          <div class="Width1400">
            <p class="softwareTit">MRP生產管理系統</p>
            <div class="softwareDivFlex flexRow5">
              <div class="borderTop">
                <div class="title">
                  <span>銷售模組</span>
                </div>
                <div class="text">
                  <p>包裝單</p>
                  <p>單倉單</p>
                  <p>出包裝單倉單</p>
                </div>
              </div>
              <div class="borderTop">
                <div class="title">
                  <span>生產模組</span>
                </div>
                <div class="text">
                  <p>試模資料</p>
                  <p>BOM資料</p>
                  <p>生產計畫</p>
                  <p>MRP需求</p>
                </div>
              </div>
              <div class="borderTop">
                <div class="title">
                  <span>採購模組</span>
                </div>
                <div class="text">
                  <p>請購單</p>
                  <p>請加工單</p>
                  <p>轉倉單</p>
                  <p>採購單</p>
                  <p>外發加工單</p>
                </div>
              </div>
              <div class="borderTop">
                <div class="title">
                  <span>質檢模組</span>
                </div>
                <div class="text">
                  <p>QC單</p>
                </div>
              </div>
              <div class="borderTop">
                <div class="title">
                  <span>倉存模組</span>
                </div>
                <div class="text">
                  <p>收貨單</p>
                  <p>入倉單</p>
                  <p>出倉單</p>
                  <p>轉倉單</p>
                  <p>生產退料單</p>
                  <p>物料盤點單</p>
                  <p>物料庫存月結處理</p>
                  <p>庫存查詢</p>
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
import Offer from '../components/Offer'

import Swiper from 'swiper'
import {Pagination} from 'swiper'
export default {
  name: 'Software',
  data () {
    return {
      isSoftware: true,
      isSoftwareIndex: 0
    }
  },
  comments:{
    Pagination
  },
  components:{
    Offer
  },
  created:function(){
    this.$nextTick(function () {
      this.galleryThumbsLunbo();
      this.galleryTopLunbo();
    });
  },
  methods: {
    // 缩略图轮播
    galleryTopLunbo() {
      let that = this
      this.galleryTop = new Swiper('.gallery_top', {
        spaceBetween: 0,
        allowTouchMove:false,
        // 左右按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        on: {
          slideChangeTransitionEnd: function(){
            // console.log(this.activeIndex)
            that.isSoftware = true
            that.isSoftwareIndex = this.activeIndex
            // document.getElementById('softwareDivs').scrollIntoView({behavior: "smooth"});
          }
        },
        thumbs: {
          swiper: this.galleryThumbs,
          slideThumbActiveClass: 'swiper-slide-thumb-active',
        }
      })
    },
    galleryThumbsLunbo() {
      this.galleryThumbs = new Swiper('.gallery_thumbs', {
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        allowTouchMove:true,
        breakpoints: {
          100: {
            slidesPerView: 1,
            spaceBetween: 35,
            allowTouchMove:false
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 50,
            allowTouchMove:false
          },
          1024:{
            slidesPerView: 4,
            spaceBetween: 0,
            allowTouchMove:true
          }
        }
      })
    },
    // 关闭
    hideSoftware () {
      this.isSoftware = false
      document.getElementById('swiperBoxDiv').scrollIntoView({behavior: "smooth"});
    }
  }
}
</script>

<style scoped>
.softwareHeight{
  height: 20px;
  width: 100%;
  background: #72C8FF;
}
.softwareDivsItem{
  position: relative;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s linear;
}
div.showSoftwareDiv{
  max-height: 2000px;
}
.softwareDivsItem .Width1400{
  padding-top: 70px;
  padding-bottom: 100px;
}
.softwareDivsItem .closeIcon{
  position: absolute;
  right: 30px;
  top: 30px;
  color: #FFFFFF;
  cursor: pointer;
}
.softwareDivFlex{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.softwareDivFlex>div{
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  color: #FFFFFF;
  margin-top: 50px;
  padding: 30px;
}
.softwareDivsItem .softwareTit{
  font-size: 48px;
  text-align: center;
  color: #FFFFFF;
}
.softwareDivFlex .title{
  color: #8AAFC0;
  font-size: 24px;
  padding-bottom: 15px;
}
.softwareDivFlex .title>i{
  font-size: 24px;
  margin-right: 10px;
}
.softwareDivFlex .text{
  font-size: 16px;
  line-height: 1.6;
}
.softwareDivFlex .text>p{
  padding-top: 10px;
}
.softwareDivFlex .borderTop{
  text-align: center;
}
.softwareDivFlex .borderTop .text{
  border-top: 1px solid #FFFFFF;
  padding-top: 10px;
}
.softwareDiv1{
  background: url("../assets/img/development_pic1_l.png") no-repeat;
  background-size: cover;
}
.softwareDiv2{
  background: url("../assets/img/development_pic2_l.png") no-repeat;
  background-size: cover;
}
.softwareDiv3{
  background: url("../assets/img/development_pic3_l.png") no-repeat;
  background-size: cover;
}
.softwareDiv4{
  background: url("../assets/img/development_pic4_l.png") no-repeat;
  background-size: cover;
}
.flexRow3>div{
  width: 30%;
}
.flexRow4>div{
  width: 22.5%;
}
.flexRow5>div{
  width: 18%;
}
@media screen and (max-width:1023px){
  .softwareDivsItem .Width1400{
    padding-top: 40px;
    padding-bottom: 50px;
  }
  .softwareDivsItem .softwareTit{
    font-size: 32px;
  }
  .softwareDivFlex>div{
    margin-top: 30px;
    padding: 20px;
  }
  .softwareDivFlex .title>i,.softwareDivFlex .title{
    font-size: 20px;
  }
  .softwareDivFlex .title>i{
    margin-right: 0;
  }
  .flexRow5>div{
    width: 30%;
  }
  .softwareDivFlex .text{
    font-size: 14px;
  }
}
@media screen and (max-width:767px){
  .run_txtTit .title{
    font-size: 18px;
    margin-bottom: 0;
  }
  .thumbsText div.run_txtTit{
    font-size: 10px;
  }
  .softwareDivsItem .softwareTit{
    font-size: 20px;
  }
  .softwareDivFlex .title{
    font-size: 16px;
    padding-bottom: 10px;
  }
  .softwareDivFlex>div{
    margin-top: 15px;
    padding: 10px;
  }
  .flexRow3>div,.flexRow4>div,.flexRow5>div{
    width: 48%;
  }
  .softwareDivFlex .text{
    font-size: 12px;
  }
  .softwareDivsItem .closeIcon{
    right: 10px;
    top: 10px;
  }
  .softwareHeight{
    height: 10px;
  }
}
</style>
