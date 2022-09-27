//importar o pacote do express 
const express = require('express')
//executar o express application
const app = express()

//configurar a porta local
const porta = process.env.PORT || 2000

//habilitar o express para receber dados de formulários
app.use(express.urlencoded({extended:false}))

//importar o consign para carregar as rotas automaticamente
const consign = require('consign')
//executar e configurar
consign().include('./routes').into(app)

//indicar a pasta dos assets (css, js, images, webfonts)
app.use(express.static('./src/'))

module.exports = {app,porta}