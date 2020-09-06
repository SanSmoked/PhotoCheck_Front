<template>
  <div class="list-group">
    <div class="card-header list-group-item logo">
      <div class="text-center">
        <img class="col-6" alt="Vue logo" src="@/assets/photoCheckLogo.svg" />
        <v-file-input
          @change="addImage($event, $route.params.id)"
          type="file"
          accept="image/*"
          prepend-icon="mdi-camera"
          placeholder="Seleccionar Imagen"
          class="picker"></v-file-input>
      </div>
    </div>
    <div
      class="list-group-item"
      v-for="record in this.getFolderById($route.params.id).images"
      :key="record.id"
    >
      <img @click="dialog = true" class="img-pacient-record" :src="record" />
      <v-dialog v-model="dialog" width="500">
        <div class="modal-body">
          <img class="img-pacient-record-zoom" :src="record" />
        </div>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import { fb, db, firebase } from "../main";

export default {
  name: "folderLayout",
  computed: {
    ...mapGetters(["getFolderById"]),
  },
  data() {
    return {
      dialog: false,
      images: "",
    };
  },
  methods: {
    addImage(e, id) {
      if (e) {
        let file = e;
        let storageRef = fb.storage().ref("records/" + id + "/" + file.name);
        let task = storageRef.put(file);
        console.log(file);
        task.on(
          "state_changed",
          () => {},
          (error) => {
            console.log(error.message);
          },
          () => {
            task.snapshot.ref.getDownloadURL().then((downloadUrl) => {
              this.images = downloadUrl;
              console.log("URL: " + downloadUrl);
              db.collection("records")
                .doc(id)
                .update({
                  images: firebase.firestore.FieldValue.arrayUnion(downloadUrl),
                });
            });
          }
        );
      }
    },
  },
};
</script>

<style scoped>
.img-pacient-record {
  height: 200px;
}

.img-pacient-record-zoom {
  width: 100%;
}
.picker {
  margin: auto;
  width: 30%;
}
</style>