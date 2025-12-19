const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Importation du contrôleur et du middleware
const carsController = require('./controllers/usersControllers');
const checkApiKey = require('./middleware/checkApiKey');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares globaux
app.use(cors());
app.use(bodyParser.json());

// --- ROUTES ---

// Route de bienvenue (non protégée pour tester si le serveur répond)
app.get('/', (req, res) => {
  res.json({ 
    message: 'Bienvenue sur l\'API de gestion de voitures classiques',
    version: '1.0.0',
    security: 'Activée (x-api-key requise pour les routes /api/*)',
    endpoints: {
      getAllCars: 'GET /api/cars',
      getCarById: 'GET /api/cars/:id',
      createCar: 'POST /api/cars',
      updateCar: 'PUT /api/cars/:id',
      deleteCar: 'DELETE /api/cars/:id'
    }
  });
});

// Routes CRUD (protégées par le middleware checkApiKey)
// On insère checkApiKey en deuxième argument pour bloquer les accès non autorisés
app.get('/api/cars', checkApiKey, carsController.getAllCars);
app.get('/api/cars/:id', checkApiKey, carsController.getCarById);
app.post('/api/cars', checkApiKey, carsController.createCar);
app.put('/api/cars/:id', checkApiKey, carsController.updateCar);
app.delete('/api/cars/:id', checkApiKey, carsController.deleteCar);

// Gestion des routes non trouvées
app.use((req, res) => {
  res.status(404).json({ 
    error: 'Route non trouvée',
    message: `La route ${req.method} ${req.url} n'existe pas` 
  });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
  console.log(`📍 URL locale : http://localhost:${PORT}`);
  console.log(`🔒 Middleware de sécurité : ACTIF`);
});