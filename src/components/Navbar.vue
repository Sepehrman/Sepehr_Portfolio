<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import Iconify from './Iconify.vue';

</script>


<template>
  <nav class="navbar">
    <div class="navbar-section logo">
      <router-link to="/" class="navbar-link">
        <img class="logo-y" src="../assets/logo-green-noSpace.png" alt="hero-image"  >
        <p class="logo-name">asmina Amirifar</p>
      </router-link>
    </div>
    <div class="navbar-section pages">
<!--      <router-link to="/#section1" class="navbar-link hover-underline-animation" @click="activate(`/`)"  :class="{active: Projects}">Projects</router-link>-->
      <a href="/#section1" class="navbar-link hover-underline-animation" @click="scrollToSection" :class="{active: Projects}">Projects</a>
      <router-link to="/About" class="navbar-link hover-underline-animation" @click="activate(`/About`)"  :class="{active: About}">About</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    activate: function(pageName){
      this.path= pageName

      this.Projects = false
      this.About = false

      if (this.path ===`/About`) {this.About=true;}
      else{this.Projects = true;}

    },
    scrollToSection() {
      const section = document.querySelector('#section1');
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  },
  mounted() {
    this.path === `/About`? this.About=true: this.Projects = true;
  },
  data(){
    return {
      Projects: false,
      About: false,
      path: window.location.pathname,
    }

  },
  props: {
    // navName: {
    //   type: String,
    //   required: true
    // }
  },
}
</script>

<style scoped>

.navbar {
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  padding: 0.4rem;
  top: 0;

  /*mask-image: linear-gradient(to bottom,black 10%,transparent 80%);*/
  /*backdrop-filter: invert(90%);*/
  /*backdrop-filter: blur(4px);*/
  background-color: rgba(255,255,255,0.9);
  border-bottom: 0.4mm solid rgba(57,53,61,0.4);

}

.navbar-section {
  margin: 0 20px;
  color: #373a3c;
  font-size: 0.75rem;
  /*font-family: "Roboto-Regular";*/
  text-decoration: none;
  display: flex;
  align-items:center ;
  justify-content: flex-start;
}

.navbar-section .pages{
  justify-content: flex-end;

}

.navbar-section .logo{
  justify-content: flex-start;
}


.navbar-link {

  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pages .navbar-link {
  color: #0F1438;
  font-size: 14px;
  font-family: "Roboto-Regular", sans-serif;
  margin-right:15px;

}

.logo .navbar-link{
  color: #0F1438;
  font-size: 18px;
  font-family: "Roboto-Regular", sans-serif;
  margin-left:25px;

}


.hover-underline-animation{
  text-decoration: underline rgba(94, 193, 158, 0) 2px;
  text-underline-offset: 7px;
  transition: 0.3s;

}

.hover-underline-animation:hover{
  text-decoration: underline rgba(94, 193, 158, 1) 2px;
  text-underline-offset: 7px;
}

.active{
  text-decoration: underline #5ec19e 2px;
  text-underline-offset: 7px;
}

.logo-y, img{
  height: 30px;
}


@media(max-width:896px){
  .logo-name{
    display:none;
  }

  .navbar {
    padding: 1rem;

  }

}

@media(max-width:670px){

  .pages .navbar-link {
    font-size: 18px;

  }
}

</style>