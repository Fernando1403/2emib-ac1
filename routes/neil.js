module.exports = (app)=>{
    app.get('/neil',(req,res)=>{
        res.render('Neil.ejs')
    })
}