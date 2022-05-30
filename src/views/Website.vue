<template>
  <div>
    <!--内页banner-->
    <section class="">
      <img src="../assets/img/web_banner.png" class="bannerImg">
      <div class="bannerTit wow fadeInDown" data-wow-delay="0.5s">
        <strong>響應式，我們是專業的</strong>
      </div>
    </section>
    <!--開發服務-->
    <section id="swiperBoxDiv">
      <div class="swiperBoxDiv">
        <div class="swiperBox1">
          <div class="textCenter">
            <h1 class="h1Title">網站開發</h1>
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
                  <img src="../assets/img/web_pic1.png">
                </div>
                <div class="thumbsText">
                  <div>
                    <div class="run_txt run_txtTit">
                      <p class="title">傳統網站vs響應式網站</p>
                      <p>為企業定制功能更齊全、更强大的公眾號服務平臺，</p>
                      <p>連接微信9億用戶，實現精准行銷，打開微信市場。</p>
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
                  <img src="../assets/img/web_pic2.png">
                </div>
                <div class="thumbsText">
                  <div>
                    <div class="run_txt run_txtTit">
                      <p class="title">響應式網頁設計對SEO的好處</p>
                      <p>無需安裝，用完即走。更方便的連結線上與線下場景，</p>
                      <p>打開微信流量大門，為企業贏得千億市場。</p>
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
                  <img src="../assets/img/web_pic3.png">
                </div>
                <div class="thumbsText">
                  <div>
                    <div class="run_txt run_txtTit">
                      <p class="title">Https</p>
                      <p>滿足您個性化的辦公系統需求，</p>
                      <p>建立高效、簡單、順暢的對內對外的合作聯系，提高工作效率。</p>
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
<!--開發流程-->
    <section class="pad_50 webProcessBg">
      <div class="Width1400">
        <div class="textCenter">
          <h1 class="h1Title col_FFF">開發流程</h1>
        </div>
        <div class="webProcessDiv">
          <ul>
            <li  v-for="item in processStr">
              <p class="p1">{{ item.title }}</p>
              <p class="p2">{{ item.content }}</p>
            </li>
          </ul>
        </div>

      </div>
    </section>
<!--案例-->
    <Case></Case>
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
  name: 'Website',
  data () {
    return {
      swiperTit:[
        {'title': '傳統網站vs響應式網站','time': 0.5,'icon':'icon-xiangyi'},
        {'title': '響應式網頁設計對SEO的好處','time': 1,'icon':'icon-SEO'},
        {'title': 'Https','time': 1.5,'icon':'icon-https'}
      ],
      processStr:[
        {'title': '01想法','time': 0.5,'content':'我們傾聽您的所有願望和建議。'},
        {'title': '02討論','time': 1,'content':'改正錯誤，給你建議和提示，和你討論。'},
        {'title': '03設計','time': 1.5,'content':'想想你網站的設計理念。'},
        {'title': '04開發','time': 2,'content':'啟動網站的開發和推廣過程。'}
      ]
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
  }
}
</script>

<style scoped>
  .webProcessBg{
    background: url("../assets/img/web_bg.png") no-repeat;
    background-size: cover;
  }
  .webProcessDiv{
    text-align: center;
    color: #FFFFFF;
  }
  .webProcessDiv>ul>li{
    padding-bottom: 40px;
    position: relative;
    transition: all 0.2s;
  }
  .webProcessDiv>ul>li:last-child{
    padding-bottom: 0;
  }
  .webProcessDiv>ul>li .p1{
    margin-bottom: 5px;
  }
  @media screen and (min-width:1024px){
    .webProcessDiv>ul>li:hover{
      transition: all 0.5s;
      font-size: 42px;
      color: #72C8FF;
    }
    .webProcessDiv>ul>li:hover .p1{
      font-weight: bolder;
    }
    .webProcessDiv>ul>li:before,.webProcessDiv>ul>li:after{
      position: absolute;
      content: "";
      top: 0;
      transition: all 0.3s;
    }
    .webProcessDiv>ul>li:before{
      height: 20px;
      width: 20px;
      border: 1px solid #72C8FF;
      left: -10px;
      border-radius: 50%;
      opacity: 0;
    }
    .webProcessDiv>ul>li:after{
      width: 1px;
      left: 0;
      bottom: 0;
      background: #72C8FF;
    }
    .webProcessDiv>ul>li:hover:before{
      opacity: 1;
    }
    .webProcessDiv>ul>li:hover:after{
      top: 30px;
    }
  }
  @media screen and (max-width:767px){
    .webProcessDiv>ul>li{
      padding-bottom: 15px;
    }
  }
</style>
