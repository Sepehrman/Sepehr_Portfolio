<script setup>



//import Card from '../components/home/Card.vue';
import Grid from '../components/ProjectGrid.vue';
import TryOut from "../components/TryOut.vue";
</script>

<template>

  <div class="tq header">
    <div class="headerContent">
      <h1> Trash Queens </h1>
      <p>
        <a target="_blank" href="https://github.com/phoenixlai833/TrashQueens"> Github</a>,
        <a target="_blank" href="https://trash-queens-dev.vercel.app/"> Live</a>,
        <a target="_blank" href="https://www.figma.com/file/DdMZhIVqv59MYfNoGr7Bwx/Trash-Queen-%E2%80%93-FSWD?node-id=0%3A1&t=WnfnFi1YnGMbamK6-1"> Figma</a>
      </p>
      <p> As a member of a four-person team, I contributed to an educational recycling game project aimed at promoting proper recycling practices in British Columbia. Our team's goal was to create a fun and engaging game that would teach players how to recycle correctly.</p>
      <p>I took on the role of designing the app's game screens using <span class="green"> Figma</span>, from the initial concept to the final product. Additionally, I collaborated with the team to develop the front end of the game, utilizing<span class="green"> Vue.js</span> to ensure that it was both responsive and interactive.</p>
      <p> Despite facing challenges such as creating all assets from scratch and designing the frames while planning the user flow and learning the new technology, we successfully overcame them by working collaboratively.</p>
      <p>Through this project, I improved my skills in time management, leadership, and teamwork, allowing me to contribute significantly to the project's success. Overall, it was a fulfilling experience that enabled me to expand my expertise and contribute to a meaningful project.</p>
    </div>
    <img class="tqImage" src="../assets/tq-app.gif">
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