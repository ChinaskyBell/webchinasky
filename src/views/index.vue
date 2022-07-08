<template>
  <div class="ui-content">
    <remote-js src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"></remote-js>

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
                <div class="thumbsImg" v-if="isAppHide">
                  <img src="../assets/img/home_development_pic1@1x.jpg" alt="development service">
                </div>
                <div class="thumbsText">
                  <div>
                    <div class="run_txt">
                      <pre>{{developText}}</pre>
                    </div>
                    <div @click="swiperLink('/Website')" class="run_btn">
                      <span>{{ $t("message.CKWZFWXQ") }}</span>
                      <i class="iconfont icon-Right-"></i>
                    </div>
                  </div>
                </div>
                <div class="thumbsBg">
                  <div></div>
                  <img src="../assets/img/bg_icon_web01.png" alt="development service"/>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="gallery_thumbsBox">
                <div class="thumbsImg" v-if="isAppHide">
                  <img src="../assets/img/home_development_pic2@1x.jpg" alt="development service">
                </div>
                <div class="thumbsText">
                  <div>
                    <div class="run_txt">
                      <pre>{{developText}}</pre>
                    </div>
                    <div @click="swiperLink('/App')" class="run_btn">
                      <span>{{ $t("message.CKWZFWXQ") }}</span>
                      <i class="iconfont icon-Right-"></i>
                    </div>
                  </div>
                </div>
                <div class="thumbsBg">
                  <div></div>
                  <img src="../assets/img/bg_icon_app01.png" alt="development service" />
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="gallery_thumbsBox">
                <div class="thumbsImg" v-if="isAppHide">
                  <img src="../assets/img/home_development_pic3@1x.jpg" alt="development service" />
                </div>
                <div class="thumbsText">
                  <div>
                    <div class="run_txt">
                      <pre>{{developText}}</pre>
                    </div>
                    <div @click="swiperLink('/WeChat')" class="run_btn">
                      <span>{{ $t("message.CKWZFWXQ") }}</span>
                      <i class="iconfont icon-Right-"></i>
                    </div>
                  </div>
                </div>
                <div class="thumbsBg">
                  <div></div>
                  <img src="../assets/img/bg_icon_wechat01.png" alt="development service" />
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="gallery_thumbsBox">
                <div class="thumbsImg" v-if="isAppHide">
                  <img src="../assets/img/home_development_pic4@1x.jpg" alt="development service"/>
                </div>
                <div class="thumbsText">
                  <div>
                    <div class="run_txt">
                      <pre>{{developText}}</pre>
                    </div>
                    <div @click="swiperLink('/Software')" class="run_btn">
                      <span>{{ $t("message.CKWZFWXQ") }}</span>
                      <i class="iconfont icon-Right-"></i>
                    </div>
                  </div>
                </div>
                <div class="thumbsBg">
                  <div></div>
                  <img src="../assets/img/bg_icon_software01.png" alt="development service" />
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
            <router-link to="/Process/1">{{$t("message.GenDuo")}} »</router-link>
          </div>
          <div class="processStep processStepBg2 wow fadeIn" data-wow-delay="0.8s">
            <i class="iconfont icon-tuanduichengyuan"></i>
            <p>{{$t("message.DiaoYan")}}</p>
            <router-link to="/Process/2">{{$t("message.GenDuo")}} »</router-link>
          </div>
          <div class="processStep processStepBg3 wow fadeIn" data-wow-delay="1.2s">
            <i class="iconfont icon-xiangmutixi"></i>
            <p>{{$t("message.SheJi")}}</p>
            <router-link to="/Process/3">{{$t("message.GenDuo")}} »</router-link>
          </div>
          <div class="processStep processStepBg4 wow fadeIn" data-wow-delay="1.6s">
            <i class="iconfont icon-xiangmuzhouqi"></i>
            <p>{{$t("message.Dajian")}}</p>
            <router-link to="/Process/4">{{$t("message.GenDuo")}} »</router-link>
          </div>
          <div class="processStep processStepBg5 wow fadeIn" data-wow-delay="2s">
            <i class="iconfont icon-shichangtuiguang"></i>
            <p>{{$t("message.QiDong")}}</p>
            <router-link to="/Process/5">{{$t("message.GenDuo")}} »</router-link>
          </div>
          <div class="processStep processStepBg6 wow fadeIn" data-wow-delay="2.4s">
            <i class="iconfont icon-shujufenxi"></i>
            <p>{{$t("message.ZhiChi")}}</p>
            <router-link to="/Process/6">{{$t("message.GenDuo")}} »</router-link>
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
            <div class="wow fadeInUp" v-for="(item,i) in ITServiceArr" :key="i" :data-wow-delay="item.time+'s'">
              <div class="serviceSingle">
                <img v-lazy="item.img" alt="IT service" />
                <h3>{{ item.title }}</h3>
                <div class="text">
                  {{ item.content }}
                </div>
                <router-link :to="{path:'/ITArticle',query:{id:i+1}}">{{$t("message.ChaKanGD")}}</router-link>
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
          <div class="projectBoxItem" v-for="(item,i) in caseList"  @click="item.type === 2 ? showModal(item.id) : toLink(item.link)" :key="i">

            <div class="projectBoxModal" v-if="item.type === 2">
              <input :ref="'modalTit'+item.id" :value="item.name">
              <textarea :ref="'modalText'+item.id">{{item.content}}</textarea>
            </div>

            <div class="projectImgPc">
              <img v-lazy="item.host_image" :alt="item.name" />
            </div>
            <div class="projectImgWeb" v-if="isAppHide">
              <img v-lazy="item.vice_image" :alt="item.name"/>
            </div>
            <div class="projectBoxText">
              <div>
                <div class="rpTop">
                  <img v-lazy="item.logo_image" :alt="item.name" />
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
            <router-link to="/CaseList">
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
                  <strong>{{ modalTitle }}</strong>
                  <div v-html="modalContent"></div>
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
      <div class="Width1000" v-if="dinYueDiv">
        <div class="textCenter">
          <h1 class="h1Title col_FFF">{{$t("message.LiJiDY")}}</h1>
        </div>
        <div class="subscriptionDiv">
          <div class="subscriptionInputDiv">
            <input type="text" :placeholder='$t("message.QSRDYEmail")' v-model="subscriptionInput">
            <p>{{DinYueTips}}</p>
          </div>
          <p class="buttonIcon borderFFF" @click="getSubscription">
            <span>{{$t("message.DinYue")}}</span><i class="iconfont icon-Right-"></i>
          </p>
        </div>
      </div>
      <div class="Width1000" v-else>
        <div class="textCenter subscriptionSuccess">
          <p>{{$t("message.DinYueSuccess1")}}</p>
          <p>{{$t("message.DinYueSuccess2")}}</p>
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
                <input type="text" :placeholder='$t("message.LianLuoRen")' v-model="aboutName" @blur="blurName">
                <p>{{name}}</p>
              </div>
              <div class="inputDiv">
                <input type="text" :placeholder='$t("message.DianYou")' v-model="aboutEmail" @blur="blurEmail">
                <p>{{email}}</p>
              </div>
              <div class="inputDiv">
                <input type="text" :placeholder='$t("message.DianHua")' v-model="aboutPhone" oninput="value=value.replace(/[^\d]/g, '')" @blur="blurPhone">
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

      <!--彈窗-->
      <div class="modalBigDiv">
        <transition name="codeModal"
        enter-active-class="animated fadeInDown"
        leave-active-class="animated fadeOutDown"
        >
          <div class="modalBgDiv" v-if="isCodeModal">
            <div class="modalCenterDiv">
              <div class="modalContact">
                <p class="modalClose" @click="modalClose2()"><i class="iconfont icon-cha"></i></p>
                <div>
                  <slide-verify :l="42"
                    :r="10"
                    :w="310"
                    :h="155"
                    :slider-text='$t("message.codeText")'
                    @success="onSuccess"
                  ></slide-verify>
                </div>
              </div>
            </div>
          </div>
        </transition>
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
require('../assets/js/jquery.ripples.js')

