<template>
    <section class="project center">
        <div class="project__content">
            <div class="project__head">
                <h1 class="project__head__header">Follow Our Projects</h1>
                <p class="project__head__paragraph">It is a long established fact that a reader will be distracted by the of
                    readable content of page lookings at its layouts points.</p>
            </div>
        </div>
        <div class="project__items">
            <div class="project__items__item">
                <img class="project__items__item__img__top-right" src="../assets/item1.jpg" alt="item1">
                <a href="/projectdetails" class="project__items__item__description">
                    <div class="project__items__item__description__text">
                        <h3 class="project__items__item__description__text__header">Modern Kitchan</h3>
                        <p class="project__items__item__description__text__paragraph">Decor / Artchitecture</p>
                    </div>
                    <div class="project__items__item__description__button">
                        <img src="../assets/button.png" alt="">
                    </div>
                </a>
            </div>
            <div class="project__items__item">
                <img class="project__items__item__img__top-left" src="../assets/item2.jpg" alt="item1">
                <a href="/projectdetails" class="project__items__item__description">
                    <div class="project__items__item__description__text">
                        <h3 class="project__items__item__description__text__header">Modern Kitchan</h3>
                        <p class="project__items__item__description__text__paragraph">Decor / Artchitecture</p>
                    </div>
                    <div class="project__items__item__description__button"><img src="../assets/button.png" alt="">
                    </div>
                </a>
            </div>
            <div class="project__items__item">
                <img class="project__items__item__img__bottom-right" src="../assets/item3.jpg" alt="item1">
                <a href="/projectdetails" class="project__items__item__description">
                    <div class="project__items__item__description__text">
                        <h3 class="project__items__item__description__text__header">Modern Kitchan</h3>
                        <p class="project__items__item__description__text__paragraph">Decor / Artchitecture</p>
                    </div>
                    <div class="project__items__item__description__button"><img src="../assets/button.png" alt="">
                    </div>
                </a>
            </div>
            <div class="project__items__item">
                <img class="project__items__item__img__bottom-left" src="../assets/item4.jpg" alt="item1">
                <a href="/projectdetails" class="project__items__item__description">
                    <div class="project__items__item__description__text">
                        <h3 class="project__items__item__description__text__header">Modern Kitchan</h3>
                        <p class="project__items__item__description__text__paragraph">Decor / Artchitecture</p>
                    </div>
                    <div class="project__items__item__description__button"><img src="../assets/button.png" alt="">
                    </div>
                </a>
            </div>
        </div>

    </section>
</template>
<script>
export default {
    name: 'FoolowOurProjects',

}
</script>
<style>
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
  line-height: 125%; /* 62.5px */
  letter-spacing: 1px;
}
.project__head__paragraph {
  color: #4D5053;
  text-align: center;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 33px */
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
  line-height: 125%; /* 31.25px */
  letter-spacing: 0.5px;
}
.project__items__item__description__text__paragraph {
  color: #4D5053;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 33px */
  letter-spacing: 0.22px;
}</style>