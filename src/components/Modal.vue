<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
    title: {
        type: String,
        default: "",
    },
    bannerColor: {
        type: String,
        default: "primary", // primary, secondary, accent, ou couleur personnalisée
    },
    maxWidth: {
        type: String,
        default: "900px",
    },
    closeOnOverlay: {
        type: Boolean,
        default: true,
    },
});

const emit = defineEmits(["update:modelValue", "close"]);

// Gérer la visibilité de la modal
const isOpen = ref(props.modelValue);

watch(
    () => props.modelValue,
    (newVal) => {
        isOpen.value = newVal;
        if (newVal) {
            // Bloquer le scroll du body quand la modal est ouverte
            document.body.style.overflow = "hidden";
        } else {
            // Réactiver le scroll du body
            document.body.style.overflow = "";
        }
    }
);

watch(isOpen, (newVal) => {
    emit("update:modelValue", newVal);
});

const closeModal = () => {
    isOpen.value = false;
    emit("close");
    document.body.style.overflow = "";
};

const handleEscape = (event) => {
    if (event.key === "Escape" && isOpen.value) {
        closeModal();
    }
};

const getBannerColor = () => {
    const colors = {
        primary: "linear-gradient(to right, #0ea5e9, #38bdf8)", // Sky blue (primary-500 to primary-400)
        secondary: "linear-gradient(to right, #0284c7, #0ea5e9)", // Sky blue darker (primary-600 to primary-500)
        accent: "linear-gradient(to right, #ec4899, #f472b6)", // Pink (utilisé dans les animations)
        success: "linear-gradient(to right, #10b981, #34d399)", // Green
        warning: "linear-gradient(to right, #f59e0b, #fbbf24)", // Amber
        danger: "linear-gradient(to right, #ef4444, #f87171)", // Red
    };

    // Si c'est une couleur personnalisée (commence par # ou rgb)
    if (props.bannerColor.startsWith("#") || props.bannerColor.startsWith("rgb")) {
        return props.bannerColor;
    }

    return colors[props.bannerColor] || colors.primary;
};

// Écouter la touche Escape
onMounted(() => {
    window.addEventListener("keydown", handleEscape);
});

onBeforeUnmount(() => {
    window.removeEventListener("keydown", handleEscape);
    // S'assurer de réactiver le scroll si le composant est démonté
    document.body.style.overflow = "";
});
</script>

<template>
    <Teleport to="body">
        <Transition name="modal">
            <div v-if="isOpen" class="modal-overlay" @click.self="closeOnOverlay ? closeModal : null">
                <div class="modal-container" :style="{ maxWidth: maxWidth }">
                    <!-- En-tête de la modal -->
                    <div class="modal-header" :style="{ background: getBannerColor() }">
                        <h2 class="modal-title">
                            <slot name="title">{{ title }}</slot>
                        </h2>
                        <button class="modal-close" @click="closeModal" aria-label="Fermer">
                            <q-icon name="close" size="24px" />
                        </button>
                    </div>

                    <!-- Contenu scrollable -->
                    <div class="modal-content">
                        <slot name="content">
                            <!-- Contenu par défaut si aucun slot n'est fourni -->
                            <p>Contenu de la modal</p>
                        </slot>
                    </div>

                    <!-- Actions (footer) -->
                    <div class="modal-footer">
                        <slot name="footer">
                            <!-- Footer par défaut si aucun slot n'est fourni -->
                            <button class="modal-btn modal-btn-secondary" @click="closeModal">
                                Fermer
                            </button>
                        </slot>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>
/* Modal Vue.js native */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.75);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    padding: 1rem;
    overflow-y: auto;
}

.modal-container {
    background: white;
    border-radius: 0.5rem;
    width: 100%;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    margin: auto;
}

.dark .modal-container {
    background: #1f2937;
}

.modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem;
    border-radius: 0.5rem 0.5rem 0 0;
}

