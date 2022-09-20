<template>
    <div class="d-flex justify-countent-center">
        <h1 class="align-self-center">ho hay nada seleccionado</h1>
    </div>
    <fab/>
    
</template>
<script>
    import {defineAsyncComponent} from 'vue'
   export default{
    components:{
        fab:defineAsyncComponent( () => import('../components/My-Fab.vue'))
    }
   }
</script>

<style lang="scss" scoped>
    div{
        height: 100%;
    }
</style>