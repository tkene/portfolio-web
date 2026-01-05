<script setup>
import { ref } from "vue";
import ProjectModal from "./ProjectModal.vue";

const projects = ref([
  {
    id: 1,
    logo: null,
    title: 'Portfolio Web de Tuan Kene',
    description: 'Portfolio one-page moderne développé avec Vue.js 3, Quasar Framework et TailwindCSS. Design responsive avec dark mode et animations fluides.',
    technologies: ['Vue.js', 'Quasar', 'TailwindCSS', 'Vite'],
    github: 'https://github.com/tkene/portfolio-web',
    demo: null
  },
  {
    id: 2,
    logo: "JobTracker-q1se3KFH.png",
    title: 'JobSeeker',
    description: 'Outil de gestion recherche d\'emploi avec gestion des candidatures, des offres d\'emploi et des entreprises.',
    technologies: ['Node.js', 'Vue.js', 'Quasar', 'TailwindCSS', 'Vite', 'SQLite'],
    github: 'https://job-secker.zeabur.app/login?redirect=/job-alerts',
    demo: null
  },
  {
    id: 3,
    title: "Ibback Reborn",
    logo: "ibback.png",
    description: "Ibback Reborn est une plateforme SaaS full-stack pour la gestion d'appels téléphoniques et la prise de rendez-vous. Elle centralise la gestion des leads, des appels (via Aircall), des communications (SMS/emails) et des rendez-vous dans une interface unique. L'application permet aux équipes commerciales de traiter les leads efficacement grâce à des workflows automatisés, un système de recommandation intelligent et une communication multi-canal (téléphone, SMS, email). Elle offre une gestion en temps réel via WebSocket, un backoffice pour les administrateurs et des rôles différenciés (Administrateur, Manager, Téléopérateur). Développée en intégrant des APIs externes(Aircall, Mailjet, SMSFactor), l'application suit une architecture modulaire et scalable, avec une couverture de tests et un monitoring d'erreurs intégré.",
    technologies: [
      "Node.js",
      "Express.js",
      "Vue.js 3",
      "Vue Router",
      "Pinia",
      "Quasar",
      "TailwindCSS",
      "Vite",
      "TypeScript",
      "WebSocket",
      "Sequelize",
      "MySQL",
      "Axios",
      "Vitest",
      "Playwright",
      "MVC"
    ],
    apis: [
      "Aircall API",
      "Mailjet API",
      "SMSFactor API",
      "Sentry API",
      "Codecov API",
      "Playwright API",
    ],
    github: null,
    demo: null
  },
  {
    id: 4,
    logo: "siska.png",
    title: "SISKA",
    description: "Plateforme web PHP complète de gestion opérationnelle pour l'insertion professionnelle et la formation. Gestion des bénéficiaires (PE/PP), consultants, prestations, facturation électronique (Chorus), rendez-vous et livrables. Intégration de 10+ APIs externes (Addviseo, Qualisocial, MaFormation, Yousign, Google APIs, SMSFactor, Slack). Architecture MVC scalable avec tests automatisés (Codeception, Playwright) et documentation complète.",
    technologies: [
      "PHP",
      "MySQL/MariaDB",
      "Composer",
      "JavaScript",
      "jQuery 3.5.1",
      "jQuery UI",
      "Bootstrap",
      "DataTables",
      "Select2",
      "Toastr",
      "Popper.js",
      "Node.js",
      "TypeScript",
      "ESLint",
      "Codeception",
      "Playwright",
      "Cucumber/Gherkin",
      "Allure",
      "PHP CodeSniffer",
      "mPDF",
      "PHPMailer",
      "php_xlsxwriter",
      "Guzzle",
      "Monolog",
      "SMSFactor SDK",
      "Google API Client",
      "PHPSpreadsheet",
      "PDO",
      "JSON",
      "XML/XSD",
      "Excel/XLSX",
      "OAuth 2.0",
      "Git",
      "GitHub Actions",
    ],
    apis: [
      "Addviseo API",
      "Chorus API (PISTE)",
      "MaFormation API (HelloWork)",
      "Slack API (Webhooks)",
      "Scaleway S3 API",
      "SMSFactor API",
      "Google Sheets API",
      "Google Drive API",
      "Ibback API"
    ],
    github: null,
    demo: null
  },
  {
    id: 5,
    logo: "NEWLEAU.png",
    title: "Plateforme de Gestion Fournisseurs Newleau",
    description: "Application web de gestion et synchronisation des données fournisseurs avec import automatique de fichiers (CSV, XLS, XLSX), recherche avancée de produits, synchronisation avec Magento via API REST, gestion des utilisateurs et des rôles, historique des imports et traitement automatisé des emails.",
    technologies: [
      "PHP 7.4",
      "MySQL",
      "Twig 3.0",
      "Bootstrap 5.0",
      "jQuery 3.0",
      "DataTables",
      "PHPSpreadsheet",
      "PHPMailer",
      "Monolog",
      "SCSS",
      "SweetAlert2",
      "Font Awesome",
      "Google Fonts"
    ],
    apis: [
      "Magento REST API",
      "Google Fonts API"
    ],
    github: null,
    demo: null
  },
  {
    id: 6,
    logo: "logo_pbs.png",
    title: "Extranet Paniers Bio Solidaires",
    description: "Application web d'extranet pour la gestion de paniers bio solidaires avec système de points relais, gestion de producteurs, tournées, plateformes, panier client, et CMS intégré. Interface d'administration complète avec authentification, gestion d'utilisateurs et paramétrage d'APIs.",
    technologies: [
      "PHP 8.1.5",
      "Twig 3.0",
      "React.js",
      "Bootstrap 5.0",
      "jQuery 3.0",
      "jQuery UI 1.13.1",
      "DataTables 1.12.1",
      "FullCalendar",
      "Dropzone",
      "SweetAlert2",
      "Font Awesome",
      "SCSS",
      "Composer",
      "Monolog",
      "PHPMailer"
    ],
    apis: [
      "Google Maps API",
      "Google Fonts API",
      "Font Awesome CDN"
    ],
    github: null,
    demo: null
  }
])

// Gestion simple de la modal
const selectedProject = ref(null);

const openProject = (project) => {
  selectedProject.value = project;
};

const closeModal = () => {
  selectedProject.value = null;
};
</script>

<template>
  <section id="projects" class="bg-white dark:bg-gray-900 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <h2 class="section-title dark:text-black">Projets</h2>
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
                <!-- <span>Démo</span> -->
              </a>
            </div>
          </div>
        </div>
        <div class="col-span-full text-center py-8 text-gray-600 dark:text-gray-400">
          Et beaucoup d'autres projets...
        </div>
      </div>
    </div>

    <ProjectModal :project="selectedProject" @close="closeModal" />
  </section>
</template>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-clamp: 3;
}
</style>
