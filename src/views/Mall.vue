<template>
  <div>
    <!--内页banner-->
    <section class="">
      <img src="../assets/img/shop_banner.png" class="bannerImg">
    </section>
    <!--網上商城-->
    <section id="swiperBoxDiv">
      <div class="swiperBoxDiv">
        <div class="swiperBox1">
          <div class="textCenter">
            <h1 class="h1Title">{{ $t("message.WangShangSC") }}</h1>
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
                  <img src="../assets/img/shop_pic1.png">
                </div>
                <div class="thumbsText">
                  <div>
                    <div class="run_txt run_txtTit">
                      <p class="title">{{ $t("message.mallSwiperTit1") }}</p>
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
                  <img src="../assets/img/shop_pic2.png">
                </div>
                <div class="thumbsText">
                  <div>
                    <div class="run_txt run_txtTit">
                      <p class="title">{{ $t("message.mallSwiperTit2") }}</p>
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
                  <img src="../assets/img/shop_pic3.png">
                </div>
                <div class="thumbsText">
                  <div>
                    <div class="run_txt run_txtTit">
                      <p class="title">{{ $t("message.mallSwiperTit3") }}</p>
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
                  <img src="../assets/img/shop_pic4.png">
                </div>
                <div class="thumbsText">
                  <div>
                    <div class="run_txt run_txtTit">
                      <p class="title">{{ $t("message.mallSwiperTit4") }}</p>
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
                  <img src="../assets/img/shop_pic5.png">
                </div>
                <div class="thumbsText">
                  <div>
                    <div class="run_txt run_txtTit">
                      <p class="title">{{ $t("message.mallSwiperTit5") }}</p>
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
                  <img src="../assets/img/shop_pic6.png">
                </div>
                <div class="thumbsText">
                  <div>
                    <div class="run_txt run_txtTit">
                      <p class="title">{{ $t("message.mallSwiperTit6") }}</p>
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
<!--核心功能-->
    <section class="BgF2F5F6 pad_100">
      <div class="Width1400">
        <div class="textCenter">
          <h1 class="h1Title col_254051">{{this.$t("message.mallCoreBigT")}}</h1>
        </div>
        <div class="">
          <div class="separateUl separateUl4li">
            <ul>
              <li v-for="item in coreArr" class="wow fadeInUp" :data-wow-delay="item.time+'s'">
                <img :src="item.img">
                <p>{{ item.title }}</p>
                <div>
                  {{ item.content }}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
<!--購買限時優惠-->
    <section class="mallBigDiv mallBgImg">
      <div class="Width1200">
        <div class="textCenter">
          <h1 class="h1Title col_FFF">{{$t("message.mallBuyTit")}}</h1>
          <span class="discountSpan">2022.05.01-2022.06.30</span>
        </div>
        <div class="discountDiv">
          <ul class="discountBg_blue1">
            <li v-for="item in buyArr">
              <p>{{ item.title }}</p>
              <div class="text">
                <span>HKD</span>
                <strong>{{ item.price }}</strong>
              </div>
              <button>{{$t("message.mallBuyBtn")}}</button>
            </li>
          </ul>
        </div>
        <div class="discountDivText discountBg_blue2">
          <p>{{$t("message.mallBuyInclude")}}</p>
          <ul>
            <li>
              <i class="iconfont icon-duigou"></i>
              <p>{{$t("message.mallDiscountText1")}}</p>
            </li>
            <li>
              <i class="iconfont icon-duigou"></i>
              <p>{{$t("message.mallDiscountText2")}}</p>
            </li>
            <li>
              <i class="iconfont icon-duigou"></i>
              <p>{{$t("message.mallDiscountText2")}}</p>
            </li>
            <li>
              <i class="iconfont icon-duigou"></i>
              <p><span class="discountSpan">{{$t("message.mallDiscountText4_1")}}</span>{{$t("message.mallDiscountText4_2")}}</p>
            </li>
            <li>
              <i class="iconfont icon-duigou"></i>
              <p>{{$t("message.mallDiscountText5")}}</p>
            </li>
          </ul>
          <p>{{$t("message.mallDiscountText6")}}</p>
        </div>
      </div>

    </section>
