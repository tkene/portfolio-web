<script setup>
import AnimatedBackground from './AnimatedBackground.vue'
import TypingAnimation from './TypingAnimation.vue'
import cvPdf from '@/assets/docs/CV-2026.pdf'

const props = defineProps({
  isDark: {
    type: Boolean,
    default: false
  }
})

defineEmits(['toggle-dark'])

const typingTexts = ['HI, I AM', 'Bonjour, Je suis']
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-none dark:border-l dark:border-r dark:border-gray-800 transition-colors">
    <nav class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-center h-16 md:h-20">
        <!-- Navigation au centre -->
        <div class="flex items-center space-x-6">
          <a href="#projects"
            class="text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            Projets
          </a>
          <a href="#about"
            class="text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            À propos
          </a>
          <a href="#contact"
            class="text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            Contact
          </a>
          <!-- Dark Mode Toggle -->
          <q-btn flat round :icon="isDark ? 'light_mode' : 'dark_mode'" @click="$emit('toggle-dark')"
            class="text-indigo-500 dark:text-yellow-400 hover:bg-indigo-100 dark:hover:bg-yellow-900/20 ml-4" />
        </div>
      </div>
    </nav>
  </header>

  <!-- Hero Section -->
  <section class="min-h-screen flex items-center bg-white dark:bg-gray-900 relative z-10 overflow-hidden">
    <!-- Composant d'animation réutilisable -->
    <AnimatedBackground :isDark="isDark" />

    <div
      class="container grid grid-cols-1 md:grid-cols-2 items-center gap-8 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section gauche - Texte -->
      <div class="text-left space-y-6">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
          <span class="text-gray-600 dark:text-gray-200">
            <TypingAnimation :texts="typingTexts" />
          </span><br />
          <span class="text-primary-600 dark:text-primary-400">TUAN KENE</span>
        </h1>
        <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-200">
          Full-Stack Developer
        </p>
        <div class="pt-4">
          <a :href="cvPdf" download="CV-Tuan-Kene-2026.pdf"
            class="inline-flex items-center gap-3 px-6 py-3 text-base font-medium text-gray-100 dark:text-gray-700 bg-gray-800 dark:bg-gray-100 rounded-lg transition-colors shadow-sm">
            <div class="w-8 h-8 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center">
              <q-icon name="download" size="18px" class="text-gray-700 dark:text-gray-700" />
            </div>
            <span>Download CV</span>
          </a>
        </div>
      </div>

      <!-- Section droite - Illustration -->
      <div class="flex justify-center items-center">
        <div class="relative w-full max-w-lg">
          <img src="@/assets/image/developer.svg" alt="Tuan Kene" class="w-full h-auto object-contain" />
        </div>
      </div>
    </div>
  </section>
</template>
