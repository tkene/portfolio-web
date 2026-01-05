<script setup>
import { computed, ref, watch } from "vue";
import Modal from "./Modal.vue";

const props = defineProps({
    project: {
        type: Object,
        default: null,
    },
});

const emit = defineEmits(["close"]);

// État interne de la modal
const isOpen = ref(false);

// Synchroniser l'état avec la présence du projet
watch(
    () => props.project,
    (newProject) => {
        isOpen.value = newProject !== null;
    },
    { immediate: true }
);

const closeModal = () => {
    isOpen.value = false;
    emit("close");
};

const hasTechnologies = computed(() => props.project?.technologies?.length > 0);
const hasApis = computed(() => props.project?.apis?.length > 0);

// Précharger toutes les images de logos avec import.meta.glob
const logoModules = import.meta.glob('../assets/image/logo/*.{png,jpg,jpeg,svg}', {
    eager: true,
    import: 'default',
});

// Fonction pour obtenir le chemin du logo
const getLogoPath = (logoName) => {
    if (!logoName) return null;

    // Chercher le logo dans les modules préchargés en utilisant le nom du fichier
    const logoKey = Object.keys(logoModules).find(key =>
        key.includes(logoName)
    );

    if (logoKey && logoModules[logoKey]) {
        return logoModules[logoKey];
    }

    console.warn(`Logo not found: ${logoName}`);
    return null;
};
</script>

<template>
    <Modal v-model="isOpen" :title="project?.title" banner-color="primary" @close="closeModal">
        <template #content>
            <!-- Logo -->
            <div class="modal-section" v-if="project?.logo">
                <div class="flex justify-center mb-4">
                    <img :src="getLogoPath(project.logo)" :alt="project.title"
                        class="max-w-full h-auto max-h-32 object-contain" />
                </div>
            </div>

            <!-- Description -->
            <div class="modal-section">
                <div class="modal-section-header">
                    <q-icon name="description" size="md" color="primary" class="mr-2" />
                    <h3 class="modal-section-title">Description</h3>
                </div>
                <p class="modal-text">{{ project?.description }}</p>
            </div>

            <!-- Technologies -->
            <div class="modal-section" v-if="hasTechnologies">
                <div class="modal-section-header">
                    <q-icon name="code" size="md" color="primary" class="mr-2" />
                    <h3 class="modal-section-title">Technologies utilisées</h3>
                </div>
                <div class="modal-tags">
                    <span v-for="tech in project.technologies" :key="tech" class="modal-tag modal-tag-primary">
                        {{ tech }}
                    </span>
                </div>
            </div>

            <!-- APIs -->
            <div class="modal-section" v-if="hasApis">
                <div class="modal-section-header">
                    <q-icon name="api" size="md" color="secondary" class="mr-2" />
                    <h3 class="modal-section-title">APIs intégrées</h3>
                </div>
                <div class="modal-tags">
                    <span v-for="api in project.apis" :key="api" class="modal-tag modal-tag-secondary">
                        {{ api }}
                    </span>
                </div>
            </div>
        </template>

        <template #footer>
            <button class="modal-btn modal-btn-secondary" @click="closeModal">
                Fermer
            </button>
            <a v-if="project?.github" :href="project.github" target="_blank" rel="noopener noreferrer"
                class="modal-btn modal-btn-primary">
                <q-icon name="code" size="20px" class="mr-2" />
                GitHub
            </a>
            <a v-if="project?.demo" :href="project.demo" target="_blank" rel="noopener noreferrer"
                class="modal-btn modal-btn-accent">
                <q-icon name="launch" size="20px" class="mr-2" />
                Démo
            </a>
        </template>
    </Modal>
</template>
