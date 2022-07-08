<template>
  <div>
    <section class="">
      <img src="../assets/img/hero-header-bg.jpg" class="bannerImg">
      <div class="bannerTit">
        <div class="wow fadeInDown" data-wow-delay="0.5s">
          <strong>{{$t("message.caselistTit")}}</strong>
        </div>
      </div>
    </section>
    <!--案例-->
    <Case></Case>
    <!--訂閱-->
    <Offer></Offer>
  </div>
</template>

<script>
import Case from '../components/Case'
import Offer from "../components/Offer"
export default {
  name: 'CaseList',
  components:{
    Case,
    Offer
  },
  data() {
    return {
    }
  }
}
</script>
