<script setup>
  import '@/assets/ToDo.css';

  defineProps(['title'])
  defineEmits(['remove'])
</script>


<template>
  <li> 
    {{ title }}
    <button class=centered @click="$emit('remove')" style="float: right; display: block; margin: auto;font-size: 7px;">REMOVE</button>
  </li>
</template>