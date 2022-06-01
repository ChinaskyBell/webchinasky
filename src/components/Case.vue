<template>
  <section class="pad_100">
    <div class="Width1400">
      <div class="textCenter">
        <h1 class="h1Title col_254051">{{$t("message.caseTit")}}</h1>
      </div>
      <div class="classificationDiv">
        <ul>
          <li :class="isActive === 0 ?'active':''" @click="cluckCase(0)">{{$t("message.caseType1")}}</li>
          <li :class="isActive === 1 ?'active':''" @click="cluckCase(1)">{{$t("message.caseType2")}}</li>
          <li :class="isActive === 2 ?'active':''" @click="cluckCase(2)">APP</li>
          <li :class="isActive === 3 ?'active':''" @click="cluckCase(3)">{{$t("message.caseType4")}}</li>
          <li :class="isActive === 4 ?'active':''" @click="cluckCase(4)">{{$t("message.caseType5")}}</li>
        </ul>
      </div>
      <transition name="caseDiv"
      enter-active-class="animated fadeInRight"
      leave-active-class="animated fadeOutRight"
      >
        <div class="projectBox" v-if="isCaseDiv">
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
                  <a href="http://www.alpha-omegacapital.com/" target="_blank"><span>查看</span><i class="iconfont icon-Right-"></i></a>
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
                  <a href="javascript:;" @click="showModal(1)"><span>查看</span><i class="iconfont icon-Right-"></i></a>
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
                  <a href="javascript:;" @click="showModal(1)"><span>查看</span><i class="iconfont icon-Right-"></i></a>
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
                  <a href="javascript:;" @click="showModal(1)"><span>查看</span><i class="iconfont icon-Right-"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
      <div class="textCenter">
        <div class="processBtn">
          <router-link to="#">
            <span>加載更多</span><i class="iconfont icon-shuangjiantouyou"></i>
          </router-link>
        </div>
      </div>
    </div>
<!--彈窗-->

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
</template>

<script>
export default {
  name: 'Case',
  data() {
    return {
      isActive: 0,
      isCaseDiv: true,
      isCaseModal: false
    }
  },
  methods: {
    cluckCase(Type) {
      const that = this
      that.isActive = Type
      that.isCaseDiv = false
      setTimeout(function (){
        that.isCaseDiv = true
      },600)
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
  .classificationDiv ul li{
    display: inline-block;
    margin-right: 40px;
    cursor: pointer;
    font-size: 20px;
  }
  .classificationDiv ul li.active{
    color: #205085;
  }
  @media screen and (max-width:767px){
    .classificationDiv ul li{
      margin-right: 20px;
      font-size: 16px;
    }
  }
</style>
