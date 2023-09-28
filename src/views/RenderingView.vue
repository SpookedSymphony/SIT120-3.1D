<script setup>
import { ref, reactive,} from 'vue'
import Footer from '../components/Footer.vue'

const myServices = reactive({
    1: 'Web Application Creation',
    2: 'UX Design',
    3: 'Database Creation'
  })

const Days = ["Monday, ", "Tuesday, ", "Wednesday, ", "Thursday"]
</script>

<style scoped>
    li {
        color: teal;
        font-size: 20px;
        padding: 5px;
        list-style: square;
    }

    .centered {
        display: flex;
        justify-content: center;
    }
</style>

<template>
    <main>
        <div class="centered">
            <ul>
                <h1>Services We Offer</h1>
                <li v-for="(value, key) in myServices" :key="key">
                {{key}}: {{ value }}
                </li>
            </ul>
        </div><br>
        <div class="centered">
            <h4 style="padding-right: 10px;">Days available:</h4>
            <template 
                v-for="day in Days">{{ day }}
            </template>
        </div>
        <br>

        <Footer/>
    </main>
</template>