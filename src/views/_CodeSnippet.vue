<script setup>



//import Card from '../components/home/Card.vue';
import Grid from '../components/ProjectGrid.vue';
import TryOut from "../components/TryOut.vue";
</script>

<template>

  <div class="codeSnippet header">
    <div class="headerContent">
      <h1> Code Snippet</h1>
      <p>
        <a target="_blank" href="https://github.com/sam-meech-ward-bcit/code-examples-Yasminaa77"> Github</a>,
        <a target="_blank" href="https://code-examples-yasminaa77.vercel.app/"> Live</a>
      </p>
      <p>The individual project of creating an app that provides a platform for developers to share their codes with others in the same space. Members, unlike guests, can not only view these snippets but also have the privilege of posting, liking, commenting and accessing their profile page with all their activities showing up.</p>
      <p>I developed this app in <span class="green">react.js </span> and I integrated <span class="green">Next Auth </span> to create sessions and gateways such as GitHub and google, the <span class="green">Prisma database</span> with many to many relationships to store data. This app uses "useEffects to fetch the posts over an AJAX request and display them on the Homepage.</p>
      <p>The most challenging aspect of the project, besides providing different privileges for each user, was implementing the interactive "like" button and displaying the total number of likes above it. This feature involved multiple back-and-forths between the front end and database while also ensuring user identity verification and modifying the functionality based on the result.</p>
      <p>My takeaway from this project is primarily the ability to problem-solve and work independently, combining my knowledge into one single project.</p>
    </div>
    <img class="codeSnippetImage" src="../assets/codeSnippet.gif">
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