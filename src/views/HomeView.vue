<template>
  <div class="home">
    <HeaderComp />
    <div class="banner center">
      <div class="banner__element">
        <div class="banner__element__intro">
          <h1 class="banner__element__intro__head">Let Your Home Be Unique</h1>
          <p class="banner__element__intro__paragraph">There are many variations of the passages of lorem Ipsum
            fromavailable, majority.</p>
          <button class="banner__element__intro__button">
            <p class="banner__element__intro__button__text">Get Started</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
              <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887" stroke="#CDA274"
                stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <FollowOurProjects />
    <div class="counter center">
      <div class="counter__content">
        <div class="counter__item">
          <div class="counter__item__number">12</div>
          <div class="counter__item__text">Years Of Experiance</div>
        </div>
        <div class="counter__line"></div>
        <div class="counter__item">
          <div class="counter__item__number">85</div>
          <div class="counter__item__text">Success Project</div>
        </div>
        <div class="counter__line"></div>
        <div class="counter__item">
          <div class="counter__item__number">15</div>
          <div class="counter__item__text">Active Project</div>
        </div>
        <div class="counter__line"></div>
        <div class="counter__item">
          <div class="counter__item__number">95</div>
          <div class="counter__item__text">Happy CUstomers</div>
        </div>

      </div>

    </div>
    <ArticlesNews banner-header="Articles & News"
      banner-text="It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using."
      count="3" paginaion = "display: none;" />
    <FooterComp />
  </div>
</template>

<script>
// @ is an alias to /src
import ArticlesNews from '@/components/ArticlesNews.vue';
import FollowOurProjects from '@/components/FollowOurProjects.vue';
import FooterComp from '@/components/FooterComp.vue';
import HeaderComp from '@/components/HeaderComp.vue';


export default {
  name: 'HomeView',
  components: {
    HeaderComp,
    FooterComp,
    ArticlesNews,
    FollowOurProjects
  }
}
</script>
<style>
.banner {
  margin-top: 57px;
}

.banner__element {
  height: 758px;
  background: url(../assets/bannerLayer.jpg), lightgray 50%/cover no-repeat;
  border-radius: 65px;
  display: flex;
  align-items: center;
}

.banner__element__intro {
  margin-left: 52px;
  width: 434px;
  height: 342px;
}

.banner__element__intro__head {
  color: #292F36;
  font-family: DM Serif Display;
  font-size: 65px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
}

.banner__element__intro__paragraph {
  margin-top: 20px;
  color: #4D5053;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 33px */
  letter-spacing: 0.22px;
}

.banner__element__intro__button {
  margin-top: 20px;
  display: flex;
  padding: 26px 49px 26px 48px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 18px;
  background: #292F36;
  box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
}

.banner__element__intro__button__text {
  color: #FFF;
  text-align: center;
  font-family: Jost;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%;
  /* 22.5px */
  letter-spacing: 0.36px;
  margin-bottom: 0px;
}

.project {
  margin-top: 96px;
}

.project__content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.project__head {
  display: flex;
  width: 737px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.project__head__header {
  color: #292F36;
  text-align: center;
  font-family: DM Serif Display;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  /* 62.5px */
  letter-spacing: 1px;
}

.project__head__paragraph {
  color: #4D5053;
  text-align: center;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 33px */
  letter-spacing: 0.22px;
}

.project__items {
  margin-top: 93px;
  display: flex;
  flex-wrap: wrap;
  gap: 56px;
  justify-content: space-between;
}

.project__items__item {
  /* max-width: 572px; */
}

.project__items__item__img {
  width: 100%;
  height: 548px;
}

.project__items__item__img__top-right {
  border-radius: 0px 80px 0px 0px;
}

.project__items__item__img__top-left {
  border-radius: 80px 0px 0px 0px;
}

.project__items__item__img__bottom-right {
  border-radius: 0px 0px 80px 0px;
}

.project__items__item__img__bottom-left {
  border-radius: 0px 0px 0px 80px;
}

.project__items__item__description {
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
}

.project__items__item__description__text__header {
  color: #292F36;
  font-family: DM Serif Display;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  /* 31.25px */
  letter-spacing: 0.5px;
}

.project__items__item__description__text__paragraph {
  color: #4D5053;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 33px */
  letter-spacing: 0.22px;
}

.counter {
  background: #F4F0EC;
  margin-top: 96px;
}

.counter__content {
  display: flex;
  padding: 151px 0;
  justify-content: space-between;
}

.counter__item {
  text-align: center;
}

.counter__item__number {
  color: #CDA274;
  font-family: DM Serif Display;
  font-size: 85px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  /* 106.25px */
  letter-spacing: 1.7px;
}

.counter__item__text {
  margin-top: 16px;
  color: #4D5053;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 33px */
  letter-spacing: 0.22px;
}

.counter__line {
  width: 1px;
  height: 130px;
  background: #CDA274;
}

.blog1 {
  margin-top: 96px;
}

.blog1__content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.blog1__head {
  display: flex;
  max-width: 811px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.blog1__head__header {
  color: #292F36;
  text-align: center;
  font-family: DM Serif Display;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  /* 62.5px */
  letter-spacing: 1px;
  margin-bottom: 0;
}

.blog1__head__paragraph {
  color: #4D5053;
  text-align: center;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 33px */
  letter-spacing: 0.22px;
}

.blog1__items1 {
  margin-top: 52px;
  display: flex;
  flex-wrap: wrap;
  gap: 21px;
  margin-bottom: 0;
  padding-left: 0;
  justify-content: space-between;
}

.blog1__items1__item {
  border-radius: 62px;
  border: 1px solid #E7E7E7;
  box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
  width: 336px;
  height: 479px;
  padding: 21px;
  box-sizing: content-box;

}

.blog1__items1__item__img-decoration {
  position: relative;
}

.blog1__items1__item__img-decoration__img {
  width: 100%;
  border-radius: 45px 45px 0px 0px;
}

.blog1__items1__item__img-decoration__text {
  position: absolute;
  left: 20px;
  bottom: 20px;
  padding: 8px 11px;
  border-radius: 8px 8px 8px 0px;
  background: #FFF;
  color: #4D5053;
  font-family: Jost;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 24px */
  letter-spacing: 0.16px;
  text-transform: capitalize;
  margin-bottom: 0;
}

.blog1__items1__item__description__header {
  margin-top: 21px;
  color: #292F36;
  font-family: DM Serif Display;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  /* 31.25px */
  letter-spacing: 0.5px;
  margin-bottom: 0;
}

.blog1__items1__item__description__date-button {
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0;
}

.blog1__items1__item__description__date-button__date {
  color: #4D5053;
  font-family: Jost;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 24px */
  letter-spacing: 0.16px;
  text-transform: capitalize;
  margin-bottom: 0;
}

.blog1__items1__item__description__date-button__button {
  width: 52px;
  height: 52px;
}

.blog__pagination {
  margin-top: 51px;
  text-align: center;
}</style>
