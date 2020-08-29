<template>
    <div>
        <h3>Connexion</h3>
        <div class="row">
            <form class="col s12" @submit.prevent="loginForm">
              <div class="row">
                <div class="input-field col s6 m6">
                    <input @change="initMessageError" placeholder="Email" id="first_email" type="email" class="validate" v-model="email">                    
                </div>
                <div class="input-field col s6 m6">
                    <input @change="initMessageError" placeholder="Password" id="first_password" type="password" class="validate" v-model="password">                    
                </div>
                    <button type="submit" class="btn green">Connexion</button>
                    <router-link to="/register" style="margin-left: 20px;" class="btn blue">Créer un compte</router-link>                
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
           async loginForm(){
               try {
                await auth.signInWithEmailAndPassword(this.email, this.password)
                this.$router.replace('/admin')
               } catch (error) {
                   this.msg = "Erreur lors de l'authentification"
                   
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