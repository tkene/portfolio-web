<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    id: 1,
    title: 'Portfolio Web de Tuan Kene',
    description: 'Portfolio one-page moderne développé avec Vue.js 3, Quasar Framework et TailwindCSS. Design responsive avec dark mode et animations fluides.',
    technologies: ['Vue.js', 'Quasar', 'TailwindCSS', 'Vite'],
    github: 'https://github.com/tkene/portfolio-web',
    demo: null
  },
  {
    id: 2,
    title: 'Application E-commerce',
    description: 'Plateforme e-commerce complète avec gestion de panier, système de paiement et administration. Interface utilisateur moderne et intuitive.',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'TailwindCSS'],
    github: 'https://github.com/tkene',
    demo: null
  },
  {
    id: 3,
    title: 'Dashboard Analytics',
    description: 'Tableau de bord interactif pour visualiser et analyser des données en temps réel. Graphiques dynamiques et statistiques détaillées.',
    technologies: ['Vue.js', 'Chart.js', 'Quasar', 'REST API'],
    github: 'https://github.com/tkene',
    demo: null
  },
  {
    id: 4,
    title: 'API REST Backend',
    description: 'API RESTful robuste avec authentification JWT, gestion des utilisateurs, documentation Swagger et architecture scalable.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com/tkene',
    demo: null
  },
  {
    id: 5,
    title: 'Application de Gestion de Projets',
    description: 'Application web collaborative pour la gestion de tâches et projets avec synchronisation en temps réel et notifications.',
    technologies: ['Vue.js', 'Firebase', 'TailwindCSS', 'TypeScript'],
    github: 'https://github.com/tkene',
    demo: null
  },
  {
    id: 6,
    title: 'Site Vitrine Moderne',
    description: 'Site vitrine professionnel avec présentation des services, portfolio interactif et formulaire de contact intégré.',
    technologies: ['Vue.js', 'Quasar', 'TailwindCSS', 'Vite'],
    github: 'https://github.com/tkene',
    demo: null
  }
])

const openProject = (project) => {
  if (project.demo) {
    window.open(project.demo, '_blank', 'noopener,noreferrer')
  } else if (project.github) {
    window.open(project.github, '_blank', 'noopener,noreferrer')
  }
}
</script>

<template>
  <section id="projects" class="section-container bg-white dark:bg-gray-900">
    <div class="max-w-6xl mx-auto">
      <h2 class="section-title">Projets</h2>
      <p class="section-subtitle">
        Découvrez quelques-uns de mes projets récents
      </p>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in projects" :key="project.id"
          class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border border-gray-200 dark:border-gray-700 cursor-pointer group"
          @click="openProject(project)">
          <div class="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
            <q-icon name="folder" size="64px"
              class="text-white opacity-80 group-hover:scale-110 transition-transform" />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-black">
              {{ project.title }}
            </h3>
            <p class="text-gray-600 dark:text-black mb-4 line-clamp-3">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="tech in project.technologies" :key="tech"
                class="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full">
                {{ tech }}
              </span>
            </div>
            <div class="flex items-center justify-between">
              <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer" @click.stop
                class="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 flex items-center space-x-2">
                <q-icon name="code" size="20px" />
                <span>GitHub</span>
              </a>
              <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener noreferrer" @click.stop
                class="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 flex items-center space-x-2">
                <q-icon name="launch" size="20px" />
                <span>Démo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
