<script setup>


//import Card from '../components/home/Card.vue';
import Grid from '../components/ProjectGrid.vue';
import TryOut from "../components/TryOut.vue";
</script>

<template>

  <div class="tq header">
    <div class="headerContent">
      <h1> Last Blast </h1>
      <a target="_blank" href="https://sepehrman.itch.io/last-blast">Download Link</a>, 
      <a target="_blank" href="https://www.youtube.com/watch?v=bSAaRPYsSNg&ab_channel=SepehrMansouri">Trailer</a>
      <p>
        <b>Tech Stack: </b> : C#, Unity<br>
      </p>

      <p>Developed a First Person shooter utilizing C# & Unity</p>
      <p>Implemented the player & gunplay mechanics, along with player interactions</p>
      <p>Architected a pathfinding algorithm for the enemy AI state machine, coordinating various attack behaviours</p>
      <p>Constructed an animator system, enabling different animation system across multiple enemies</p>
    </div>
    <img style="max-width: 600px;" src="../assets/LastBlast_game.png">
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