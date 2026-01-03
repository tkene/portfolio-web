<template>
    <footer class="bg-gray-900 dark:bg-black text-gray-300 py-8">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div class="text-center md:text-left">
                    <p class="text-sm">
                        © {{ currentYear }} Tuan Kene. Tous droits réservés.
                    </p>
                </div>

                <div class="flex items-center space-x-6">
                    <a href="https://github.com/tkene" target="_blank" rel="noopener noreferrer"
                        class="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                        <q-icon name="fab fa-github" size="24px" />
                    </a>
                    <a href="https://www.linkedin.com/in/tuan-kene-4a986a197/" target="_blank" rel="noopener noreferrer"
                        class="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                        <q-icon name="fab fa-linkedin" size="24px" />
                    </a>
                    <a href="mailto:tuan.kene@example.com" class="text-gray-400 hover:text-white transition-colors"
                        aria-label="Email">
                        <q-icon name="email" size="24px" />
                    </a>
                </div>
            </div>

            <div class="mt-6 pt-6 border-t border-gray-800 text-center">
                <p class="text-xs text-gray-500">
                    Développé avec Vue.js 3, Quasar Framework et TailwindCSS
                </p>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
/* Styles spécifiques si nécessaire */
</style>
