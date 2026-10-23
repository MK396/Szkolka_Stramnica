<template>
  <div class="kontakt-page">
    <div class="container">
      <header class="section-header">
        <h1>Skontaktuj się z nami</h1>
        <div class="underline"></div>
      </header>
      
      <div class="contact-grid">
        
        <div class="info-column">
          <div class="info-intro-group">
            <p class="intro-text">
              Masz pytania? Skorzystaj z poniższych danych lub wyślij wiadomość przez formularz.
            </p>

            <div class="preference-box">
              <p>
                Aby zapewnić jak najlepszą obsługę, nasza szkółka preferuje <strong>kontakt telefoniczny</strong>.
              </p>
            </div>
          </div>

          <div class="contact-methods">
            <h2>Dane kontaktowe</h2> 
            
            <div class="method-item">
              <div class="icon-circle" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.9v2a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h2a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L7.1 9.5a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z"/>
                </svg>
              </div>
              <div class="method-text">
                <strong>Numer telefonu</strong>
                <span class="highlight-link">+48 509 954 194</span>
                <span>+48 509 954 102</span>
              </div>
            </div>

            <div class="method-item">
              <div class="icon-circle" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2"/>
                  <path d="m3 7 9 6 9-6"/>
                </svg>
              </div>
              <div class="method-text">
                <strong>E-mail</strong>
                <span>malgosia.bielecka@op.pl</span>
              </div>
            </div>

            <div class="method-item">
              <div class="icon-circle" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 21s-6-5.3-6-10a6 6 0 1 1 12 0c0 4.7-6 10-6 10z"/>
                  <circle cx="12" cy="11" r="2.2"/>
                </svg>
              </div>
              <div class="method-text">
                <strong>Adres</strong>
                <span>Szkółka Stramnica</span>
                <span>Stramnica 36J, 78-100 Kołobrzeg</span>
              </div>
            </div>

            <div class="method-item">
              <div class="icon-circle" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="9"/>
                  <path d="M12 7v5l3 2"/>
                </svg>
              </div>
              <div class="method-text">
                <strong>Godziny otwarcia</strong>
                <span>Pn - Pt: 8:00 - 18:00</span>
                <span>Sobota: 8:00 - 14:00</span>
              </div>
            </div>
          </div>
        </div>

        <div class="form-column">
          <div class="form-wrapper">
            <form @submit.prevent="handleSubmit" v-if="!submitted">
              <div class="form-group">
                <label for="name">Imię i Nazwisko</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  placeholder="np. Jan Kowalski" 
                  required
                >
              </div>

              <div class="form-group">
                <label for="email">Adres E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  placeholder="twoj@email.pl" 
                  required
                >
              </div>

              <div class="form-group">
                <label for="subject">Temat wiadomości</label>
                <input 
                  type="text" 
                  id="subject" 
                  v-model="form.subject" 
                  placeholder="W czym możemy pomóc?" 
                  required
                >
              </div>

              <div class="form-group">
                <label for="message">Wiadomość</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  rows="5" 
                  placeholder="Napisz swoją wiadomość..." 
                  required
                ></textarea>
              </div>

              <button type="submit" class="submit-btn" :disabled="isSending">
                <span v-if="isSending">Wysyłanie...</span>
                <span v-else>Wyślij wiadomość</span>
              </button>
            </form>

            <div v-else class="success-message">
              <div class="success-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 4 17 2 17 2s1 4.5-2 9.5c-.7 1-1.5 1.8-2.5 2.5"/>
                  <path d="M11 20c0-4 1.5-6.5 4-9"/>
                </svg>
              </div>
              <h2>Wiadomość wysłana!</h2>
              <p>Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe.</p>
              <button @click="resetForm" class="back-btn">Wyślij kolejną</button>
            </div>
          </div>
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
  subject: '',
  message: ''
});

const isSending = ref(false);
const submitted = ref(false);

const resetForm = () => {
  submitted.value = false;
  form.name = '';
  form.email = '';
  form.subject = '';
  form.message = '';
};

