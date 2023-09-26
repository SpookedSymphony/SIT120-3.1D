<style scoped>
    iframe {
        display: block;
        text-align: center;
        margin-top: 50px !important;
        margin: auto;
        width: 580px;
        height: 300px;
    }
</style>

<script setup>
    import {ref} from 'vue'

    const isActive = ref(true)
    const hasError = ref(false)

</script>

<template>
    <div class="static" :class="{active: isActive, 'text-danger': hasError}">
        <iframe
            src="https://www.youtube.com/embed/yeiYJ57DrH4">
        </iframe>
    </div>
</template>
