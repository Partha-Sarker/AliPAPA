@extends('app')
@section('content')
<div class="container">
    <div class="row my">
        @foreach ($products as $product)
            <div class="col-md-4" style="margin-bottom: 20px;">
                @include('partials._product')
            </div>
        @endforeach
    </div>
</div>
@endsection