@extends('app')
@section('content')
<div class="container">
    <div class="row">
        @foreach ($products as $product)
            <div class="row" style="margin-bottom: 20px;">
                @include('partials._product')
            </div>
        @endforeach
    </div>
</div>
@endsection