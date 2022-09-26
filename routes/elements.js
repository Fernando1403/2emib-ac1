module.exports = (app)=>{
    app.get('/elements', (req,res)=>{
        res.render('elements.ejs')
    })
}