<template>
  <div class="kontakt-page">
    <div class="container">
      <h1>Skontaktuj się z nami</h1>
      <p class="subtitle">Masz pytania dotyczące naszych roślin? Napisz do nas!</p>

      <div class="form-wrapper">
        <form @submit.prevent="handleSubmit" v-if="!submitted">
          <div class="form-group">
            <label for="name">Imię</label>
            <input 
              type="text" 
              id="name" 
              v-model="form.name" 
              placeholder="Wpisz swoje imię" 
              required
            >
          </div>

          <div class="form-group">
            <label for="email">Adres E-mail</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email" 
              placeholder="twój@email.pl" 
              required
            >
          </div>

          <div class="form-group">
            <label for="subject">Temat wiadomości</label>
            <input 
              type="text" 
              id="subject" 
              v-model="form.subject" 
              placeholder="Wpisz temat" 
              required
            >
          </div>

          <div class="form-group">
            <label for="message">Wiadomość</label>
            <textarea 
              id="message" 
              v-model="form.message" 
              rows="5" 
              placeholder="W czym możemy pomóc?" 
              required
            ></textarea>
          </div>

          <input type="text" v-model="form.honeypot" class="hidden-field" tabindex="-1" autocomplete="off">

          <button type="submit" class="submit-btn" :disabled="isSending">
            {{ isSending ? 'Wysyłanie...' : 'Wyślij wiadomość' }}
          </button>
        </form>

        <div v-else class="success-message">
          <div class="icon">🌿</div>
          <h2>Dziękujemy!</h2>
          <p>Twoja wiadomość została wysłana. Odpowiemy najszybciej jak to możliwe.</p>
          <button @click="resetForm" class="back-btn">Wyślij kolejną</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import emailjs from '@emailjs/browser';

const form = reactive({
  name: '',
  email: '',
  subject: '', // Teraz to pusty ciąg znaków gotowy na wpisanie tekstu
  message: '',
  honeypot: ''
});

const isSending = ref(false);
const submitted = ref(false);

const resetForm = () => {
  submitted.value = false;
  form.name = '';
  form.email = '';
  form.subject = '';
  form.message = '';
  form.honeypot = '';
};

const handleSubmit = () => {
  if (form.honeypot) {
    submitted.value = true;
    return;
  }
  
  isSending.value = true;

  // DOPASOWANIE DO TWOJEGO SZABLONU Z SCREENA (Contact Us: {{title}})
  const templateParams = {
    name: form.name,    // Mapuje na {{name}} w EmailJS
    email: form.email,  // Mapuje na {{email}} w EmailJS
    title: form.subject, // Mapuje na {{title}} w temacie Twojego maila
    message: form.message // Mapuje na {{message}} w treści Twojego maila
  };

  emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    templateParams,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  )
  .then(() => {
    isSending.value = false;
    submitted.value = true;
    // Czyszczenie pól (zrobione w resetForm, ale tutaj zerujemy wartości natychmiast)
    form.name = '';
    form.email = '';
    form.subject = '';
    form.message = '';
  })
  .catch((error) => {
    isSending.value = false;
    alert('Błąd podczas wysyłania: ' + error.text);
  });
};
</script>

<style scoped>
.hidden-field { display: none !important; }

/* ... reszta Twoich stylów pozostaje bez zmian ... */

.kontakt-page {
  padding: 80px 20px;
  background-color: #fcfdfc;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

h1 {
  color: #2e7d32;
  margin-bottom: 10px;
}

.subtitle {
  color: #666;
  margin-bottom: 40px;
}

.form-wrapper {
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  text-align: left;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
  font-size: 0.9rem;
}

input, select, textarea {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.3s, box-shadow 0.3s;
}

input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: #2e7d32;
  box-shadow: 0 0 0 3px rgba(46, 125, 50, 0.1);
}

.submit-btn {
  width: 100%;
  background-color: #2e7d32;
  color: white;
  padding: 14px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.3s;
}

.submit-btn:hover:not(:disabled) {
  background-color: #1b5e20;
}

.submit-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.success-message {
  text-align: center;
  padding: 20px;
}

.success-message .icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.back-btn {
  margin-top: 20px;
  background: none;
  border: 1px solid #2e7d32;
  color: #2e7d32;
  padding: 8px 20px;
  border-radius: 5px;
  cursor: pointer;
}
</style>