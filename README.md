\# 🚗 API REST - Gestion de Voitures Classiques



API REST complète pour gérer une collection de véhicules de collection. Ce projet met en œuvre une architecture MVC et une sécurisation par middleware.



\## 📋 Prérequis

\- Node.js (v16 ou supérieure)

\- npm

\- Postman (pour les tests)



\## 🚀 Installation

1\. Cloner le projet :

&nbsp;  `git clone \[https://github.com/krizln/TP_Car_Api_BOUDAOUDI_ARIBA]`

2\. Installer les dépendances :

&nbsp;  `npm install`

3\. Initialiser la base de données (5 voitures) :

&nbsp;  `npm run seed`

4\. Lancer le serveur :

&nbsp;  `npm run dev`



Le serveur sera disponible sur : \*\*http://localhost:3000\*\*



\## 🔑 Authentification

Toutes les routes `/api/\*` nécessitent une clé API dans les headers :

\*\*Header Key :\*\* `x-api-key`

\*\*Header Value :\*\* `ma-super-cle-api-2024`



\## 📚 Endpoints principaux

\- \*\*GET /api/cars\*\* : Récupère tout le catalogue (ex: 5 voitures).

\- \*\*GET /api/cars/:id\*\* : Récupère un véhicule spécifique.

\- \*\*POST /api/cars\*\* : Ajoute un nouveau véhicule.

\- \*\*PUT /api/cars/:id\*\* : Modifie les données d'un véhicule existant.

\- \*\*DELETE /api/cars/:id\*\* : Supprime un véhicule de la base.

---

[Consulter le compte rendu détaillé (REPORT.md)](./REPORT.md)


\## 🏗️ Structure du Projet

\- `controllers/` : Logique métier (CRUD).

\- `middleware/` : Sécurité (Vérification de la clé API).

\- `database.js` : Configuration SQLite.

\- `seed.js` : Script de peuplement des données initiales.



\## 🛠️ Technologies

\- \*\*Express.js\*\*, \*\*SQLite3\*\*, \*\*CORS\*\*, \*\*Body-parser\*\*.



\## 👨‍💻 Développeur

SalahEddine BOUDAOUDI 

Abderraouf ARIBA 

\- Licence Informatique 2024-2025                         



