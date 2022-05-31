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
        <div class="">
          <img src="../assets/img/ITArticle1.jpg">
<!--          富文本内容-->
          <div class="articleText" v-html="contents">
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
      contents: ""
    }
  },
  created:function () {
    // console.log(this.$route.query.id)
    this.getArticle()
  },
  methods: {
    getArticle() {
      let language = this.$store.state.languageName
      this.$http.get('static/json/'+language+'/itArticle.json').then((response) => {
      if (response.status === 200) {
        let data = response.data.data,
            index = this.$route.query.id - 1
        this.title = data[index].title
        this.contents = data[index].content
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
