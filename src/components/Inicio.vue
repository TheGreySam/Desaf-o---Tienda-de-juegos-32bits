<template>

    <div class="p-5">
        <h1>32bits</h1>
        <h2>Juegos de PC y consolas</h2>
        <Juegos />
        
        
    
     </div>
          
   
</template>
<script>
import Juegos from "../components/Juegos.vue";
//import {mapState} from 'vuex'
export default {
    components: { Juegos },
    //computed: {
        //...mapState(){
            //state
        //},
        //listaJuegos(){
        //return this.$store.getters.listaJuegos
    //},
    //},
      //mapState({
        
        //codigo: (state) =>{
        //    return `${state.codigo}`
        //},
        //nombre: (state) => {
        //    return `${state.nombre}`
        //},
        //stock: (state) => {
        //    return `${state.stock}`
        //},
        //precio: (state) => {
        //    return `${state.precio}`
        //},
        //color: (state) => {
        //    return `${state.color}`
        //},
        //destacado: (state) => {
        //    return `${state.destacado}`
        //},

    //}),
    

    
    
}
</script>
<style scoped>

</style>
