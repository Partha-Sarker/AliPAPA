const express = require('express');
const path = require('path');
const mysql = require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'alipapa',
});

const app = express();

app.set('view engine', 'ejs');

con.connect();
app.get('/', (req, res) => {
    con.query('SELECT * FROM products', (err, rows) => {
        for (let i = 0; i < rows.length; i++) {
            console.log(rows[i]);
            break;
        }
        res.render('demo', { products: rows });
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT)
