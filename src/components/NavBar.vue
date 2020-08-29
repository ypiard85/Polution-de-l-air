<template>
    <nav class="blue">
        <div class="nav-wrapper container">
          <a href="#" class="brand-logo">Firebase - qualité air</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/admin">Admin</router-link></li>
            <li><button @click="logOut" v-if="connected" >LogOut</button></li>            
                     
          </ul>
        </div>
      </nav>    
</template>

<script>
    import {auth} from '@/firebase'

    export default{
        data(){
            return{
                connected: false
            }
        },

        mounted(){
            auth.onAuthStateChanged(user => {
                if(user){
                    this.connected= true
                }else{
                    this.connected= false
                }
            })
        },

        methods:{
            logOut(){
                auth.signOut();
                this.$router.replace('/')
            }
        }
    }
</script>

<style scoped>
    button{
        background-color: transparent;
        border: none;
        color: white;
        cursor: pointer;
    }
</style>