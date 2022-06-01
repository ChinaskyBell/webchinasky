<template>
  <div>
    <section class="">
      <img src="../assets/img/network_banner.png" class="bannerImg">
    </section>
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

            <div class="projectBoxItem" v-for="item in caseList" v-if="item.type === isActive || isActive === 0">
              <div class="projectImgPc">
                <img :src="item.bg_img">
              </div>
              <div class="projectImgWeb">
                <img :src="item.right_img">
              </div>
              <div class="projectBoxText">
                <div>
                  <div class="rpTop">
                    <img :src="item.logo_img">
                    <p class="rpTitle">{{ item.title }}</p>
                  </div>
                  <div class="rpText">
                    <p>{{ item.introduction }}</p>

                    <a :href="item.link" target="_blank" v-if="item.state === 0"><span>查看</span><i class="iconfont icon-Right-"></i></a>
                    <a href="javascript:;" @click="showModal(item.id)" v-if="item.state === 1"><span>{{$t("message.ChaKan")}}</span><i class="iconfont icon-Right-"></i></a>

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
  </div>
</template>

<script>
export default {
  name: 'Case',
  data() {
    return {
      isActive: 0,
      isCaseDiv: true,
      isCaseModal: false,
      caseList: []
    }
  },
  created:function () {
    this.getCaseList()
  },
  methods: {
    // 获取案例数据
    getCaseList() {
      let language = this.$store.state.languageName,
          that =this
      this.$http.get('static/json/'+language+'/case.json').then((response) => {
        if (response.status === 200) {
          let data = response.data.data
          that.caseList = data
          console.log(data)
        }else {
          console.log(response)
        }
      }, (err) => {
        console.log(err)
      })
    },
    // 案例分类
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
