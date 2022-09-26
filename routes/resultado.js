const {conexao, conteudo} = require('../config/database')

module.exports = (app)=> {
    app.get('/resultado',async(req,res)=>{
        conexao()
        const resultado = await conteudo.find()
        //res.send(resultado)
        res.render('resultado.ejs',{resultado})
})
}