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

    function setInputStuffs(value) {
        value = !value;
        ascButton.prop('disabled', value);
        descButton.prop('disabled', value);
        sortSelect.prop('disabled', value);
        searchButton.prop('disabled', value);
        serachField.prop('disabled', value);
    }

    let currentOrder = 'dsc';

    addProducts(products);

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
        let params = `search/?search=${serachField.val()}&sort=${sortSelect.val()}&order=${currentOrder}`;
        const newLocation = window.location.href + params;
        jQuery.get(params, function (data) {
            // productContainer.empty();
            productContainer.children().not(':first-child').not(':nth-child(2)').remove();
            addProducts(data);
            setInputStuffs(true);
            // console.log(data);
        });
    }

    function addProducts(products) {
        console.log(products);
        products.forEach(product => {
            let newProduct = productTemplate.clone();
            newProduct.find('.productImageLink').attr('href', product.link);
            newProduct.find('.productImageLink img').attr('src', product.image);
            newProduct.find('.productName').text(product.name);
            newProduct.find('.productPrice').append(product.price);
            productContainer.append(newProduct);
        });
    }

});
