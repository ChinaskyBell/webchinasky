<template>
  <div>
<!--内页banner-->
    <section class="">
      <img src="../assets/img/network_banner.png" class="bannerImg">
      <div class="bannerTit wow fadeInDown" data-wow-delay="0.5s">
        <strong>{{ title }}</strong>
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
  </div>
</template>
<script>
export default {
  name: 'ITArticle',
  data () {
    return {
      title: "",
      contents: "",
      image:"",
      titText:"",
      buttonText1:""
    }
  },
  created:function () {
    // console.log(this.$route.query.id)
    this.getArticle()
  },
  methods: {
    getArticle() {
      let language = this.$store.state.languageName
      this.$http.get('static/json/itArticle-'+language+'.json').then((response) => {
        if (response.status === 200) {
          let index = Number(this.$route.query.id) - 1,
            data = response.data.data[index]

          this.title = data.title
          this.contents = data.content
          this.image = data.image
          this.titText = data.titText
          this.buttonText1 = data.buttonText1
        }else {
          console.log(response)
        }
      }, (err) => {
        console.log(err)
      })
    }
  }
}
</script>
