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
          <div>{{$t("message.GongSiHK")}}</div>
          <div>{{$t("message.DiZhiHK")}}</div>
          <div>E-mail: <span @click="toLink(2,'mailto:'+emailHk)">{{emailHk}}</span></div>
          <div class="phone"><span @click="toLink(2,'tel:(852)24902300')">(852) 2490-2300</span></div>
        </div>
        <div class="footerConnect">
          <div>{{$t("message.GongSiSZ")}}</div>
          <div>{{$t("message.DiZhiSZ")}}</div>
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
.footerConnect>div{
  font-size: 14px;
}
.footerConnect .phone{
  font-size: 24px;
}

.footDiv>div{
  display: table-cell;
  box-sizing: border-box;
  vertical-align: top;
}
.footerConnect>div{
  padding: 5px 0;
  color: #87898A;
}
.footerConnect span{
  color: #205085;
  cursor: pointer;
}
.footerConnect .phone{
  font-weight: bold;
  margin-top: 20px;
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
  div.footerConnect{
		display: inline-block;
		width: 49%;
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

  div.footerConnect,.footDiv>.div1{
    display: block;
    width: 100%;
    margin-top: 10px;
    text-align: center;
  }
  .footerConnect > div {
    padding: 0;
  }
  .footerConnect .phone {
    margin-top: 10px;
  }
}
</style>
