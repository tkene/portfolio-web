import { ref, onMounted, onBeforeUnmount, watch, nextTick } from "vue";
import * as THREE from "three";
import HALO from "vanta/dist/vanta.HALO.min";
import { isMobile } from "@/utils/device";
import { BREAKPOINTS } from "@/constants/app";

/**
 * Configuration par défaut pour l'effet
 */
const DEFAULT_HALO_CONFIG = {
  amplitudeFactor: 1.5,
  size: 0.7,
  minHeight: 200.0,
  minWidth: 200.0,
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
};

/**
 * Composable pour gérer l'effet Vanta
 * @param {Object} options - Options de configuration
 * @param {Ref<HTMLElement>} options.containerRef - Référence au conteneur DOM
 * @param {Ref<boolean>|ComputedRef<boolean>} options.isDark - Mode sombre actif
 * @param {Ref<boolean>|ComputedRef<boolean>} options.showVanta - Afficher/masquer l'effet
 * @returns {Object} - Objet contenant les méthodes et états
 */
export function useVantaHalo({ containerRef, isDark, showVanta }) {
  let vantaEffect = null;

  /**
   * Obtient les couleurs selon le mode (clair/sombre)
   * @returns {Object} Configuration des couleurs
   */
  const getHaloColors = () => {
    const darkMode = isDark.value;
    return {
      backgroundColor: darkMode ? 0x0f172a : 0xf8fafc,
      baseColor: darkMode ? 0x818cf8 : 0x6366f1,
    };
  };

  /**
   * Initialise l'effet Vanta
   */
  const initVanta = async () => {
    if (!showVanta.value || isMobile(BREAKPOINTS.MD) || !containerRef.value) {
      return;
    }

    // Nettoyer l'instance précédente
    if (vantaEffect) {
      vantaEffect.destroy();
      vantaEffect = null;
    }

    try {
      // Créer la nouvelle instance
      vantaEffect = HALO({
        el: containerRef.value,
        THREE,
        ...DEFAULT_HALO_CONFIG,
        ...getHaloColors(),
      });
    } catch (error) {
      console.error("Erreur lors de l'initialisation de Vanta HALO:", error);
    }
  };

  /**
   * Met à jour les options de l'effet
   */
  const updateHaloOptions = () => {
    if (vantaEffect && showVanta.value) {
      try {
        vantaEffect.setOptions(getHaloColors());
      } catch (error) {
        console.error("Erreur lors de la mise à jour de Vanta HALO:", error);
      }
    }
  };

  /**
   * Détruit l'effet Vanta
   */
  const destroyVanta = () => {
    if (vantaEffect) {
      try {
        vantaEffect.destroy();
        vantaEffect = null;
      } catch (error) {
        console.error("Erreur lors de la destruction de Vanta HALO:", error);
      }
    }
  };

  // Écouter les changements de isDark et showVanta
  watch(
    [() => isDark.value, () => showVanta.value],
    async ([newIsDark, newShowVanta], [oldIsDark, oldShowVanta]) => {
      // Si showVanta change
      if (newShowVanta !== oldShowVanta) {
        if (newShowVanta) {
          await nextTick();
          initVanta();
        } else {
          destroyVanta();
        }
      }
      // Si seulement isDark change et que Vanta est actif
      else if (newIsDark !== oldIsDark && newShowVanta) {
        updateHaloOptions();
      }
    }
  );

  onMounted(async () => {
    await nextTick();
    initVanta();
  });

  onBeforeUnmount(() => {
    destroyVanta();
  });

  return {
    initVanta,
    updateHaloOptions,
    destroyVanta,
  };
}
