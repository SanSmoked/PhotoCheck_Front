<template>
        <div class="divlogin">
        <div class="container">
            <div class="divcont">
                <h3>{{ title }}</h3>
                <form @submit.prevent="sendForm()">
                    <input type="email" :class="{'error':validaEmail}" placeholder="Email" v-model="form.email">
                    <input type="password" v-if="form.type!=2" :class="{'error':validaPassword}" placeholder="Contraseña" v-model="form.password" >
                    <input type="password" v-if="form.type==1" :class="{'error':validaRepetirPassword}" placeholder="Repetir contraseña" v-model="form.passwordos" >
                    <button>Iniciar sesión</button>
                    <a href="javascript:void(0)" @click="form.type=2" v-if="form.type!=2" >Recuper contraseña</a>
                    <a href="javascript:void(0)" @click="form.type=1" v-if="form.type!=1" >Registrarme</a>
                    <a href="javascript:void(0)" @click="form.type=0" v-if="form.type!=0" >Iniciar sesión</a>
                </form>
            </div>            
        </div>
    </div>
</template>

<script>
export default {
        data() {
        return {        
        form:{
            type:0, // 0 = Login , 1 = Registro 2- Recuperar contraseña
            email:"",
            password:"", 
            passwordos:""}
        };
        },
    methods:{
        sendForm(){
            if(this.validaType()){
                console.log(this.form);
            }
        },
        validaType(){
            if(this.form.type==0 && !this.validaEmail && !this.validaPassword){
                return true;
            }
            else if(this.form.type==1 && !this.validaEmail && !this.validaRepetirPassword){
                return true;
            }
            else if(this.form.type==2 && !this.validaEmail){
                return true;
            }
            return false;
        }
    },
    computed:{
        validaEmail(){
            var exp = new RegExp("/i");
            if(exp.test(this.form.email)){
                return false;
            } else{
                return true;
            }
        },
        validaPassword(){
            var exp = new RegExp("/");
            if(exp.test(this.form.password)){
                return false;
            } else{
                return true;
            }
        },
        validaRepetirPassword(){
            if(this.form.password==this.form.passwordos){
                return false;
            } else{
                return true;
            }
        },
        title(){
            return (this.form.type==0)?'Login':(this.form.type==1)?'Registro':'Recuperar contraseña';
        }
    }
}
</script>