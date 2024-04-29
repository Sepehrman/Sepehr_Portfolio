<script setup>


//import Card from '../components/home/Card.vue';
import Grid from '../components/ProjectGrid.vue';
import TryOut from "../components/TryOut.vue";
</script>

<template>

  <div class="tq header">
    <div class="headerContent">
      <h1> Gouken </h1>
      <a target="_blank" href="https://github.com/GameArchGinyuForce/Gouken">Github</a>
      <p>
        <b>Tech Stack: </b> : Swift, XCode, SceneKit, GameplayKit, Multipeer<br>
      </p>

      <p>Developed a 3D Fighting game using Swift, GameKit, and SceneKit frameworks.</p>
      <p>Implemented the core Gameplay Loop & Architecture utilizing the entity-component system, employing an observer pattern to enhance rendering, decrease load time, and optimize event calls by 45%.</p>
      <p>Engineered a peer-to-peer netcode implementation using Lockstep, enabling seamless multiplayer matchmaking within the same network while synchronizing player movements and actions.</p>
      <p>Managed a team of 6 as Project Manager & Scrum Master, effectively assigning tasks and overseeing project milestones throughout its lifecycle.</p>
    </div>
    <img style="max-width: 600px;" src="../assets/Gouken_vid.gif">
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