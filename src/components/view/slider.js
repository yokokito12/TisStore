import React, { Component } from 'react';

export default class Slider extends Component {
render(){
return (
<div>
        <div class="bd-example">
  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://www.atlantico.ao/SiteCollectionImages/INSTITUCIONAL/1920x510Mensagem-do-Presidente-Covid-19.png" class="d-block w-100" alt="..." style={{"height":"500px"}}/>
        
      </div>
      <div class="carousel-item">
        <img src="https://www.atlantico.ao/SiteCollectionImages/PARTICULARES/Pontos-de-Atendimento-100.jpg" class="d-block w-100" alt="..." style={{"height":"500px"}}/>
       
      </div>
      <div class="carousel-item">
        <img src="https://www.atlantico.ao/SiteCollectionImages/PARTICULARES/fique-em-casa.png" class="d-block w-100" alt="..." style={{"height":"500px"}}/>
       
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>	
</div>
);
    }
}
