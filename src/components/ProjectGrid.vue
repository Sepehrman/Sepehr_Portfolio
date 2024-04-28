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
            <h3>Word Track</h3>
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
        <router-link to='/Wiibid'>
          <div class="card-title">
            <h3>Trash Queens</h3>
          </div>
          <div class="image-container">
            <img src="../assets/homepage-tq.jpg" alt="" />
          </div>
          <div class="card-overlay">
            <div class="card-details">
              <p>An educational game promoting proper waste management practices by teaching players how to recycle effectively.
                .</p>
            </div>
          </div>
        </router-link>
      </div>

      <div class="card-item">
        <router-link to='/TrustingPixels'>
          <div class="card-title">
            <h3>Code Snippet</h3>
          </div>
          <div class="image-container">
            <img src="../assets/homepage-codeSnippet.jpg" alt="" />

          </div>
          <div class="card-overlay">
            <div class="card-details">
              <p>A CRUD React application designed for developers to share their code snippets with others and interact with other developers' code. </p>
            </div>
          </div>
        </router-link>
      </div>

      <div class="card-item">
        <router-link to='/Cibo'>
          <div class="card-title">
            <h3>My Cibo</h3>
          </div>
          <div class="image-container">
            <img src="../assets/homepage-cibo.jpg" alt="" />
          </div>
          <div class="card-overlay">
            <div class="card-details">
              <p>A food management app that not only tracks expiration dates but also suggests recipes based on available ingredients and more.
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
        <router-link to='/Phished'>
          <div class="card-title">
            <h3>Last Blast</h3>
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

      <div class="card-item">
        <router-link to='/Wiibid'>
          <div class="card-title">
            <h3>Gouken</h3>
          </div>
          <div class="image-container">
            <img src="../assets/homepage-tq.jpg" alt="" />
          </div>
          <div class="card-overlay">
            <div class="card-details">
              <p>A 2D fighting game, built for iOS platforms using Swift</p>
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