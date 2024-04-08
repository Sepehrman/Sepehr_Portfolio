<script setup>



//import Card from '../components/home/Card.vue';
import ProjectGrid from '../components/ProjectGrid.vue';
import TryOut from "../components/TryOut.vue";
</script>

<template>

  <div id="header">
    <div class="headerContent">
      <p class="red"> Hi, My name is <a href="#">Sepehr</a></p>
      <h3 class="hero-text twoLines">I'm a Computer<br> Scientist</h3>
      <h3 class="hero-text oneLine">I'm a Full-Stack Developer</h3>
      <p class="header-desc">
        Interested in Transforming ideas through Mathematical Thinking<br>
      </p>
    </div>
    <div class="doodleContainer">
     <!-- <img class="doodle" src="../assets/yasmina.gif"> -->
    </div>
  </div>
<div id="section1" class="main">
  <ProjectGrid/>
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
html {
  scroll-behavior: smooth;
}
/*@import url('./scss/main.scss');*/
/*@import url('../../scss/main.scss');*/

.headerContent{
  margin-right: 100px;
}

.doodleContainer{
  /*align-self: flex-end;*/
}
.doodle{
  opacity: 0.9;
  width: 200px;
}

#header{
  /*width:100%;*/
  height:80vh;
  /*max-width: 1400px;*/
  margin: 0;

  display: flex;
  justify-content: space-between;
  /*justify-content: flex-start; !*change when hero text is centre*!*/
  align-items: center;


}

#header a {
  text-decoration: none;
  color: #C82c28;
  font-family: 'Roboto-Medium';

  /*font-weight: 900;*/
  position: relative;
}

.hero-text{
  font-size: 75px;
  margin: 5px 0 ;
  color: #0F1438;
  font-family: "Rajdhani-Light",monospace;

  /*max-width:70vh;*/
}
.oneLine{
  display:none;
  margin-top:0;
}

.header-desc{
  font-size: 25px;
  margin:35px 0;
  color: #0F1438;
  font-weight: lighter;
  /*max-width:70vh;*/

}

.red{
  color: #C82c28;
  font-weight: bold;
}

main h2{
  margin-bottom:40px;
  /*color:red;*/
}





@media screen and (max-width: 896px) {

  #header {
    flex-direction: column;
    justify-content: space-around;
    align-items:center;
    margin:90px;
    text-align: center;

    height:60vh;
  }

  .headerContent{
    margin-right: 0;
  }

  .hero-text{
    font-size: 40px;
    font-family:"Rajdhani-Regular";
  }
  .oneLine{
    display:block;

  }

  .twoLines{
    display:none;
  }

}


@media(max-width:768px) {

  .header-desc{
    font-size: 18px;
  }

  .hero-text{
    font-size: 30px;
  }

}


/*}*/
</style>