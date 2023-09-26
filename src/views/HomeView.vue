<script setup>
  import Header from '../components/Header.vue' 
  import Footer from '../components/Footer.vue'
  import chatbot from '../components/chatbot.vue'
</script>

<style scoped>
  .audio-centered {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<template>
  <main>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <Header/>
    <chatbot/>

    <p style: padding="30px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat urna eget tristique. Maecenas sagittis massa id ante dignissim, ac interdum odio pellentesque. Nullam et enim in tortor varius interdum. Aliquam erat volutpat. Integer dapibus, odio a mattis varius, ex erat viverra ipsum, id gravida lorem odio a libero. Vestibulum vehicula massa eget magna semper, a tincidunt elit convallis. Proin pellentesque malesuada libero, eget rhoncus libero malesuada ut. Nulla facilisi. Fusce placerat nec est a ullamcorper. Etiam non erat sit amet metus fermentum varius. Vivamus non ullamcorper est, in bibendum ligula. Curabitur sed ligula non sapien suscipit dapibus in vel purus.

  Suspendisse potenti. Vivamus ac lacinia libero, ac malesuada arcu. Maecenas facilisis sapien vel justo gravida, eu venenatis lectus volutpat. Aenean ut semper metus. Fusce non est nec libero hendrerit venenatis eu a massa. Etiam accumsan, mi at tristique faucibus, sapien risus lacinia augue, in bibendum nisi ex sit amet libero. Nullam id elit eu turpis volutpat varius. Vivamus vel libero a arcu volutpat malesuada. Vivamus id pharetra purus.

  Pellentesque nec tristique massa. In hac habitasse platea dictumst. Cras nec sodales justo. Aliquam malesuada, orci ut posuere bibendum, est justo facilisis velit, vel laoreet orci sapien nec ex. Morbi vel lacinia purus. Praesent convallis erat vitae aliquet. Nulla facilisi. Aenean bibendum, ipsum eget feugiat condimentum, tellus odio lacinia justo, ac fermentum ligula risus eu est. Donec rhoncus malesuada ex, at vulputate massa fermentum nec. Duis condimentum mi vel sagittis volutpat. Duis et fringilla nunc. Integer eu quam tincidunt, dignissim ipsum a, lacinia tellus. Suspendisse cursus ex at quam volutpat, in elementum mi condimentum.

  Nam id efficitur ante. Integer vitae mi id ex tincidunt elementum. Vestibulum vehicula bibendum elit, et laoreet velit pellentesque eu. Integer varius, justo vel tincidunt egestas, velit urna facilisis justo, eu tincidunt arcu eros quis lectus. Maecenas nec bibendum urna. Sed nec tortor aliquet, finibus purus eget, volutpat arcu. Etiam vitae aliquam elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla non arcu ut quam varius malesuada. Fusce tincidunt euismod ex. Aenean venenatis vel urna eu mattis. Sed feugiat cursus arcu, sed feugiat massa congue vel. Integer id eros quis quam facilisis aliquet ac a dui.
  </p> <br>

  <div class=audio-centered>
    <audio controls autoplay muted>
      <source src='@/assets/beat.mp3' type="audio/mpeg">
    </audio>
  </div>

  <Footer/>

  </main>
</template>
