import React, { Component } from 'react';
import Header from './components/view/header';
import Slider from './components/view/slider';
import Produtos from './components/view/produtos';
import Barner from './components/view/barner';
import MoreSells from './components/view/mais_vendidos';
import Solicitados from './components/view/maissolicitados';
import ForaStoque from './components/view/forastoque';
import Semana from './components/view/semana';
import Footer from './components/view/Footer';
import Hero from './components/view/herobutton'
import HeroTwo from './components/view/herobutton2'

//Referred to as container component, has a state{data}
class App extends Component {
  
  render(){
    return (
      <div className="App">
        <Header/>
        <Slider/>
        <Barner/>
        <MoreSells />
        <Solicitados/>
        <ForaStoque/>
         <Hero/>
        <Footer/>
        
      </div>
      
    );
    
  }

  
}

export default App;
