<template>
  <div>
    <section class="">
      <img src="../assets/img/hero-header-bg.png" class="bannerImg">
      <div class="bannerTit wow fadeInDown" data-wow-delay="0.5s">
        <strong>{{$t("message.caselistTit")}}</strong>
      </div>
    </section>
    <!--案例-->
    <Case></Case>
  </div>
</template>

<script>
import Case from '../components/Case'
export default {
  name: 'CaseList',
  components:{
    Case
  },
  data() {
    return {
    }
  }
}
</script>
