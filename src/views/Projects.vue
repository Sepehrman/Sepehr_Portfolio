<script setup>

//import Card from '../components/home/Card.vue';
import ProjectGrid from '../components/ProjectGrid.vue';
import Skills from '../components/Skills.vue';
import Experience from '../components/Experience.vue';
import TryOut from "../components/TryOut.vue";
</script>

<template>

  <div id="header">
    <div class="headerContent">
      <p class="red"> Hello World, My name is <a href="#">Sepehr</a></p>
      <h2 class="hero-text twoLines typing-demo" style="font-size: 70px">I'm a Computer Scientist.</h2>
      <h3 class="hero-text oneLine typing-demo">I'm a Computer Scientist.</h3>

      <p class="header-desc twoLines">
        Interested in Transforming digital ideas to reality through Mathematical Thinking<br>
      </p>
      <p class="header-desc oneLine">
        Interested in Transforming digital ideas to reality through Mathematical Thinking<br>
      </p>
    </div>
    <div class="doodleContainer">
      <!-- <img class="doodle" src="../assets/yasmina.gif"> -->
    </div>
  </div>
  <!-- <p class="body-desc">
    As a developer, I enjoy the creative aspect of building new things and solving complex problems through programming. It is rewarding to see a project come to life and know that I played a role in its creation. I also enjoy the constant learning and growth opportunities that come with being a developer, as technology and programming languages are always evolving. Finally, I appreciate the collaborative aspect of development, working with a team to achieve a common goal and seeing how everyone's unique skills and perspectives contribute to the final product.
  </p> -->

<div id="section0" class="main">
  <Skills/>
</div>
<div id="section1" class="main">
  <Experience/>
</div>
<div id="section2" class="main">
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
  color: #c82c28;
  font-weight: bold;
  font-size: 30px;
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
    position: absolute;
  }

  .twoLines{
    display:none;
  }
  

}


@media(max-width:768px) {

  .header-desc{
    font-size: 18px;
  }

  #header {
    float: left
  }

  .hero-text{
    font-size: 30px;
  }

  .header-desc {
    padding-top: 50px;
  }
  
}

.wrapper {
  /* This part is important for centering */
  display: grid;
  place-items: center;
}

.typing-demo {
  width: 25ch;
  animation: typing 3s steps(25), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 2em;
}

@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

/*}*/
</style>