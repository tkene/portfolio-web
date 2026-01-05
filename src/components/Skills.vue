<script setup>
import { ref } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const skills = ref([
  { name: 'Symfony', icon: 'fab fa-symfony', level: 'Avancé' },
  { name: 'Node.js', icon: 'fab fa-node-js', level: 'Avancé' },
  { name: 'Vue.js', icon: 'fab fa-vuejs', level: 'Avancé' },
  { name: 'JavaScript', icon: 'fab fa-js', level: 'Avancé' },
  { name: 'PHP', icon: 'fab fa-php', level: 'Expert' },
  { name: 'React', icon: 'fab fa-react', level: 'Intermédiaire' },
  { name: 'TypeScript', icon: 'code', level: 'Intermédiaire' },
  { name: 'TailwindCSS', icon: 'fab fa-css3-alt', level: 'Avancé' },
  { name: 'Quasar', icon: 'extension', level: 'Avancé' },
  { name: 'Git & Github', icon: 'fab fa-github', level: 'Avancé' },
  { name: 'REST API', icon: 'settings_ethernet', level: 'Avancé' },
  // { name: 'Responsive Design', icon: 'devices', level: 'Avancé' },
  // { name: 'MongoDB', icon: 'storage', level: 'Intermédiaire' },
  { name: 'PostgreSQL', icon: 'storage', level: 'Intermédiaire' },
])

const { sectionRef, isVisible } = useScrollAnimation()
</script>

<template>
  <section ref="sectionRef" id="skills" class="bg-gray-50 dark:bg-gray-800 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <h2 :class="['section-title', { 'animate-fade-in-up': isVisible }]"
        :style="{ animationDelay: isVisible ? '0.1s' : '0s' }">
        Compétences
      </h2>
      <p :class="['section-subtitle', { 'animate-fade-in-up': isVisible }]"
        :style="{ animationDelay: isVisible ? '0.2s' : '0s' }">
        Technologies et outils que je maîtrise
      </p>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div v-for="(skill, index) in skills" :key="skill.name" :class="[
          'skill-card',
          'bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700',
          { 'animate-fade-in-scale': isVisible }
        ]" :style="{
          animationDelay: isVisible ? `${0.3 + index * 0.05}s` : '0s',
          opacity: isVisible ? 1 : 0
        }">
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

<style scoped>
/* Animation initiale : invisible */
.skill-card {
  opacity: 0;
  transform: translateY(20px) scale(0.9);
}

/* Amélioration de la transition au survol */
.skill-card:hover {
  transform: translateY(-5px) scale(1.02);
}
</style>
