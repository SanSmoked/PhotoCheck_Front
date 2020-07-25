<template>
  <div>
    <div class="list-group">
        <a v-for="pokemon of pokemons" :key="pokemon.id" v-on:click="onclick(pokemon.id)" class="list-group-item list-group-item-action">
          <div class="row">
            <img :src="pokemon.imageUrl" class="imgPatient col-4" />
            <p class="col-8">
              <strong>{{pokemon.name}}</strong>
              <br />
              {{pokemon.height}} años
              <br />
              CC: {{pokemon.id}}
            </p>
          </div>
        </a>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ListPatients",
  computed:{
      ...mapState(['pokemons'])
  },
  data() {
    return {
    }
  },
  methods: {
    onclick(cc) {
      console.log(cc);
      this.$router.push({name:'patientRecord', params:{cc}});
    }
  },
  created() {
    this.$store.commit('fetchData');
  }
};
</script>

<style scoped>
.imgPatient {
  height: 200px;
}
</style>