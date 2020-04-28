import React, { Component } from 'react';

export default class Barner extends Component {
render(){
return (    
    
    <div >
   
    <div class="banner-section spad">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-4">
                    <div class="single-banner" >
                        <img src="https://materiaisdidaticos.files.wordpress.com/2017/09/imagem-e1512002981687.jpg?w=880&h=312&crop=1" alt="" style={{"height":"270px","width":"350px"}}/>
                        <div class="inner-text">
                            <h4>Materiais Didacticos</h4>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="single-banner">
                        <img src="https://teclandoseaprende.files.wordpress.com/2019/06/72819-oe2248-508.jpg" alt="" style={{"height":"270px"}}/>
                        <div class="inner-text">
                            <h4>Accessorios de Computador</h4>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="single-banner">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/486/157/original/Office-Vector-Illustration.jpg" alt="" style={{"height":"270px"}}/>
                        <div class="inner-text">
                            <h4>Materiais de Escritorio</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
   

         );
        }
 }