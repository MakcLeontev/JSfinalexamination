<template>
    <div class="project-details center">
        <div class="project-box">
            <h1 class="project-header">{{ headerText }}</h1>
            <p class="project-text">{{ parText }}</p>
        </div>
        <div class="carusel-box">
            <div class="container">
                <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img :src=path class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img :src=path class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img :src=path class="d-block w-100" alt="...">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Предыдущий</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Следующий</span>
                    </button>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'ProjectDetails',
    computed: {
        ...mapState(['headerText', 'parText', 'path'])
    },
}
</script>
<style>
.container {
    max-width: 1200px;
    height: 800px;
}

.w-100 {

    border-radius: 70px;
}

.project-header {

    width: 565px;
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 62.5px */
    letter-spacing: 1px;
}

.project-text {
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
}

.project-details {
    margin-top: 200px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 100px;
}
.project-box{
    max-width: 658px;
}
</style>