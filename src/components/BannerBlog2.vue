<template>
      <section class="bannerBlog">
        <div class="bannerBlog__banner2">
            <div class="bannerBlog__banner__text">
                <h1 class="bannerBlog__banner__text__head">{{ bannerHeader }}</h1>
                <p class="bannerBlog__banner__text__par">{{ bannerText }}</p>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props:{
        bannerHeader:String,
        bannerText:String
    }
}
</script>
<style >
    .bannerBlog {
  margin-top: 45px;
}
.bannerBlog__banner2 {
  height: 356px;
  background: url(../assets/BannerImage.jpg) center no-repeat;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.bannerBlog__banner__text {
  display: flex;
  padding: 41px 78px;
  flex-direction: column;
  align-items: center;
  gap: 0px;
  border-radius: 37px 37px 0px 0px;
  background: #FFF;
}
.bannerBlog__banner__text__head {
  color: #292F36;
  font-family: DM Serif Display;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 62.5px */
  margin-bottom: 0px;
}
.bannerBlog__banner__text__par {
  color: #4D5053;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 33px */
  letter-spacing: 0.22px;
  margin-bottom: 0;
}
</style>