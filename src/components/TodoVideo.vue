<style scoped>
    video {
        display: block;
        margin: 0 auto; 
        max-width: 100%; 
        margin-bottom: 30px;
    }

    @media (min-width: 580px) {
        video {
            margin-top: 50px;
        }
    }
</style>

<template>
    <video autoplay muted controls loop>
        <source src="@\assets\writing.mp4" type="video/mp4">
    </video>
</template>