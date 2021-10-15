<template>
  <h1>Counter vuex</h1>
  <!--<h2>Direct Access: {{$store.state.count}}</h2> -->
  <!--CON EL MODULO  -->
  <h2>Direct Access: {{$store.state.counter.count}}</h2>
  <!-- <h2>Computed: {{ computedStore }}</h2> -->
  <h2>Computed: {{ computedStore }}</h2>
  <hr>
  <button @click="increment">+1</button>
  <button @click="incrementBy">+5</button>
  <button @click="randonInt" :disabled="isLoading">Random</button>
  <h1>Vuex - Mapstate</h1>
  <h2>Mapstate: {{counter}}</h2>
  <h2>{{lastMutations}}</h2>
  <h2>{{$store.getters.squareCount}}</h2>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  // La forma mas utilizada para agarrar la informacion del vuex es con el mapState

  computed: {
    // computedStore () {
    //   return this.$store.state.count
    // },

    // CON EL MODULO
    computedStore () {
      return this.$store.state.counter.count
    },

    // Forma sencilla
    // ...mapState(['count', 'lastMutation'])

    // Para Renombrar la variable del state
    // SI ESTA EN MODULO SOLO HAY QUE PONER EL NOMBRE DE COMO LO PUSISTE
    // EJEMPLO state.counter.count
    ...mapState({
      counter: state => state.counter.count,
      lastMutations: state => state.counter.lastMutation,
      isLoading: state => state.counter.isLoading
      // lastMutations: 'lastMutation'
    })
  },
  methods: {
    increment () {
      // Para llamar al mutations tenemos que hacer lo siguiente
      this.$store.commit('increment')

      // esta forma es la que dice en el video
      // this.$store.commit('counter/increment')
    },
    incrementBy () {
      this.$store.commit('incrementBy', { name: 'adr', ag: 8 })
      // esta forma es la que dice en el video
      // this.$store.commit('incrementBy', { name: 'adr', ag: 8 })
    },
    // Mejor forma de hacer lo de Actions
    // ...mapActions(['incrementRandomInt'])

    // Cuando estas en los modulos
    // ...mapActions('counter', ['incrementRandomInt'])

    // Las propiedades de aqui se puede usar en otro lados usando el this
    // EJM this.randon()
    ...mapActions({
      randonInt: 'incrementRandomInt'
    })

    // Con el module
    // ...mapActions('counter', {
    //   randonInt: 'incrementRandomInt'
    // })

    // Una forma de hacerlo para enviar a actions
    // incrementByRandom () {
    // Una forma de enviar a una actions
    // this.$store.dispatch('incrementRandomInt')
    // }
  }
}
</script>
