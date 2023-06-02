const mysql = require('mysql')

const conexao = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123",
    port:3306,
    database:"apidevweb"
})

module.exports = conexao
