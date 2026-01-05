# Architecture du Projet

Ce document décrit l'architecture et l'organisation du code du portfolio.

## 📁 Structure des dossiers

```
src/
├── components/              # Composants Vue réutilisables
│   ├── About.vue            # Section "À propos"
│   ├── AnimatedBackground.vue  # Fond animé avec Vanta.js HALO
│   ├── Contact.vue           # Section contact
│   ├── Footer.vue            # Pied de page
│   ├── Header.vue            # En-tête avec navigation et hero section
│   ├── Projects.vue          # Section projets
│   ├── Skills.vue            # Section compétences
│   └── TypingAnimation.vue   # Composant d'animation de frappe réutilisable
│
├── composables/              # Composables Vue (logique réutilisable)
│   ├── useDarkMode.js        # Gestion du mode sombre (localStorage, préférences système)
│   └── useScrollAnimation.js # Animations au scroll
│
├── constants/                # Constantes de l'application
│   ├── app.js                # Constantes générales (breakpoints, durées, vitesses, navigation)
│   └── storage.js            # Clés de stockage localStorage
│
├── utils/                    # Fonctions utilitaires
│   ├── device.js             # Détection d'appareils (mobile, tablette, desktop)
│   ├── format.js             # Formatage (dates, nombres, texte)
│   ├── scroll.js             # Utilitaires de scroll
│   └── index.js              # Point d'entrée pour tous les utilitaires
│
├── types/                    # Types TypeScript (pour migration future)
│   └── index.d.ts            # Définitions de types (Project, Skill, ContactInfo, etc.)
│
├── assets/                   # Assets statiques
│   ├── css/
│   │   └── animations.css    # Animations CSS personnalisées
│   ├── docs/
│   │   └── CV-2026.pdf       # CV téléchargeable
│   └── image/
│       ├── 1580415323713.jpg # Photo de profil
│       ├── developer.svg      # Illustration développeur (mode clair)
│       └── developer-dark.svg # Illustration développeur (mode sombre)
│
├── App.vue                   # Composant racine (utilise useDarkMode)
├── main.js                   # Point d'entrée de l'application
└── app.css                    # Styles globaux et TailwindCSS
```

## 🎯 Principes d'organisation

### Composants (`components/`)

**Rôle** : Composants Vue réutilisables pour l'interface utilisateur

- **Un composant = une responsabilité** : Chaque composant a un rôle clair et défini
- **Réutilisabilité** : Les composants sont conçus pour être réutilisables
- **Props claires** : Les props sont typées et documentées
- **Composants principaux** :
  - `Header.vue` : Navigation, hero section avec TypingAnimation et AnimatedBackground
  - `About.vue` : Section à propos
  - `Skills.vue` : Affichage des compétences
  - `Projects.vue` : Galerie de projets
  - `Contact.vue` : Formulaire de contact
  - `Footer.vue` : Pied de page avec liens sociaux
  - `AnimatedBackground.vue` : Fond animé Vanta.js HALO (configurable)
  - `TypingAnimation.vue` : Animation de frappe réutilisable

### Composables (`composables/`)

**Rôle** : Logique métier réutilisable entre composants

- **Convention de nommage** : Préfixe `use` (ex: `useDarkMode`, `useScrollAnimation`)
- **Retour d'objets réactifs** : Les composables retournent des refs/computed réactifs
- **Composables disponibles** :
  - `useDarkMode.js` : Gestion complète du mode sombre
    - Initialisation depuis localStorage ou préférences système
    - Toggle du mode sombre
    - Synchronisation avec Quasar et TailwindCSS
    - Écoute des changements de préférences système
  - `useScrollAnimation.js` : Animations déclenchées au scroll

### Constantes (`constants/`)

**Rôle** : Centralisation de toutes les constantes de l'application

