<template>
  <div class="ui-content">
    <section class="indexBannerDiv" id="jqueryImg">
      <div class="Width1000">
        <div class="indexBannerText">
          <h1 class="wow fadeInDown" data-wow-delay="0.5s">{{$t("message.WangLuoWH")}}</h1>
          <div class="text wow fadeInDown" data-wow-delay="1s">
            <p>{{$t("message.IndexBannerText1")}}</p>
            <p>{{$t("message.IndexBannerText2")}}</p>
          </div>
          <router-link to="/Maintain">
            <button class="wow fadeInDown" data-wow-delay="1.5s">{{$t("message.GenDuo")}}</button>
          </router-link>
        </div>
      </div>
    </section>
<!--開發服務-->
    <section>
      <div class="swiperBoxDiv">
        <div class="swiperBox1">
          <h1 class="h1Title textCenter">{{$t("message.KaiFaFW")}}</h1>
          <div class="Width1400">
            <div class="swiper gallery_thumbs">
              <div class="swiper-wrapper">
                <div class="swiper-slide wow fadeInUp" data-wow-delay="0.5s">
                  <div class="gallery_topBox">
                    <i class="iconfont icon-shejiyukaifa-1"></i>
                    <span>{{$t("message.WangZhanSJHeKF")}}</span>
                  </div>
                </div>
                <div class="swiper-slide wow fadeInUp" data-wow-delay="1s">
                  <div class="gallery_topBox">
                    <i class="iconfont icon-App"></i>
                    <span>{{$t("message.AppKF")}}</span>
                  </div>
                </div>
                <div class="swiper-slide wow fadeInUp" data-wow-delay="1.5s">
                  <div class="gallery_topBox">
                    <i class="iconfont icon-weixinxiaochengxu"></i>
                    <span>{{$t("message.WeiXinKF")}}</span>
                  </div>
                </div>
                <div class="swiper-slide wow fadeInUp" data-wow-delay="2s">
                  <div class="gallery_topBox">
                    <i class="iconfont icon-shejiyukaifa"></i>
                    <span>{{$t("message.RuanJianKF")}}</span>
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
                  <img src="../assets/img/home_development_pic1@1x.png">
                </div>
                <div class="thumbsText">
                  <div>
                    <div class="run_txt">
                      <pre>{{developText}}</pre>
                    </div>
                    <router-link to="/Website">
                      <div class="run_btn">
                        <span>{{$t("message.CKWZFWXQ")}}</span>
                        <i class="iconfont icon-Right-"></i>
                      </div>
                    </router-link>
                  </div>
                </div>
                <div class="thumbsBg">
                  <div></div>
                  <img src="../assets/img/bg_icon_web01.png" />
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="gallery_thumbsBox">
                <div class="thumbsImg">
                  <img src="../assets/img/home_development_pic2@1x.png">
                </div>
                <div class="thumbsText">
                  <div>
                    <div class="run_txt">
                      <pre>{{developText}}</pre>
                    </div>
                    <router-link to="/Move">
                      <div class="run_btn">
                        <span>{{$t("message.CKWZFWXQ")}}</span>
                        <i class="iconfont icon-Right-"></i>
                      </div>
                    </router-link>
                  </div>
                </div>
                <div class="thumbsBg">
                  <div></div>
                  <img src="../assets/img/bg_icon_app01.png" />
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="gallery_thumbsBox">
                <div class="thumbsImg">
                  <img src="../assets/img/home_development_pic3@1x.png">
                </div>
                <div class="thumbsText">
                  <div>
                    <div class="run_txt">
                      <pre>{{developText}}</pre>
                    </div>
                    <router-link to="/WeChat">
                      <div class="run_btn">
                        <span>{{$t("message.CKWZFWXQ")}}</span>
                        <i class="iconfont icon-Right-"></i>
                      </div>
                    </router-link>
                  </div>
                </div>
                <div class="thumbsBg">
                  <div></div>
                  <img src="../assets/img/bg_icon_wechat01.png" />
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="gallery_thumbsBox">
                <div class="thumbsImg">
                  <img src="../assets/img/home_development_pic4@1x.png">
                </div>
                <div class="thumbsText">
                  <div>
                    <div class="run_txt">
                      <pre>{{developText}}</pre>
                    </div>
                    <router-link to="/Software">
                      <div class="run_btn">
                        <span>{{$t("message.CKWZFWXQ")}}</span>
                        <i class="iconfont icon-Right-"></i>
                      </div>
                    </router-link>
                  </div>
                </div>
                <div class="thumbsBg">
                  <div></div>
                  <img src="../assets/img/bg_icon_software01.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
