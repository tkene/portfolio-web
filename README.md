# Portfolio Développeur - Vue.js 3

Portfolio développeur moderne en One-Page réalisé avec Vue.js 3, Quasar Framework et TailwindCSS.

## 📋 Présentation du projet

Ce portfolio est une application web Single Page Application (SPA) moderne et responsive qui présente les compétences, projets et informations de contact d'un développeur. Le design est inspiré des meilleures pratiques modernes avec un focus sur la lisibilité, la performance et l'expérience utilisateur.

### Caractéristiques principales

- ✨ **One-Page** avec navigation fluide par scroll
- 🎨 **Design moderne** et épuré
- 🌙 **Dark Mode** avec détection automatique des préférences système
- 📱 **Responsive Design** adapté à tous les écrans
- ⚡ **Performance optimisée** avec Vue.js 3 et Vite
- 🎯 **Accessible** et SEO-friendly

## 🛠️ Technologies utilisées

### Framework & Bibliothèques

- **Vue.js 3** (v3.4+) - Framework JavaScript progressif avec Composition API
- **Quasar Framework** (v2.14+) - Framework Vue.js avec composants UI riches
- **TailwindCSS** (v3.4+) - Framework CSS utility-first pour le design
- **Vite** (v5.1+) - Build tool ultra-rapide

### Outils de développement

- **PostCSS** - Traitement CSS avancé
- **Autoprefixer** - Préfixes CSS automatiques
- **ESLint** - Linter pour la qualité du code

## 📁 Structure du projet

```
portfolio-web/
├── src/
│   ├── components/
│   │   ├── Header.vue      # En-tête avec navigation et hero section
│   │   ├── About.vue       # Section à propos
│   │   ├── Skills.vue      # Section compétences
│   │   ├── Projects.vue    # Section projets
│   │   ├── Contact.vue     # Section contact
│   │   └── Footer.vue      # Pied de page
│   ├── App.vue             # Composant racine
│   ├── main.js             # Point d'entrée de l'application
│   └── app.css             # Styles globaux et TailwindCSS
├── index.html              # Fichier HTML principal
├── package.json            # Dépendances et scripts
├── quasar.config.js        # Configuration Quasar
├── tailwind.config.js      # Configuration TailwindCSS
├── postcss.config.js       # Configuration PostCSS
└── README.md               # Documentation du projet
```

## 🚀 Installation

### Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** (version 18.0.0 ou supérieure)
- **npm** (version 9.0.0 ou supérieure) ou **yarn**

### Étapes d'installation

1. **Cloner le repository** (ou télécharger le projet)

```bash
git clone https://github.com/votre-username/portfolio-web.git
cd portfolio-web
```

2. **Installer les dépendances**

```bash
npm install
```

ou avec yarn :

```bash
yarn install
```

3. **Vérifier l'installation**

Une fois l'installation terminée, vous devriez voir un dossier `node_modules` créé dans le répertoire du projet.

## 💻 Lancer le projet en local

### Mode développement

Pour lancer le serveur de développement avec hot-reload :

```bash
npm run dev
```

ou avec yarn :

```bash
yarn dev
```

Le serveur de développement sera accessible à l'adresse :
- **Local** : `http://localhost:9000` (ou le port indiqué dans le terminal)
- Le navigateur s'ouvrira automatiquement

### Fonctionnalités du mode développement

- 🔥 **Hot Module Replacement (HMR)** - Rechargement automatique lors des modifications
- 🐛 **Source maps** - Débogage facilité
- 📊 **Analyse de performance** - Outils de développement Vue.js disponibles

## 🏗️ Build de production

### Générer le build de production

Pour créer une version optimisée et minifiée du projet :

```bash
npm run build
```

ou avec yarn :

```bash
yarn build
```

### Résultat du build

Le build génère un dossier `dist/spa/` contenant :
- Fichiers HTML, CSS et JavaScript optimisés
- Assets statiques (images, fonts, etc.)
- Code minifié et compressé pour la production

### Prévisualiser le build localement

Pour tester le build de production localement :

```bash
# Installer un serveur HTTP simple (si pas déjà installé)
npm install -g serve

# Servir le dossier dist/spa
serve -s dist/spa
```

## 📦 Déploiement

### Déploiement sur GitHub Pages

#### Option 1 : Utilisation de gh-pages

1. **Installer gh-pages** (déjà dans les devDependencies si nécessaire)

```bash
npm install --save-dev gh-pages
```

2. **Ajouter le script de déploiement dans `package.json`**

Ajoutez cette ligne dans la section `scripts` :

```json
"deploy": "quasar build && gh-pages -d dist/spa"
```

3. **Configurer le publicPath dans `quasar.config.js`**

Si votre repository est `https://github.com/username/portfolio-web`, ajoutez dans la section `build` :

```javascript
build: {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/portfolio-web/'
    : '/',
  // ... autres options
}
```

4. **Déployer**

```bash
npm run deploy
```

#### Option 2 : GitHub Actions (Recommandé)

Créez un fichier `.github/workflows/deploy.yml` :

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist/spa
```

### Déploiement sur Netlify

1. **Connecter votre repository** sur [Netlify](https://www.netlify.com/)
2. **Configurer les paramètres de build** :
   - Build command : `npm run build`
   - Publish directory : `dist/spa`
3. **Déployer** - Le déploiement se fera automatiquement à chaque push

### Déploiement sur Vercel

1. **Installer Vercel CLI** (optionnel)

```bash
npm install -g vercel
```

2. **Déployer**

```bash
vercel
```

Ou connecter votre repository directement sur [Vercel](https://vercel.com/)

### Déploiement sur un serveur traditionnel

1. **Générer le build**

```bash
npm run build
```

2. **Uploader le contenu de `dist/spa/`** sur votre serveur via FTP/SFTP

3. **Configurer votre serveur web** (Apache/Nginx) pour servir les fichiers statiques

## 🎨 Personnalisation

### Modifier les informations personnelles

1. **Header.vue** - Modifier le nom, rôle et CTA
2. **About.vue** - Modifier la description personnelle
3. **Skills.vue** - Ajouter/modifier les compétences dans le tableau `skills`
4. **Projects.vue** - Ajouter/modifier les projets dans le tableau `projects`
5. **Contact.vue** - Modifier les liens email, LinkedIn, GitHub
6. **Footer.vue** - Modifier les liens sociaux et le copyright

### Personnaliser les couleurs

Modifiez le fichier `tailwind.config.js` pour changer la palette de couleurs :

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Vos couleurs personnalisées
      },
    },
  },
}
```

### Ajouter des sections

1. Créez un nouveau composant dans `src/components/`
2. Importez-le dans `App.vue`
3. Ajoutez-le dans le template avec une section correspondante

## 📝 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Génère le build de production
- `npm run lint` - Vérifie et corrige le code avec ESLint

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser, le modifier et le distribuer.

## 👤 Auteur

Développé avec ❤️ en utilisant Vue.js 3, Quasar Framework et TailwindCSS.

## 🔗 Ressources utiles

- [Documentation Vue.js 3](https://vuejs.org/)
- [Documentation Quasar Framework](https://quasar.dev/)
- [Documentation TailwindCSS](https://tailwindcss.com/)
- [Documentation Vite](https://vitejs.dev/)

---

**Note** : N'oubliez pas de remplacer les liens et informations de contact par vos propres données avant de déployer !

