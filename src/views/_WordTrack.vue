<script setup>



//import Card from '../components/home/Card.vue';
import Grid from '../components/ProjectGrid.vue';
import TryOut from "../components/TryOut.vue";
</script>

<template>

  <div class="tq header">
    <div class="headerContent">
      <h1> WordTrack </h1>
      <a target="_blank" href="https://word-track-seven.vercel.app/">Live Link</a>, 
      <a target="_blank" href="https://github.com/Sepehrman/WordTrack"> Github</a>

      <p>
        <b>Tech Stack: </b> : React, Node.js, HTML, CSS, JavaScript, Firebase, Heroku, Bootstrap, jQuery, Google APIs
        <br>
      </p>

      <p>Collaborated with a team of 4 to create an educational dictionary app, enabling easy access to word definitions, examples, and real-time pronunciation</p>
      <p>Engineered a full stack solution with React, Node.js, allowing users to categorize words and self-quiz using flashcards.</p>
      <p>Designed and implemented the Firebase database schema, and incorporated ajax functionalities</p>
        <p>Integrated robust security features including User Authentication and password reset, ensuring user integrity and privacy</p>
    </div>
    <img class="tqImage" src="../assets/wordtrack_srnshot.jpg">
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
.tq.header{

  /*height:70vh;*/
  max-width: 1200px;
  margin: 50px  0 0 0;

  display: flex;
  justify-content: space-between;
  /*justify-content: flex-start; !*change when hero text is centre*!*/
  align-items: center;
}

.headerContent{
  margin-right: 100px;
  font-family: "Roboto-Regular", sans-serif;
}
.tqImage{
  opacity: 0.9;
  max-width: 220px;
  border:1px solid darkslategrey;
  box-shadow: 2px 2px 5px 1px darkslategrey;
  border-radius: 2%;
}
.green{
  color:#5EC19E;
  font-family:"Roboto-Medium", sans-serif;
}




.header a {
  /*text-decoration: none;*/
  color:  #C82c28;
  text-decoration: underline;
  /*font-family: 'Roboto-Medium';*/

  /*font-weight: 900;*/
  position: relative;
}

main h2{
  margin-bottom:40px;
  /*color:red;*/
}


@media screen and (max-width: 768px) {

  .tq.header {
    margin: 50px 0;
    flex-direction: column;
    align-items: center;
  }

  .headerContent{
    margin-right: 0;
    margin-bottom: 20px;
    text-align: left;
  }
  .tqImage {
    max-width: 350px;

  }
}

</style>