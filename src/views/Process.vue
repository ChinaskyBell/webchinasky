<template>
  <div>
<!--内页banner-->
    <section class="processBanner">
      <img src="../assets/img/process.jpg" class="bannerImg">
      <div class="bannerTit wow fadeInDown" data-wow-delay="0.5s">
        <strong>開發流程</strong>
        <p>我們將如何去開發</p>
      </div>
    </section>

    <section class="padBottom_100">
      <div class="processBigDiv">
<!--        item-->
        <div class="clearfix processDivItem" id="process1">
          <div class="processImg">
            <img src="../assets/img/process1.png">
            <i class="iconfont icon-jiantou"></i>
          </div>
          <div class="processText">
            <div class="textItem">
              <div class="tit">
                <i class="iconfont icon-tounaofengbao"></i>
                <strong>註冊</strong>
              </div>
              <div class="text">
                首先，您需要註冊我們的服務。<a href="#">請保持聯繫</a>，以便我們可以詳談各種套餐，<a href="#">提供報價</a>，解答您可能提出的任何問題。註冊時，需要您支付 50% 的預付款，
                待網站上線時，再補齊剩餘款項。我們接受借記卡、信用卡或銀行轉帳。託管費用從您註冊時起算。
              </div>
            </div>
          </div>
        </div>
<!--        item-->
        <div class="clearfix processDivItem" id="process2">
          <div class="processImg">
            <img src="../assets/img/process2.jpg">
            <i class="iconfont icon-jiantou"></i>
          </div>
          <div class="processText">
            <div class="textItem">
              <div class="tit">
                <i class="iconfont icon-tuanduichengyuan"></i>
                <strong>調研</strong>
              </div>
              <div class="text">
                完成註冊後，我們會請您完成一份簡短的設計問卷。這樣，可以讓我們瞭解您的需求，之後我們可以研究其他同類公司的服務。同時，我們還關注當前的設計趨勢，
                從市場行銷的角度以及從其他強大的外部行業網站來看，我們掌握的知識是否能達到良好的效果。這個階段就是為了掌握您的需求，同時增強我們的設計和行銷經驗，進而為您的專案錦上添花。
              </div>
            </div>
          </div>
        </div>
<!--        item-->
        <div class="clearfix processDivItem" id="process3">
          <div class="processImg">
            <img src="../assets/img/process3.jpg">
            <i class="iconfont icon-jiantou"></i>
          </div>
          <div class="processText">
            <div class="textItem">
              <div class="tit">
                <i class="iconfont icon-xiangmutixi"></i>
                <strong>設計</strong>
              </div>
              <div class="text">
                您的網站設計師會創建一個設計供您審查，然後與您一起探討設計，直到您滿意簽字為止。我們會在您簽字前進行反復修訂，重要的是，只有在您準備好之後，我們才會開始搭建網站。
                請注意，一旦設計審批通過，專案便會進入搭建階段，如果需要更改設計，可能會產生額外費用。
              </div>
            </div>
          </div>
        </div>
<!--        item-->
        <div class="clearfix processDivItem" id="process4">
          <div class="processImg">
            <img src="../assets/img/process4.jpg">
            <i class="iconfont icon-jiantou"></i>
          </div>
          <div class="processText">
            <div class="textItem">
              <div class="tit">
                <i class="iconfont icon-xiangmuzhouqi"></i>
                <strong>搭建</strong>
              </div>
              <div class="text">
                設計方案商定後，便會開始搭建網站。具體包括採用商定的設計並對其進行編碼，以便能夠適用於所有不同的設備和螢幕尺寸。我們創建的每個網站都具有回應性（又稱為移動友好型網站）。
                在這個階段，還需要您提供各個頁面的文字內容，而對於電子商務網站，我們會向您展示如何對網站添加類別和產品。
              </div>
            </div>
          </div>
        </div>
<!--        item-->
        <div class="clearfix processDivItem" id="process5">
          <div class="processImg">
            <img src="../assets/img/process5.jpg">
            <i class="iconfont icon-jiantou"></i>
          </div>
          <div class="processText">
            <div class="textItem">
              <div class="tit">
                <i class="iconfont icon-shichangtuiguang"></i>
                <strong>啟動</strong>
              </div>
              <div class="text">
                網站準備完備後，就會上線。如果您有自己的功能變數名稱，那麼我們將通過不同的選項為您的專案推薦最佳的功能變數名稱配置。
                無論使用的是新功能變數名稱還是現有功能變數名稱，我們都會告知 Google 對網站進行重新索引，指向您的受眾對象。
              </div>
            </div>
          </div>
        </div>
<!--        item-->
        <div class="clearfix processDivItem" id="process6">
          <div class="processImg">
            <img src="../assets/img/process6.jpg">
            <i class="iconfont icon-jiantou"></i>
          </div>
          <div class="processText">
            <div class="textItem">
              <div class="tit">
                <i class="iconfont icon-shujufenxi"></i>
                <strong>支持</strong>
              </div>
              <div class="text">
                網站上線後，我們的工作還在繼續。對於很多客戶來說，這才是我們服務的開始！我們會根據您的需要，繼續提供支援，如果您需要任何不能或不想通過 CMS 進行的更新，
                我們會為您執行，而這一支援服務將按小時收費。我們還提供 SEO（搜尋引擎優化）服務，提高您在 Google 約定短語中的排名。隨著您的業務發展或變化，我們會在您需要時為您提供貼身服務。
              </div>
            </div>
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
export default {
  name: 'Process',
  components:{
    Offer
  },
  created() {
    let that = this
    if (this.$route.query.id){
      setTimeout(function (){
        that.clickNum()
      },1000)
    }
  },
  methods: {
    clickNum (){
      let id = '#'+this.$route.query.id
      // console.log(id)
      document.querySelector(id).scrollIntoView({
         behavior: "smooth"
      });
    }
  }
}
</script>

<style scoped>
@import "../assets/css/process.css";
</style>
