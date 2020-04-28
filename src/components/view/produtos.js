import React, { Component } from 'react';


export default class Produtos extends Component {
render(){
return (
 <section class="wn__product__area brown--color pt--80  pb--30">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section__title text-center">
                            <h2 class="title__be--2">Novos <span class="color--theme">Produtos</span></h2>
                        </div>
                    </div>
                </div>
                <div class="furniture--4 border--round arrows_style owl-carousel owl-theme row mt--50">
                    <div class="product product__style--3">
                        <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div class="product__thumb">
                                <a class="first__img" href="single-product.html">
                                <img src="https://thewritelife.com/wp-content/uploads/2019/08/How-to-format-a-book.jpg" alt="product image"/></a>
                                <a class="second__img animation1" href="single-product.html">
                                <img src="https://thewritelife.com/wp-content/uploads/2019/08/How-to-format-a-book.jpg" alt="product image"/></a>

                            </div>
                            <div class="product__content content--center">
                                <h4><a href="single-product.html">robin parrish</a></h4>
                                <ul class="prize d-flex">
                                    <li>$35.00</li>
                                    <li class="old_prize">$35.00</li>
                                </ul>
                                <div class="action">
                                    <div class="actions_inner">
                                        <ul class="add_to_links">
                                            <li><a class="cart" href="cart.html"><i class="bi bi-shopping-bag4"></i></a></li>
                                            <li><a class="wishlist" href="wishlist.html"><i class="bi bi-shopping-cart-full"></i></a></li>
                                            <li><a class="compare" href="#"><i class="bi bi-heart-beat"></i></a></li>
                                            <li><a data-toggle="modal" title="Quick View" class="quickview modal-view detail-link" href="#productmodal"><i class="bi bi-search"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="product__hover--content">
                                    <ul class="rating d-flex">
                                        <li class="on"><i class="fa fa-star-o"></i></li>
                                        <li class="on"><i class="fa fa-star-o"></i></li>
                                        <li class="on"><i class="fa fa-star-o"></i></li>
                                        <li><i class="fa fa-star-o"></i></li>
                                        <li><i class="fa fa-star-o"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
             </div> </div>
        </section>
);
    }
}
