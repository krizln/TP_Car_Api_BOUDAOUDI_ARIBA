const db = require('./database');

const sampleCars = [
  { brand: 'Ferrari', model: '250 GTO', year: 1962, color: 'Rouge', price: 45000000, mileage: 12000, description: 'Une icône.', imageUrl: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae' },
  { brand: 'Porsche', model: '911 Carrera RS', year: 1973, color: 'Blanc/Bleu', price: 650000, mileage: 45000, description: 'La quintessence.', imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70' },
  { brand: 'Jaguar', model: 'E-Type', year: 1961, color: 'Gris', price: 150000, mileage: 85000, description: 'La plus belle.', imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d' },
  { brand: 'Aston Martin', model: 'DB5', year: 1963, color: 'Gris', price: 1200000, mileage: 30000, description: 'Voiture de James Bond.', imageUrl: 'https://example.com/aston.jpg' },
  { brand: 'Bugatti', model: 'Type 35', year: 1924, color: 'Bleu', price: 2500000, mileage: 5000, description: 'Chef-d\'œuvre.', imageUrl: 'https://example.com/bugatti.jpg' }
];

function seedDatabase() {
  // On attend un court instant que database.js crée la table
  setTimeout(() => {
    db.run('DELETE FROM cars', (err) => {
      if (err) {
        console.error('❌ Erreur vidage:', err.message);
        return;
      }
      console.log('🗑️ Table vidée');

      const insertQuery = `INSERT INTO cars (brand, model, year, color, price, mileage, description, imageUrl) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
      let insertedCount = 0;

      sampleCars.forEach((car) => {
        db.run(insertQuery, [car.brand, car.model, car.year, car.color, car.price, car.mileage, car.description, car.imageUrl], (err) => {
          if (err) console.error('❌ Erreur:', err.message);
          else {
            insertedCount++;
            console.log(`✅ Insérée: ${car.brand}`);
            if (insertedCount === sampleCars.length) {
              console.log('\n🎉 Base prête avec 5 voitures !');
              db.close();
            }
          }
        });
      });
    });
  }, 500); // Délai de 500ms pour laisser la table se créer
}

seedDatabase();