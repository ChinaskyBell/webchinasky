<template>
  <div class="mianDiv">
<!-- 顶部标题 -->
    <section class="">
      <img src="../assets/img/network_banner.png" class="bannerImg">
      <div class="bannerTit wow fadeInDown" data-wow-delay="0.5s">
        <strong>联络我们</strong>
      </div>
    </section>
<!--    联络我们-->
    <section class="pad_100">
      <div class="Width1200">
        <div class="disTable contactDiv">
          <div class="">
            <div class="footerConnect">
              <div>中天科技系统有限公司</div>
              <div>地址：荃湾海盛路11号One Midtown 15楼13A室</div>
              <div>E-mail: <span @click="toLink('mailto:'+emailHk)">{{ emailHk }}</span></div>
              <div class="phone"><span @click="toLink('tel:(852)24902300')">+852-24902300</span></div>
            </div>
            <div class="footerConnect">
              <div>中天动力系统(深圳)有限公司</div>
              <div>地址：深圳市罗湖区南湖街道春风路庐山大厦B栋5C</div>
              <div>E-mail: <span @click="toLink('mailto:'+emailCn)">{{ emailCn }}</span></div>
              <div class="phone"><span @click="toLink('tel' +':(0755)25100512')">+86-755-25100512</span></div>
            </div>
          </div>
          <div>
            <div class="contactInput">
              <div class="inputDiv">
                <input type="text" placeholder="聯絡人">
              </div>
              <div class="inputDiv">
                <input type="text" placeholder="電子郵件">
              </div>
              <div class="inputDiv">
                <input type="text" placeholder="電話號碼">
              </div>
              <div class="inputDiv">
                <textarea placeholder="留言"></textarea>
              </div>
            </div>
            <div class="textCenter">
              <div class="buttonIcon border_205085">
                <span>提交</span><i class="iconfont icon-Right-"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
<!--    地图-->
    <section>
      <div class="googleMap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.5936695248754!2d114.10767737979234!3d22.37254927203976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f8e5707631e1%3A0x2ef537658d4502e8!2sOne+Midtown%2C+11+Hoi+Shing+Rd%2C+Tsuen+Wan!5e0!3m2!1szh-CN!2shk!4v1547459323144"
          frameborder="0" style="width:100%; height:100%;" allowfullscreen></iframe>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactUs',
  data () {
    return {
      dateYear: '',
      emailCn: 'info@chinaskynet.net.cn',
      emailHk: 'info@chinaskynet.net'
    }
  },
  created () {
  },
  methods: {
    toLink (Url) {
      window.location.href = Url
    }
  }
}
</script>

<style scoped>
.contactDiv>div{
  display: table-cell;
  vertical-align: top;
  width: 50%;
}
.contactInput>.inputDiv:first-child{
  margin-top: 0;
}
.contactInput>.inputDiv{
  margin-top: 50px;
}
.googleMap{
  height: 450px;
  width: 100%;
  background: aliceblue;
}
.contactDiv .footerConnect:last-child{
  margin-top: 40px;
}
.footerConnect>div{
  font-size: 16px;
}
.footerConnect .phone{
  font-size: 28px;
}

@media screen and (max-width:1024px){
	.contactDiv>div{
    display: block;
    width: 100%;
  }
  .contactDiv .footerConnect:last-child{
    margin-top: 0px;
  }
  .contactDiv>div:first-child{
    margin-bottom: 50px;
  }
}
@media screen and (max-width:767px){
  .contactDiv>div:first-child{
    margin-bottom: 20px;
  }
  .contactInput>.inputDiv{
    margin-top: 20px;
  }
  .contactDiv .footerConnect:last-child{
    margin-top: 10px;
  }
  .footerConnect>div{
    font-size: 13px;
  }
  .footerConnect .phone {
    font-size: 20px;
  }
}
</style>
