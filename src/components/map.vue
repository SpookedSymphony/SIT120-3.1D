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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25628.252218757305!2d145.4310699743164!3d-36.589505599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad4134bc4f6e7b5%3A0xd4b37a7cc0dac559!2sThe%20Small%20Business%20Company!5e0!3m2!1sen!2sau!4v1695693032225!5m2!1sen!2sau" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    </div>
</template>
