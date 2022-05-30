<template>
    <section class="">
      <div class="caseBg">
        <div class="Width1400">
          <div class="projectBtnBox">
            <p>{{$t("message.SuoQuBJText")}}</p>
            <router-link to="/ContactUs" tag="button" class="btn">{{$t("message.SuoQuBJ")}}</router-link>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
name: "Offer"
}
</script>

<style scoped>
.caseBg {
  position: relative;
  background-color: #131f31;
  background-size: cover;
  background-image: url("../assets/img/home_bg4@1x.png");
}
.projectBtnBox{
  color: #FFFFFF;
  text-align: center;
  padding: 110px 0;
}
.projectBtnBox>p{
  font-size: 48px;
  margin-bottom: 40px;
}
.projectBtnBox>button{
  border: 1px solid #FFFFFF;
  color: #FFFFFF;
  padding: 10px 40px;
  box-sizing: border-box;
  font-size: 24px;
}
@media screen and (max-width:1390px){
  .projectBtnBox{
    padding: 100px 0;
  }
}
@media screen and (max-width:1023px){
  .projectBtnBox>p{
    margin-bottom: 25px;
    font-size: 32px;
  }
  .projectBtnBox{
    padding: 70px 0;
  }
}
@media screen and (max-width:767px){
  .projectBtnBox>p{
    font-size: 20px;
    margin-bottom: 15px;
  }
  .projectBtnBox>button{
    font-size: 14px;
    padding: 5px 20px;
  }
  .projectBtnBox{
    padding: 30px 0;
  }
}
</style>
