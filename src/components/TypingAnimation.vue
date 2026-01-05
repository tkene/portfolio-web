<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'

const props = defineProps({
    texts: {
        type: Array,
        required: true,
        default: () => []
    },
    typingSpeed: {
        type: Number,
        default: 100
    },
    deletingSpeed: {
        type: Number,
        default: 50
    },
    pauseAfterTyping: {
        type: Number,
        default: 2000
    },
    pauseBeforeNext: {
        type: Number,
        default: 300
    },
    showCursor: {
        type: Boolean,
        default: true
    },
    cursorChar: {
        type: String,
        default: '|'
    },
    loop: {
        type: Boolean,
        default: true
    },
    noDelete: {
        type: Boolean,
        default: false
    }
})

const displayedText = ref('')
let currentTextIndex = 0
let currentCharIndex = 0
let isDeleting = false
let typingTimeout = null

const typeText = () => {
    if (props.texts.length === 0) return

    const currentText = props.texts[currentTextIndex]

    if (!isDeleting && currentCharIndex < currentText.length) {
        // Ajouter une lettre
        displayedText.value = currentText.substring(0, currentCharIndex + 1)
        currentCharIndex++
        typingTimeout = setTimeout(typeText, props.typingSpeed)
    } else if (!isDeleting && currentCharIndex === currentText.length) {
        // Si noDelete est activé, arrêter l'animation après la pause
        if (props.noDelete) {
            return
        }
        // Attendre avant de commencer à effacer
        typingTimeout = setTimeout(() => {
            isDeleting = true
            typeText()
        }, props.pauseAfterTyping)
    } else if (isDeleting && currentCharIndex > 0) {
        // Effacer une lettre
        displayedText.value = currentText.substring(0, currentCharIndex - 1)
        currentCharIndex--
        typingTimeout = setTimeout(typeText, props.deletingSpeed)
    } else if (isDeleting && currentCharIndex === 0) {
        // Passer au texte suivant
        isDeleting = false

        if (props.loop) {
            currentTextIndex = (currentTextIndex + 1) % props.texts.length
        } else {
            currentTextIndex++
            if (currentTextIndex >= props.texts.length) {
                // Arrêter l'animation si on n'est plus en boucle
                return
            }
        }

        typingTimeout = setTimeout(typeText, props.pauseBeforeNext)
    }
}

const start = () => {
    // Réinitialiser l'animation
    displayedText.value = ''
    currentTextIndex = 0
    currentCharIndex = 0
    isDeleting = false

    if (typingTimeout) {
        clearTimeout(typingTimeout)
    }

    typeText()
}

const stop = () => {
    if (typingTimeout) {
        clearTimeout(typingTimeout)
        typingTimeout = null
    }
}

onMounted(() => {
    start()
})

onBeforeUnmount(() => {
    stop()
})

// Redémarrer l'animation si les textes changent
watch(() => props.texts, () => {
    start()
}, { deep: true })

// Exposer les méthodes pour un contrôle externe si nécessaire
defineExpose({
    start,
    stop
})
</script>

<template>
    <span>
        {{ displayedText }}<span v-if="showCursor" class="animate-pulse">{{ cursorChar }}</span>
    </span>
</template>

<style scoped>
.animate-pulse {
    animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }
}
</style>
