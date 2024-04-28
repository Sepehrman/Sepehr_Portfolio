<script setup>
import { RouterLink, RouterView } from 'vue-router'




</script>




<template>
    <br><br><br>
    <hr style="border: 1px solid rgb(20, 60, 100);">
    <h1>Professional Experience</h1>
    <div class="container">
      <div class="card">
  
        <div class="card-item">
          <router-link to='/Suez'>
            <div class="card-title">
              <h5>Application Developer</h5>
            </div>
            <div class="image-container">
              <img src="../assets/suez.png" alt="" />
            </div>
            <div class="card-overlay">
              <div class="card-details">
                <p>Professional Work experience implementing a suite of products with water utility data sources and other enterprise-level applications</p>
              </div>
            </div>
          </router-link>
        </div>
  
        <div class="card-item">
          <router-link to='/Wiibid'>
            <div class="card-title">
              <h5>Backend Developer - Mobile (Industry Sponsored Student Project)</h5>
            </div>
            <div class="image-container">
              <img src="../assets/wiibid.png" alt="" />
            </div>
            <div class="card-overlay">
              <div class="card-details">
                <p>A Mobile App developed for an industry client as part of BCIT's Industry Sponsored Student Project.
                  .</p>
              </div>
            </div>
          </router-link>
        </div>
  
        <div class="card-item">
          <router-link to='/TrustingPixels'>
            <div class="card-title">
              <h5>Full Stack Developer (Industry Sponsored Student Project)</h5>
            </div>
            <div class="image-container">
              <img src="../assets/trustingpixels.jpg" alt="" />
  
            </div>
            <div class="card-overlay">
              <div class="card-details">
                <p>A React web Application developed for an industry client as part of BCIT's Industry Sponsored Student Project</p>
              </div>
            </div>
          </router-link>
        </div>
  
        <div class="card-item" style="display: hide; opacity: 0;">
        </div>
  
      </div>
    </div><br><br><br>



</template>