const handleSubmit = () => {
  isSending.value = true;
  
  const templateParams = {
    name: form.name,
    email: form.email,
    title: form.subject,
    message: form.message
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
  })
  .catch((error) => {
    isSending.value = false;
    alert('Błąd podczas wysyłania: ' + error.text);
  });
};
</script>

<style scoped>
.kontakt-page {
  padding: 60px var(--content-inline, 20px);
  background-color: #f8faf8;
  min-height: 80vh;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

h1 { color: #2e7d32; font-size: 2.5rem; margin-bottom: 10px; }
.underline { width: 60px; height: 4px; background-color: #2e7d32; margin: 0 auto; border-radius: 2px; }

.contact-grid {
  display: flex;
  gap: 50px;
  align-items: flex-start;
}

.info-column { flex: 1; }
.form-column { flex: 1.2; }

.intro-text { color: #666; line-height: 1.6; margin-bottom: 30px; text-align: left; }

.preference-box {
  background-color: #ffffff;
  padding: 20px;
  margin-bottom: 35px;
  border-radius: 12px;
  border-left: 5px solid #2e7d32;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  display: flex;
  gap: 15px;
  align-items: center;
  text-align: left;
}

.contact-methods { text-align: left; }
.method-item { display: flex; align-items: center; gap: 20px; margin-bottom: 25px; }
.leaf-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: #2e7d32;
}
.leaf-icon svg {
  width: 28px;
  height: 28px;
}
.icon-circle {
  width: 50px;
  height: 50px;
  background-color: #e8f5e9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: #2e7d32;
}
.icon-circle svg {
  width: 22px;
  height: 22px;
}
.method-text { display: flex; flex-direction: column; }
.method-text strong { font-size: 0.85rem; text-transform: uppercase; color: #2e7d32; letter-spacing: 0.5px; }
.method-text span, .method-text a { font-size: 1.1rem; color: #444; text-decoration: none; }
.highlight-link { font-weight: 700; color: black !important; }

.form-wrapper {
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.08);
}

.form-group { margin-bottom: 22px; text-align: left; }
label { display: block; font-weight: 600; margin-bottom: 8px; color: #333; font-size: 0.9rem; }

input, textarea {
  width: 100%;
  padding: 14px 18px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s;
  background-color: #fafafa;
}

input::placeholder, textarea::placeholder {
  font-family: inherit;
  color: #bbb;
}

input:focus, textarea:focus {
  outline: none;
  border-color: #2e7d32;
  background-color: #fff;
  box-shadow: 0 0 0 4px rgba(46, 125, 50, 0.1);
}

.submit-btn {
  width: 100%; background-color: #2e7d32; color: white; padding: 16px; border: none;
  border-radius: 10px; font-size: 1.1rem; font-weight: 700; cursor: pointer; transition: 0.3s;
}

.submit-btn:hover:not(:disabled) { background-color: #1b5e20; transform: translateY(-2px); }

.success-message { text-align: center; padding: 20px 0; }
.success-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2e7d32;
  margin-bottom: 20px;
}
.success-icon svg {
  width: 64px;
  height: 64px;
}
.back-btn { margin-top: 25px; background: transparent; border: 2px solid #2e7d32; color: #2e7d32; padding: 10px 25px; border-radius: 8px; font-weight: 600; cursor: pointer; transition: 0.3s; }
.back-btn:hover { background-color: #2e7d32; color: white; }

h2 { 
  color: #333; 
  font-size: 1.8rem; 
  margin-bottom: 25px; 
  text-align: left; 
}

@media (max-width: 968px) {
  .contact-grid {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .info-column {
    display: contents; 
  }

  .info-intro-group {
    order: 1;
    width: 100%;
  }

  .form-column {
    order: 2;
    width: 100%;
    margin: 20px 0 60px 0;
  }

  .contact-methods {
    order: 3;
    width: 100%;
    border-top: 1px solid #eee;
    padding-top: 40px;
  }

  h2 {
    font-size: 1.6rem;
    text-align: center;
  }
}
</style>