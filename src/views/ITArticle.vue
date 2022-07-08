<template>
  <div>
<!--内页banner-->
    <section>
      <img src="../assets/img/network_banner.jpg" class="bannerImg">
      <div class="bannerTit">
        <div class="wow fadeInDown" data-wow-delay="0.5s">
          <strong>{{ title }}</strong>
        </div>
      </div>
    </section>

    <section class="pad_50">
      <div class="Width1000">
        <div class="itArtcleText">
          <img :src="image">
          <div class="titText">{{titText}}</div>
          <div class="button">
            <router-link to="/ContactUs" target="_blank">{{ buttonText1 }}</router-link>
          </div>
<!--          富文本内容-->
          <div class="articleText" v-html="contents"></div>

          <div class="button">
            <router-link to="/ContactUs" target="_blank">{{$t("message.LianXiWM")}}</router-link>
          </div>

        </div>
      </div>
    </section>
     <!--索取报价-->
    <Offer></Offer>
  </div>
</template>
<script>
import Offer from "../components/Offer"
import {
  itArticleService
} from '../common/api'
export default {
  name: 'ITArticle',
  data () {
    return {
      title: "",
      contents: "",
      image:"",
      titText:"",
      buttonText1:"",
      itArticleJson: Object.freeze([
        {"title": this.$t("message.ZiLiaoBFHeBZ"),"image": this.$store.state.UrlApi + "image/ITArticle1.jpg","titText": this.$t("message.ITFuWuText1"),"buttonText1": this.$t("message.itArticleBtn1")},
        {"title": this.$t("message.ZhuoMianWH"),"image": this.$store.state.UrlApi + "image/ITArticle2.jpg","titText": this.$t("message.ITFuWuText2"),"buttonText1": this.$t("message.itArticleBtn2")},
        {"title": this.$t("message.DianNaoJSZC"),"image": this.$store.state.UrlApi + "image/ITArticle3.jpg","titText": this.$t("message.ITFuWuText3"),"buttonText1": this.$t("message.itArticleBtn3")},
        {"title": this.$t("message.ITWeiHu"),"image": this.$store.state.UrlApi + "image/ITArticle4.jpg","titText": this.$t("message.ITFuWuText4"),"buttonText1": this.$t("message.itArticleBtn4")},
        {"title": this.$t("message.WangLuoGL"),"image": this.$store.state.UrlApi + "image/ITArticle5.jpg","titText": this.$t("message.ITFuWuText5"),"buttonText1": this.$t("message.itArticleBtn5")},
        {"title": this.$t("message.FuWuQiGL"),"image": this.$store.state.UrlApi + "image/ITArticle6.jpg","titText": this.$t("message.ITFuWuText6"),"buttonText1": this.$t("message.itArticleBtn6")}
      ])

    }
  },
  components:{
    Offer
  },
  created:function () {
    // console.log(this.$route.query.id)
    this.getArticleText()
  },
  methods: {
    getArticleText() {
      itArticleService({
        Id:this.$route.query.id
      }).then(res => {
        // 接口内容
        let data = res.data
        this.contents = Object.freeze(data.content)
        // 静态内容
        let index = Number(this.$route.query.id) - 1,
          Json = this.itArticleJson[index]
        this.title = Json.title
        this.image = Json.image
        this.titText = Json.titText
        this.buttonText1 = Json.buttonText1
      })
    }
  },
  watch: {
    $route(to,from){
      location.reload()
    }
  }
}
</script>
