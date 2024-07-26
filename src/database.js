const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

// Definir el directorio de la base de datos
const dbDir = path.join(__dirname, '../contacts db');

// Verificar si la carpeta "contacts db" existe, si no, crearla
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir);
}

// Definir la ruta de la base de datos
const dbPath = path.join(dbDir, 'contacts.db');

// Conectar a la base de datos
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database', err);
  } else {
    db.run('CREATE TABLE IF NOT EXISTS contacts (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, number TEXT, email TEXT, group_name TEXT)', (err) => {
      if (err) {
        console.error('Error creating table', err);
      }
    });
  }
});

module.exports = db;
