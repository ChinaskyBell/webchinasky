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
            <h1 class="h1Title">網上商城</h1>
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
                      <p class="title">商品詳細全面展示</p>
                      <p>網上商城可使更多的用戶獲得更大量的商品信息，</p>
                      <p>可以面向更多區域地銷售， 商品可大圖多圖展示，</p>
                      <p>規格、顏色、銷量、評價一系列信息全面展示，</p>
                      <p>用戶足不出戶也能了解購買商品。</p>
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
                      <p class="title">熱門商品推薦</p>
                      <p>可根據銷售目的，在指定位置向用戶推薦商品，</p>
                      <p>更有效地實現銷售目標，提高銷售額。</p>
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
                      <p class="title">電子優惠券</p>
                      <p>電子優惠券可幫助商家在一定的短時期內，對商品進行促銷刺激消費者購買。</p>
                      <p>促進用戶消費；電子消費券可無限製作，無任何成本，</p>
                      <p>同時用戶的接收也更及時，數據的查看更便捷</p>
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
                      <p class="title">分享商品拓展更多客戶</p>
                      <p>通過用戶活躍率更高的社交平台分享商品給好友，</p>
                      <p>讓用戶主動分享商品，以達到APP拉新人和促銷商品的目的，</p>
                      <p>通過好友間的分享可使商品達到更廣泛的傳播，獲取更多目標客戶</p>
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
                      <p class="title">支持多種支付方式</p>
                      <p>網上商城支持多種支付方式，</p>
                      <p>滿足用戶多種需求，方便快捷交易。</p>
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
                      <p class="title">交易評價收集客戶反饋</p>
                      <p>通過消費者消費之後對商品的評價，</p>
                      <p>可以幫助商家更好地了解自身商品，</p>
                      <p>更好地銷售和優化商品。</p>
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
          <h1 class="h1Title col_254051">使用中天服務的好處</h1>
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
          <h1 class="h1Title col_FFF">購買限時優惠</h1>
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
              <button>購買</button>
            </li>
          </ul>
        </div>
        <div class="discountDivText discountBg_blue2">
          <p>購買包含</p>
          <ul>
            <li>
              <i class="iconfont icon-duigou"></i>
              <p>3種語言版本（繁、簡、英）</p>
            </li>
            <li>
              <i class="iconfont icon-duigou"></i>
              <p>含一年雲端空間10G空間及每月50G流量</p>
            </li>
            <li>
              <i class="iconfont icon-duigou"></i>
              <p>含一年維護費用（包括系統除錯服務及app版本更新）</p>
            </li>
            <li>
              <i class="iconfont icon-duigou"></i>
              <p><span class="discountSpan">優惠價-</span>第二年開始收取HKD 2,900.00元（雲端空間及維護費用-含同樣的服務即10G空間及每月50G流量，系統除錯服務及app版本更新)</p>
            </li>
            <li>
              <i class="iconfont icon-duigou"></i>
              <p>第三年開始取正價HKD 5,800.00元（雲端空間及維護費用-含同樣的服務即10G空間及每月50G流量，系統除錯服務及app版本更新)</p>
            </li>
          </ul>
          <p>只接入最多4種支付方式，多於4種會額外收取費用</p>
        </div>
      </div>

    </section>
<!--租用限時優惠-->
    <section class="mallBigDiv BgFAFAFA">
      <div class="Width1200">
        <div class="textCenter">
          <h1 class="h1Title">租用限時優惠</h1>
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
              <button>租用</button>
            </li>
          </ul>
        </div>
        <div class="discountDivText discountBg_white2">
          <p>購買包含</p>
          <ul>
            <li>
              <i class="iconfont icon-duigou"></i>
              <p>3種語言版本（繁、簡、英）</p>
            </li>
            <li>
              <i class="iconfont icon-duigou"></i>
              <p>含雲端空間10G及每月50G流量</p>
            </li>
            <li>
              <i class="iconfont icon-duigou"></i>
              <p>含維護費用（包括系統除錯服務及app版本更新）</p>
            </li>
          </ul>
          <p>只接入最多4種支付方式，多於4種會額外收取費用</p>
          <p class="p2">註：網上商城租用服務費用每年付一次</p>
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
        {'title': '商品詳細全面展示','time': 0.5,'icon':'icon-chanpin'},
        {'title': '熱門商品推薦','time': 1,'icon':'icon-tuijian'},
        {'title': '電子優惠券','time': 1.5,'icon':'icon-youhuiquan'},
        {'title': '分享商品拓展更多客戶','time': 2,'icon':'icon-fenxiang'},
        {'title': '支持多種支付方式','time': 0,'icon':'icon-duozhongzhifu'},
        {'title': '交易評價收集客戶反饋','time': 0,'icon':'icon-pingjia'}
      ],
      coreArr:[
        {"title":"商品管理","content":"客戶可自主對商品分類展示，可根據商品價格、人氣、銷量進行排序，展示商品一系列信息等","img":"https://test41.chinaskynet.net/assets/image/mall1.png","time":0.15},
        {"title":"購物車功能","content":"用戶可將商品加入購物車一起結算，根據用戶的選擇合計價格","img":"https://test41.chinaskynet.net/assets/image/mall2.png","time":0.3},
        {"title":"收藏","content":"用戶可將喜歡的商品一鍵收藏，方便促進後期後買","img":"https://test41.chinaskynet.net/assets/image/mall3.png","time":0.45},
        {"title":"營銷活動","content":"限時折扣、積分兌換等活動，購買時可以獲得對應積分，積分可以在結算時抵扣訂單金額","img":"https://test41.chinaskynet.net/assets/image/mall4.png","time":0.6},
        {"title":"訂單管理","content":"可根據下單時間，訂單號等精確檢索到不同狀態（如待付款、待發貨、待收貨、待評價等）訂單","img":"https://test41.chinaskynet.net/assets/image/mall5.png","time":0.75},
        {"title":"登錄/註冊","content":"可使用手機號和手機短信驗證碼快速註冊/使用帳號密碼直接註冊，第三方授權登錄，如微信Facebook，Twitter等","img":"https://test41.chinaskynet.net/assets/image/mall6.png","time":0.9},
        {"title":"會員中心","content":"用戶基本信息管理，如手機號、郵件地址、收貨地址、密碼修改等","img":"https://test41.chinaskynet.net/assets/image/mall7.png","time":1.05},
        {"title":"售後退款","content":"用戶可提交退款退貨申請，查看退款訂單，跟蹤退貨狀態","img":"https://test41.chinaskynet.net/assets/image/mall8.png","time":1.2},
        {"title":"","content":"","img":"","time":0}
      ],
      buyArr:[
        {'title': '網站+APP商城（iOS+Android）','price':'58,000.00'},
        {'title': 'APP商城（iOS+Android）','price':'48,000.00'},
        {'title': '網站商城','price':'20,000.00'}
      ],
      rentArr:[
        {'title': '網站+APP商城（iOS+Android）','price':'22,800.00','cycle':'年'},
        {'title': 'iOS APP商城','price':'700.00','cycle':'月'},
        {'title': 'Android APP商城','price':'700.00','cycle':'月'},
        {'title': '網站商城','price':'500.00','cycle':'月'}
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
  }
}
</script>

<style scoped>
@import "../assets/css/mall.css";
</style>
