<script setup>
import { ref, onMounted } from 'vue'
import { useQuasar } from 'quasar'
import Header from './components/Header.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

const $q = useQuasar()
const isDark = ref(false)

// Vérifier le mode sombre au chargement
onMounted(() => {
  const darkMode = localStorage.getItem('darkMode')
  if (darkMode === 'true' || (!darkMode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true
    $q.dark.set(true)
    document.documentElement.classList.add('dark')
  } else {
    isDark.value = false
    $q.dark.set(false)
    document.documentElement.classList.remove('dark')
  }
})

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  $q.dark.set(isDark.value)

  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('darkMode', 'true')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('darkMode', 'false')
  }
}
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <q-page class="overflow-hidden">
        <!-- Header -->
        <Header @toggle-dark="toggleDarkMode" :isDark="isDark" />

        <!-- About Section -->
        <About />

        <!-- Skills Section -->
        <Skills />

        <!-- Projects Section -->
        <Projects />

        <!-- Contact Section -->
        <Contact />

        <!-- Footer -->
        <Footer />
      </q-page>
    </q-page-container>
  </q-layout>
</template>
