<template>
     <ul>
         <li v-for="juego in listaJuegos" :key="juego.codigo">
             {{juego.codigo}}

         </li>
     </ul>
     

</template>
<script>
export default {
    name: "Juegos",
    props: {
        juegos: {
            type:Array,
            require: true
        }
    }
}
</script>
