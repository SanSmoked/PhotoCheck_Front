<template>
  <div class="modal-dialog text-center">
    <div class="modal-content">
      <div class="modal-header">
        <img class="col-12" alt="Vue logo" src="@/assets/photoCheckLogo.svg" />
      </div>
      <div class="modal-body">
        <form @submit.prevent="sendForm()">
          <div class="form-group">
            <strong class="float-left">Email</strong>
            <input type="email" placeholder="Email" v-model="form.email" />
          </div>
          <div class="form-group">
            <strong class="float-left">Contraseña</strong>
            <input type="password" placeholder="Contraseña" v-model="form.password" />
          </div>
          <button class="btn btn-primary">Iniciar sesión</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
//import db from '../main';
import firebase from "firebase";

export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    sendForm() {
      if ((this.form.email, this.form.password)) {
        firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password)
          .then(() => {
              console.log(this.form);
              this.$router.push("/home");
          })
          .catch(err => {
              console.log(err);
          });
      } else {
        console.log("todos los campos son necesarios");
      }
    }
  }
};
</script>

<style scoped>
.modal-content {
  margin-top: 100px;
}
.modal-body {
  background: rgb(131, 131, 131);
}
input {
  margin: 0px;
  border: 0px;
  outline: none;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 10px;
  background: white;
}
</style>