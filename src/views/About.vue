<script setup>



//import Card from '../components/home/Card.vue';
import Grid from '../components/ProjectGrid.vue';
import TryOut from "../components/TryOut.vue";
</script>

<template>

  <div class=" about header">
    <div class="headerContent">
      <h1> Hey there.</h1>
      <p style="color:#1161b1">I am Sepehr Mansouri a Developer based in Vancouver, Canada.</p>
      <p>As a developer, I enjoy the creative aspect of building new things and solving complex problems. 
      <p>It is rewarding to see a project come to life and know that I played a role in its creation.
      I also enjoy the constant learning and growth opportunities that come with being a developer, as technology and programming languages are always evolving.</p> I appreciate the collaborative aspect of development, working with a team to achieve a common goal and seeing how everyone's unique skills and perspectives contribute to the final product.</p>


    </div>
    <img class="myImage" src="../assets/about-me-s.jfif">
  </div>
</template>

<script>
export default {
  name: "Projects",
  methods: {

  },
  computed: {},
  props: {},
  data() {
    return {

    };
  },
  components: {

  }
};
</script>

<style>
/*@import url('./scss/main.scss');*/
/*@import url('../../scss/main.scss');*/
.header{

  min-height:50vh;
  max-width: 1200px;
  margin: 30px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

}

.headerContent{
  margin-right: 100px;
  font-family: "Roboto-Regular", sans-serif;
}
.myImage{
  opacity: 0.9;
  width: 200px;
  border:1px solid darkslategrey;
  box-shadow: 10px 10px 1px 1px #5EC19E;
  border-radius: 2%; /* Add a circular border /
border: 5px solid #fff; / Add a white border /
box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); / Add a shadow /
transition: transform 0.5s ease; / Add a hover effect */
}
.green{
  color:#5EC19E;
  font-family:"Roboto-Medium", sans-serif;
}




.header a {
  text-decoration: none;
  color: #C82c28;
  font-family: 'Roboto-Medium';

  /*font-weight: 900;*/
  position: relative;
}

main h2{
  margin-bottom:40px;
  /*color:red;*/
}

/*//896*/
@media screen and (max-width: 768px) {

  .header {
    margin: 50px 0;
    flex-direction: column;
    align-items: center;

  }

  .headerContent{
    margin-right: 0;
    margin-bottom: 20px;
    text-align: left;
  }
}

</style>