<!--租用限時優惠-->
    <section class="mallBigDiv BgFAFAFA">
      <div class="Width1200">
        <div class="textCenter">
          <h1 class="h1Title">{{$t("message.mallRentTit")}}</h1>
          <span class="discountSpan">2022.05.01-2022.06.30</span>
        </div>
        <div class="discountDiv">
          <ul class="discountBg_white1">
            <li v-for="item in rentArr">
              <p>{{ item.title }}</p>
              <div class="text">
                <span>HKD</span>
                <strong>{{ item.price }}<label>/{{item.cycle}}</label></strong>
              </div>
              <button>{{$t("message.mallRentBtn")}}</button>
            </li>
          </ul>
        </div>
        <div class="discountDivText discountBg_white2">
          <p>{{$t("message.mallRentInclude")}}</p>
          <ul>
            <li>
              <i class="iconfont icon-duigou"></i>
              <p>{{$t("message.mallDiscountText1")}}</p>
            </li>
            <li>
              <i class="iconfont icon-duigou"></i>
              <p>{{$t("message.mallDiscountText22")}}</p>
            </li>
            <li>
              <i class="iconfont icon-duigou"></i>
              <p>{{$t("message.mallDiscountText33")}}</p>
            </li>
          </ul>
          <p>{{$t("message.mallDiscountText6")}}</p>
          <p class="p2">{{$t("message.mallDiscountText8")}}</p>
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
  name: 'Mall',
  data () {
    return {
      swiperTit:[
        {'title': this.$t("message.mallSwiperTit1"),'time': 0.5,'icon':'icon-chanpin'},
        {'title': this.$t("message.mallSwiperTit2"),'time': 1,'icon':'icon-tuijian'},
        {'title': this.$t("message.mallSwiperTit3"),'time': 1.5,'icon':'icon-youhuiquan'},
        {'title': this.$t("message.mallSwiperTit4"),'time': 2,'icon':'icon-fenxiang'},
        {'title': this.$t("message.mallSwiperTit5"),'time': 0,'icon':'icon-duozhongzhifu'},
        {'title': this.$t("message.mallSwiperTit6"),'time': 0,'icon':'icon-pingjia'}
      ],
      coreArr:[
        {"title":this.$t("message.mallCoreTit1"),"content":this.$t("message.mallCoreText1"),"img":"https://test41.chinaskynet.net/assets/image/mall1.png","time":0.15},
        {"title":this.$t("message.mallCoreTit2"),"content":this.$t("message.mallCoreText2"),"img":"https://test41.chinaskynet.net/assets/image/mall2.png","time":0.3},
        {"title":this.$t("message.mallCoreTit3"),"content":this.$t("message.mallCoreText3"),"img":"https://test41.chinaskynet.net/assets/image/mall3.png","time":0.45},
        {"title":this.$t("message.mallCoreTit4"),"content":this.$t("message.mallCoreText4"),"img":"https://test41.chinaskynet.net/assets/image/mall4.png","time":0.6},
        {"title":this.$t("message.mallCoreTit5"),"content":this.$t("message.mallCoreText5"),"img":"https://test41.chinaskynet.net/assets/image/mall5.png","time":0.75},
        {"title":this.$t("message.mallCoreTit6"),"content":this.$t("message.mallCoreText6"),"img":"https://test41.chinaskynet.net/assets/image/mall6.png","time":0.9},
        {"title":this.$t("message.mallCoreTit7"),"content":this.$t("message.mallCoreText7"),"img":"https://test41.chinaskynet.net/assets/image/mall7.png","time":1.05},
        {"title":this.$t("message.mallCoreTit8"),"content":this.$t("message.mallCoreText8"),"img":"https://test41.chinaskynet.net/assets/image/mall8.png","time":1.2},
        {"title":"","content":"","img":"","time":0}
      ],
      buyArr:[
        {'title': this.$t("message.mallDiscountTit1"),'price':'58,000.00'},
        {'title': this.$t("message.mallDiscountTit2"),'price':'48,000.00'},
        {'title': this.$t("message.mallDiscountTit3"),'price':'20,000.00'}
      ],
      rentArr:[
        {'title': this.$t("message.mallDiscountTit1"),'price':'22,800.00','cycle':this.$t("message.Year")},
        {'title': this.$t("message.mallDiscountTit4"),'price':'700.00','cycle':this.$t("message.Moon")},
        {'title': this.$t("message.mallDiscountTit5"),'price':'700.00','cycle':this.$t("message.Moon")},
        {'title': this.$t("message.mallDiscountTit3"),'price':'500.00','cycle':this.$t("message.Moon")}
      ],
      // 打字机
      developContent: [
        this.$t("message.mallSwiperText1"),
        this.$t("message.mallSwiperText2"),
        this.$t("message.mallSwiperText3"),
        this.$t("message.mallSwiperText4"),
        this.$t("message.mallSwiperText5"),
        this.$t("message.mallSwiperText6")
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
        allowTouchMove:false,
        breakpoints: {
          100: {
            slidesPerView: 1,
            spaceBetween: 45
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 50
          },
          1024:{
            slidesPerView: 4,
            spaceBetween: 0
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
@import "../assets/css/mall.css";
</style>
