<script setup>


//import Card from '../components/home/Card.vue';
import Grid from '../components/ProjectGrid.vue';
import TryOut from "../components/TryOut.vue";
</script>

<template>

  <div class="tq header">
    <div class="headerContent">
      <h1> Network Snake Simulation </h1>
      <a target="_blank" href="https://github.com/Sepehrman/COMP-7005_Group_Project">Github</a>
      <p>
        <b>Tech Stack: </b> : python, socket API, pyplot, pickle, Client/Server, TCP<br>
      </p>

      <p>The python program implements a simple reliable network snake.</p>
      <p>The purpose is to send data from a sending host to a receiving host with the option of having a proxy that stands in between the two hosts.</p>
      <p>The data and acks are randomly dropped across as they reach the receiving host through the proxy.</p>
      <p>The program generates a graph, indicating the amount of packets lost while being streamed through the proxy</p>
      <p>Implemented the client, along with the handling of the data from the proxy and server side, allowing for wait times for the data to be retrieved.</p>
      <p>Implemented a graph visualizer using pyplot to showcase and display the changes within the data</p>
    </div>
    <div>
      <img style="max-width: 600px;" src="../assets/NetworkSnake.png"><br>
      <img style="max-width: 600px;" src="../assets/graph.png">
    </div>
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