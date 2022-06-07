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
<!--          <li :class="isActive === 4 ?'active':''" @click="cluckCase(4)">{{$t("message.caseType5")}}</li>-->
        </ul>
      </div>
      <transition name="caseDiv"
      enter-active-class="animated fadeInRight"
      leave-active-class="animated fadeOutRight"
      >
         <div class="projectBox" v-if="isCaseDiv">
            <div class="projectBoxItem" v-for="item in caseList"  @click="item.type === 2 ? showModal(item.id) : toLink(item.link)">

              <div class="projectBoxModal" v-if="item.type === 2">
                <input :ref="'modalTit'+item.id" :value="item.name">
                <textarea :ref="'modalText'+item.id" >{{item.content}}</textarea>
              </div>

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
<!--                    查看   type 0 无操作，1 链接，2 content-->
                    <a :href="item.link" target="_blank" v-if="item.type === 1"><span>{{$t("message.ChaKan")}}</span><i class="iconfont icon-Right-"></i></a>
                    <a href="javascript:;" @click="showModal(item.id)" v-if="item.type === 2"><span>{{$t("message.ChaKan")}}</span><i class="iconfont icon-Right-"></i></a>

                  </div>
                </div>
              </div>
            </div>
          </div>
      </transition>
      <div class="textCenter" v-show="isMoreBtn">
        <div class="processBtn">
          <router-link :to="{path:'/CaseList',query:{id:isActive}}">
            <span>{{$t("message.ChaKanGD")}}</span><i class="iconfont icon-shuangjiantouyou"></i>
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
                <strong>{{ modalTitle }}</strong>
                <div v-html="modalContent"></div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>

  </section>
</template>

<script>
import {
  casesService
} from "../common/api"
export default {
  name: 'Case',
  data() {
    return {
      isActive: 0,
      isCaseDiv: true,
      isCaseModal: false,
      caseList: [],
      isMoreBtn: false,
      modalTitle: "",
      modalContent: ""

    }
  },
  created:function () {
    this.getCaseList()
  },
  methods: {
    // 获取案例数据
    getCaseList() {
      let that =this
      casesService({
        "caseId": that.isActive
      }).then(res => {
        let data = res.data.cases
        that.caseList = data.data
        console.log(data)
        if (data.next_page_url != null){
          that.isMoreBtn = true
        }else {
          that.isMoreBtn = false
        }
      })
    },
    // 案例分类
    cluckCase(Type) {
      const that = this
      that.isActive = Type
      that.isCaseDiv = false
      that.caseList = []
      that.getCaseList()
      setTimeout(function (){
        that.isCaseDiv = true
      },600)
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
