const express = require('express')
const app = express()
const port = 3000
const sqlite = require('sqlite3').verbose()

// conectar a la base de datos
const db = new sqlite.Database('./db/cetis108.db', (err) => {
  if (err) {
    console.log(err.message)
  }
  console.log('Conectado a la base de datos correctamente!')
})

// definir una consulta
let sql = "select * from users"

// ejecutando la consulta
db.all(sql, [], (err, rows) => {
  if (err) {
    console.log(`Error al ejecutar la consulta: ${sql}
    ${err.message}`)
  }
  
  if(rows) {
    rows.forEach((row) => {
      console.log(`Nombre: ${row.firstname} Apellidos: ${row.lastname}`)
    })
  }
})


// app.get('/', (req, res) => res.send('Hola Dummie!'))
app.use(express.static('src'))

app.listen(port, () => console.log(`Estoy escuchando en el puerto ${port}`))