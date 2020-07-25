<template>
  <div>
    <div class="list-group">
      <a
        v-for="patient of patients"
        :key="patient.CC"
        class="list-group-item list-group-item-action"
        v-on:click="onclick(patient.CC)"
      >
        <div class="row">
          <img :src="patient.profileImg" class="imgPatient col-4" />
          <p class="col-8">
            <strong>{{patient.name}}</strong>
            <br />
            {{patient.age}} años
            <br />
            CC:{{patient.CC}}
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
  computed: {
    ...mapState(["patients"])
  },
  methods: {
    onclick(cc) {
      console.log(cc);
      this.$router.push({name:'patientRecord', params:{cc}});
    }
  }
};
</script>

<style scoped>
.imgPatient {
  height: 200px;
}
</style>