const mysql = require("mysql");

var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "Edureka",
    multipleStatements: true
});

mysqlConnection.connect((err)=>{
    if(!err){
        console.log("Connnected!!");
    }
    else{
        console.log("Connnection Failed!!");
    }
});

module.exports = mysqlConnection;