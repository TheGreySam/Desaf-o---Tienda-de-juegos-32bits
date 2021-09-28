import Vue from 'vue'
import Router from 'vue-router'
import Inicio from "./views/Inicio.vue"

Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [
        { 
            path: "", 
            redirect: "/inicio" 
        },
        { 
            path: "/inicio", 
            component: Inicio, 
            alias: ["/home", "/tablero"] 
        },
        { 
            path: "/busquedas", 
            component: () => import("./views/Busquedas.vue") 
        },
        { 
            path: "/ventas", 
            component: () => import("./views/Ventas.vue") 
        },
        { 
            path: "/total", 
            component: () => import("./views/Total.vue") 
        },
        { 
            path: "*", 
            component: () => import("./views/404.vue") 
        },
      ],
})