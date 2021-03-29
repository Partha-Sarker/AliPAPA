var scrapeCount = 0;
var numOfProducts = 0;
$(document).ready(function () {
    const ascButton = $('#asc');
    const descButton = $('#desc');
    const sortSelect = $("#sortType");
    const searchForm = $("#search");
    const serachField = $('#searchField');
    const searchButton = $('#searchButton');
    const productContainer = $('.productContainer');
    const productTemplate = $('#productTemplate').show().clone();
    $('#productTemplate').remove();

    setInputStuffs(false);

    function setInputStuffs(value) {
        value = !value;
        ascButton.prop('disabled', value);
        descButton.prop('disabled', value);
        sortSelect.prop('disabled', value);
        searchButton.prop('disabled', value);
        serachField.prop('disabled', value);
    }

    let currentOrder = 'dsc';

    addProducts(products, true);

    searchForm.submit(function (e) {
        e.preventDefault();
        setInputStuffs(false);
        filter();
    });

    ascButton.hide();

    descButton.click(() => {
        descButton.hide();
        ascButton.show();
        currentOrder = 'desc';
        setInputStuffs(false);
        filter();
    });
    ascButton.click(() => {
        ascButton.hide();
        descButton.show();
        currentOrder = 'asc';
        setInputStuffs(false);
        filter();
    })

    sortSelect.change(function (e) {
        setInputStuffs(false);
        filter();
    });



    function filter() {
        const search = serachField.val();
        const sort = sortSelect.val();
        const order = currentOrder;


        if (search != '') {
            const regex = new RegExp(search, 'i');
            products = products.filter(value => regex.test(value.name));
        }

        switch (sort) {
            case 'name':
                products = products.sort(compareName);
                break;
            case 'price':
                products = products.sort(comparePrice);
                break;
            default:
                products = products.sort(compareID);
        }
        if (order == 'desc')
            products = products.reverse();
        productContainer.children().not(':first-child').not(':nth-child(2)').remove();
        addProducts(products, false);
    }

    function addProducts(products, shouldScrape) {
        numOfProducts = products.length;
        products.forEach(product => {
            let newProduct = productTemplate.clone();
            if (shouldScrape)
                scrapeProduct(product, newProduct);
            else {
                fillProduct(product, newProduct)
                setInputStuffs(true);
            }
        });
    }

    function scrapeProduct(product, productHTML) {
        $.ajax({
            dataType: "json",
            url: 'http://www.whateverorigin.org/get?url=' + encodeURIComponent(product.link) + '&callback=?',
            success: function (data) {
                const site = $(data.contents);
                product.image = site.find('#icImg').first().attr('src');
                if (product.image == undefined)
                    product.image = '#';

                product.name = site.find('#itemTitle').contents().last().text();
                if (product.name == undefined)
                    product.name = 'No name';

                const priceString = site.find('#prcIsum').attr('content');
                if (priceString == undefined)
                    product.price = 'Not Available';
                else
                    product.price = Math.round(parseFloat(priceString) * 90.0);

                fillProduct(product, productHTML)
                scrapeCount++;
                if (scrapeCount == numOfProducts)
                    setInputStuffs(true);
            },
            error: function (data) {
                scrapeCount++;
                if (scrapeCount == numOfProducts)
                    setInputStuffs(true);
            }
        });
    }

    function fillProduct(product, productHTML) {
        productHTML.find('.productImageLink').attr('href', product.link);
        productHTML.find('.productImageLink img').attr('src', product.image);
        productHTML.find('.productName').text(product.name);
        productHTML.find('.productPrice').append(product.price);
        productContainer.append(productHTML);
    }

});


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


function compareID(a, b) {
    let idA = a.id;
    let idB = b.id;
    if (idA < idB) {
        return -1;
    }
    if (idA > idB) {
        return 1;
    }
    return 0;
}
