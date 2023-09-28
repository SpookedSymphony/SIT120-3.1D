<script setup>
    import Footer from '../components/Footer.vue'
    import { ref, reactive, computed, watch } from 'vue'
    import '@/assets/style.css';
  
    const messagea = ref(''); 
    const messageb = ref(''); 

    function say(message) { 
    alert(message)
  }

</script>

<template>
    <main>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <h1>Contact us</h1> 
        <div class="centered-container">
            <form>
                <h4>Please enter your name:</h4>
                <input v-model.trim="messagea" placeholder="Jane Doe" />
                <p>Thank you! Your name is... <br>{{ messagea }}</p>

                <h4>Please enter your email:</h4>
                <input v-model.trim="messageb" placeholder="email@email.com" />
                <p>Thank you! Your email is... <br>{{ messageb }}</p> <br>

                <h4>Please enter your question:</h4>
                <textarea required style=resize:none;></textarea>

                <button @click="say('Thank you! We will get back to you shortly.')">Submit</button>
            </form>
        </div>
        <Footer/>
    </main>
</template>
