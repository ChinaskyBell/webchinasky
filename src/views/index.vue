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
    <section class="padBottom_100">
      <div class="Width1400">
        <div class="textCenter">
          <h1 class="h1Title col_254051">{{$t("message.KaiFaAL")}}</h1>
        </div>
        <div class="projectBox">
          <div class="projectBoxItem" v-for="item in caseList">
            <div class="projectImgPc">
              <img :src="item.host_image">
            </div>
            <div class="projectImgWeb">
              <img :src="item.vice_image">
            </div>
            <div class="projectBoxText">
              <div>
                <div class="rpTop">
                  <img :src="item.logo_image">
                  <p class="rpTitle">{{ item.name }}</p>
                </div>
                <div class="rpText">
                  <p>{{ item.description }}</p>
                  <!--                    查看-->
                  <a :href="item.link" target="_blank" v-if="item.type === 1"><span>{{ $t("message.ChaKan") }}</span><i
                    class="iconfont icon-Right-"></i></a>
                  <a href="javascript:;" @click="showModal(item.id)"
                     v-if="item.type === 2"><span>{{ $t("message.ChaKan") }}</span><i class="iconfont icon-Right-"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="textCenter">
          <div class="processBtn">
            <router-link :to="{path:'/CaseList',query:{id:0}}">
              <span>{{$t("message.ChaKanGD")}}</span><i class="iconfont icon-shuangjiantouyou"></i>
            </router-link>
          </div>
        </div>
      </div>
<!--      弹窗-->
      <div class="modalBigDiv">
        <transition name="caseModal"
        enter-active-class="animated fadeInDown"
        leave-active-class="animated fadeOutDown"
        >
          <div class="modalBgDiv" v-if="isCaseModal">
            <div class="modalTextDiv">
              <div class="modalCase">
                <p class="modalClose" @click="modalClose"><i class="iconfont icon-cha"></i></p>
                <div class="modalCaseText">
                  <strong>補習社</strong>
                  <div>
                    一個24小時線上學習平台，24X7即時真人學習輔導，主要功能幫助學生即時核對功課，同時含有老師、學生、家長三個不同角色版本，更有線上練習，一鍵到家等服務，做學生的貼心助手。
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
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
                <input type="text" :placeholder='$t("message.QSRLianLuoRen")' v-model="aboutName" @blur="blurName">
                <p>{{name}}</p>
              </div>
              <div class="inputDiv">
                <input type="text" :placeholder='$t("message.QSRDianYou")' v-model="aboutEmail" @blur="blurEmail">
                <p>{{email}}</p>
              </div>
              <div class="inputDiv">
                <input type="text" :placeholder='$t("message.QSRDianHua")' v-model="aboutPhone" oninput="value=value.replace(/[^\d]/g, '')" @blur="blurPhone">
                <p>{{tel}}</p>
              </div>
          </div>
          <div class="inputDiv connectTextarea">
            <textarea :placeholder='$t("message.LiuYan")' ref="textarea" :style="{'height': textAreaH}" v-model="aboutMessage"></textarea>
          </div>
        </div>
        <div class="textCenter">
          <div class="buttonIcon border_205085" @click="aboutSubmit">
            <span>{{$t("message.TiJiao")}}</span><i class="iconfont icon-Right-"></i>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import {
  subscriptionService,
  contentService,
  randomCasesService
} from "../common/api"

import $ from 'jquery'
window.jQuery = $
require('../assets/js/jquery.ripples.js')
import Swiper from 'swiper'
import {Pagination} from 'swiper'
import calcTextareaHeight from '../assets/js/calcTextareaHeight'
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
      developTextIndex: 0,
      // 联络我们
      textAreaH: '50px',
      aboutName: '',
      aboutEmail: '',
      aboutPhone: '',
      aboutMessage: '',
      //提示语
      name: '',
      email: '',
      tel: '',
      // 随机案例
      caseList: [],
      isCaseModal: false
    }
  },
  created:function(){
    this.$nextTick(function () {
      this.galleryThumbsLunbo();
      this.galleryTopLunbo();
    });
    this.typewriter(this.developTextIndex)
    // 案例
    this.getCaseList()
  },
  watch: {
    aboutMessage() {
      this.getHeight();
    }
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
					msg: that.$t("message.QSRDianYou")
        });
        return
      }else if (!verifyEmail.test(that.subscriptionInput)){
        this.$tips({
					msg: this.$t("message.QSRZQGSDianYou")
        });
        return
      }
      subscriptionService({
        "email": that.subscriptionInput
      }).then(res => {
        that.$tips({
					msg: this.$t("message.DinYueCG")
        });
        that.subscriptionInput = ""
        // console.log(res)
      })
    },
    getHeight() {
      this.textAreaH = calcTextareaHeight(this.$refs.textarea, 3, 8).height;
    },
    aboutSubmit () {
      let that = this
      if (that.aboutName === ""){
        this.$tips({
					msg:  that.$t("message.QSRLianLuoRen")
        });
        return
      }

      if (this.aboutEmail === ""){
        this.$tips({
					msg: that.$t("message.QSRDianYou")
        });
        return
      }

      if (this.aboutPhone === ""){
        this.$tips({
					msg: that.$t("message.QSRDianHua")
        });
        return
      }

      contentService({
        "name": that.aboutName,
        "email": that.aboutEmail,
        "tel": that.aboutPhone,
        "message": that.aboutMessage
      }).then(res => {
        that.$tips({
					msg: that.$t("message.TiJiaoCG")
        });
        // window.location.reload()
        that.aboutName = that.aboutEmail = that.aboutPhone = that.aboutMessage = ""
      })

    },
    blurName (){
      if (this.aboutName === ""){
        this.name = this.$t("message.QSRLianLuoRen")
      }else {
        this.name = ""
      }
    },
    blurPhone() {
      if (this.aboutPhone === ""){
        this.tel = this.$t("message.QSRDianHua")
      }else {
        this.tel = ""
      }
    },
    blurEmail (){
      let verifyEmail =/^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
      if (this.aboutEmail === ""){
        this.email = this.$t("message.QSRDianYou")
      }else if (!verifyEmail.test(this.aboutEmail)){
        this.email = this.$t("message.QSRZQGSDianYou")
      }else {
        this.email = ""
      }
    },
    // 随机案例
    getCaseList() {
      randomCasesService({
      }).then(res => {
        this.caseList = res.data
      })
    },
    modalClose() {
      this.isCaseModal = false
    },
    showModal(Id) {
      this.isCaseModal = true
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
