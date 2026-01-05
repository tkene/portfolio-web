import { ref, onMounted, watch } from 'vue'
import { useQuasar } from 'quasar'
import { STORAGE_KEYS } from '@/constants/storage'

/**
 * Composable pour gérer le mode sombre de l'application
 * @returns {Object} - Objet contenant isDark, toggleDarkMode, initDarkMode
 */
export function useDarkMode() {
  const $q = useQuasar()
  const isDark = ref(false)

  /**
   * Initialise le mode sombre au chargement de l'application
   * Vérifie le localStorage et les préférences système
   */
  const initDarkMode = () => {
    const savedDarkMode = localStorage.getItem(STORAGE_KEYS.DARK_MODE)
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    // Priorité : localStorage > préférences système
    if (savedDarkMode === 'true' || (!savedDarkMode && prefersDark)) {
      setDarkMode(true)
    } else {
      setDarkMode(false)
    }
  }

  /**
   * Définit le mode sombre
   * @param {boolean} value - true pour activer le mode sombre, false pour le désactiver
   */
  const setDarkMode = (value) => {
    isDark.value = value
    $q.dark.set(value)

    if (value) {
      document.documentElement.classList.add('dark')
      localStorage.setItem(STORAGE_KEYS.DARK_MODE, 'true')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem(STORAGE_KEYS.DARK_MODE, 'false')
    }
  }

  /**
   * Bascule entre le mode clair et sombre
   */
  const toggleDarkMode = () => {
    setDarkMode(!isDark.value)
  }

  // Initialiser au montage
  onMounted(() => {
    initDarkMode()
  })

  // Écouter les changements de préférences système (optionnel)
  if (typeof window !== 'undefined' && window.matchMedia) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', (e) => {
      // Seulement si aucune préférence n'est sauvegardée
      if (!localStorage.getItem(STORAGE_KEYS.DARK_MODE)) {
        setDarkMode(e.matches)
      }
    })
  }

  return {
    isDark,
    toggleDarkMode,
    setDarkMode,
    initDarkMode
  }
}

