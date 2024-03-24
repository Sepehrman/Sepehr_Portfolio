<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import Iconify from './Iconify.vue';
import { Icon } from '@iconify/vue';
</script>


<template>
  <footer class="footer">
    <div class="icons">
      <a href="mailto:yaasminaa77@gmail.com"><Icon class="icon" icon="mdi:email" /></a>
      <a href="https://www.linkedin.com/in/yasmina-amirifar/" target="_blank"><Icon class="icon" icon="mdi:linkedin" /></a>
      <a href="https://github.com/Sepehrman" target="_blank"><Icon class="icon" icon="mdi:github" /></a>
    </div>
    <p class="email">Sepehrman@icloud.com</p>
    <p class="copyRight">©2024 by Sepehr Mansouri</p>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: white;
  margin-top: 6%;
  padding-top: 20px;
  height: 130px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 14px;
  font-family: "Roboto-Medium", sans-serif;
  color: #0F1438;
}

.icons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.icon {
  font-size: 30px;
  margin: 0 10px;
  color: #555555;
  transition: color 0.2s ease-in-out;
}

.icon:hover {
  color: #0F1438;
}

.email {
  margin: 0;
  font-size: 16px;
  font-family: "Roboto-Medium", sans-serif;
  color: #0F1438;
}

.copyRight {
  margin-top: 10px;
  font-family: "Roboto-Regular", sans-serif;
  color: #333333;
  font-size: 12px;
}
</style>
