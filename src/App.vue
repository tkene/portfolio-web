<script setup>
import Header from './components/Header.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import { useDarkMode } from './composables/useDarkMode'

// Utilisation du composable pour gérer le dark mode
const { isDark, toggleDarkMode } = useDarkMode()
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
