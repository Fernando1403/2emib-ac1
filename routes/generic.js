module.exports = (app)=>{
    app.get('/generic',(req,res)=>{
        res.render('generic.ejs')
    })
}