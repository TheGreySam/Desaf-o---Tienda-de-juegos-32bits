<template>
  <div>
    <section class="">
      <h1>Búsqueda</h1>
      <h3>Introduce un Filtro</h3>
      <div class="p-2">
  <div class="row">
    <div class="col-sm w-50">
      <input 
          class="form-control mr-sm-2" 
          type="number" 
          placeholder="Escriba el nombre de su producto" 
          :value="$store.state.busqueda"
          @input="$store.dispatch('setBusqueda', Number.parseInt($event.target.value))"
          >
    </div>
    <div class="col-sm">
      <button 
          class="btn btn-primary my-2 my-sm-0" 
          type="submit">Search
        </button>
    </div>
    
  </div>
</div>
      
      <input
        type="number"
         placeholder="Escriba el nombre del producto"
        :value="$store.state.busqueda"
        @input="
          $store.dispatch('setBusqueda', Number.parseInt($event.target.value))
        "
      />
      <Juegos
        
      />
      <!-- 
        <Juegos
        v-if="$store.getters.juegosSegunBusqueda.length > 0"
        :juegos="$store.getters.juegosSegunBusqueda"
      />
      <ul v-else>
        <li>Escribe algo para buscar</li>
      </ul>
    </section>
    <section>
      <h3>Cantidad de juegos totales y de stock total</h3>
      <ul>
        <li>juegos totales: {{ $store.state.juegos.length }}</li>
        <li>stock total: {{ $store.getters.listaJuegos }}</li>
      </ul>
    </section>
    <section>
      <h3>Listado de juegos</h3>

      <Juegos :juegos="$store.state.juegos" />
        -->

        <Juegos />

      
    </section>
  </div>
</template>

<script>
import Juegos from "../components/Juegos.vue";
export default {
  name: "BusquedasPage",
  components: { Juegos },
};
</script>

<style></style>
