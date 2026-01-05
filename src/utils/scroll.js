/**
 * Utilitaires pour le scroll
 */

/**
 * Scroll fluide vers un élément
 * @param {string|HTMLElement} target - Sélecteur CSS ou élément HTML
 * @param {Object} options - Options de scroll
 */
export const scrollTo = (target, options = {}) => {
  const defaultOptions = {
    behavior: "smooth",
    block: "start",
    ...options,
  };

  let element;
  if (typeof target === "string") {
    element = document.querySelector(target);
  } else {
    element = target;
  }

  if (element) {
    element.scrollIntoView(defaultOptions);
  }
};

/**
 * Scroll vers le haut de la page
 * @param {Object} options - Options de scroll
 */
export const scrollToTop = (options = {}) => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
    ...options,
  });
};

/**
 * Vérifie si un élément est visible dans le viewport
 * @param {HTMLElement} element - Élément à vérifier
 * @param {number} threshold - Seuil de visibilité (0-1)
 * @returns {boolean}
 */
export const isElementVisible = (element, threshold = 0) => {
  if (!element) return false;

  const rect = element.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  return (
    rect.top >= -threshold * rect.height &&
    rect.left >= -threshold * rect.width &&
    rect.bottom <= windowHeight + threshold * rect.height &&
    rect.right <= windowWidth + threshold * rect.width
  );
};

/**
 * Obtient la position de scroll actuelle
 * @returns {number}
 */
export const getScrollPosition = () => {
  return (
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  );
};
