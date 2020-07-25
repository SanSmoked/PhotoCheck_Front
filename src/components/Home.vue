<template>
  <div>
    <div class="card bg-light">
      <div class="card-header">
        <div class="row">
          <h5 class="col-3">Hola,Dr(a) .....</h5>
          <img class="col-6" alt="Vue logo" src="@/assets/photoCheckLogo.svg" />
          <input class="col-3" placeholder="cedula" />
        </div>
      </div>
      <div class="card-body">
        <ListPatients />
      </div>
    </div>
  </div>
</template>

<script>
import ListPatients from "./ListPatients.vue";

export default {
  name: "Home",
  components: {
    ListPatients
  }
};
</script>

<style scoped>
.card {
  margin-top: 5%;
}
</style>