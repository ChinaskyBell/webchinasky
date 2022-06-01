<template>
  <div>
    <!--内页banner-->
    <section class="">
      <img src="../assets/img/software_banner.png" class="bannerImg">
      <div class="bannerTit wow fadeInDown" data-wow-delay="0.5s">
        <strong>{{$t("message.softwareTit1")}}<br>{{$t("message.softwareTit2")}}</strong>
      </div>
    </section>
    <!--開發服務-->
    <section id="swiperBoxDiv">
      <div class="swiperBoxDiv">
        <div class="swiperBox1">
          <div class="textCenter">
            <h1 class="h1Title">{{$t("message.RuanJianKF")}}</h1>
          </div>
          <div class="Width1400">
            <div class="swiper gallery_thumbs">
              <div class="swiper-wrapper">
                <div class="swiper-slide wow fadeInUp" data-wow-delay="0.5s">
                  <div class="gallery_topBox">
                    <i class="iconfont icon-kaifa"></i>
                    <span>{{$t("message.softwareSwiperTit1")}}</span>
                  </div>
                </div>
                <div class="swiper-slide wow fadeInUp" data-wow-delay="1s">
                  <div class="gallery_topBox">
                    <i class="iconfont icon-qianbao"></i>
                    <span>{{$t("message.softwareSwiperTit2")}}</span>
                  </div>
                </div>
                <div class="swiper-slide wow fadeInUp" data-wow-delay="1.5s">
                  <div class="gallery_topBox">
                    <i class="iconfont icon-quxiantu"></i>
                    <span>{{$t("message.softwareSwiperTit3")}}</span>
                  </div>
                </div>
                <div class="swiper-slide wow fadeInUp" data-wow-delay="2s">
                  <div class="gallery_topBox">
                    <i class="iconfont icon-mrpcount"></i>
                    <span>{{$t("message.softwareSwiperTit4")}}</span>
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
                      <p class="title">{{$t("message.softwareSwiperTit1")}}</p>
                      <pre>{{developText}}</pre>
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
                      <p class="title">{{$t("message.softwareSwiperTit2")}}</p>
                      <pre>{{developText}}</pre>
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
                      <p class="title">{{$t("message.softwareSwiperTit3")}}</p>
                      <pre>{{developText}}</pre>
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
                      <p class="title">{{$t("message.softwareSwiperTit4")}}</p>
                      <pre>{{developText}}</pre>
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
<!--       1 外包軟件開發服務  :style="{'display': isSoftwareIndex === 0?'block':'none'}"-->
        <div class="softwareDivsItem softwareDiv1" :class="isSoftwareIndex === 0?'showSoftwareDiv':''"  >
          <p class="closeIcon" @click="hideSoftware"><i class="iconfont icon-cha"></i></p>
          <div class="Width1400">
            <p class="softwareTit">{{$t("message.softwareSwiperTit1")}}</p>
            <div class="softwareDivFlex flexRow3">
              <div>
                <div class="title">
                  <i class="iconfont icon-paper"></i>
                  <span>{{$t("message.softwareTit1_1")}}</span>
                </div>
                <div class="text">
                  {{$t("message.softwareText1_1")}}
                </div>
              </div>
              <div>
                <div class="title">
                  <i class="iconfont icon-tuandui"></i>
                  <span>{{$t("message.softwareTit1_2")}}</span>
                </div>
                <div class="text">
                  {{$t("message.softwareText1_2")}}
                </div>
              </div>
              <div>
                <div class="title">
                  <i class="iconfont icon-shengji"></i>
                  <span>{{$t("message.softwareTit1_3")}}</span>
                </div>
                <div class="text">
                  {{$t("message.softwareText1_3")}}
                </div>
              </div>
              <div>
                <div class="title">
                  <i class="iconfont icon-xinhao"></i>
                  <span>{{$t("message.softwareTit1_4")}}</span>
                </div>
                <div class="text">
                  {{$t("message.softwareText1_4")}}
                </div>
              </div>
              <div>
                <div class="title">
                  <i class="iconfont icon-quanqiu"></i>
                  <span>{{$t("message.softwareTit1_5")}}</span>
                </div>
                <div class="text">
                  {{$t("message.softwareText1_5")}}
                </div>
              </div>
              <div>
                <div class="title">
                  <i class="iconfont icon-insert"></i>
                  <span>{{$t("message.softwareTit1_6")}}</span>
                </div>
                <div class="text">
                  {{$t("message.softwareText1_6")}}
                </div>
              </div>
            </div>
          </div>
        </div>
