<script setup>



//import Card from '../components/home/Card.vue';
import Grid from '../components/ProjectGrid.vue';
import TryOut from "../components/TryOut.vue";
</script>

<template>

  <div class=" about header">
    <div class="headerContent">
      <h1> Hey there.</h1>
      <p class="green">I am Yasmina Amirifar a full stack web developer based in Vancouver, Canada.</p>
      <p>My journey into web development began while I was studying digital design. As I learned the basics and became more interested in coding, I really liked how coding can bring ideas to life.</p>
      <p>To take my skills to the next level, I enrolled in a Full-stack web development program where I was able to learn the ins and outs of both front-end and back-end development. Throughout the program, I worked on a variety of projects that allowed me to gain hands-on experience.</p>
<!--      <p>One of the things I love most about web development is the way it allows me to combine my creativity with my analytical and logical skills. I enjoy the challenge of figuring out how to I can create an app  while ensuring that the end product is user-friendly and  functional. I am always striving to improve my skills and deliver high-quality work that meets the needs of both clients and users.</p>-->
      <p>In my free time, I enjoy exploring new technologies, travelling and do some <a target="_blank" href="https://www.flickr.com/photos/187033895@N04/">photography</a>. I am excited about the opportunities that lie ahead!</p>
      <!--      </p>-->

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