<!--開發流程-->
    <section class="pad_100 processDivBg">
      <div class="processDiv Width1400">
        <h1 class="h1Title h1TitAfter">{{$t("message.KaiFaLC")}}</h1>
        <p class="h1TitleItem">{{$t("message.KaiFaLCText1")}}</p>
        <div class="processWrap clearfix">
          <div class="processStep processStepBg1 wow fadeIn" data-wow-delay="0.4s">
            <i class="iconfont icon-tounaofengbao"></i>
            <p>{{$t("message.ZhuCe")}}</p>
            <router-link :to="{path:'/Process',query:{id:'process1'}}">{{$t("message.GenDuo")}} »</router-link>
          </div>
          <div class="processStep processStepBg2 wow fadeIn" data-wow-delay="0.8s">
            <i class="iconfont icon-tuanduichengyuan"></i>
            <p>{{$t("message.DiaoYan")}}</p>
            <router-link :to="{path:'/Process',query:{id:'process2'}}">{{$t("message.GenDuo")}} »</router-link>
          </div>
          <div class="processStep processStepBg3 wow fadeIn" data-wow-delay="1.2s">
            <i class="iconfont icon-xiangmutixi"></i>
            <p>{{$t("message.SheJi")}}</p>
            <router-link :to="{path:'/Process',query:{id:'process3'}}">{{$t("message.GenDuo")}} »</router-link>
          </div>
          <div class="processStep processStepBg4 wow fadeIn" data-wow-delay="1.6s">
            <i class="iconfont icon-xiangmuzhouqi"></i>
            <p>{{$t("message.Dajian")}}</p>
            <router-link :to="{path:'/Process',query:{id:'process4'}}">{{$t("message.GenDuo")}} »</router-link>
          </div>
          <div class="processStep processStepBg5 wow fadeIn" data-wow-delay="2s">
            <i class="iconfont icon-shichangtuiguang"></i>
            <p>{{$t("message.QiDong")}}</p>
            <router-link :to="{path:'/Process',query:{id:'process5'}}">{{$t("message.GenDuo")}} »</router-link>
          </div>
          <div class="processStep processStepBg6 wow fadeIn" data-wow-delay="2.4s">
            <i class="iconfont icon-shujufenxi"></i>
            <p>{{$t("message.ZhiChi")}}</p>
            <router-link :to="{path:'/Process',query:{id:'process6'}}">{{$t("message.GenDuo")}} »</router-link>
          </div>
        </div>
        <div class="processBtn" @click="handleScroll('IdContactUs')">
          <span>{{$t("message.SuoQuBJ")}}</span><i class="iconfont icon-shuangjiantouyou"></i>
        </div>
      </div>
    </section>
<!--IT服務-->
    <section class="padBottom_100">
      <div class="Width1400">
        <div class="textCenter">
          <h1 class="h1Title col_254051">{{$t("message.ITFuWu")}}</h1>
        </div>
        <div class="serviceDiv">
          <div class="row rowCol3 rowCol2_sm rowCol1_xs">
            <div class="wow fadeInUp" data-wow-delay="0.2s">
              <div class="serviceSingle">
                <img src="../assets/img/itService1.png">
                <h3>{{$t("message.ZiLiaoBFHeBZ")}}</h3>
                <div class="text">
                  {{$t("message.ITFuWuText1")}}
                </div>
                <router-link :to="{path:'/ITArticle',query:{id:1}}">{{$t("message.ChaKanGD")}}</router-link>
              </div>
            </div>
            <div class="wow fadeInUp" data-wow-delay="0.4s">
              <div class="serviceSingle">
                <img src="../assets/img/itService2.png">
                <h3>{{$t("message.ZhuoMianWH")}}</h3>
                <div class="text">
                  {{$t("message.ITFuWuText2")}}
                </div>
                <router-link :to="{path:'/ITArticle',query:{id:2}}">{{$t("message.ChaKanGD")}}</router-link>
              </div>
            </div>
            <div class="wow fadeInUp" data-wow-delay="0.6s">
              <div class="serviceSingle">
                <img src="../assets/img/itService3.png">
                <h3>{{$t("message.DianNaoJSZC")}}</h3>
                <div class="text">
                  {{$t("message.ITFuWuText3")}}
                </div>
                <router-link :to="{path:'/ITArticle',query:{id:3}}">{{$t("message.ChaKanGD")}}</router-link>
              </div>
            </div>
            <div class="wow fadeInUp" data-wow-delay="0.8s">
              <div class="serviceSingle">
                <img src="../assets/img/itService4.png">
                <h3>{{$t("message.ITWeiHu")}}</h3>
                <div class="text">
                  {{$t("message.ITFuWuText4")}}
                </div>
                <router-link :to="{path:'/ITArticle',query:{id:4}}">{{$t("message.ChaKanGD")}}</router-link>
              </div>
            </div>
            <div class="wow fadeInUp" data-wow-delay="1s">
              <div class="serviceSingle">
                <img src="../assets/img/itService5.png">
                <h3>{{$t("message.WangLuoGL")}}</h3>
                <div class="text">
                  {{$t("message.ITFuWuText5")}}
                </div>
                <router-link :to="{path:'/ITArticle',query:{id:5}}">{{$t("message.ChaKanGD")}}</router-link>
              </div>
            </div>
            <div class="wow fadeInUp" data-wow-delay="1.2s">
              <div class="serviceSingle">
                <img src="../assets/img/itService6.png">
                <h3>{{$t("message.FuWuQiGL")}}</h3>
                <div class="text">
                  {{$t("message.ITFuWuText6")}}
                </div>
                <router-link :to="{path:'/ITArticle',query:{id:6}}">{{$t("message.ChaKanGD")}}</router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="textCenter">
          <div class="processBtn" @click="handleScroll('IdContactUs')">
            <span>{{$t("message.SuoQuBJ")}}</span><i class="iconfont icon-shuangjiantouyou"></i>
          </div>
        </div>
      </div>

    </section>
