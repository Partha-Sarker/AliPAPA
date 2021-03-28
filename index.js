const express = require('express');
const mysql = require('mysql');
const cheerio = require('cheerio');
const request = require('request');
const axios = require('axios');
const esm = require('esm');
const puppeteer = require('puppeteer');


const app = express();
app.set('view engine', 'ejs');
const PORT = process.env.PORT || 5000;
app.listen(PORT)


const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'alipapa',
});
con.connect();

app.get('/', (req, res) => {
    const filter = req.query.name;
    con.query('SELECT * FROM products', (err, rows) => {
        if (filter != undefined) {
            const regex = new RegExp(filter, 'i');
            rows = rows.filter(value => regex.test(value.name));
        }
        res.render('demo', { products: rows });
    });
});

app.get('/create', (req, res) => {
    console.log(req.query);
    res.send('hello');
});

/*

app.get('/create/:link', (req, res) => {
    const link = req.params.link;
    con.query(`SELECT * FROM products WHERE link = \'${link}\'`, (error, results, fields) => {
        if (results.length > 0) {
            console.log('Product already exists');
            return;
        }
        con.query(`INSERT INTO products (link) VALUES (\'${link}\')`, (error2, results2, fields2) => {
            if (!error2)
                console.log('Product created successfylly');
        });
    });
    res.send('hello');
})

app.get('/delete/:link', (req, res) => {
    con.query(`DELETE FROM products WHERE link = (\'${req.params.link}\')`, (err, rows) => {
        if (!err)
            console.log("Product deleted successfully");
    });
    res.send('hello');
})

function scrapeProduct(product) {
    url = product.link;
    request(url, (error, response, body) => {
        $ = cheerio.load(body);
        console.log($);
    })
}

*/