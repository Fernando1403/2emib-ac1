//importar as configs do servidor
const {app, porta} = require('./config/servidor')

//ligar o servidor
app.listen(porta, ()=>{
    console.log("http://localhost:"+porta)
})
