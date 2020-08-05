<template>
  <div>
    <div class="list-group">
        <a v-for="patient of patients" :key="patient.id" v-on:click="onclick(patient.document)" class="list-group-item list-group-item-action">
          <div class="row">
            <img :src="patient.photo" class="imgPatient" />
            <p class="col-8">
              <strong>Nombre: {{patient.name}}</strong>
              <br />
              Edad: {{patient.age}} años
              <br />
              {{patient.type}}: {{patient.document}}
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
      this.$store.commit("getRecords");
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
  height: 15%;
  width: 15%;
  margin: auto;
}
</style>