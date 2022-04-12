<template>
  <div style="padding: 200px 0">
    <button @click="attack">開始</button>
    <div>{{showWord}}</div>
  </div>
</template>

<script>
export default {
  name:'Test',
  data() {
    return {
      timer: null,
      showWord: "",
      content: '中天科技系統有限公司，於2004年在香港成立，同年於深圳開設分公司。我們一直為香港和內地的企業提供IT外包服務：包括固定檢查、網路管理、網路安全、VPN解決方案等。由於我們於中港均有專業的技術人員，所以不論客戶於香港或內地遇上IT問題都可以提供最即時和合適的支援。'
    }
  },
  methods: {
    attack: function () {
      let that =this
      let index=0
      that.timer=setInterval(function(){
        that.showWord = that.content.substring(0,index++);
        // console.log(that.content.length === index)
        if (that.content.length+1 === index){
          clearInterval(that.timer)
        }
      },15);
    }
  }
}
</script>

