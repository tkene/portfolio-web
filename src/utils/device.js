/**
 * Utilitaires pour la détection d'appareils et de tailles d'écran
 */

/**
 * Vérifie si l'appareil est un mobile
 * @param {number} breakpoint - Breakpoint en pixels (défaut: 768)
 * @returns {boolean}
 */
export const isMobile = (breakpoint = 768) => {
  if (typeof window === "undefined") return false;
  return window.innerWidth < breakpoint;
};

/**
 * Vérifie si l'appareil est une tablette
 * @param {number} minBreakpoint - Breakpoint minimum (défaut: 768)
 * @param {number} maxBreakpoint - Breakpoint maximum (défaut: 1024)
 * @returns {boolean}
 */
export const isTablet = (minBreakpoint = 768, maxBreakpoint = 1024) => {
  if (typeof window === "undefined") return false;
  const width = window.innerWidth;
  return width >= minBreakpoint && width < maxBreakpoint;
};

/**
 * Vérifie si l'appareil est un desktop
 * @param {number} breakpoint - Breakpoint en pixels (défaut: 1024)
 * @returns {boolean}
 */
export const isDesktop = (breakpoint = 1024) => {
  if (typeof window === "undefined") return false;
  return window.innerWidth >= breakpoint;
};

/**
 * Obtient la largeur actuelle de la fenêtre
 * @returns {number}
 */
export const getWindowWidth = () => {
  if (typeof window === "undefined") return 0;
  return window.innerWidth;
};

/**
 * Obtient la hauteur actuelle de la fenêtre
 * @returns {number}
 */
export const getWindowHeight = () => {
  if (typeof window === "undefined") return 0;
  return window.innerHeight;
};
