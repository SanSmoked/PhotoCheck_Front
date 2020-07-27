<template>
  <div>
    <div class="list-group">
      <div class="card-header list-group-item logo">
        <img class="col-6" alt="Vue logo" src="@/assets/photoCheckLogo.svg" />
      </div>
      <div class="list-group-item">
        <div class="row">
          <div class="personal-information">
            <p class="col">Nombre: {{this.patientById($route.params.cc).nombre}}</p>
            <p class="col">Edad: {{this.patientById($route.params.cc).edad}}</p>
            <p class="col">{{this.patientById($route.params.cc).type}}: {{this.patientById($route.params.cc).documento}}</p>
          </div>
          <!--img :src="this.patientById($route.params.cc).imageUrl" class="imgPatient" /-->
        </div>
      </div>
      <a class="list-group-item list-group-item-action" v-on:click="onclick()" v-for="record in this.getRecordsPerPatient($route.params.cc)" :key="record.id">
        <div class="row" >
          <img
            src="@/assets/folder.png"
            class="folder"
          />
          <p class="col-8">
            <strong>{{record.desc}}</strong>
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "PatientRecord",
  computed: {
    ...mapState(["patients", "records"]),
    ...mapGetters(["patientById", "getRecordsPerPatient"])
  },
  methods: {
    onclick() {
      console.log(this.getRecordsPerPatient("1234"));

      //this.$store.commit('getRecordsPerPatient');
      //console.log(store.commit);
      //this.$router.push("/patientRecord");
    }
  },
  created() {
    this.$store.commit("getRecords");
  }
};
</script>

<style scoped>
.imgPatient {
  height: 20%;
  width: 20%;
  margin: auto;
}

.logo {
  text-align: center;
}

.folder {
  height: 10%;
  width: 10%;
}
.list-group {
  margin-top: 5%;
}
</style>