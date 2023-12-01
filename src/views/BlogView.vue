<template>
    <div>
        <HeaderComp />
        <BannerBlog bannerHeader="Articles & News" bannerText="Home / Blog" />
        <section class="latestPost center">
            <h1 class="latestPost__header">Latest Post</h1>
            <a href="/blogdetails" class="link">
                <div class="latestPost__content" v-for="item in getLatest" :key="item.id">
                    <img :src=item.img alt="latestPostImg" class="latestPost__content__img">
                    <div class="latestPost__content__description">
                        <h3 class="latestPost__content__description__header">{{ item.header }}
                        </h3>
                        <p class="latestPost__content__description__paragraph">{{ item.paragraph }} </p>
                        <div class="latestPost__content__description__date-button">
                            <p class="latestPost__content__description__date-button__date">{{ item.date }}</p>

                            <router-link to="/blogdetails"><svg
                                    class="latestPost__content__description__date-button__button" width="52" height="53"
                                    viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle class="latestPost__content__description__date-button__button" cx="26" cy="26.5"
                                        r="26" fill="#F4F0EC" />
                                    <path d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141" stroke="#292F36"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </router-link>
                        </div>
                    </div>
                </div>
            </a>
        </section>
        <ArticlesNews bannerHeader="Articles & News" count="6" />
        <FooterComp />
    </div>
</template>
  
<script>
// @ is an alias to /src
import FooterComp from '@/components/FooterComp.vue';
import HeaderComp from '@/components/HeaderComp.vue';
import BannerBlog from '@/components/BannerBlog.vue';
import ArticlesNews from '@/components/ArticlesNews.vue';

export default {
    name: 'BlockView',
    components: {
        HeaderComp,
        ArticlesNews,
        FooterComp,
        BannerBlog
    },
    data() {
        return {
            post: {},
            items: [
                { img: require('../assets/blogItem1.jpg'), comment: 'Kitchan Design', header: 'Let’s Get Solution For Building Construction Work', paragraph: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eusem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.', date: '26 December,2022' },
                { img: require('../assets/blogItem2.jpg'), comment: 'Living Design', header: 'Low Cost Latest Invented Interior Designing Ideas.', paragraph: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eusem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.', date: '22 December,2022' },
                { img: require('../assets/blogItem3.jpg'), comment: 'Interior Design', header: 'Best For Any Office & Business Interior Solution', paragraph: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eusem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.', date: '25 December,2022' }, { img: require('../assets/blogItem4.jpg'), comment: 'Kitchan Design', header: 'Let’s Get Solution For Building Construction Work', paragraph: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eusem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.', date: '26 December,2022' }, { img: require('../assets/blogItem5.jpg'), comment: 'Living Design', header: 'Low Cost Latest Invented Interior Designing Ideas.', paragraph: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eusem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.', date: '22 December,2022' },
                { img: require('../assets/blogItem6.jpg'), comment: 'Interior Design', header: 'Best For Any Office & Business Interior Solution', paragraph: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eusem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.', date: '25 December,2022' }
            ],
        }
    },
    computed: {
        getLatest() {
            return this.items.slice(-1);
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
    margin-bottom: 0;
}

.latestPost__content {
    margin-top: 27px;
    display: flex;
    gap: 65px;
    padding: 22px;
    border-radius: 62px;
    border: 1px solid #E7E7E7;
}

.latestPost__content:hover {
    margin-top: 27px;
    display: flex;
    gap: 65px;
    padding: 22px;
    border-radius: 62px;
    border: 1px solid #E7E7E7;
    background: #F4F0EC;
}

.latestPost__content:hover .latestPost__content__description__date-button__button {
    fill: rgba(255, 255, 255, 1);

}

.latestPost__content__img {
    border-radius: 50px;
    height: 478px;
    width: 569px;
}

.latestPost__content__description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    margin-bottom: 0;
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
    margin-bottom: 0;
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
    margin-bottom: 0;
}

.latestPost__content__description__date-button__button {
    width: 52px;
    height: 52px;
}

.blog__pagination__items {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.pagSvg:hover {
    fill: #F4F0EC
}

.pagSvg:hover path {
    fill: "#F4F0EC"
}



li {
    list-style-type: none;
}</style>