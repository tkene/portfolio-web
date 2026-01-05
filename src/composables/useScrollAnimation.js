import { ref, onMounted, onUnmounted } from "vue";

/**
 * Composable réutilisable pour les animations au scroll
 * @param {Object} options - Options de configuration
 * @param {number} options.threshold - Seuil de visibilité (0-1)
 * @param {string} options.rootMargin - Marge pour déclencher l'animation
 * @param {boolean} options.once - Déclencher une seule fois (défaut: true)
 * @returns {Object} - { sectionRef, isVisible }
 */
export function useScrollAnimation(options = {}) {
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -100px 0px",
    once = true,
  } = options;

  const sectionRef = ref(null);
  const isVisible = ref(false);
  let observer = null;

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true;
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            isVisible.value = false;
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (sectionRef.value) {
      observer.observe(sectionRef.value);
    }
  });

  onUnmounted(() => {
    if (observer && sectionRef.value) {
      observer.unobserve(sectionRef.value);
    }
  });

  return {
    sectionRef,
    isVisible,
  };
}
