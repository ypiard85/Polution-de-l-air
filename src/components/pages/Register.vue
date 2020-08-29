<template>
    <div>
        <h3>S'inscrire</h3>
        <div class="row">
            <form class="col s12" @submit.prevent="registerForm">
              <div class="row">
                <div class="input-field col s6 m6">
                    <input @change="initMessageError" placeholder="Email" id="first_email" type="email" class="validate" v-model="email">                    
                </div>
                <div class="input-field col s6 m6">
                    <input @change="initMessageError" placeholder="Password" id="first_password" type="password" class="validate" v-model="password">                    
                </div>
                <button type="submit" class="btn green">Créer le compte</button>
                <router-link to="/login" style="margin-left: 20px;" class="btn blue">Connexion</router-link>
                </div>
            </form>
        </div>
        <div v-if="msg" class="card-panel teal lighten-2"> {{msg}} </div>

    </div>   
</template>

<script>
    import { auth } from '@/firebase'
    
    export default{
        data(){
            return{
            email: null,
            password: null,
            msg: false
            }
        },

        methods:{
            async registerForm(){
                if(this.password.length >=6){
                    await auth.createUserWithEmailAndPassword(this.email, this.password)
                    await auth.signInWithEmailAndPassword(this.email, this.password)
                    this.$router.replace('/admin')
                    
                }else{
                    this.msg = 'Mot de passe trop court ! > 6 caractères'
                }
            },

            initMessageError(){
                this.msg = false
            }
        }
        
        
    }
</script>

<style scoped>
 
</style>