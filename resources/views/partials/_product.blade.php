{{-- <div class="card">
    <img class="card-img" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png" alt="Vans">
    <div class="card-img-overlay d-flex justify-content-end">
    <a href="#" class="card-link text-danger like">
        <i class="fas fa-heart"></i>
    </a>
    </div>
    <div class="card-body">
    <h4 class="card-title">Vans Sk8-Hi MTE Shoes</h4>
    <h6 class="card-subtitle mb-2 text-muted">Style: VA33TXRJ5</h6>
    <p class="card-text">
        The Vans All-Weather MTE Collection features footwear and apparel designed to withstand the elements whilst still looking cool.</p>
    <div class="options d-flex flex-fill">
        <select class="custom-select mr-1">
            <option selected>Color</option>
            <option value="1">Green</option>
            <option value="2">Blue</option>
            <option value="3">Red</option>
        </select>
        <select class="custom-select ml-1">
            <option selected>Size</option>
            <option value="1">41</option>
            <option value="2">42</option>
            <option value="3">43</option>
        </select>
    </div>
    <div class="buy d-flex justify-content-between align-items-center">
        <div class="price text-success"><h5 class="mt-4">$125</h5></div>
        <a href="#" class="btn btn-danger mt-3"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
    </div>
    </div>
</div> --}}

<div class="container">
    <div class="d-flex justify-content-center row">
        <div class="col-md-10">
            <div class="row p-2 bg-white border rounded">
                <div class="col-md-3 mt-1">
                    <a href="{{$product->link}}">
                        <img class="img-fluid img-responsive rounded product-image" src="{{$product->image}}">
                    </a>
                </div>
                <div class="col-md-6 mt-1">
                    <p class="text-justify para mb-0">{{$product->name}}</p>
                </div>
                <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                    <div class="d-flex flex-row align-items-center">
                        <h4 class="mr-1">৳ {{$product->price}}</h4>
                    </div>
                    <h6 class="text-success">Free shipping</h6>
                    <div class="d-flex flex-column mt-4"><button class="btn btn-primary btn-sm" type="button">Details</button><button class="btn btn-outline-primary btn-sm mt-2" type="button">Add to wishlist</button></div>
                </div>
            </div>
        </div>
    </div>
</div>