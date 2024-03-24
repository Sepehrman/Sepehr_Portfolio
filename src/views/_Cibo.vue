<script setup>



//import Card from '../components/home/Card.vue';
import Grid from '../components/ProjectGrid.vue';
import TryOut from "../components/TryOut.vue";
</script>

<template>

  <div class="cibo header">
    <div class="headerContent">
      <h1> My Cibo- In progress </h1>
      <p>
        <a target="_blank" href="https://github.com/myCibo/myCiboNative"> Github</a>,
        <a target="_blank" href="https://www.figma.com/file/41ljr7h0CS0RBn7OrA0nf7/Cibo?node-id=174%3A104&t=WnfnFi1YnGMbamK6-1"> Figma</a>
      </p>

      <p>For my term project, my classmates and I decided to work on an <span class="green">React Native </span>app that addresses a common problem related to food waste. The app allows users to create an inventory of their food supplies either by scanning their recipes or adding the items manually. Users can then optimize their supplies, track them, cook efficiently with their existing food products, and plan their grocery expenditures better.</p>
      <p>As part of my role, I managed the UI design and later developed and integrated them with our front-end screens. In the next phase, I worked on the functionalities, API calls, and integration of the data with the <span class="green"> Prisma database </span>and back-end, which proved to be a wide and long work.We also added an extra layer of security to the app with <span class="green">Auth0's authentication </span>and authorization.</p>
      <p>The app was a huge project with lots of details, API calls, and back-end and front-end tasks which were more time-consuming than the time scope we had and required a bigger developer team. Additionally, using React Native for the app and making it compatible with both Android and iPhone devices was frustrating at times. </p>
      <p>Creating the Cibo app from the initial concept to the final features allowed me to learn to be more flexible and transparent in my role. This project taught me to be willing to accept ambitious projects with big goals and a wide range of functionalities because I am able to work under huge amounts of work and handle hardworking.</p>

    </div>
    <img class="ciboImage" src="../assets/cibo-app.gif">
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
.cibo.header{

  /*height:70vh;*/
  max-width: 1200px;
  margin: 50px 0;

  display: flex;
  justify-content: space-between;
  /*justify-content: flex-start; !*change when hero text is centre*!*/
  align-items: center;
}

.headerContent{
  margin-right: 100px;
  font-family: "Roboto-Regular", sans-serif;
}
.ciboImage{
  width: 350px;
}
.green{
  color:#5EC19E;
  font-family:"Roboto-Medium", sans-serif;
}




.header a {
  text-decoration:  underline;
  color: #C82c28;
  font-family: 'Roboto-Medium';

  /*font-weight: 900;*/
  position: relative;
}

main h2{
  margin-bottom:40px;
  /*color:red;*/
}


@media screen and (max-width: 896px) {

  .cibo.header{
    margin: 50px 0;
    flex-direction: column;
    align-items: center;

  }

  .headerContent{
    margin-right: 0;
    margin-bottom: 20px;
  }
}


/*}*/
</style>