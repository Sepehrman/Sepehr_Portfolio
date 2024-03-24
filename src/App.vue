<script setup>


import Navbar from './components/Navbar.vue'
import Footer from "./components/Footer.vue";

</script>


<style scoped>


@font-face {
  font-family: 'Roboto-Medium';
  src: local("Roboto"),
  url('/src/assets/fonts/Roboto-Medium.ttf') format("truetype");
}

@font-face {
  font-family: 'Roboto-Regular';
  src: local("Roboto"),
  url('/src/assets/fonts/Roboto-Regular.ttf') format("truetype");
}

@font-face {
  font-family: "Roboto-Light";
  src: local("Roboto"),
  url('/src/assets/fonts/Roboto-Light.ttf') format("truetype");
}

@font-face {
  font-family: "Rajdhani-Regular";
  src: local("Rajdhani"),
  url('/src/assets/fonts/Rajdhani-Regular.ttf') format("truetype");
}

@font-face {
  font-family: "Rajdhani-Light";
  src: local("Rajdhani"),
  url('/src/assets/fonts/Rajdhani-Light.ttf') format("truetype");
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  /*margin-bottom: 5.5rem;*/
  overflow-x:hidden;
}
.navbarStyles{
  z-index:200;
  /*background-color: #646cff;*/
}
.viewStyles{
  padding: 6% 6% 0 6%;
}


</style>


<template>
  <main>
    <Navbar class="navbarStyles"/>
    <span class="viewStyles">
      <RouterView/>
    </span>
    <Footer class="navbarStyles"/>
  </main>
</template>

