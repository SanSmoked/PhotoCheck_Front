<template>
  <div>
    <div class="list-group">
      <div class="card-header list-group-item logo">
        <img class="col-6" alt="Vue logo" src="@/assets/photoCheckLogo.svg" />
        <v-btn @click="dialog = true" class="btn" rounded>Nuevo Folder</v-btn>
        <v-dialog v-model="dialog" width="500">
          <div class="modal-body">
            <v-form ref="form" v-model="valid">
              <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="Nombre del Folder"
                required
              ></v-text-field>
              <!--v-file-input v-model="files" multiple accept="image/*" label="File input"></v-file-input-->
              <!--input @change="handleImage" multiple type="file" accept="image/*" /-->
              <v-btn color="error" class="mr-4" @click="reset">Reset</v-btn>
              <v-btn color="error" class="mr-4" @click="sendForm($route.params.cc)">Listo</v-btn>
            </v-form>
            <v-snackbar v-model="snackbar">
              {{ text }}
              <template v-slot:action="{ attrs }">
                <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">Close</v-btn>
              </template>
            </v-snackbar>
          </div>
        </v-dialog>
      </div>
      <div class="list-group-item">
        <div class="row">
          <div class="personal-information">
            <p class="col">
              Nombre: {{this.patientById($route.params.cc).name}}
              <br />
              Edad: {{this.patientById($route.params.cc).age}}
              <br />
              {{this.patientById($route.params.cc).type}}: {{this.patientById($route.params.cc).document}}
            </p>
          </div>
          <img :src="this.patientById($route.params.cc).photo" class="imgPatient" />
        </div>
      </div>
      <a
        class="list-group-item list-group-item-action"
        v-for="record in this.getRecordsPerPatient($route.params.cc)"
        :key="record.id"
        v-on:click="onclick(record.id)"
      >
        <div class="row">
          <img src="@/assets/folder.png" class="folder-img" />
          <p class="col-8 folder">
            <strong>{{record.title}}</strong>
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { db } from "../main";

export default {
  name: "PatientRecord",
  computed: {
    ...mapState(["patients", "records"]),
    ...mapGetters(["patientById", "getRecordsPerPatient"]),
  },
  data() {
    return {
      dialog: false,
      snackbar: false,
      text: "Hello, I'm a snackbar",
      valid: true,
      name: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
    };
  },
  methods: {
    onclick(id) {
      //this.getRecordsPerPatient(recordId)
      console.log(id);
      this.$router.push({name:'folderLayout', params:{id}});
    },
    sendForm(patientId) {
      console.log(patientId);
      this.snackbar = true;
      //const storageref = firebase.storage().ref(`/`)
      //setTimeout(() => {}, 1000);
      if (this.name) {
        db.collection("records").add({
          title: this.name,
          patientId: patientId,
        });
      } else {
        console.log("todos los campos son necesarios");
      }
      this.dialog = false;
      this.$forceUpdate()
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style scoped>
.imgPatient {
  height: 15%;
  width: 15%;
  margin: auto;
}
.btn {
  margin-left: 10%;
}
.logo {
  text-align: center;
}
.folder {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}
.folder-img {
  height: 10%;
  width: 10%;
}
.list-group {
  margin-top: 5%;
}
</style>