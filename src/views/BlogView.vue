<template>
    <div>
        <HeaderComp />
        <BannerBlog bannerHeader="Articles & News" bannerText="Home / Blog" />
        <section class="latestPost center">
            <h1 class="latestPost__header">Latest Post</h1>
            <div class="latestPost__content">
                <img src="../assets/latestPostImg.jpg" alt="latestPostImg" class="latestPost__content__img">
                <div class="latestPost__content__description">
                    <h3 class="latestPost__content__description__header">Low Cost Latest Invented Interior Designing Ideas
                    </h3>
                    <p class="latestPost__content__description__paragraph">Lorem ipsum dolor sit amet, adipiscing Aliquam eu
                        sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. </p>
                    <p class="latestPost__content__description__paragraph">Lorem Ipsum is not simply random text. It has
                        roots in a piece of classica.</p>
                    <div class="latestPost__content__description__date-button">
                        <p class="latestPost__content__description__date-button__date">26 December,2022</p>
                        
                            <router-link  to="/blogdetails"><img class="latestPost__content__description__date-button__button" src="../assets/button.png"
                            alt=""></router-link>
                            
                        
                    </div>
                </div>
            </div>
        </section>
        <section class="blog center">
            <div class="blog__content">
                <div class="blog__head">
                    <h1 class="blog__head__header">Articles & News</h1>
                </div>
            </div>
            <div id="items">
                <ul class="blog__items">
                    <li v-for="item in items" :key="item.id">
                        <div class="blog__items__item">
                            <div class="blog__items__item__img-decoration">
                                <img class="blog__items__item__img-decoration__img" :src="item.img" alt="item1">
                                <p class="blog__items__item__img-decoration__text">{{ item.comment }}</p>
                            </div>

                            <div class="blog__items__item__description">
                                <h3 class="blog__items__item__description__header">
                                    {{ item.header }}
                                </h3>
                                <div class="blog__items__item__description__date-button">
                                    <p class="blog__items__item__description__date-button__date">{{ item.date }}</p>
                                    <img class="blog__items__item__description__date-button__button"
                                        src="../assets/button.png" alt="">
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="blog__pagination">
                <img src="../assets/Pagination.png" alt="">
            </div>
        </section>
        <FooterComp />
    </div>
</template>
  
<script>
// @ is an alias to /src
import FooterComp from '@/components/FooterComp.vue';
import HeaderComp from '@/components/HeaderComp.vue';
import BannerBlog from '@/components/BannerBlog.vue';


export default {
    name: 'BlockView',
    components: {
        HeaderComp,
        FooterComp,
        BannerBlog
    },
    data() {
        return {
            items: [
                { img: require('../assets/blogItem1.jpg'), comment: 'Kitchan Design', header: 'Let’s Get Solution For Building Construction Work', date: '26 December,2022' },
                { img: require('../assets/blogItem2.jpg'), comment: 'Living Design', header: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022' },
                { img: require('../assets/blogItem3.jpg'), comment: 'Interior Design', header: 'Best For Any Office & Business Interior Solution', date: '25 December,2022' }, { img: require('../assets/blogItem4.jpg'), comment: 'Kitchan Design', header: 'Let’s Get Solution For Building Construction Work', date: '26 December,2022' }, { img: require('../assets/blogItem5.jpg'), comment: 'Living Design', header: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022' },
                { img: require('../assets/blogItem6.jpg'), comment: 'Interior Design', header: 'Best For Any Office & Business Interior Solution', date: '25 December,2022' }
            ],
        }
    }
}
</script>
<style>
.latestPost {
    margin-top: 200px;
}

.latestPost__header {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 62.5px */
    letter-spacing: 1px;
}

.latestPost__content {
    margin-top: 49px;
    display: flex;
    gap: 65px;
    padding: 22px;
    border-radius: 62px;
    border: 1px solid #E7E7E7;
}

.latestPost__content__img {
    border-radius: 50px;
}

.latestPost__content__description {
    padding: 40px 30px 40px 0;
}

.latestPost__content__description__header {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 31.25px */
    letter-spacing: 0.5px;
}

.latestPost__content__description__paragraph {
    margin-top: 22px;
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
}

.latestPost__content__description__date-button {
    margin-top: 41px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.latestPost__content__description__date-button__date {
    color: #4D5053;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 24px */
    letter-spacing: 0.16px;
    text-transform: capitalize;
}

.latestPost__content__description__date-button__button {
    width: 52px;
    height: 52px;
}


</style>