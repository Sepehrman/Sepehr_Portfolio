<script setup>



//import Card from '../components/home/Card.vue';
import Grid from '../components/ProjectGrid.vue';
import TryOut from "../components/TryOut.vue";
</script>

<template>

  <div class="codeSnippet header">
    <div class="headerContent">
      <h1> Trusting Pixels</h1>
      <a target="_blank" href="https://github.com/Sepehrman/trusting-pixels">Github Link</a>
      <p>
        <b>Tech Stack: </b> : JavaScript, Node.js, React.js, HTML, CSS, AWS (Cognito & S3)<br>
      </p>
      <p>Led the end-to-end development of an industry client's web application, integrating user accounts, secure authentication, and efficient file uploading functionalities, leveraging React.js, AWS, & npm</p>
        <p>Utilized Scrum and Agile methodologies, conducting weekly sprint meetings to manage tasks and assign priorities based on the client's project scope.
        </p><p>Contributed to the project by implementing user authentication and image upload functionality using AWS Cognito & S3.</p>      
      
    </div>
    <img class="codeSnippetImage" src="../assets/trustingpixels.jpg">
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
.codeSnippet.header{

  /*height:70vh;*/
  max-width: 1200px;
  margin: 50px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.headerContent{
  margin-right: 100px;
  font-family: "Roboto-Regular", sans-serif;
}
.codeSnippetImage{
  max-width: 350px;
  border:1px solid darkslategrey;
  box-shadow: 2px 2px 5px 1px darkslategrey;
  border-radius: 2%;
}
.green{
  color:#5EC19E;
  font-family:"Roboto-Medium", sans-serif;
}


.header a {
  text-decoration: underline;
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

  .codeSnippet.header {
    margin: 50px 0;
    flex-direction: column;
    align-items: center;

  }

  .headerContent{
    margin-right: 0;
    margin-bottom: 20px;
  }

  /*.codeSnippetImage {*/
  /*  max-width:400px;*/
  /*}*/
}


/*}*/
</style>