<template>
    <section class="blog1 center">
        <div class="blog1__content">
            <div class="blog1__head">
                <h1 class="blog1__head__header">{{ bannerHeader }}</h1>
                <p class="blog1__head__paragraph">{{ bannerText }}</p>
            </div>
        </div>
        <div id="items">
            <ul class="blog1__items1">
                <li v-for="(item, index) in  paginated " :key="item.id">
                    <a class="link" href="/blogdetails">
                        <div class="blog1__items1__item" v-if="index < Number(count)">
                            <div class="blog1__items1__item__img-decoration">
                                <img class="blog1__items1__item__img-decoration__img" :src="item.img" alt="item1">
                                <p class="blog1__items1__item__img-decoration__text">{{ item.comment }}</p>
                            </div>

                            <div class="blog1__items1__item__description">
                                <h3 class="blog1__items1__item__description__header">
                                    {{ item.header }}
                                </h3>
                                <div class="blog1__items1__item__description__date-button">
                                    <p class="blog1__items1__item__description__date-button__date">{{ item.date }}</p>
                                    <svg class="blog1__items1__item__description__date-button__date" width="53" height="53"
                                        viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle class="blog1__items1__item__description__date-button__date" cx="26.5"
                                            cy="26.267" r="26" fill="#F4F0EC" />
                                        <path d="M24.271 32.9525L30.2139 26.2668L24.271 19.5811" stroke="#292F36"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </section>
    <div class="blog__pagination" :style=paginaion>
        <ul class="blog__pagination__items">
            <li class="blog__pagination__items__item">
                <button v-on:click="current = 1">
                    <svg :class="{ active: selected == 1, pagSvg: selected !== 1 }" @click="selected = 1" width="53"
                        height="52" viewBox="0 0 53 52" fill="none">
                        <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                        <path
                            d="M19.996 26.4C19.996 25.8027 20.0547 25.2533 20.172 24.752C20.2893 24.2507 20.4547 23.8187 20.668 23.456C20.892 23.0933 21.1587 22.816 21.468 22.624C21.7773 22.4213 22.1187 22.32 22.492 22.32C22.8867 22.32 23.2333 22.4213 23.532 22.624C23.8413 22.816 24.1027 23.0933 24.316 23.456C24.54 23.8187 24.7107 24.2507 24.828 24.752C24.9453 25.2533 25.004 25.8027 25.004 26.4C25.004 26.9973 24.9453 27.5467 24.828 28.048C24.7107 28.5493 24.54 28.9813 24.316 29.344C24.1027 29.7067 23.8413 29.9893 23.532 30.192C23.2333 30.384 22.8867 30.48 22.492 30.48C22.1187 30.48 21.7773 30.384 21.468 30.192C21.1587 29.9893 20.892 29.7067 20.668 29.344C20.4547 28.9813 20.2893 28.5493 20.172 28.048C20.0547 27.5467 19.996 26.9973 19.996 26.4ZM18.14 26.4C18.14 27.5627 18.3213 28.576 18.684 29.44C19.0573 30.304 19.5693 30.976 20.22 31.456C20.8813 31.936 21.6387 32.176 22.492 32.176C23.3667 32.176 24.1293 31.936 24.78 31.456C25.4413 30.976 25.9533 30.304 26.316 29.44C26.6787 28.576 26.86 27.5627 26.86 26.4C26.86 25.2373 26.6787 24.224 26.316 23.36C25.9533 22.496 25.4413 21.824 24.78 21.344C24.1293 20.864 23.3667 20.624 22.492 20.624C21.6387 20.624 20.8813 20.864 20.22 21.344C19.5693 21.824 19.0573 22.496 18.684 23.36C18.3213 24.224 18.14 25.2373 18.14 26.4ZM28.7 23.424L31.292 22.704V32H33.164V20.624L28.7 21.632V23.424Z"
                            fill="#292F36" />
                    </svg>
                </button>

            </li>
            <li class="blog__pagination__items__item">
                <button v-on:click="current = 6">
                    <svg :class="{ active: selected == 2, pagSvg: selected !== 2 }" @click="selected = 2" width="53"
                        height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" fill="F4F0EC" />
                        <path
                            d="M19.996 26.4C19.996 25.8027 20.0547 25.2533 20.172 24.752C20.2893 24.2507 20.4547 23.8187 20.668 23.456C20.892 23.0933 21.1587 22.816 21.468 22.624C21.7773 22.4213 22.1187 22.32 22.492 22.32C22.8867 22.32 23.2333 22.4213 23.532 22.624C23.8413 22.816 24.1027 23.0933 24.316 23.456C24.54 23.8187 24.7107 24.2507 24.828 24.752C24.9453 25.2533 25.004 25.8027 25.004 26.4C25.004 26.9973 24.9453 27.5467 24.828 28.048C24.7107 28.5493 24.54 28.9813 24.316 29.344C24.1027 29.7067 23.8413 29.9893 23.532 30.192C23.2333 30.384 22.8867 30.48 22.492 30.48C22.1187 30.48 21.7773 30.384 21.468 30.192C21.1587 29.9893 20.892 29.7067 20.668 29.344C20.4547 28.9813 20.2893 28.5493 20.172 28.048C20.0547 27.5467 19.996 26.9973 19.996 26.4ZM18.14 26.4C18.14 27.5627 18.3213 28.576 18.684 29.44C19.0573 30.304 19.5693 30.976 20.22 31.456C20.8813 31.936 21.6387 32.176 22.492 32.176C23.3667 32.176 24.1293 31.936 24.78 31.456C25.4413 30.976 25.9533 30.304 26.316 29.44C26.6787 28.576 26.86 27.5627 26.86 26.4C26.86 25.2373 26.6787 24.224 26.316 23.36C25.9533 22.496 25.4413 21.824 24.78 21.344C24.1293 20.864 23.3667 20.624 22.492 20.624C21.6387 20.624 20.8813 20.864 20.22 21.344C19.5693 21.824 19.0573 22.496 18.684 23.36C18.3213 24.224 18.14 25.2373 18.14 26.4ZM27.82 32H36.364V30.24H31.5L34.684 27.12C35.1427 26.6933 35.5107 26.208 35.788 25.664C36.076 25.12 36.22 24.5547 36.22 23.968C36.22 23.5947 36.14 23.2107 35.98 22.816C35.8307 22.4213 35.596 22.0587 35.276 21.728C34.9667 21.3973 34.572 21.1307 34.092 20.928C33.612 20.7147 33.0467 20.608 32.396 20.608C31.5427 20.608 30.8173 20.7893 30.22 21.152C29.6333 21.504 29.1853 21.9947 28.876 22.624C28.5773 23.2427 28.428 23.952 28.428 24.752H30.3C30.3 24.2613 30.38 23.8293 30.54 23.456C30.7107 23.0827 30.9507 22.8 31.26 22.608C31.5693 22.4053 31.9373 22.304 32.364 22.304C32.6733 22.304 32.9453 22.3573 33.18 22.464C33.4147 22.56 33.612 22.6933 33.772 22.864C33.9427 23.0347 34.0653 23.2267 34.14 23.44C34.2253 23.6427 34.268 23.8507 34.268 24.064C34.268 24.3627 34.22 24.6453 34.124 24.912C34.028 25.1787 33.884 25.4453 33.692 25.712C33.5 25.9787 33.2707 26.256 33.004 26.544L27.82 32Z"
                            fill="#292F36" />
                    </svg>
                </button>
            </li>
            <li class="blog__pagination__items__item">
                <button v-on:click="current = 13">
                    <svg :class="{ active: selected == 3, pagSvg: selected !== 3 }" @click="selected = 3" width="53"
                        height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                        <path
                            d="M19.996 26.4C19.996 25.8027 20.0547 25.2533 20.172 24.752C20.2893 24.2507 20.4547 23.8187 20.668 23.456C20.892 23.0933 21.1587 22.816 21.468 22.624C21.7773 22.4213 22.1187 22.32 22.492 22.32C22.8867 22.32 23.2333 22.4213 23.532 22.624C23.8413 22.816 24.1027 23.0933 24.316 23.456C24.54 23.8187 24.7107 24.2507 24.828 24.752C24.9453 25.2533 25.004 25.8027 25.004 26.4C25.004 26.9973 24.9453 27.5467 24.828 28.048C24.7107 28.5493 24.54 28.9813 24.316 29.344C24.1027 29.7067 23.8413 29.9893 23.532 30.192C23.2333 30.384 22.8867 30.48 22.492 30.48C22.1187 30.48 21.7773 30.384 21.468 30.192C21.1587 29.9893 20.892 29.7067 20.668 29.344C20.4547 28.9813 20.2893 28.5493 20.172 28.048C20.0547 27.5467 19.996 26.9973 19.996 26.4ZM18.14 26.4C18.14 27.5627 18.3213 28.576 18.684 29.44C19.0573 30.304 19.5693 30.976 20.22 31.456C20.8813 31.936 21.6387 32.176 22.492 32.176C23.3667 32.176 24.1293 31.936 24.78 31.456C25.4413 30.976 25.9533 30.304 26.316 29.44C26.6787 28.576 26.86 27.5627 26.86 26.4C26.86 25.2373 26.6787 24.224 26.316 23.36C25.9533 22.496 25.4413 21.824 24.78 21.344C24.1293 20.864 23.3667 20.624 22.492 20.624C21.6387 20.624 20.8813 20.864 20.22 21.344C19.5693 21.824 19.0573 22.496 18.684 23.36C18.3213 24.224 18.14 25.2373 18.14 26.4ZM31.692 26.512C32.4813 26.512 33.18 26.3947 33.788 26.16C34.4067 25.9253 34.892 25.5893 35.244 25.152C35.596 24.7147 35.772 24.2133 35.772 23.648C35.772 23.0933 35.6333 22.592 35.356 22.144C35.0893 21.6853 34.7 21.3173 34.188 21.04C33.676 20.7627 33.0573 20.624 32.332 20.624C31.6493 20.624 31.0467 20.7627 30.524 21.04C30.0013 21.3067 29.5907 21.6747 29.292 22.144C29.004 22.6133 28.86 23.1573 28.86 23.776H30.636C30.636 23.328 30.796 22.96 31.116 22.672C31.4467 22.3733 31.8573 22.224 32.348 22.224C32.6787 22.224 32.956 22.288 33.18 22.416C33.404 22.544 33.5747 22.7253 33.692 22.96C33.8093 23.184 33.868 23.4453 33.868 23.744C33.868 23.9787 33.8147 24.208 33.708 24.432C33.612 24.6453 33.468 24.832 33.276 24.992C33.0947 25.152 32.8707 25.28 32.604 25.376C32.3373 25.4613 32.0333 25.504 31.692 25.504V26.512ZM32.252 32.192C33.02 32.192 33.692 32.0587 34.268 31.792C34.844 31.5253 35.292 31.152 35.612 30.672C35.932 30.192 36.092 29.6373 36.092 29.008C36.092 28.4427 35.98 27.9627 35.756 27.568C35.532 27.1627 35.2173 26.8373 34.812 26.592C34.4173 26.336 33.9533 26.1493 33.42 26.032C32.8867 25.904 32.3107 25.84 31.692 25.84V26.912C32.0653 26.912 32.4067 26.9547 32.716 27.04C33.0253 27.1253 33.2867 27.248 33.5 27.408C33.724 27.568 33.8947 27.7653 34.012 28C34.1293 28.2347 34.188 28.5013 34.188 28.8C34.188 29.1733 34.108 29.4933 33.948 29.76C33.788 30.016 33.564 30.2133 33.276 30.352C32.9987 30.4907 32.668 30.56 32.284 30.56C31.9107 30.56 31.5693 30.4907 31.26 30.352C30.9507 30.2027 30.7053 30 30.524 29.744C30.3533 29.4773 30.268 29.1627 30.268 28.8H28.38C28.38 29.2587 28.4707 29.696 28.652 30.112C28.8333 30.5173 29.0893 30.88 29.42 31.2C29.7507 31.5093 30.156 31.7547 30.636 31.936C31.116 32.1067 31.6547 32.192 32.252 32.192Z"
                            fill="#292F36" />
                    </svg>
                </button>
            </li>
            <li class="blog__pagination__items__item">
                <button>
                    <svg class="pagSvg" width="53" height="52" viewBox="0 0 53 52" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                        <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </button>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'ArticlesNews',
    props: {
        bannerHeader: String,
        bannerText: String,
        count: Number,
        paginaion: Boolean,
    },
    data() {
        return {
            items: [
                { img: require('../assets/blogItem1.jpg'), comment: 'Kitchan Design', header: 'Let’s Get Solution For Building Construction Work', date: '26 December,2022' },
                { img: require('../assets/blogItem2.jpg'), comment: 'Living Design', header: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022' },
                { img: require('../assets/blogItem3.jpg'), comment: 'Interior Design', header: 'Best For Any Office & Business Interior Solution', date: '25 December,2022' },
                { img: require('../assets/blogItem4.jpg'), comment: 'Kitchan Design', header: 'Let’s Get Solution For Building Construction Work', date: '26 December,2022' },
                { img: require('../assets/blogItem5.jpg'), comment: 'Living Design', header: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022' },
                { img: require('../assets/blogItem6.jpg'), comment: 'Interior Design', header: 'Best For Any Office & Business Interior Solution', date: '25 December,2022' },
                { img: require('../assets/blogItem3.jpg'), comment: 'Interior Design', header: 'Best For Any Office & Business Interior Solution', date: '25 December,2022' },
                { img: require('../assets/blogItem4.jpg'), comment: 'Kitchan Design', header: 'Let’s Get Solution For Building Construction Work', date: '26 December,2022' },
                { img: require('../assets/blogItem5.jpg'), comment: 'Living Design', header: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022' },
                { img: require('../assets/blogItem6.jpg'), comment: 'Interior Design', header: 'Best For Any Office & Business Interior Solution', date: '25 December,2022' },
                { img: require('../assets/blogItem1.jpg'), comment: 'Kitchan Design', header: 'Let’s Get Solution For Building Construction Work', date: '26 December,2022' },
                { img: require('../assets/blogItem2.jpg'), comment: 'Living Design', header: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022' },
                { img: require('../assets/blogItem3.jpg'), comment: 'Interior Design', header: 'Best For Any Office & Business Interior Solution', date: '25 December,2022' },
                { img: require('../assets/blogItem4.jpg'), comment: 'Kitchan Design', header: 'Let’s Get Solution For Building Construction Work', date: '26 December,2022' },
                { img: require('../assets/blogItem5.jpg'), comment: 'Living Design', header: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022' },
                { img: require('../assets/blogItem1.jpg'), comment: 'Kitchan Design', header: 'Let’s Get Solution For Building Construction Work', date: '26 December,2022' },
                { img: require('../assets/blogItem2.jpg'), comment: 'Living Design', header: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022' },
                { img: require('../assets/blogItem3.jpg'), comment: 'Interior Design', header: 'Best For Any Office & Business Interior Solution', date: '25 December,2022' },
                { img: require('../assets/blogItem4.jpg'), comment: 'Kitchan Design', header: 'Let’s Get Solution For Building Construction Work', date: '26 December,2022' },
                { img: require('../assets/blogItem5.jpg'), comment: 'Living Design', header: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022' },
            ],
            current: 1,
            size: 6,
            selected: '',
        }
    },

    computed: {
        indexStart() {
            return this.current - 1;
        },
        indexEnd() {
            return this.indexStart + this.size;
        },
        paginated() {
            return this.items.slice(this.indexStart, this.indexEnd);
        },

    },
}
</script>
<style>
.link {
    text-decoration: none;
}

button,
button:active,
button:focus {
    border: none;
    padding: 0;
    border: none;
    background: none;
}

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

.blog1__items1__item:hover {
    background: #F4F0EC;
}

.blog1__items1__item:hover .blog1__items1__item__description__date-button__date {
    fill: rgba(255, 255, 255, 1);
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

/* .blog__pagination{
    display: ;
} */

.blog__pagination__items {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.pagSvg:hover {
    fill: #F4F0EC
}

.active {
    fill: #F4F0EC
}
</style>