import Swiper from 'swiper'
import {Pagination} from 'swiper'

import calcTextareaHeight from '../assets/js/calcTextareaHeight'

export default {
  name: 'index',
  comments:{
    Pagination
  },
  components:{
    'Offer': () => import("../components/Offer"),
    'remote-js': {
      render(createElement) {
        return createElement('script', {attrs: {type: 'text/javascript', src: this.src, ref: 'preconnet'}});
      },
      props: {
        src: {type: String, required: true},
      },
    }
  },
  props:['isAppHide'],
  data () {
    return {
      subscriptionInput: "",
      // 打字机
      developContent: Object.freeze([
        this.$t("message.IndexKFText1"),
        this.$t("message.IndexKFText2"),
        this.$t("message.IndexKFText3"),
        this.$t("message.IndexKFText4")
      ]),
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
      isCaseModal: false,
      modalTitle: "",
      modalContent: "",
      // 驗證
      isCodeModal:false,
      // 订阅
      DinYueTips: '',
      dinYueDiv: true,
      ITServiceArr: Object.freeze([
        {"title":this.$t("message.ZiLiaoBFHeBZ"),"content":this.$t("message.ITFuWuText1"),"img": require("../assets/img/itService1.png"),"time":0.15},
        {"title":this.$t("message.ZhuoMianWH"),"content":this.$t("message.ITFuWuText2"),"img": require("../assets/img/itService2.png"),"time":0.3},
        {"title":this.$t("message.DianNaoJSZC"),"content":this.$t("message.ITFuWuText3"),"img": require("../assets/img/itService3.png"),"time":0.45},
        {"title":this.$t("message.ITWeiHu"),"content":this.$t("message.ITFuWuText4"),"img": require("../assets/img/itService4.png"),"time":0.6},
        {"title":this.$t("message.WangLuoGL"),"content":this.$t("message.ITFuWuText5"),"img": require("../assets/img/itService5.png"),"time":0.75},
        {"title":this.$t("message.FuWuQiGL"),"content":this.$t("message.ITFuWuText6"),"img": require("../assets/img/itService6.png"),"time":0.9}
      ])
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
    if (!this.isAppHide){
      return false
    }else {
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
    }
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
            if (this.activeIndex === that.developTextIndex){
              return false
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
    swiperLink (Link) {
      this.$router.push(Link)
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
        this.DinYueTips = this.$t("message.QSRZQGSDianYou")
        return
      }
      subscriptionService({
        "email": that.subscriptionInput
      }).then(res => {
        if (res.code === 200){
          this.dinYueDiv = false
        }else if (res.code === 1000){
          this.DinYueTips = this.$t("message.YiDinYue")
        }else {
          this.DinYueTips = res.message
        }
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
      that.isCodeModal = true
    },
    onSuccess() {
      let that = this
      contentService({
        "name": that.aboutName,
        "email": that.aboutEmail,
        "tel": that.aboutPhone,
        "message": that.aboutMessage
      }).then(res => {
        that.isCodeModal = false
        if (res.code === 200){
          that.aboutName = that.aboutEmail = that.aboutPhone = that.aboutMessage = ""
          that.$tips({
            msg: that.$t("message.TiJiaoCG")
          })
        }else {
          that.$tips({
            msg: that.$t("message.Error")
          })
        }
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
    modalClose2() {
      this.isCodeModal = false
    },
    // 随机案例
    getCaseList() {
      randomCasesService({
      }).then(res => {
        this.caseList = Object.freeze(res.data)
      })
    },
    modalClose() {
      this.isCaseModal = false
    },
    showModal(Id) {
      this.isCaseModal = true
      this.modalTitle = this.$refs[`modalTit${Id}`][0].value
      this.modalContent = this.$refs[`modalText${Id}`][0].value
    },
    toLink (Url){
      if (Url != null){
        window.open(Url,'_blank');
      }
    }
  }
}
</script>

<style scoped>
/*@import "../assets/css/index.css";*/
@media screen and (min-width:768px){
  .indexBannerDiv{
    background-image: url("../assets/img/indexBanner.jpg");
  }
}
.indexBannerDiv{
  min-height: 660px;
}
@media screen and (max-width:1300px){
  .indexBannerDiv{
    min-height: 600px;
  }
}
@media screen and (max-width:767px){
  .indexBannerDiv{
    background-image: url("../assets/img/process_pic5.jpg");
    min-height: 400px;
  }
}
</style>
