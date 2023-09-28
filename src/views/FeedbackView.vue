<script setup>
    import Footer from '../components/Footer.vue'
    import BetterButton from '../components/BetterButton.vue';
    import { ref } from 'vue'
    import '@/assets/style.css';
  
    const messagea = ref(''); 
    const messageb = ref(''); 
    const checked = ref('')

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

                <h4>Do you want promotions?</h4>
                <input type=checkbox id=promo value=yes v-model="checked"/>
                <label for promo>Yes</label>
                <p>Thank you! You have selected: <br>{{ checked }}</p> <br>

                <h4>Please enter your question:</h4>
                <textarea required style=resize:none;></textarea>

                <BetterButton>
                    Submit
                </BetterButton>
            </form>
        </div>
        <Footer/>
    </main>
</template>
