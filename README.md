# EME - Site Web Bilingue

Un site web moderne pour la gestion de pièces automobiles avec support bilingue français/arabe.

## 🌟 Fonctionnalités

- **Interface bilingue** : Français et Arabe avec support RTL
- **Design moderne** : Glassmorphism, animations avancées
- **Thème sombre/clair** : Système de thème avec transitions fluides
- **Logos officiels** : Marques automobiles authentiques
- **Devise MRU** : Support de la devise mauritanienne
- **Responsive** : Optimisé pour mobile et desktop

## 🚀 Déploiement sur Netlify

### Option 1 : Déploiement via Git (Recommandé)

1. **Poussez votre code vers GitHub :**
   ```bash
   git remote add origin https://github.com/votre-username/auto-parts-website.git
   git push -u origin master
   ```

2. **Connectez-vous à Netlify :**
   - Allez sur [netlify.com](https://netlify.com)
   - Cliquez sur "New site from Git"
   - Choisissez GitHub et votre repository
   - Configurez les paramètres :
     - Build command : `(laissez vide)`
     - Publish directory : `public`

### Option 2 : Déploiement manuel

1. **Préparez les fichiers :**
```bash
   # Assurez-vous que tous les fichiers sont dans le dossier public
   ls public/
   ```

2. **Déployez sur Netlify :**
   - Allez sur [netlify.com](https://netlify.com)
   - Glissez-déposez le dossier `public` dans la zone de déploiement
   - Votre site sera immédiatement en ligne !

## 📱 Test sur Mobile

Une fois déployé, vous pourrez :
- Tester le site sur votre téléphone
- Vérifier le support RTL pour l'arabe
- Tester les animations et transitions
- Vérifier la responsivité

## 🎨 Pages Disponibles

- **Accueil** (`index.html`) : Marques populaires et actions rapides
- **Boutique** (`boutique.html`) : Catégories et produits
- **Entretien** (`entretien.html`) : Gestion des entretiens
- **Profil** (`profil.html`) : Gestion du compte

## 🔧 Technologies Utilisées

- HTML5, CSS3, JavaScript
- Tailwind CSS pour le styling
- Animations CSS avancées
- Support RTL pour l'arabe
- LocalStorage pour les préférences

## 🌐 URL de Déploiement

Votre site sera disponible à : `https://votre-site.netlify.app`

## 📞 Support Client

Le client pourra tester toutes les fonctionnalités :
- Changement de langue (FR/AR)
- Thème sombre/clair
- Navigation entre les pages
- Animations et effets visuels
- Logos des marques automobiles
- Branding EME sur toutes les pages
