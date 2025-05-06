<a id="readme-top"></a>

<h1 align="center">Site vitrine</h1>
<h2 align="center">Site vitrine pour une assitante maternelle</h2>

<h3 align="center">À propos<h3>

<div align="center">

C'est un projet qui a été réalisé pour une assistante maternelle durant le stage de fin de formation  
"TP - Développeur Web et Web Mobile" à l'AFEC de Bayonne.

</div>

## Table des matières

- [Fonctionnalité](#fonctionnalités)
- [Technologies utilisées](#technologies-utilisées)
- [Prérequis](#prérequis)
- [Installation, configuration et lancement du projet](#installation-configuration-et-lancement-du-projet)
- [Dépendances](#dépendances)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Test admin](#test-admin)
- [Arborescence](#arborescence)
- [Tests et Visualisation](#tests-et-visualisation)
- [Déploiement](#déploiement)
  - [Backend - Render](#backend---render)
  - [Frontend - Vercel](#frontend---vercel)

## Fonctionnalités

- Gestion des utilisateurs (création, affichage, modification, suppression, connexion)
- Gestion des compétences (création, affichage, modification, suppression)
- Authentification sécurisée (JWT & bcrypt)
- Gestion des rôles (user, admin) et protection de routes
- Logs pour suivre les actions des utilisateurs
- Formulaire de connexion avec Google reCAPTCHA
- Gestion des cookies avec Tarteaucitron.js

## Technologies utilisées

<div align="center">

[![My Skills](https://skillicons.dev/icons?i=vscode,git,github,postman,nodejs,npm,javascript,express,mongodb,vite,react,bootstrap,vercel)](https://skillicons.dev)

</div>

## Prérequis

- npm :

  ```sh
  npm install npm@latest -g
  ```

  </br>

## Installation, configuration et lancement du projet

1.  Cloner le répertoire :

    ```sh
    git clone https://github.com/IRyan00/EvalBackEnd.git
    ```

<br/>

2.  Installer les dépendances pour le backend et le frontend (sur deux terminaux différents):

    ```ini
    cd backEnd
    npm i

    cd frontEnd
    npm i
    ```

    <br/>

3.  Créer un fichier `.env` dans le dossier backEnd avec les variables suivantes :

    ```ini
    PORT = le_port_sohaité (e.g 3000)

    # MongoDB
    MONGO_URI = votre_uri_mongodb

    # JsonWebToken
    JWT_SECRET= votre_phrase_secrète

    # Cloudinary
    CLOUD_NAME= votre_cloud_name
    API_KEY= votre_api_key
    API_SECRET= votre_api_secret
    ```

<br/>

4.  Créer un fichier `.env` dans le dossier frontEnd avec les variables suivantes :

    ```ini
    #API
    	VITE_API_URL = votre_api_url

    	# Emailjs
    	VITE_SERVICE_ID= votre_service_id
    	VITE_TEMPLATE_ID= votre_template_id
    	VITE_PUBLIC_KEY= votre_public_key

    # Google reCaptcha
    VITE_RECAPTCHA_SITE_KEY= votre_recaptcha_site_key
    ```

<br/>

5.  Lancer les serveurs backend et frontend (sur deux terminaux différents):

    ```ini
    cd backEnd
    npm start

    cd frontEnd
    npm run dev
    ```

    <p align="right">(<a href="#readme-top">back to top</a>)</p>

## Dépendances

### Backend

```ini
  "dependencies": {
    "bcrypt": "^5.1.1",
    "cloudinary": "^2.6.0",
    "cookie-parser": "^1.4.7",
    "cors": "^2.8.5",
    "dotenv": "^16.5.0",
    "express": "^4.21.2",
    "express-async-handler": "^1.2.0",
    "fs": "^0.0.1-security",
    "helmet": "^8.1.0",
    "joi": "^17.13.3",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.12.1",
    "multer": "^1.4.5-lts.1",
    "nodemon": "^3.1.9"
  }
```

### Frontend

```ini
  "dependencies": {
    "@emailjs/browser": "^4.4.1",
    "axios": "^1.8.4",
    "bootstrap": "^5.3.3",
    "dotenv": "^16.4.7",
    "lucide-react": "^0.503.0",
    "react": "^19.0.0",
    "react-bootstrap": "^2.10.9",
    "react-bootstrap-icons": "^1.11.5",
    "react-dom": "^19.0.0",
    "react-hook-form": "^7.54.2",
    "react-icons": "^5.5.0",
    "react-router-dom": "^7.4.0"
  }
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Arborescence

```bash
evalBackEnd/                             # Dossier racine du projet
├── backEnd/                             # Backend de l'application
│   ├── logs/
│   │   └── log.log                      # Fichier de logs de l'application
│   │
│   ├── src/
│   │   ├── config/                      # Configuration du backend
│   │   │   ├── db.js                    # Configuration de la connexion MongoDB
│   │   │   └── logg.js                  # Configuration des options de logs
│   │   │
│   │   ├── controllers/                 # Logique métier (fonctions appelées par les routes)
│   │   │   ├── authController.js        # Gestion de l'authentification et des utilisateurs
│   │   │   └── skillsController.js      # Gestion des compétences
│   │   │
│   │   ├── middlewares/                 # Fonctions intermédiaires pour les requêtes HTTP
│   │   │   ├── authMiddleware.js        # Vérification de l'authentification
│   │   │   ├── isAdmin.js               # Vérification des droits administrateurs
│   │   │   ├── morganMiddleware.js      # Middleware de gestion des logs HTTP avec Morgan
│   │   │   └── recaptchaMiddleware.js   # Vérification du reCaptcha
│   │   │
│   │   ├── models/                      # Modèles de données MongoDB (schemas Mongoose)
│   │   │   ├── User.js                  # Modèle utilisateur
│   │   │   ├── Skills.js                # Modèle compétence
│   │   │   └── Settings.js              # Modèle paramètres d'application
│   │   │
│   │   └── routes/                      # Définition des routes de l'API
│   │       ├── authRoutes.js            # Routes pour l'authentification et les utilisateurs
│   │       └── skillsRoutes.js          # Routes pour les compétences
│   │
│   ├── .env                            # Variables d'environnement (ex : clés API)
│   ├── .gitignore                      # Fichiers et dossiers à ignorer par Git
│   ├── package-lock.json                # Versionnement des dépendances Node.js
│   ├── package.json                     # Dépendances et scripts du projet backend
│   └── server.js                        # Point d'entrée du serveur Express
│
├── frontend/                           # Frontend de l'application (React)
│   ├── src/
│   │   ├── assets/                      # Fichiers statiques (images, polices, etc.)
│   │   │   └── carouselImages            # Images du carousel
│   │   │       ├── img1.jgp              # 1ère image du carousel
│   │   │       ├── img2.jgp              # 2ème image du carousel
│   │   │       └── img3.jgp              # 3ème image du carousel
│   │   │
│   │   ├── components/                  # Composants réutilisables React
│   │   │   ├── CarouselPage.jsx          # Composant carousel
│   │   │   ├── Footer.jsx                # Composant footer
│   │   │   ├── Navbar.jsx                # Composant barre de navigation
│   │   │   ├── Presentation.jsx          # Composant présentation
│   │   │   └── SkillCard.jsx             # Composant carte de compétence
│   │   │
│   │   ├── pages/                       # Pages principales du site
│   │   │   ├── Dashboard.jsx             # Page du tableau de bord (après connexion)
│   │   │   ├── Home.jsx                  # Page d'accueil
│   │   │   ├── Login.jsx                 # Page de connexion
│   │   │   ├── Register.jsx              # Page d'inscription
│   │   │   └── Skills.jsx                # Page d'affichage des compétences
│   │   │
│   │   ├── styles/                      # Feuilles de style CSS
│   │   │   └── navbar.css                # Style de la barre de navigation
│   │   │
│   │   ├── App.css                      # Style global de l'application
│   │   ├── App.jsx                      # Composant racine de l'application React
│   │   ├── index.css                    # Styles globaux
│   │   └── main.jsx                     # Point d'entrée React
│   │
│   ├── utils/                          # Fonctions utilitaires
│   │   └── ProtectedRoutes.jsx           # Protection des routes (authentification)
│   │
│   ├── .env                            # Variables d'environnement pour le frontend
│   ├── .gitignore                      # Fichiers à ignorer par Git (frontend)
│   ├── eslint.config.js                 # Configuration ESLint (linting du code)
│   ├── index.html                       # Page HTML principale
│   ├── package-lock.json                # Versionnement des dépendances Node.js
│   └── package.json                     # Dépendances et scripts du projet frontend
│
└── README.md                           # Documentation du projet (installation, usage)

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Tests et Visualisation

- **MongoDB Compass** : Visualisation des données
- **Postman** : Tests des routes API - [Collection postman](https://www.postman.com/iryan00/my-workspace/collection/3b0arvv/evalbackend?action=share&creator=6356318)

</br>
<div align="center">

| Method | Path                        | Desc                            |
| :----- | :-------------------------- | :------------------------------ |
| POST   | /api/auth/login             | Connecter un utilisateur        |
|        |                             |                                 |
| POST   | /api/skills/addskill        | Ajouter une compétence          |
| GET    | /api/skills/getallskills    | Afficher toutes les compétences |
| PUT    | /api/skills/updateskill/:id | Modifier une compétence         |
| DEL    | /api/skills/deleteskill/:id | Supprimer une compétence        |

</div>

## Déploiement

### [ Backend - Render ](https://evalbackend-sp7c.onrender.com)

### [ Frontend - Vercel ](https://eval-back-end.vercel.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
