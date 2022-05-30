<template>
  <div>
<!--内页banner-->
    <section class="">
      <img src="../assets/img/network_banner.png" class="bannerImg">
      <div class="bannerTit wow fadeInDown" data-wow-delay="0.5s">
        <strong>IT服務與支持</strong>
      </div>
    </section>
<!--數據備份及保護服務-->
    <section class="BgF2F5F6 pad_50">
      <div class="Width1400">
        <div class="MTableDiv">
          <div class="MLeftDiv">
            <div class="wow fadeInUp" data-wow-delay="0.15s">
              <router-link :to="{path:'/ITArticle',query:{id:1}}"><strong>資料備份和保護</strong></router-link>
              <p>我們知道數據對企業來說是非常重要的，約不想數據丟失，請使用我們的數據備份服務。</p>
            </div>
            <div class="wow fadeInUp" data-wow-delay="0.3s">
              <router-link :to="{path:'/ITArticle',query:{id:2}}"><strong>桌面維護</strong></router-link>
              <p>桌面維護是維持每個員工日常操作的必須服務，我們的團隊為客戶有問題時在30秒內提供技術支援。</p>
            </div>
            <div class="wow fadeInUp" data-wow-delay="0.45s">
              <router-link :to="{path:'/ITArticle',query:{id:3}}"><strong>電腦技術支援</strong></router-link>
              <p>我們的電腦技術支援服務包括找出問題、解決問題、維修及其它相關的保養服務。</p>
            </div>
            <div class="wow fadeInUp" data-wow-delay="0.6s">
              <router-link :to="{path:'/ITArticle',query:{id:4}}"><strong>IT維護</strong></router-link>
              <p>我們的網絡維護服務助你的電腦及周邊設備的軟、硬件能夠運作正常。客戶可以專注他們的業務。</p>
            </div>
            <div class="wow fadeInUp" data-wow-delay="0.75s">
              <router-link :to="{path:'/ITArticle',query:{id:5}}"><strong>網路管理</strong></router-link>
              <p>我們的網絡維護服務包括設置網絡架構、安全及技術支援。</p>
            </div>
            <div class="wow fadeInUp" data-wow-delay="0.9s">
              <router-link :to="{path:'/ITArticle',query:{id:6}}"><strong>伺服器管理</strong></router-link>
              <p>我們的服務器維護包括服務器設置、完成及軟件更新。確保你的服務器能夠保持正常維作。</p>
            </div>
          </div>
          <div class="MRightDiv">
            <img src="../assets/img/network_image1.png">
            <img src="../assets/img/network_image2.png">
          </div>
        </div>
      </div>
    </section>
<!--中天會幫助您为您的业务找到合适的IT解决方案-->
    <section class="pad_50">
      <div class="Width1400">
        <div class="textCenter">
          <h1 class="h1Title col_254051">中天會幫助您為您的業務找到合適的IT解決方案</h1>
        </div>
        <div class="MaintainDiv3">
          <div class="wow fadeInUp" data-wow-delay="0.15s">
            <p>1.IT管理服務</p>
            China Sky是一間IT服務提供商，我們為每個客戶制定他們所需的IT方案。我們的服務為客戶從備份到常規檢查，全程監察每個細節讓客戶可以專注他們的業務。
          </div>
          <div class="wow fadeInUp" data-wow-delay="0.3s">
            <p>2.項目型式的外包服務</p>
            我們明白部份客戶已經有技術同事可以處理日常出現的一般問題。當他們有一些大型項目要開展的時候，他們需要更專業的IT技術員提供協助。例如新服務器安裝及設置，設置O365及VPN方案等。我們的項目型外包服務正滿足這類客戶的需要。
          </div>
          <div class="wow fadeInUp" data-wow-delay="0.45s">
            <p>3.緊急IT服務</p>
            當你的網絡出現問題時，你需要一間專業的IT公司助你去解決問題。我們的緊急服務助你無論在任何時間即時解決問題。
          </div>
        </div>
      </div>
    </section>
<!--使用中天服務的好處-->
    <section class="BgF2F5F6 pad_50">
      <div class="Width1000">
        <div class="textCenter">
          <h1 class="h1Title col_254051">使用中天服務的好處</h1>
        </div>
        <div class="">
          <div class="separateUl separateUl3li">
            <ul>
              <li v-for="item in coreArr" class="wow fadeInUp" :data-wow-delay="item.time+'s'">
                <img :src="item.img">
                <p>{{ item.title }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img src="../assets/img/network_bg1.png" class="MaintainDiv4BgImg">
    </section>
    <Offer></Offer>
  </div>
</template>

<script>
import Offer from '../components/Offer'
export default {
  name: 'Maintain',
  data () {
    return {
      coreArr:[
        {"title":"我們了解你的業務並成為你們的成員。","img":"https://test41.chinaskynet.net/assets/image/Maintain1.png","time":0.15},
        {"title":"我們為每個客戶安排專屬的技術員，客戶有問題可直接與他們聯絡。","img":"https://test41.chinaskynet.net/assets/image/Maintain2.png","time":0.3},
        {"title":"我們提供訓練有素的技術團隊。","img":"https://test41.chinaskynet.net/assets/image/Maintain3.png","time":0.45},
        {"title":"我們為每個客戶制定他們專屬的IT方案。","img":"https://test41.chinaskynet.net/assets/image/Maintain4.png","time":0.6},
        {"title":"我們用客戶明白的語言去談技術。","img":"https://test41.chinaskynet.net/assets/image/Maintain5.png","time":0.75},
        {"title":"我們的合同沒有時間限制。可以隨時生效或取消","img":"https://test41.chinaskynet.net/assets/image/Maintain6.png","time":0.9}
      ]
    }
  },
  components:{
    Offer
  }
}
</script>

<style scoped>
@import "../assets/css/Maintain.css";
</style>
