<template>
    <div class="project center">
        <div class="project__sort">
            <div class="form_radio_btn">
                <input v-model="filterText" value="Bathroom" id="radio-1" type="radio" name="radio" checked>
                <label for="radio-1">Bathroom</label>
            </div>

            <div class="form_radio_btn">
                <input v-model="filterText" value="Bedroom" id="radio-2" type="radio" name="radio">
                <label for="radio-2">Bed Room</label>
            </div>

            <div class="form_radio_btn">
                <input v-model="filterText" value="Kitchan" id="radio-3" type="radio" name="radio">
                <label for="radio-3">Kitchan</label>
            </div>

            <div class="form_radio_btn">
                <input v-model="filterText" value="Living Area" id="radio-4" type="radio" name="radio">
                <label for="radio-4">Living Area</label>
            </div>
        </div>
        <div>
            <ul class="project__items">
                <li class="project__items__item" v-for="item in filterArticles" :key="item.alt">
                    <img class="project__items__itemImg" :src=item.img :alt=item.alt>
                    <div class="project__items__box">
                        <div>
                            <h3 class="project__items__itemHeader">{{ item.header }}</h3>
                            <p class="project__items__itemText">
                                {{ item.text }}
                            </p>
                        </div>
                        <button class="project__items__itemButton">
                            <router-link class="header__menu__item" to="/projectdetails"><svg width="70" height="70"
                                    viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                                    <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg></router-link>

                        </button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        items: []
    },
    data() {
        return {
            filterText: '',
        }
    },
    computed: {
        filterArticles() {
            return this.items.filter(item => item.tags.includes(this.filterText))
        },
    },

}
</script>
<style>
.project__sort {
    display: flex;
}

.form_radio_btn {
    padding: 26px 66px;
}

.project__items {

    gap: 28px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
}

.project__items__item {
    max-width: 585px;
}

/* .project__items__item:nth-child(2){ 
    grid-row: span 135;
}
.project__items__item:nth-last-child(2),
.project__items__item:nth-last-child(3){
    margin-bottom: 0;
}  */

.project__items__box {
    display: flex;
    justify-content: space-between;
}

.project__pagination {
    margin-top: 61px;
    justify-content: center;
    display: flex;
    gap: 20px;

}
</style>