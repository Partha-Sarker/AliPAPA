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