- **Organisation par domaine** : Un fichier par domaine (app, storage, etc.)
- **Export nommé** : Utilisation d'exports nommés pour faciliter l'import
- **Fichiers disponibles** :
  - `app.js` :
    - `APP_INFO` : Informations de l'application
    - `BREAKPOINTS` : Breakpoints responsive (SM, MD, LG, XL, 2XL)
    - `ANIMATION_DURATION` : Durées d'animation (FAST, NORMAL, SLOW, VERY_SLOW)
    - `TYPING_SPEED` : Vitesses de frappe pour TypingAnimation
    - `NAVIGATION_SECTIONS` : Sections de navigation
  - `storage.js` :
    - `STORAGE_KEYS` : Clés de stockage localStorage
    - `STORAGE_DEFAULTS` : Valeurs par défaut

### Utilitaires (`utils/`)

**Rôle** : Fonctions utilitaires pures (sans effets de bord)

- **Fonctions pures** : Pas d'effets de bord, résultats prévisibles
- **Organisation par type** : Un fichier par type d'utilitaires
- **Point d'entrée unique** : `index.js` pour importer tous les utilitaires facilement
- **Utilitaires disponibles** :
  - `device.js` :
    - `isMobile(breakpoint)` : Détecte si l'appareil est mobile
    - `isTablet(minBreakpoint, maxBreakpoint)` : Détecte si l'appareil est une tablette
    - `isDesktop(breakpoint)` : Détecte si l'appareil est un desktop
    - `getWindowWidth()` : Obtient la largeur de la fenêtre
    - `getWindowHeight()` : Obtient la hauteur de la fenêtre
  - `format.js` :
    - `formatDate(date, options)` : Formate une date au format français
    - `formatNumber(number, separator)` : Formate un nombre avec séparateurs
    - `truncateText(text, maxLength, suffix)` : Tronque un texte
    - `capitalize(str)` : Capitalise la première lettre
    - `toCamelCase(str)` : Convertit en camelCase
  - `scroll.js` :
    - `scrollTo(target, options)` : Scroll fluide vers un élément
    - `scrollToTop(options)` : Scroll vers le haut de la page
    - `isElementVisible(element, threshold)` : Vérifie si un élément est visible
    - `getScrollPosition()` : Obtient la position de scroll actuelle

### Types (`types/`)

**Rôle** : Définitions de types TypeScript pour faciliter la migration future

- **Documentation** : Les types servent aussi de documentation
- **Types disponibles** :
  - `Project` : Structure d'un projet
  - `Skill` : Structure d'une compétence
  - `ContactInfo` : Informations de contact
  - `AnimationConfig` : Configuration d'animation
  - `DarkModeProps` : Props pour le mode sombre
  - `TypingAnimationProps` : Props pour TypingAnimation
  - `NavigationSection` : Sections de navigation
  - `Breakpoints` : Interface pour les breakpoints

## 📚 Utilisation

### Utiliser un composable

```javascript
import { useDarkMode } from "@/composables/useDarkMode";

// Dans le composant
const { isDark, toggleDarkMode, setDarkMode } = useDarkMode();
```

### Utiliser une constante

```javascript
import { BREAKPOINTS, TYPING_SPEED, ANIMATION_DURATION } from "@/constants/app";
import { STORAGE_KEYS } from "@/constants/storage";

// Exemple d'utilisation
if (window.innerWidth < BREAKPOINTS.MD) {
  // Code pour mobile
}
```

### Utiliser un utilitaire

```javascript
// Import depuis le point d'entrée (recommandé)
import { isMobile, formatDate, scrollTo, truncateText } from "@/utils";

// Ou import direct depuis un fichier spécifique
import { isMobile } from "@/utils/device";
import { formatDate } from "@/utils/format";

// Exemples d'utilisation
if (isMobile(BREAKPOINTS.MD)) {
  // Code spécifique mobile
}

const formattedDate = formatDate(new Date());
scrollTo("#about");
const shortText = truncateText(longText, 100);
```

### Utiliser les types (TypeScript)

```typescript
import type { Project, Skill, ContactInfo, TypingAnimationProps } from '@/types'

// Utilisation dans un composant
const projects: Project[] = [...]
const props: TypingAnimationProps = {
  texts: ['Hello', 'World'],
  typingSpeed: 100
}
```

