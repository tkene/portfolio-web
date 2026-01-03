<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const loading = ref(false)
const email = import.meta.env.VITE_EMAIL

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  loading.value = true

  // Simulation d'envoi (à remplacer par un vrai service)
  setTimeout(() => {
    loading.value = false
    $q.notify({
      type: 'positive',
      message: 'Message envoyé avec succès !',
      position: 'top'
    })

    // Réinitialiser le formulaire
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  }, 1500)
}
</script>

<template>
  <section id="contact" class="section-container bg-gray-50 dark:bg-gray-800">
    <div class="max-w-4xl mx-auto">
      <h2 class="section-title">Contact</h2>
      <p class="section-subtitle">
        N'hésitez pas à me contacter pour discuter de mes projets
      </p>

      <!-- Informations de contact -->
      <div class="space-y-6 mb-6">
        <div class="bg-white dark:text-black rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
          <div class="flex justify-center items-center">
            <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-black">
              Coordonnées
            </h3>
          </div>
          <div class="flex flex-col md:flex-row md:items-center gap-4 md:gap-0">
            <a :href="`mailto:${email}`"
              class="flex items-center justify-center md:justify-start space-x-3 text-gray-700 dark:text-black hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              <q-icon name="email" size="24px" />
              <span>{{ email }}</span>
            </a>
            <div class="flex-1 flex justify-center">
              <a href="https://www.linkedin.com/in/tuan-kene-4a986a197/" target="_blank" rel="noopener noreferrer"
                class="flex items-center space-x-3 text-gray-700 dark:text-black hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <q-icon name="fab fa-linkedin" size="24px" />
                <span>LinkedIn</span>
              </a>
            </div>
            <a href="https://github.com/tkene" target="_blank" rel="noopener noreferrer"
              class="flex items-center justify-center md:justify-end space-x-3 text-gray-700 dark:text-black hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              <q-icon name="fab fa-github" size="24px" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Formulaire de contact -->
      <!-- <div class="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
        <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-black">
          Envoyez un message
        </h3>
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <q-input v-model="form.name" label="Nom" outlined :dark="$q.dark.isActive" required />
          <q-input v-model="form.email" label="Email" type="email" outlined :dark="$q.dark.isActive" required />
          <q-input v-model="form.subject" label="Sujet" outlined :dark="$q.dark.isActive" required />
          <q-input v-model="form.message" label="Message" type="textarea" rows="5" outlined :dark="$q.dark.isActive"
            required />
          <q-btn type="submit" color="primary" label="Envoyer" class="w-full" :loading="loading" />
        </form>
      </div> -->
    </div>
  </section>
</template>

<style scoped>
/* Bordures noires pour les q-input en dark mode uniquement */
:deep(.q-field--dark.q-field--outlined .q-field__control) {
  border-color: #000000 !important;
  /* noir */
}

:deep(.q-field--dark.q-field--outlined .q-field__control:hover) {
  border-color: #000000 !important;
  /* noir au survol */
}

:deep(.q-field--dark.q-field--outlined .q-field__control:focus-within) {
  border-color: #000000 !important;
  /* noir au focus */
}
</style>