<!--       2 貸款管理系統-->
        <div class="softwareDivsItem softwareDiv2" :class="isSoftwareIndex === 1?'showSoftwareDiv':''" >
          <p class="closeIcon" @click="hideSoftware"><i class="iconfont icon-cha"></i></p>
          <div class="Width1400">
            <p class="softwareTit">{{$t("message.softwareSwiperTit2")}}</p>
            <div class="softwareDivFlex flexRow3">
              <div class="borderTop">
                <div class="title">
                  <span>{{$t("message.softwareTit2_1")}}</span>
                </div>
                <div class="text">
                  <p>{{$t("message.softwareText2_11")}}</p>
                  <p>{{$t("message.softwareText2_12")}}</p>
                  <p>{{$t("message.softwareText2_13")}}</p>
                  <p>{{$t("message.softwareText2_14")}}</p>
                  <p>{{$t("message.softwareText2_15")}}</p>
                </div>
              </div>
              <div class="borderTop">
                <div class="title">
                  <span>{{$t("message.softwareTit2_2")}}</span>
                </div>
                <div class="text">
                  <p>{{$t("message.softwareText2_21")}}</p>
                  <p>{{$t("message.softwareText2_22")}}</p>
                  <p>{{$t("message.softwareText2_23")}}</p>
                  <p>{{$t("message.softwareText2_24")}}</p>
                  <p>{{$t("message.softwareText2_25")}}</p>
                  <p>{{$t("message.softwareText2_26")}}</p>
                  <p>{{$t("message.softwareText2_27")}}</p>
                </div>
              </div>
              <div class="borderTop">
                <div class="title">
                  <span>{{$t("message.softwareTit2_3")}}</span>
                </div>
                <div class="text">
                  <p>{{$t("message.softwareText2_31")}}</p>
                  <p>{{$t("message.softwareText2_32")}}</p>
                  <p>{{$t("message.softwareText2_33")}}</p>
                  <p>{{$t("message.softwareText2_34")}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
<!--       3 貿易系統-->
        <div class="softwareDivsItem softwareDiv3" :class="isSoftwareIndex === 2?'showSoftwareDiv':''" >
          <p class="closeIcon" @click="hideSoftware"><i class="iconfont icon-cha"></i></p>
          <div class="Width1400">
            <p class="softwareTit">{{$t("message.softwareSwiperTit3")}}</p>
            <div class="softwareDivFlex flexRow4">
              <div class="borderTop">
                <div class="title">
                  <span>{{$t("message.softwareTit3_1")}}</span>
                </div>
                <div class="text">
                  <p>{{$t("message.softwareText3_11")}}</p>
                  <p>{{$t("message.softwareText3_12")}}</p>
                  <p>{{$t("message.softwareText3_13")}}</p>
                  <p>Backorder</p>
                  <p>{{$t("message.softwareText3_15")}}</p>
                  <p>{{$t("message.softwareText3_16")}}</p>
                </div>
              </div>
              <div class="borderTop">
                <div class="title">
                  <span>{{$t("message.softwareTit3_2")}}</span>
                </div>
                <div class="text">
                  <p>{{$t("message.softwareText3_21")}}</p>
                </div>
              </div>
              <div class="borderTop">
                <div class="title">
                  <span>{{$t("message.softwareTit3_3")}}</span>
                </div>
                <div class="text">
                  <p>{{$t("message.softwareText3_31")}}</p>
                  <p>{{$t("message.softwareText3_32")}}</p>
                  <p>{{$t("message.softwareText3_33")}}</p>
                  <p>{{$t("message.softwareText3_34")}}</p>
                  <p>{{$t("message.softwareText3_35")}}</p>
                  <p>{{$t("message.softwareText3_36")}}</p>
                </div>
              </div>
              <div class="borderTop">
                <div class="title">
                  <span>{{$t("message.softwareTit3_4")}}</span>
                </div>
                <div class="text">
                  <p>{{$t("message.softwareText3_41")}}</p>
                  <p>{{$t("message.softwareText3_42")}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
<!--      4  MRP生產管理系統-->
        <div class="softwareDivsItem softwareDiv4" :class="isSoftwareIndex === 3?'showSoftwareDiv':''" >
          <p class="closeIcon" @click="hideSoftware"><i class="iconfont icon-cha"></i></p>
          <div class="Width1400">
            <p class="softwareTit">{{$t("message.softwareSwiperTit4")}}</p>
            <div class="softwareDivFlex flexRow5">
              <div class="borderTop">
                <div class="title">
                  <span>{{$t("message.softwareTit4_1")}}</span>
                </div>
                <div class="text">
                  <p>{{$t("message.softwareText4_11")}}</p>
                  <p>{{$t("message.softwareText4_12")}}</p>
                  <p>{{$t("message.softwareText4_13")}}</p>
                </div>
              </div>
              <div class="borderTop">
                <div class="title">
                  <span>{{$t("message.softwareTit4_2")}}</span>
                </div>
                <div class="text">
                  <p>{{$t("message.softwareText4_21")}}</p>
                  <p>{{$t("message.softwareText4_22")}}</p>
                  <p>{{$t("message.softwareText4_23")}}</p>
                  <p>{{$t("message.softwareText4_24")}}</p>
                </div>
              </div>
              <div class="borderTop">
                <div class="title">
                  <span>{{$t("message.softwareTit4_3")}}</span>
                </div>
                <div class="text">
                  <p>{{$t("message.softwareText4_31")}}</p>
                  <p>{{$t("message.softwareText4_32")}}</p>
                  <p>{{$t("message.softwareText4_33")}}</p>
                  <p>{{$t("message.softwareText4_34")}}</p>
                  <p>{{$t("message.softwareText4_35")}}</p>
                </div>
              </div>
              <div class="borderTop">
                <div class="title">
                  <span>{{$t("message.softwareTit4_4")}}</span>
                </div>
                <div class="text">
                  <p>{{$t("message.softwareText4_41")}}</p>
                </div>
              </div>
              <div class="borderTop">
                <div class="title">
                  <span>{{$t("message.softwareTit4_5")}}</span>
                </div>
                <div class="text">
                  <p>{{$t("message.softwareText4_51")}}</p>
                  <p>{{$t("message.softwareText4_52")}}</p>
                  <p>{{$t("message.softwareText4_53")}}</p>
                  <p>{{$t("message.softwareText4_54")}}</p>
                  <p>{{$t("message.softwareText4_55")}}</p>
                  <p>{{$t("message.softwareText4_56")}}</p>
                  <p>{{$t("message.softwareText4_57")}}</p>
                  <p>{{$t("message.softwareText4_58")}}</p>
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
      isSoftwareIndex: 0,
      // 打字机
      developContent: [
        this.$t("message.softwareSwiperText1"),
        this.$t("message.softwareSwiperText2"),
        this.$t("message.softwareSwiperText3"),
        this.$t("message.softwareSwiperText4")
      ],
      developText: "",
      isDevelopText: 0,
      timer: null,
      developTextIndex: 0
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
    this.typewriter(this.developTextIndex)
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
            that.isSoftware = true
            that.isSoftwareIndex = this.activeIndex
            // document.getElementById('softwareDivs').scrollIntoView({behavior: "smooth"});
          },
          slideChange: function(){
            if (this.activeIndex === that.developTextIndex){
              console.log("同一个")
            }else {
              clearInterval(that.timer)
              that.developTextIndex = this.activeIndex
              that.developText = ""
              that.isDevelopText = 0
              that.typewriter(this.activeIndex)
            }
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
            spaceBetween: 45,
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
    //打字机
    typewriter (x){
      const that =this
      if (this.isDevelopText === 0) {
        this.isDevelopText = 1
        let index = 0
        that.timer = setInterval(function () {
          that.developText = that.developContent[x].substring(0, index++);
          if (that.developContent[x].length + 1 === index) {
            clearInterval(that.timer)
          }
        }, 15);
      }
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
@import "../assets/css/develop.css";
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
</style>