<!--開發案例-->
    <section class="">
      <div class="Width1400">
        <div class="textCenter">
          <h1 class="h1Title col_254051">{{$t("message.KaiFaAL")}}</h1>
        </div>
        <div class="projectBox">
          <div class="projectBoxItem">
            <div class="projectImgPc">
                <img src="../assets/img/case_pic2.png">
            </div>
            <div class="projectImgWeb">
              <img src="../assets/img/case_pic1.png">
            </div>
            <div class="projectBoxText">
              <div>
                <div class="rpTop">
                  <img src="../assets/img/logo_alpha.png">
                  <p class="rpTitle">Alpha Omega</p>
                </div>
                <div class="rpText">
                  <p>案例簡介案例簡介案例簡介案例簡介案例簡介案例簡介2</p>
                  <a href="#" target="_blank"><span>{{$t("message.ChaKan")}}</span><i class="iconfont icon-Right-"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="projectBoxItem">
            <div class="projectImgPc">
                <img src="../assets/img/case_pic4@1x.png">
            </div>
            <div class="projectImgWeb">
              <img src="../assets/img/case_pic3.png">
            </div>
            <div class="projectBoxText">
              <div>
                <div class="rpTop">
                  <img src="../assets/img/logo_baoxian.png">
                  <p class="rpTitle">德誠保險顧問</p>
                </div>
                <div class="rpText">
                  <p>案例簡介案例簡介案例簡介案例簡介案例簡介案例簡介2</p>
                  <a href="#" target="_blank"><span>{{$t("message.ChaKan")}}</span><i class="iconfont icon-Right-"></i></a>
                </div>
              </div>
            </div>
          </div>
           <div class="projectBoxItem">
            <div class="projectImgPc">
                <img src="../assets/img/case_pic3@1x.png">
            </div>
            <div class="projectImgWeb">
              <img src="../assets/img/case_web1.png">
            </div>
            <div class="projectBoxText">
              <div>
                <div class="rpTop">
                  <img src="../assets/img/logo_atli.png">
                  <p class="rpTitle">aTli</p>
                </div>
                <div class="rpText">
                  <p>案例簡介案例簡介案例簡介案例簡介案例簡介案例簡介2</p>
                  <a href="#" target="_blank"><span>{{$t("message.ChaKan")}}</span><i class="iconfont icon-Right-"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="projectBoxItem">
            <div class="projectImgPc">
                <img src="../assets/img/case_pic1@1x.png">
            </div>
            <div class="projectImgWeb">
              <img src="../assets/img/case_web1.png">
            </div>
            <div class="projectBoxText">
              <div>
                <div class="rpTop">
                  <img src="../assets/img/logo_minibox.png">
                  <p class="rpTitle">miniBox</p>
                </div>
                <div class="rpText">
                  <p>案例簡介案例簡介案例簡介案例簡介案例簡介案例簡介2</p>
                  <a href="#" target="_blank"><span>{{$t("message.ChaKan")}}</span><i class="iconfont icon-Right-"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
<!--索取报价-->
    <Offer></Offer>
