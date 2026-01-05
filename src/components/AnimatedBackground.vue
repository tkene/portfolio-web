<script setup>
import { ref, computed } from "vue";
import { useVantaHalo } from "@/composables/useVantaHalo";

const props = defineProps({
    isDark: {
        type: Boolean,
        default: false,
    },
    showVanta: {
        type: Boolean,
        default: true,
    },
});

// Référence au conteneur DOM
const vantaRef = ref(null);

// Convertir les props en computed pour la réactivité
const isDarkRef = computed(() => props.isDark);
const showVantaRef = computed(() => props.showVanta);

// Utilisation du composable pour gérer Vanta HALO
useVantaHalo({
    containerRef: vantaRef,
    isDark: isDarkRef,
    showVanta: showVantaRef,
});
</script>

<template>
    <div class="animated-background">
        <div v-if="showVanta" ref="vantaRef" class="vanta-background"></div>
    </div>
</template>

<style scoped>
.animated-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
}

/* Conteneur Vanta pour l'effet HALO */
.vanta-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;
}
</style>
