<script setup>



//import Card from '../components/home/Card.vue';
import Grid from '../components/ProjectGrid.vue';
import TryOut from "../components/TryOut.vue";
</script>

<template>

  <div class="phished header">
    <div class="headerContent">
      <h1> SUEZ </h1>
      <p>
        <b>Tech Stack: </b> Java, JavaScript,  Python, HTML, CSS, jQuery, Jenkins<br>
      </p>
      <p>I spearheaded the implementation of a suite of products utilizing water utility data sources and other enterprise-level applications. I was the developer for the Digital Water Solutions project, I orchestrated the design, development, and testing processes. This involved crafting multiple dashboards and data viewer systems to offer clear visualizations of pressure and acoustic data from hydrant monitoring equipment.</p>
      <p>I have also integrated various large-scale RESTful APIs, significantly improving data processing speed and load times. Recognizing the importance of user experience, I optimized search functionality through strategic employment of SQL queries. This refinement not only stabilized performance but also boosted efficiency by a remarkable 60% across all software components.</p>
        
      <p>I have engineered stress-testing APIs using Python scripting. This proactive measure allowed us to pinpoint and address performance bottlenecks, resulting in a noteworthy 38% enhancement in system scalability.</p>
      <!-- <p>I had the opportunity to develop multiple and work to collaborate with a skilled team of designers and developers on an exciting project. The project involved developing a <span class="green"> React </span> web application aimed at addressing the issue of phishing cybercrime. The application provides users with articles, newsletters, tests, and an email system which allows them to send safely modified phishing emails to their loved ones and prepare them for real phishing attacks.</p>
      <p>My primary role in the project was to construct an emailing system that used <span class="green"> next.js Auth </span>, the <span class="green"> Nodemailer module</span>, and <span class="green"> Firebase real-time database</span> for the first time. I was also responsible for setting up the Firebase real-time database and authentication to store, track, and display user email data in their dashboard.</p>
      <p>Throughout the project, we held regular agile meetings and stand-ups to ensure everyone was up to date on our progress, and we presented our work weekly. I actively used collaborative tools such as Trello, GitHub, and Discord, and attended weekly in-person meetings with the design and development team, enabling us to work together effectively.</p>
      <p>This project allowed me to develop and showcase my skills in web development, teamwork, and adaptability when working with new people. I was thrilled to be part of a team that was committed to delivering a high-quality product that addressed an essential issue.</p>

 -->

    </div>
      <img class="phishedImage" src="../assets/suez.png">
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
.phished.header{

  /*height:70vh;*/
  max-width: 1200px;
  margin: 50px 0;
  /*flex-direction: column;*/


  display: flex;
  justify-content: space-between;
  /*justify-content: flex-start; !*change when hero text is centre*!*/
  align-items: center;
}

.headerContent{
  margin-right: 80px;
  font-family: "Roboto-Regular", sans-serif;
}
.phishedImage{
  max-width: 350px;
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

  .phished.header {
    margin: 50px 0;
    flex-direction: column;
    align-items: center;

  }

  .headerContent{
    margin-right: 0;
    margin-bottom: 20px;
  }
  /*.phishedImage{*/
  /*  max-width: 450px;*/

  /*}*/
}


/*}*/
</style>