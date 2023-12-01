<template id="template">
    <section class="bannerBlog">
        <div class="bannerBlog__banner">

        </div>
    </section>
    <section class="blogDetails center">
        <div class="blogDetails__article">
            <div class="blogDetails__block">
                <ul class="blogDetails__block__articles">
                    <li v-for="article in filterArticles" :key="article.tags">
                        <h1 class="blogDetails__block__articles__header">{{ article.header }}</h1>
                        <img class="blogDetails__block__articles__img" :src="article.img" alt="">
                        <p class="blogDetails__block__articles__text">{{ article.text }}</p>
                    </li>
                </ul>
                <div class="blogDetails__block__tags">
                    <h3 class="blogDetails__block__tags__header">Tags</h3>
                    <div class="blogDetails__block__tags__buttons">

                        <div class="form_radio_btn">
                            <input v-model="filterText" value="Kitchen" id="radio-1" type="radio" name="radio" checked>
                            <label for="radio-1">Kitchen</label>
                        </div>

                        <div class="form_radio_btn">
                            <input v-model="filterText" value="Bedroom" id="radio-2" type="radio" name="radio">
                            <label for="radio-2">Bedroom</label>
                        </div>

                        <div class="form_radio_btn">
                            <input v-model="filterText" value="Building" id="radio-3" type="radio" name="radio">
                            <label for="radio-3">Building</label>
                        </div>

                        <div class="form_radio_btn">
                            <input v-model="filterText" value="Architecture" id="radio-4" type="radio" name="radio">
                            <label for="radio-4">Architecture</label>
                        </div>
                        <div class="form_radio_btn">
                            <input v-model="filterText" value="Kitchen Planning" id="radio-5" type="radio" name="radio">
                            <label for="radio-5">Kitchen Planning</label>
                        </div>
                        <div class="form_radio_btn">
                            <input v-model="filterText" value="Bedroom" id="radio-2" type="radio" name="radio">
                            <label for="radio-2">Bedroom</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<!-- <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script> -->
<script >
export default {
    data() {
        return {
            filterText: '',
            articles: [
                {
                    header: 'Let’s Get Solution for Building Construction Work',
                    tags: 'Kitchen',
                    text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which dont look even slightly believable.                            Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
                    img: require('../assets/PhotoArticle2.jpg')

                },
                {
                    header: 'Design sprints are great',
                    tags: 'Bedroom',
                    text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which dont look even slightly believable.                            ',
                    img: require('../assets/PhotoArticle.jpg')
                },
                {
                    header: 'Follow Our Projects',
                    tags: 'Building',
                    text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which dont look even slightly believable.                            Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto delectus alias voluptas, temporibus, nobis non error, eveniet voluptate numquam provident corrupti exercitationem maxime ad quidem consequatur animi culpa totam.',
                    img: require('../assets/PhotoArticle2.jpg')
                },
                {
                    header: 'Articles & News',
                    tags: 'Architecture',
                    text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which dont look even slightly believable.                            Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto delectus alias voluptas, temporibus, nobis non error, eveniet voluptate numquam provident corrupti exercitationem maxime ad quidem consequatur animi culpa totam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto delectus alias voluptas, temporibus, nobis non error, eveniet voluptate numquam provident corrupti exercitationem maxime ad quidem consequatur animi culpa totam.',
                    img: require('../assets/PhotoArticle.jpg')
                },
                {
                    header: 'Latest Post',
                    tags: 'Kitchen Planning',
                    text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which dont look even slightly believable.                            Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto delectus alias voluptas, temporibus, nobis non error, eveniet voluptate numquam provident corrupti exercitationem maxime ad quidem consequatur animi culpa totam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto delectus alias voluptas, temporibus, nobis non error, eveniet voluptate numquam provident corrupti exercitationem maxime ad quidem consequatur animi culpa totam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto delectus alias voluptas, temporibus, nobis non error, eveniet voluptate numquam provident corrupti exercitationem maxime ad quidem consequatur animi culpa totam.',
                    img: require('../assets/PhotoArticle2.jpg')
                },
            ],
        }
    },
    computed: {
        filterArticles() {
            return this.articles.filter(article => article.tags.includes(this.filterText))
        },
    },
}
</script>
<style>
.blogDetails {
    margin-top: 200px;
}

.blogDetails__block {
    margin-top: 200px;
    display: flex;
    justify-content: space-between;
    gap: 52px;
}

.blogDetails__block__articles {
    width: 800px;
    padding-left: 0;
    margin-bottom: 0;
}

.blogDetails__block__articles__header {
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

.blogDetails__block__articles__img {
    margin-top: 21px;
    border-radius: 50px;
    width: 799px;
    height: 539px;
}

.blogDetails__block__articles__text {
    margin-top: 48px;
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

.blogDetails__block__tags__header {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 31.25px */
    letter-spacing: 0.5px;
}

.blogDetails__block__tags__buttons {
    margin-top: 24px;
    display: flex;
    flex-wrap: wrap;
    gap: 11px;
}

.form_radio_btn {
    display: inline-block;
    /* margin-right: 10px; */
}

.form_radio_btn input[type=radio] {
    display: none;
}

.form_radio_btn label {
    display: inline-block;
    cursor: pointer;
    padding: 9px 30px;
    line-height: 34px;
    background: #F4F0EC;
    border-radius: 10px;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    color: #292F36;
    text-align: center;
    font-family: Jost;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 22.5px */
    letter-spacing: 0.36px;
}

/* Checked */
.form_radio_btn input[type=radio]:checked+label {
    background: #292F36;
    color: #FFF;
    text-align: center;
    font-family: Jost;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 22.5px */
    letter-spacing: 0.36px;
}

/* Hover */
.form_radio_btn label:hover {
    color: #666;
}

/* Disabled */
.form_radio_btn input[type=radio]:disabled+label {
    background: #efefef;
    color: #666;
}

/*# sourceMappingURL=style.css.map */
</style>