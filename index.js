const express = require('express');
const cheerio = require('cheerio');
const request = require('request');
const db = require('mysql-sync-query');

const app = express();
app.set('view engine', 'ejs');
const PORT = process.env.PORT || 5000;
app.listen(PORT)


const dbObj = new db("alipapa");
dbObj.connectLocal("localhost", 3306, "root", "");


// const con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: 'alipapa',
// });
// con.connect();


app.get('/', (req, res) => {
    getHome(req, res);
});


async function getHome(req, res) {
    const filter = req.query.name;
    let rows = await dbObj.executeQuery('SELECT * FROM products');
    // rows = rows.slice(8);
    for (let i = 0; i < rows.length; i++) {
        const html = await getHTML(rows[i].link);
        scrapeEbay(rows[i], html);
        console.log(i + 1, 'done');
    }
    res.render('demo', { products: rows });
}

function getHTML(url) {
    return new Promise((resolve, reject) => {
        request(url, (error, response, body) => {
            if (error) reject(error);
            if (response.statusCode != 200) {
                reject('Invalid status code <' + response.statusCode + '>');
            }
            resolve(body);
        });
    });
}

function scrapeEbay(product, html) {
    $ = cheerio.load(html);
    try {
        product.image = $('#icImg').first().attr().src;
    } catch (err) {
        product.image = '#';
    }
    try {
        product.name = $('#itemTitle').contents().last().text();
    } catch (error) {
        product.name = 'No name';
    }
    try {
        product.price = Math.round(parseFloat($('#prcIsum').attr().content) * 90.0);
    } catch (error) {
        product.price = 'Not Available';
    }
}