<!--立即订阅-->
    <section class="subscriptionBg">
      <div class="Width1000">
        <div class="textCenter">
          <h1 class="h1Title col_FFF">{{$t("message.LiJiDY")}}</h1>
        </div>
        <div class="subscriptionDiv">
          <input type="text" :placeholder='$t("message.QSRDYEmail")' v-model="subscriptionInput">
          <p class="buttonIcon borderFFF" @click="getSubscription">
            <span>{{$t("message.DinYue")}}</span><i class="iconfont icon-Right-"></i>
          </p>
        </div>
      </div>
    </section>
<!--聯絡我們-->
    <section class="pad_100" id="IdContactUs">
      <div class="Width1400">
        <div class="textCenter">
          <h1 class="h1Title col_254051">{{$t("message.LianLuoWm")}}</h1>
        </div>
        <div class="contentBtnDiv">
          <div class="row rowCol3 rowCol1_xs">
            <div class="inputDiv">
              <input type="text" :placeholder='$t("message.QSRLianLuoRen")'>
            </div>
            <div class="inputDiv">
              <input type="text" :placeholder='$t("message.QSRDianYou")'>
            </div>
            <div class="inputDiv">
              <input type="text" :placeholder='$t("message.QSRDianHua")'>
            </div>
          </div>
          <div class="inputDiv connectTextarea">
            <textarea :placeholder='$t("message.LiuYan")'></textarea>
          </div>
        </div>
        <div class="textCenter">
          <div class="buttonIcon border_205085">
            <span>{{$t("message.TiJiao")}}</span><i class="iconfont icon-Right-"></i>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import {
  subscriptionService
} from "../common/api"

import $ from 'jquery'
window.jQuery = $
require('../assets/js/jquery.ripples.js')
import Swiper from 'swiper'
import {Pagination} from 'swiper'

import Offer from "../components/Offer"
export default {
  name: 'index',
  comments:{
    Pagination
  },
  components:{
    Offer
  },
  data () {
    return {
      subscriptionInput: "",
      // 打字机
      developContent: [
        this.$t("message.IndexKFText1"),
        this.$t("message.IndexKFText2"),
        this.$t("message.IndexKFText3"),
        this.$t("message.IndexKFText4")
      ],
      developText: "",
      isDevelopText: 0,
      timer: null,
      developTextIndex: 0
    }
  },
  created:function(){
    this.$nextTick(function () {
      this.galleryThumbsLunbo();
      this.galleryTopLunbo();
    });
    this.typewriter(this.developTextIndex)
  },
  mounted() {
    // 水波涟漪
    this.$nextTick(() => {
      $('#jqueryImg').ripples({
        resolution: 512,
        dropRadius: 50, //px
        perturbance: 0.01
      })
      setInterval(function() {
        const $el = $('#jqueryImg');
        const x = Math.random() * $el.outerWidth();
        const y = Math.random() * $el.outerHeight();
        const dropRadius = 20;
        const strength = 0.01 + Math.random() * 0.04;
        $el.ripples('drop', x, y, dropRadius, strength);
      }, 8000);
    })
  },
  methods: {
    // 缩略图轮播
    galleryTopLunbo() {
      const that =this
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
        on:{
          slideChange: function(){
            // console.log(this.activeIndex)
            if (this.activeIndex === that.developTextIndex){
              console.log("同一个")
            }else {
              clearInterval(that.timer)
              that.developTextIndex = this.activeIndex
              that.developText = ""
              that.isDevelopText = 0
              that.typewriter(this.activeIndex)
            }
          },
        },
      })
    },
    galleryThumbsLunbo() {
      this.galleryThumbs = new Swiper('.gallery_thumbs', {
        // spaceBetween: 0,
        // slidesPerView: 4,
        // allowTouchMove:false,
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
    // 索取報價
    handleScroll (id) {
      let element = document.getElementById(id);
	    element.scrollIntoView({
         behavior: "smooth"
      });
    },
    // 订阅
    getSubscription () {
      let that = this,
          verifyEmail =/^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
      if (that.subscriptionInput === '') {
        this.$tips({
					msg: "请输入电邮"
        });
        return
      }else if (!verifyEmail.test(that.subscriptionInput)){
        this.$tips({
					msg: "请输入正确格式电邮"
        });
        return
      }
      subscriptionService({
        "email": that.subscriptionInput
      }).then(res => {
        that.$tips({
					msg: "订阅成功"
        });
        that.subscriptionInput = ""
        // console.log(res)
      })
    }

  }
}
</script>

<style scoped>
@import "../assets/css/index.css";
.indexBannerDiv{
  background-image: url("../assets/img/indexBanner.png");
  min-height: 800px;
}
@media screen and (max-width:1300px){
  .indexBannerDiv{
    min-height: 600px;
  }
}
@media screen and (max-width:767px){
  .indexBannerDiv{
    min-height: 400px;
  }
}
</style>
