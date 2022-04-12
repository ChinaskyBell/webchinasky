<template>
    <section class="">
      <div class="caseBg">
        <div class="Width1400">
          <div class="projectBtnBox">
            <p>準備好開始你的項目了嗎？</p>
            <button class="btn">索取報價</button>
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
  padding: 80px 0 120px;
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
    padding: 70px 0 100px;
  }
}
@media screen and (max-width:1023px){
  .projectBtnBox>p{
    margin-bottom: 25px;
    font-size: 32px;
  }
  .projectBtnBox{
    padding: 50px 0 70px;
  }
}
@media screen and (max-width:767px){
  .projectBtnBox>p{
    font-size: 24px;
    margin-bottom: 15px;
  }
  .projectBtnBox>button{
    font-size: 16px;
    padding: 8px 30px;
  }
  .projectBtnBox{
    padding: 20px 0 30px;
  }
}
</style>
