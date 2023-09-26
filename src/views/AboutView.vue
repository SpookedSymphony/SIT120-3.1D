<script setup>
  import AboutVideo from '../components/AboutVideo.vue';
  import Footer from '../components/Footer.vue'
  import myMap from '../components/map.vue'
  import founders from '../components/canvas.vue'
  import '@/assets/column.css';
</script>

<style scoped>
  .center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  }
</style>

<template>
  <main>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <div class="row">
      <AboutVideo/>
      <founders/>
      <div class="column">
        <img src='@/assets/man.jpg' alt="man" style="width:200px;height:150px;" class="center">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat urna eget tristique. Maecenas sagittis massa id ante dignissim, ac interdum odio pellentesque. Nullam et enim in tortor varius interdum.</p>
      </div>
      <div class="column">
        <img src='@/assets/woman.jpg' alt="woman" style="width:200px;height:150px;" class="center">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat urna eget tristique. Maecenas sagittis massa id ante dignissim, ac interdum odio pellentesque. Nullam et enim in tortor varius interdum.</p>
      </div>
      <myMap/>
    </div>
    <Footer/>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
