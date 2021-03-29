const express = require('express');
const db = require('mysql-sync-query');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'))
const PORT = process.env.PORT || 5000;
app.listen(PORT)


const dbObj = new db("alipapa");
dbObj.connectLocal("localhost", 3306, "root", "");


app.get('/', (req, res) => {
    getHome(res);
});

async function getHome(res) {
    // rows = JSON.parse(fs.readFileSync('products.txt', { encoding: 'utf8', flag: 'r' }));
    let rows = await dbObj.executeQuery('SELECT * FROM products');
    res.render('demo', { products: rows });
}
