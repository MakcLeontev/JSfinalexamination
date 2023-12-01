<template lang="">
   <header class="header center">
        <a href="/"><img class="header__logo" src="../assets/Logo.png" alt="logo"></a>
        <div class="header__menu">
            <nav class="header__menu">
                <router-link class="header__menu__item" to="/">Home</router-link> 
                <router-link class="header__menu__item" to="/project">Project</router-link>
                <router-link class="header__menu__item" to="/blog">Blog</router-link>
             </nav>
            <router-view/>
        </div>
    </header>
</template>
<script>
export default {

}
</script>
<style >
* {
    margin: 0;
    padding: 0;
}

.center {
    padding-left: calc(50% - 600px);
    padding-right: calc(50% - 600px);
}

.header {
    margin-top: 53px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header__logo {
    width: 177px;
}

.header__menu {
    width: 243px;
    display: flex;
    justify-content: space-between;
}

.header__menu__item {
    text-decoration: none;
    color: #292F36;
    text-align: center;
    font-family: Jost;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
}
</style>