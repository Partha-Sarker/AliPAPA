const express = require('express');
const cheerio = require('cheerio');
const request = require('request');
const db = require('mysql-sync-query');
var fs = require('fs');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'))
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
    getHome(req, res, false);
});

app.get('/search', (req, res) => {
    getHome(req, res, true);
});


async function getHome(req, res, shouldFilter) {
    console.log(req.query);
    const search = req.query.search;
    const sort = req.query.sort;
    const order = req.query.order;

    // rows = JSON.parse(fs.readFileSync('products.txt', { encoding: 'utf8', flag: 'r' }));

    let rows = await dbObj.executeQuery('SELECT * FROM products');

    for (let i = 0; i < rows.length; i++) {
        const html = await getHTML(rows[i].link);
        scrapeEbay(rows[i], html);
        console.log(i + 1, 'done');
    }

    if (search != '') {
        const regex = new RegExp(search, 'i');
        rows = rows.filter(value => regex.test(value.name));
    }
    switch (sort) {
        case 'name':
            rows = rows.sort(compareName);
            break;

        case 'price':
            rows = rows.sort(comparePrice);
            break;
        default:
            rows = rows.sort(compareName);
    }
    if (order == 'desc')
        rows = rows.reverse();

    if (!shouldFilter)
        res.render('demo', { products: rows });
    else
        res.send(rows);
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


function compareName(a, b) {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
}


function comparePrice(a, b) {
    let priceA = a.price;
    let priceB = b.price;
    if (priceA < priceB) {
        return -1;
    }
    if (priceA > priceB) {
        return 1;
    }
    return 0;
}