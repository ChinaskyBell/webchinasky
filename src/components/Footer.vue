<template>
  <footer>
    <div class="Width1400" style="overflow: initial">
      <div class="footDiv">
        <div class="div1">
          <img src="../assets/img/flogo.png" />
          <ul class="footIconDiv">
            <li @click="toLink(1,'https://www.facebook.com/chinaskynet')"><i class="iconfont icon-facebook"></i></li>
            <li>
              <i class="iconfont icon-weixin"></i>
              <div class="wechatCode">
                <img src="../assets/img/weixin.png"/>
              </div>
            </li>
            <li @click="toLink(1,'https://api.whatsapp.com/send?phone=85251750111')"><i class="iconfont icon-whatsapp1"></i></li>
          </ul>
        </div>
        <div class="footerConnect">
          <div>中天科技系統有限公司</div>
          <div>地址：荃灣海盛路11號One Midtown 15樓13A室</div>
          <div>E-mail: <span @click="toLink(2,'mailto:'+emailHk)">{{emailHk}}</span></div>
          <div class="phone"><span @click="toLink(2,'tel:(852)24902300')">(852) 2490-2300</span></div>
        </div>
        <div class="footerConnect">
          <div>中天動力系統(深圳)有限公司</div>
          <div>地址：深圳市羅湖區南湖街道春風路廬山大廈B棟5C</div>
          <div>E-mail: <span @click="toLink(2,'mailto:'+emailCn)">{{emailCn}}</span></div>
          <div class="phone"><span @click="toLink(2,'tel' + ':(0755)25100512')">(0755) 2510-0512</span></div>
        </div>
      </div>
      <p class="footCopy">Copyright © {{ dateYear }} China Sky Technology System Limited. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      dateYear: '',
      emailCn: 'info@chinaskynet.net.cn',
      emailHk: 'info@chinaskynet.net'
    }
  },
  created () {
    this.dateYear = new Date().getFullYear()
  },
  methods: {
    toLink (Type,Url) {
      if (Type === 1) {
        window.open(Url)
      } else {
        window.location.href = Url
      }
    }
  }
}
</script>

<style scoped>
/*footer*/
.footDiv{
  display: table;
  width: 100%;
  table-layout: fixed;
  padding: 70px 0 20px;
}
.footDiv>div >img{
  height: 70px;
}
.footDiv .div1>p{
  font-size: 24px;
}
.footCopy{
  font-size: 12px;
  color: #87898A;
  text-align: center;
  padding: 25px 0;
}
.footIconDiv{
  margin-top: 30px;
}
.footIconDiv li i{
  font-size: 25px;
  color: #FFFFFF;
}
.footIconDiv li{
  text-align: center;
  list-style: none;
  display: inline-block;
  margin-right: 10px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50%;
  background: #205085;
  position: relative;
}
.footIconDiv>li:nth-child(1){
  background: #3B5998;
  cursor: pointer;
}
.footIconDiv>li:nth-child(2){
  background: #2BA245;
}
.footIconDiv>li:nth-child(3){
  background: #4DC247;
  cursor: pointer;
}
.wechatCode{
  opacity: 0;
  position: absolute;
  bottom: 45px;
  box-shadow: 0 0 6px rgba(14,22,30,0.3);
  margin-left: -45px;
  padding: 5px;
  background: #fff;
  box-sizing: border-box;
  z-index: 5;
  border-radius: 3px;
  transition: 0.7s;
  transform: scale(0, 0);
  left: -1000px;
  width: 130px;
  height: 130px;
}
.wechatCode img{
  width: 100%;
  height: 100%;
}
.footIconDiv li:nth-child(2):hover .wechatCode{
  opacity: 1;
  left: auto;
  transform: scale(1, 1);
}
.footerConnect>div{
  font-size: 14px;
}
.footerConnect .phone{
  font-size: 24px;
}
@media screen and (max-width:1024px){
	.footDiv{
		display: block;
		padding: 20px 0;
	}
	.footDiv>.div1>img{
		display: none;
	}
	.footDiv>.div1{
		display: block;
		text-align: center;
		margin-bottom: 15px;
    width: 100%;
	}
}
@media screen and (max-width:767px){
	.footCopy{
		font-size: 11px;
		padding: 0 0 20px;
	}
  .footDiv .div1>p{
    font-size: 16px;
  }

  .footerConnect > div {
    font-size: 13px;
  }
  .footerConnect .phone {
    font-size: 16px;
  }
}
</style>
