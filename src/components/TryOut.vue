<script setup>
</script>





<template>
  <section class="container">
    <div class="card_outer">

      <div class="card">
        <div class="content">
          <h2 class="title">This is title</h2>
          <p class="copy">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
      </div>


    </div>
  </section>
</template>

<script>
export default {
  name: "TryOut",
  methods: {
  },
  mounted() {
  },
  data(){
  },
  props: {
  },
}


</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  --d: 700ms;
  --e: cubic-bezier(0.19, 1, 0.22, 1);
  font-family: 'Montserrat', sans-serif;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
}
.container {
  width: 90%;
  max-width: 1260px;
  margin: 0 auto;
}
.card_outer {
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 20px;
}
.card {
  position: relative;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  padding: 1rem;
  width: 100%;
  min-height: 400px;
  text-align: center;
  color: #fff;
  background-color: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1),
  0 2px 2px rgba(0, 0, 0, 0.1),
  0 4px 4px rgba(0, 0, 0, 0.1),
  0 8px 8px rgba(0, 0, 0, 0.1),
  0 16px 16px rgba(0, 0, 0, 0.1);
}
.card:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 110%;
  background-size: cover;
  background-position: 0 0;
  transition: transform calc(var(--d) * 1.5) var(--e);
  pointer-events: none;
}
.card:after {
  opacity: 0;
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200%;
  pointer-events: none;
  background-color: rgba(0, 0, 0, 0.5);
  transform: translateY(-50%);
  transition: transform calc(var(--d) * 2) var(--e);
}
.card:hover:after {
  opacity: 1;
  transition: opacity calc(var(--d) * 1.5) var(--e);
}
.card:before {
  background-image: url(https://picsum.photos/200/300);
}

.content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
  transition: transform var(--d) var(--e);
  z-index: 1;
}
.content > * + * {
  margin-top: 1rem;
}

.title {
  font-size: 25px;
  font-weight: bold;
  line-height: 35px;
}

.copy {
  font-size: 15px;
  font-style: italic;
  line-height: 25px;
}




@media (hover: hover) and (min-width: 600px) {
  .card:after {
    transform: translateY(0);
  }
  .content {
    transform: translateY(calc(100% - 4.5rem));
  }
  .content > *:not(.title) {
    opacity: 0;
    transform: translateY(1rem);
    transition: transform var(--d) var(--e), opacity var(--d) var(--e);
  }
  .card:hover,
  .card:focus-within {
    align-items: center;
  }
  .card:hover:before,
  .card:focus-within:before {
    transform: translateY(-4%);
  }
  .card:hover:after,
  .card:focus-within:after {
    transform: translateY(-50%);
  }
  .card:hover .content,
  .card:focus-within .content {
    transform: translateY(0);
  }
  .card:hover .content > *:not(.title),
  .card:focus-within .content > *:not(.title) {
    opacity: 1;
    transform: translateY(0);
    transition-delay: calc(var(--d) / 8);
  }

  .card:focus-within:before, .card:focus-within:after,
  .card:focus-within .content,
  .card:focus-within .content > *:not(.title) {
    transition-duration: 0s;
  }
}
</style>