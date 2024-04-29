<script setup>
import { RouterLink, RouterView } from 'vue-router'




</script>


<template>
  <br><br><br>
  <hr style="border: 1px solid rgb(20, 60, 100);">



  <h1>Projects</h1>
  <div class="container">
    <div class="card">

      <div class="card-item">
        <router-link to='/WordTrack'>
          <div class="card-title">
            <h5>Word Track</h5>
          </div>
          <div class="image-container">
            <img src="../assets/wordtrack.jpg" alt="" />
          </div>
          <div class="card-overlay">
            <div class="card-details">
              <p>A dictionary app, developed to help those in need of categorizing, saving and understanding word definitions</p>
            </div>
          </div>
        </router-link>
      </div>

      <div class="card-item">
        <router-link to='/Concord'>
          <div class="card-title">
            <h5>Concord</h5>
          </div>
          <div class="image-container">
            <img src="../assets/Concord.png" alt="" />

          </div>
          <div class="card-overlay">
            <div class="card-details">
              <p>A Chat application allowing for direct communication between multiple peers. Enabling channel creations to streamline messages to multiple peers at once.</p>
            </div>
          </div>
        </router-link>
      </div>

      <div class="card-item">
        <router-link to='/Broadcast'>
          <div class="card-title">
            <h5>Broadcast Password Cracker</h5>
          </div>
          <div class="image-container">
            <img src="../assets/broadcast.png" alt="" />
          </div>
          <div class="card-overlay">
            <div class="card-details">
              <p>A Python project that is responsible for sending hashed passwords to multiple peers/hosts, where each host uses a unique number of threads to indicate the speed at which each password is decrypted</p>
            </div>
          </div>
        </router-link>
      </div>


      <div class="card-item">
        <router-link to='/NetworkSnake'>
          <div class="card-title">
            <h5>Network Snake Simulation</h5>
          </div>
          <div class="image-container">
            <img src="../assets/Network Snake Simulation.png" alt="" />
          </div>
          <div class="card-overlay">
            <div class="card-details">
              <p>A Python application, responsible for sending data over the network through a proxy that is responsible
              </p>
            </div>
          </div>
        </router-link>
      </div>

    </div>
  </div><br><br><br>

  <hr style="border: 1px solid rgb(20, 60, 100);">



  <h1>Game Projects</h1>
  <div class="container">
    <div class="card">


      <div class="card-item">
        <router-link to='/Gouken'>
          <div class="card-title">
            <h5>Gouken</h5>
          </div>
          <div class="image-container">
            <img src="../assets/Gouken.png" alt="" />
          </div>
          <div class="card-overlay">
            <div class="card-details">
              <p>A 2D fighting game, built for iOS platforms using Swift</p>
            </div>
          </div>
        </router-link>
      </div>


      <div class="card-item">
        <router-link to='/LastBlast'>
          <div class="card-title">
            <h5>Last Blast</h5>
          </div>
          <div class="image-container">
            <img src="../assets/lastblast2.png" alt="" />
          </div>
          <div class="card-overlay">
            <div class="card-details">
              <p>A First Person Shooter game<br><br><b>Tech Stack: Unity, C#</b></p>
            </div>
          </div>
        </router-link>
      </div>



    </div>
  </div>


</template>

<script>
export default {
  name: "projects-grid",
  methods: {
  },
  mounted() {
  },
  data(){
  },
  props: {
  },
}


</script>

<style scoped>

</style>