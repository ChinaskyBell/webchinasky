<template>
  <div class="mianDiv">
<!-- 顶部标题 -->
    <section class="TopDivs">
      <div class="bgImgDiv"></div>
<!--      <div class="titleDiv">-->
<!--        <h1>关于我们</h1>-->
<!--        <ul>-->
<!--          <li>-->
<!--            <router-link to="/">首页</router-link>-->
<!--          </li>-->
<!--          <li>关于我们</li>-->
<!--        </ul>-->
<!--      </div>-->
    </section>
<!--    关于我们-->
    <section class="padTop_100">
      <div class="Width1400">
        <div class="aboutUsDiv disTable">
          <div class="aboutLeftDiv">
            <img src="../assets/img/aboutUs2.png">
            <div class="div1">
              <div class="spanline">
                <span class="span1"></span>
                <span class="span2"></span>
                <span class="span3"></span>
              </div>
              <strong>10</strong>
              <div>
                <h3>多年经验</h3>
                <p>YEARS OF EXPERIENCE </p>
              </div>
            </div>
          </div>
          <div class="aboutRightDiv">
            <div>
              <p class="h2Title h2TitleLeft">{{ $t("message.GuanYuWM") }}</p>
            </div>
            <div class="itemTitle">{{ $t("message.GuanYuWMText1") }}</div>
            <div class="spanText">
              {{ $t("message.GuanYuWMText2") }}
              <br><br>
              近年網絡行銷為企業提供了全新的商業機會，社交平台的相關程式和服務成為了各企業強大的工具。中天科技對每個項目由設計，開發及線上推廣，都掌握了全面相關的技術，更擁有強大的開發和市場推廣團隊，為客戶提供各類型的市場策略和對應的開發服務，用最合理的成本獲得更大的回報。
              <br><br>
              為配合大灣區和一帶一路發展，無論國內和國外的企業都需要進一步優化生意流程和成本，拓展商機。我們擁有中國及國外的網絡顧問經驗，能為客戶設計最合適的網絡營銷解決方案，讓客戶的業務獲得更大的成功。
            </div>
          </div>
        </div>
      </div>
    </section>
<!--    我們的使命-->
    <section class="padTop_100">
      <div class="Width1400">
        <div class="missionDiv disTable">
          <div class="missionLeftDiv">
            <div>
              <p class="h2Title h2TitleLeft">我們的使命</p>
            </div>
            <div class="spanText">
              我們的使命是不斷開創和改進我們的服務，以滿足並超越客戶的期望。我們提供專業及高質量的IT解決方案，為企業的戰略計劃奠定基礎，為企業的成功做出貢獻。
            </div>
            <ul>
              <li><i class="iconfont icon-gou1"></i><span>优质服务</span></li>
              <li><i class="iconfont icon-gou1"></i><span>高效及主动</span></li>
              <li><i class="iconfont icon-gou1"></i><span>一站式联系</span></li>
              <li><i class="iconfont icon-gou1"></i><span>尊重和诚信</span></li>
              <li><i class="iconfont icon-gou1"></i><span>团队合作</span></li>
            </ul>
          </div>
          <div class="missionRightDiv">
            <img src="../assets/img/aboutUs3.jpg">
          </div>
        </div>
      </div>
    </section>
<!--    为什么选择我们-->
    <section class="pad_100">
      <div class="Width1200">
        <div class="textCenter">
          <p class="h2Title h2TitleCenter">为什么选择我们</p>
        </div>
        <div class="ChooseDiv">
          <div class="rowHDiv">
            <div>
              <div class="divs">
                <i class="iconfont icon-jingyanzhi"></i>
                <p>经验丰富</p>
                <div>
                  我们有15年在不同行业为不同的客户提供不同的IT服务的经验。
                </div>
              </div>
            </div>
            <div>
              <div class="divs">
                <i class="iconfont icon-zhuanye"></i>
                <p>专业员工</p>
                <div>
                  我们的员工有丰富的经验提供优质的服务。我们非常重视员工的专业发展。
                </div>
              </div>
            </div>
            <div>
              <div class="divs">
                <i class="iconfont icon-jiagebiao"></i>
                <p>价格合理</p>
                <div>
                  最优惠旳价格享用个性化的服务。
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutUs'
}
</script>

<style scoped>
@import '../assets/css/aboutUs.css';
</style>
