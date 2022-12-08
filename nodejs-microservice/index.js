const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
const port = 3000

var liste_de_commandes = 0;

app.get('/', (req, res) => {
  res.send('Microservice de gestion de commande, nb de commandes : ' + liste_de_commandes)
  console.log('> GET')
})

app.post('/commande', (req, res) => {
  console.log('> Reception d\'une Commande')
  liste_de_commandes += 1;
  res.send('Commande en cours ...')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})