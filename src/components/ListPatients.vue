<template>
  <div>
    <div class="list-group">
        <a v-for="patient of patients" :key="patient.id" v-on:click="onclick(patient.documento)" class="list-group-item list-group-item-action">
          <div class="row">
            <!--img :src="pokemon.imageUrl" class="imgPatient col-4" /-->
            <p class="col-8">
              <strong>Nombre: {{patient.nombre}}</strong>
              <br />
              Edad: {{patient.edad}} años
              <br />
              {{patient.type}}: {{patient.documento}}
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
      ...mapState(['patients'])
  },
  methods: {
    onclick(cc) {
      console.log(cc);
      this.$router.push({name:'patientRecord', params:{cc}});
    }
  },
  created() {
    this.$store.commit('getPatients');
  }
};
</script>

<style scoped>
.imgPatient {
  height: 200px;
}
</style>