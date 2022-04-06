const mongoose = require('mongoose')

const conexao = async() => {
    var atlas = await mongoose.connect('mudar')
}

module.exports = conexao