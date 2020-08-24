<template>
    <div class="list-group">
      <div class="card-header list-group-item logo">
          <div class="text-center">
              <img class="col-6" alt="Vue logo" src="@/assets/photoCheckLogo.svg" />
          </div>
      </div>
      <div class="list-group-item" v-for="record in this.getFolderById($route.params.recordId).images" :key="record.id">
        <img @click="dialog = true" class="img-pacient-record" :src="record.image"/>
        <v-dialog v-model="dialog" width="500">
          <div class="modal-body">
            <img class="img-pacient-record-zoom" :src="record.image"/>
          </div>
        </v-dialog>
      </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "folderLayout",
    computed:{
        ...mapGetters(['getFolderById'])
    },
    data() {
    return {
      dialog: false
    };
    }
}
</script>

<style scoped>
.img-pacient-record {
  height: 200px;
}

.img-pacient-record-zoom{
  width: 100%;
}
</style>