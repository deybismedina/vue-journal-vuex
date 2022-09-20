<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
        <span class="text-success fs-3 fw-bold">15</span>
        <span class="mx-1 fs-3 ">julio</span>
        <span class="mx-2 fs-4 fw-light">2021,jueves</span>
    </div>

    <div>
        <button class="btn btn-danger mx-2">
            BORRAR
            <i class="fa fa-trash-alt"></i>      
        </button>

        <button class="btn btn-primary ">
            SUBIR FOTO
            <i class="fa fa-upload"></i>      
        </button>
    </div> 
  </div>

<hr>

<div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="¿QUE SUCEDIO HOY?"></textarea>
</div>
<fab  icon="fa-save"/>

<img src="https://curioseando779.files.wordpress.com/2017/06/fondos-paisajes-naturales-158.jpg" alt="entry picture"
 class="img-thumbanail">

</template>
<script>
 import{defineAsyncComponent} from 'vue';
    export default{
      components:{
       fab:defineAsyncComponent(()=>import('../components/My-Fab.vue'))
      }
     }
</script>
<style lang="scss" scoped >
 textarea{
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus{
     outline:none ;   
    }
 }
 img{
   width: 200px;
   position: fixed;
   bottom: 150px;
   right: 20px;
   box-shadow: 0px 5px 10 px rgba($color: #000000, $alpha: 0.2); 
 }
</style>