.modal-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    margin: 0;
}

.modal-close {
    background: transparent;
    border: none;
    color: white;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;
}

.modal-close:hover {
    background-color: rgba(255, 255, 255, 0.2);
}

.modal-content {
    padding: 1.5rem;
    overflow-y: auto;
    flex: 1;
    max-height: calc(90vh - 180px);
}

.modal-footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.75rem;
    padding: 1.5rem;
    border-top: 1px solid #e5e7eb;
    background-color: #f9fafb;
}

.dark .modal-footer {
    border-top-color: #374151;
    background-color: #111827;
}

.modal-btn {
    display: inline-flex;
    align-items: center;
    padding: 0.625rem 1.25rem;
    border-radius: 0.5rem;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.2s;
    border: none;
    cursor: pointer;
    font-size: 0.875rem;
}

.modal-btn-secondary {
    background-color: #6b7280;
    color: white;
}

.modal-btn-secondary:hover {
    background-color: #4b5563;
}

.modal-btn-primary {
    background-color: #0ea5e9;
    /* primary-500 */
    color: white;
}

.modal-btn-primary:hover {
    background-color: #0284c7;
    /* primary-600 */
}

.modal-btn-accent {
    background-color: #38bdf8;
    /* primary-400 */
    color: white;
}

.modal-btn-accent:hover {
    background-color: #0ea5e9;
    /* primary-500 */
}

/* Animations de transition */
.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.3s ease;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
    transform: scale(0.95) translateY(-20px);
    opacity: 0;
}
</style>

<!-- Styles globaux pour le contenu de la modal (utilisés dans les slots) -->
<style>
/* Styles pour le contenu de la modal - accessibles dans les slots */
.modal-section {
    margin-bottom: 2rem;
}

.modal-section:last-child {
    margin-bottom: 0;
}

.modal-section-header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}

.modal-section-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #111827;
    margin: 0;
}

.dark .modal-section-title {
    color: white;
}

.modal-badge {
    margin-left: 0.5rem;
    padding: 0.25rem 0.75rem;
    background-color: #0ea5e9;
    /* primary-500 */
    color: white;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 500;
}

.modal-badge-secondary {
    background-color: #38bdf8;
    /* primary-400 */
}

.modal-text {
    color: #374151;
    line-height: 1.75;
    margin: 0;
}

.dark .modal-text {
    color: #d1d5db;
}

.modal-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.modal-tag {
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 500;
}

.modal-tag-primary {
    background-color: #e0f2fe;
    /* primary-100 */
    color: #0284c7;
    /* primary-600 */
}

.dark .modal-tag-primary {
    background-color: #0369a1;
    /* primary-700 */
    color: #bae6fd;
    /* primary-200 */
}

.modal-tag-secondary {
    background-color: #e0f2fe;
    /* primary-100 */
    color: #0ea5e9;
    /* primary-500 */
}

.dark .modal-tag-secondary {
    background-color: #0369a1;
    /* primary-700 */
    color: #bae6fd;
    /* primary-200 */
}

.modal-btn {
    display: inline-flex;
    align-items: center;
    padding: 0.625rem 1.25rem;
    border-radius: 0.5rem;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.2s;
    border: none;
    cursor: pointer;
    font-size: 0.875rem;
}

.modal-btn-secondary {
    background-color: #6b7280;
    color: white;
}

.modal-btn-secondary:hover {
    background-color: #4b5563;
}

.modal-btn-primary {
    background-color: #0ea5e9;
    /* primary-500 */
    color: white;
}

.modal-btn-primary:hover {
    background-color: #0284c7;
    /* primary-600 */
}

.modal-btn-accent {
    background-color: #38bdf8;
    /* primary-400 */
    color: white;
}

.modal-btn-accent:hover {
    background-color: #0ea5e9;
    /* primary-500 */
}

.mr-2 {
    margin-right: 0.5rem;
}
</style>