## 🔄 Migration et évolution

### Ajouter un nouveau composable

1. Créer le fichier dans `composables/` avec le préfixe `use`
2. Exporter une fonction qui retourne des valeurs réactives
3. Documenter avec JSDoc
4. Exemple :

```javascript
// composables/useExample.js
/**
 * Composable pour [description]
 * @returns {Object} - Objet contenant les valeurs réactives
 */
export function useExample() {
  const value = ref(null);

  return {
    value,
  };
}
```

### Ajouter un nouvel utilitaire

1. Créer ou modifier le fichier approprié dans `utils/`
2. Exporter la fonction avec JSDoc
3. L'ajouter à `utils/index.js` si nécessaire
4. Exemple :

```javascript
// utils/example.js
/**
 * Description de la fonction
 * @param {type} param - Description du paramètre
 * @returns {type} Description du retour
 */
export const exampleFunction = (param) => {
  // Implémentation
};
```

### Ajouter une constante

1. Créer ou modifier le fichier approprié dans `constants/`
2. Exporter avec un nom en UPPER_CASE
3. Documenter l'usage
4. Exemple :

```javascript
// constants/example.js
/**
 * Description des constantes
 */
export const EXAMPLE_CONSTANTS = {
  VALUE_1: "value1",
  VALUE_2: "value2",
};
```

## 🎨 Exemples d'intégration

### Exemple : Utilisation de useDarkMode dans App.vue

```vue
<script setup>
import { useDarkMode } from "./composables/useDarkMode";

const { isDark, toggleDarkMode } = useDarkMode();
</script>

<template>
  <Header @toggle-dark="toggleDarkMode" :isDark="isDark" />
</template>
```

### Exemple : Utilisation des utilitaires dans un composant

```vue
<script setup>
import { isMobile } from "@/utils/device";
import { BREAKPOINTS } from "@/constants/app";

const shouldShowMobileView = isMobile(BREAKPOINTS.MD);
</script>
```

### Exemple : Utilisation de TypingAnimation

```vue
<script setup>
import TypingAnimation from "./TypingAnimation.vue";
import { TYPING_SPEED } from "@/constants/app";

const texts = ["Hello", "World"];
</script>

<template>
  <TypingAnimation
    :texts="texts"
    :typing-speed="TYPING_SPEED.NORMAL"
    :loop="true"
  />
</template>
```

## ✅ Bonnes pratiques

1. **Séparation des responsabilités** : Chaque fichier a un rôle clair et défini
2. **DRY (Don't Repeat Yourself)** : Réutiliser les composables et utilitaires au lieu de dupliquer le code
3. **Documentation** : Commenter le code complexe avec JSDoc
4. **Cohérence** : Suivre les conventions de nommage établies
5. **Évolutivité** : Penser à la croissance du projet lors de l'ajout de nouvelles fonctionnalités
6. **Type safety** : Utiliser les types TypeScript pour améliorer la maintenabilité
7. **Imports organisés** : Utiliser les points d'entrée (`@/utils`, `@/constants`) quand possible

## 🔧 Configuration

### Alias de chemins

Le projet utilise des alias pour simplifier les imports :

- `@/` → `src/`
- Exemple : `import { useDarkMode } from '@/composables/useDarkMode'`

### Standards de code

- **ESLint** : Linter configuré pour maintenir la qualité du code
- **Formatage** : Utilisation de guillemets doubles et point-virgules (selon la configuration)
- **Conventions** :
  - Composables : préfixe `use`
  - Constantes : UPPER_CASE
  - Utilitaires : camelCase
  - Composants : PascalCase

## 📝 Notes importantes

- Le fichier `AnimatedBackground.md` dans `components/` devrait être déplacé vers `docs/` ou la racine du projet
- Les types TypeScript sont prêts pour une migration future
- Tous les composables sont réactifs et peuvent être utilisés dans plusieurs composants simultanément
- Les utilitaires sont des fonctions pures, testables facilement
