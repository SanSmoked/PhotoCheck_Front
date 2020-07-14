<template>
    <div class="modal-dialog text-center">
        <div class= "modal-content">
            <div class="modal-header">
                 <img  class="col-12" alt="Vue logo" src="@/assets/photoCheckLogo.svg">
            </div>
            <div class="modal-body">
                <form @submit.prevent="sendForm()">
                    <div class="form-group">
                        <strong class="float-left">Email</strong>
                        <input type="email" placeholder="Email" v-model="form.email">
                    </div>
                    <div class="form-group">
                        <strong class="float-left">Contraseña</strong>
                        <input type="password" placeholder="Contraseña" v-model="form.password">
                    </div>
                    <button class="btn btn-primary">Iniciar sesión</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return {
            form:{
                email:"",
                password:""
            }

        }
    },
    methods:{
        sendForm(){
            console.log(this.form);
        }
    }

}
</script>

<style scoped>
.modal-content{
    margin-top: 100px;
}
.modal-body{
    background:rgb(92, 92, 92);
}
input { 
    margin: 0px; 
    border: 0px; 
    outline: none; 
    padding: 10px; 
    border-radius: 5px; 
    width: 100%;
    margin-bottom: 10px;
}
</style>