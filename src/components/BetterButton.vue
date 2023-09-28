<script setup>
    function say(message) { 
    alert(message)
  }
</script>

<style scoped>
    .better {
        font: italic;
        color: white;
        background: linear-gradient(160deg, slateblue 10%, teal);
        border: none;
        border-radius: 15px;
        padding: 5px;
        box-shadow: 0 9px lightblue;
        cursor: pointer;
    }
    
    .better:active {
        background: slateblue;
        box-shadow: 0 5px white;
        transform: translateY(4px);
    }

</style>

<template>
    <button class="better" @click="say('Thank you! We will get back to you shortly.')">
        <slot/>
    </button>
</template>