<template>
    <div>
        <HeaderComp />
       <BlogDetailsBlock/>

    </div>
</template>
  
<script>
// @ is an alias to /src

import BlogDetailsBlock from '@/components/BlogDetailsBlock.vue';
import HeaderComp from '@/components/HeaderComp.vue';


export default {
    name: 'BlogDetails',
    components: {
    HeaderComp,
    BlogDetailsBlock,
}
}
</script>