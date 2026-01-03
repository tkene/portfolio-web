<script setup>
import { ref } from 'vue'

const skills = ref([
  { name: 'Vue.js', icon: 'fab fa-vuejs', level: 'Avancé' },
  { name: 'JavaScript', icon: 'fab fa-js', level: 'Avancé' },
  { name: 'TypeScript', icon: 'code', level: 'Intermédiaire' },
  { name: 'React', icon: 'fab fa-react', level: 'Intermédiaire' },
  { name: 'Node.js', icon: 'fab fa-node-js', level: 'Avancé' },
  { name: 'HTML/CSS', icon: 'fab fa-html5', level: 'Expert' },
  { name: 'TailwindCSS', icon: 'fab fa-css3-alt', level: 'Avancé' },
  { name: 'Quasar', icon: 'extension', level: 'Avancé' },
  { name: 'Git & Github', icon: 'fab fa-github', level: 'Avancé' },
  { name: 'REST API', icon: 'settings_ethernet', level: 'Avancé' },
  // { name: 'Responsive Design', icon: 'devices', level: 'Avancé' },
  { name: 'Vite', icon: 'speed', level: 'Avancé' },
  // { name: 'MongoDB', icon: 'storage', level: 'Intermédiaire' },
  { name: 'PostgreSQL', icon: 'storage', level: 'Intermédiaire' },
])
</script>

<template>
  <section id="skills" class="section-container bg-gray-50 dark:bg-gray-800">
    <div class="max-w-6xl mx-auto">
      <h2 class="section-title">Compétences</h2>
      <p class="section-subtitle">
        Technologies et outils que je maîtrise
      </p>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div v-for="skill in skills" :key="skill.name"
          class="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700">
          <div class="flex flex-col items-center text-center space-y-3">
            <div class="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
              <q-icon :name="skill.icon" size="32px" class="text-primary-600 dark:text-primary-400" />
            </div>
            <h3 class="font-semibold text-lg text-black dark:text-white">
              {{ skill.name }}
            </h3>
            <p class="text-sm text-black dark:text-gray-400">
              {{ skill.level }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
