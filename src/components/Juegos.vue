<template>
     <ul>
         <li v-for="juego in juegos" :key="juego.codigo" 
         :style="{ 'background-color': juego.color}">
             {{juego.codigo}} | {{juego.nombre}} | {{juego.stock}} | {{juego.precio}}

         </li>
     </ul>
     

</template>
<script>
export default {
    name: "Juegos",
    data: () => ({
        dataJuegos: "",
    }),
    props: {
        juego: 
        {
//            type:Array,
            type: Object,
            require: true
        }
    },
    computed: {

    }
}
</script>
