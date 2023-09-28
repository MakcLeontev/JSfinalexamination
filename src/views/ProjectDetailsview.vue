<template>
    <div>
        <HeaderComp />
        <ProjectDetails/>
        <FooterComp/>
    </div>
</template>
  
<script>
// @ is an alias to /src

import FooterComp from '@/components/FooterComp.vue';
import HeaderComp from '@/components/HeaderComp.vue';
import ProjectDetails from '@/components/ProjectDetails.vue';


export default {
    name: 'ProjectDetailsview',
    components: {
    HeaderComp,
    ProjectDetails,
    FooterComp
}
}
</script>