<template>
  <div>
    <!--内页banner-->
    <section class="">
      <img src="../assets/img/app_banner.jpg" class="bannerImg">
      <div class="bannerTit">
        <div class="wow fadeInDown" data-wow-delay="0.5s">
          <strong>{{$t("message.moveTit1")}}</strong>
        </div>
      </div>
    </section>
    <!--開發服務-->
    <section id="swiperBoxDiv">
      <div class="swiperBoxDiv">
        <div class="swiperBox1">
          <div class="textCenter">
            <h1 class="h1Title">{{ $t("message.AppKF") }}</h1>
          </div>
          <div class="Width1400">
            <div class="swiper gallery_thumbs">
              <div class="swiper-wrapper">
                <div v-for="item in swiperTit" class="swiper-slide wow fadeInUp" :data-wow-delay="item.time+'s'">
                  <div class="gallery_topBox">
                    <i :class="['iconfont',item.icon]"></i>
                    <span>{{item.title}}</span>
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
                  <img src="../assets/img/app_pic.jpg">
                </div>
                <div class="thumbsText">
                  <div>
                    <div class="run_txt run_txtTit">
                      <p class="title">{{ $t("message.moveSwiperTit1") }}</p>
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
                  <img src="../assets/img/app_pic.jpg">
                </div>
                <div class="thumbsText">
                  <div>
                    <div class="run_txt run_txtTit">
                      <p class="title">{{ $t("message.moveSwiperTit2") }}</p>
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
                  <img src="../assets/img/app_pic.jpg">
                </div>
                <div class="thumbsText">
                  <div>
                    <div class="run_txt run_txtTit">
                      <p class="title">Web APP</p>
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
    </section>
<!--案例-->
    <Case Active="2"></Case>
<!--索取报价-->
    <Offer></Offer>
  </div>

</template>

<script>
import Offer from '../components/Offer'
import Case from '../components/Case'

import Swiper from 'swiper'
import {Pagination} from 'swiper'
export default {
  name: 'Move',
  data () {
    return {
      swiperTit:[
        {'title': this.$t("message.moveSwiperTit1"),'time': 0.5,'icon':'icon-app'},
        {'title': this.$t("message.moveSwiperTit2"),'time': 1,'icon':'icon-APP'},
        {'title': 'Web APP','time': 1.5,'icon':'icon-APPkaifa'}
      ],
      // 打字机
      developContent: [
        this.$t("message.moveSwiperText1"),
        this.$t("message.moveSwiperText2"),
        this.$t("message.moveSwiperText3")
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
    Offer,
    Case
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
        thumbs: {
          swiper: this.galleryThumbs,
          slideThumbActiveClass: 'swiper-slide-thumb-active',
        },
        on: {
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
            slidesPerView: 3,
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
    }
  }
}
</script>

<style scoped>

</style>
