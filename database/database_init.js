const mysql = require('mysql2');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'welp',
})


connection.connect((err) => {
    err ? console.log(err) : console.log('Great');
});


module.exports = connection;