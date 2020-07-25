<template>
  <div>
    <div class="list-group">
      <div class="card-header list-group-item logo">
        <img class="col-6" alt="Vue logo" src="@/assets/photoCheckLogo.svg" />
      </div>
      <div class="list-group-item">
        <div class="row">
          <div class="personal-information">
            <p class="col">Nombre: {{$route.params.cc}}</p>
            <p class="col">Edad: {{$route.params.cc}}</p>
            <p class="col">Cc: {{$route.params.cc}}</p>
          </div>
          <img :src="'https://i.ytimg.com/vi/WMk_KX_x6X4/maxresdefault.jpg'" class="imgPatient" />
        </div>
      </div>
      <a
        v-for="patient of patients"
        :key="patient.CC"
        class="list-group-item list-group-item-action"
        v-on:click="onclick(patient.CC)"
      >
        <div class="row">
          <img
            :src="'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAq1BMVEX///9SlOJId7Hk5OTMzMxahLnSz8vQ0NBjmuBMkuKLsOPq5+Q6b67FzNhamONjneRWgbiAnsY6X45ylMFRfbRHdrE+ZphLhMkmU4jS1dnX19dMe7Xm7PSgt9XD0OPw8/hpjr4wXpQ8Y5NFZpJQbpdzot2wwtuVr9CMqMx4msXT3ettkL69zOGxw9utvNGesctDb6W8xdFVeadIfb1OitOOr9pDjuN5pNvDyM2bPjJnAAADKElEQVR4nO3d4VbaMBiAYSwt0gFb7RKnlA10Q3Bu2g4V7v/K1lbdhqKepvH0S/e+F9DzPSQpLX/odIiIiIiIiIiIiIiIiIiIiFrQ5OzgY53OF1+aJrzYdJmoqGYqEGycBCqwUPK5achzTWeRDWBOPGua8kxLKytYEidNW3Y28WwBg+igaczOzqwtYRB4TWN2dl6eQqWSWqnyKsn3pjW7mhWTae3VTHu5MRH5jZELvdq+MiVUGERWeHlaKZHCWWJnBQui0DW0BsyJrRcORQqtHcM8fXHwZi1+TA2Fyqaw9ivKCyWR4aO9XaG956MdJTOjZXRIGEQXbRcGatF2YeAZ7FO3hOpns0Kv3gvKy28v5adn8gpqVfiW6fzR3uhe44yweO4NglmrhfkpiNou1KrtQk/bEWo9FNGO31bsCIdqeTkS0OVSDZ8Ig/pCPbzqDgZdAeVTXD0mWhBqNRLBu2swevQbS32h1seCgAVx+zDWFw4vRQFz4vZGrS3UShgwb2uf1hdeiRMOFnaE6WHZSdY06GnZyd1saR1hGt93dNy052nHRw/TpYZC7Z3GbgjjU0PhX6B0YXxqJDyM3RHGhybC2CVhbCBMt4TjgbjGW8Jf1YVfy/2drj6VvRPY3WSrtLxffDMTrvYeCgX2ZzhtLLzec6RrQ6EzwIJoIly9fmE5rUyETQ9dqdBA6NQS7oVRdaFDpzAv7FcXvm966Gq1Xhh+QIhQeggRyg8hQvkhRCg/hAjlhxCh/BAilB9ChPJDiFB+CBHKDyFC+SFEKD+ECOWHEKH8ECKUH0KE8kOIUH4IEcoPIUL5IUQoP4QI5YcQofwQIpQfQoTyQ4hQfggRyg8hQvkhRCg/hAjlhxCh/BAilB/C/1M4D1+/rpzCeXXhjVvCm+rC7Lbpqat0O6ou7K0dWsRw3asu3N+8d4YY9jf7BkI/c4UY9jPfSNjbrP/9BwKh5SOuN76JcOz7fi+7mfeFN19kvXzUcXVh1y/qOVA5aLe6sOM7lQGw3KbOZLBJO8W9xpkM7jNFU2eIhsCOMxvVbIve1x3vC29schclIiIiIiIiIiIiIiJqqN/y2RwJb6cnewAAAABJRU5ErkJggg=='"
            class="folder"
          />
          <p class="col-8">
            <strong>{{patient.name}}</strong>
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "PatientRecord",
  computed: {
    ...mapState(["patients"])
  },
  methods: {
    onclick(cc) {
      console.log(cc);
      //this.$router.push("/patientRecord");
    }
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