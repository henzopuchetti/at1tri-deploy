module.exports = (app) => {
    var conexao = require('../config/database')

    app.get('/', async(req, res) =>{
        conexao()        
        var metas = require('../models/metas')
        var documentos = await metas.find().limit(6).sort({'_id':-1})        

        res.render('index.ejs', {dados:documentos})
    })
    app.post('/', (req, res) => {
    })
}
