<template>
    <div>
        <HeaderComp />
        <div class="notFound center">
            <div class="notFound__description">
                <div class="notFound__description__block">
                    <h1 class="notFound__description__header1">404</h1>
                    <h2 class="notFound__description__header2">We are sorry, but the page you requested was not found</h2>
                </div>
                
                <button class="banner__element__intro__button">
                    <router-link class="banner__element__intro__button__text" to="/">Back To Home</router-link>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                        <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887"
                            stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                    </svg>
                </button>
                
            </div>
            <img class="notFound__img" src="../assets/NotFoundImage.jpg" alt="NotFoundImage">
        </div>

    </div>
</template>
  
<script>
// @ is an alias to /src

import HeaderComp from '@/components/HeaderComp.vue';


export default {
    name: 'NotFound',
    components: {
        HeaderComp,

    }
}
</script>
<style>
.banner__element__intro__button__text{
    text-decoration: none;
}
.notFound {
    margin-top: 45px;
    display: flex;
    align-items: center;
    gap: 81px;
}

.notFound__description {
    display: flex;
    width: 569px;
    flex-direction: column;
    align-items: flex-start;
    gap: 23px;
    flex-shrink: 0;
}

.notFound__description__block {
    display: flex;
    width: 569px;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
}

.notFound__description__header1 {
    display: flex;
    width: 395px;
    height: 172px;
    flex-direction: column;
    justify-content: center;
    color: #CDA274;
    font-family: DM Serif Display;
    font-size: 250px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 312.5px */
}

.notFound__description__header2 {
    display: flex;
    width: 569px;
    height: 139px;
    flex-direction: column;
    justify-content: center;
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 52.5px */
    letter-spacing: 0.35px;
}

.notFound__img {
    width: 913px;
    height: 1042px;
    flex-shrink: 0;
    border-radius: 0px 0px 0px 353px;
    background: #EBEBEB;
}
</style>