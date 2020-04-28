import React, { Component } from 'react';

export default class Semana extends Component {
render(){
return (   
                
        <div class="container" style={{"position":"absolute","top":"2480px","margin-left":"150px"}}>
            <div class="col-lg-6 text-center">
                <div class="section-title">
                    <h2>Deal Of The Week</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed<br /> do ipsum dolor sit amet,
                        consectetur adipisicing elit </p>
                    <img src="https://mallhighquality62.com/images/l=MINUs=02930A1-eM1e=BI1545852.pic?w=800&h=800&t=1553932903522" alt="" style={{"position":"absolute","margin-left":"250px"}}/>
                    <div class="product-price">
                        $35.00
                        <span>/ HanBag</span>
                    </div>
                </div>
                <div class="countdown-timer" id="countdown">
                    <div class="cd-item">
                        <span>56</span>
                        <p>Days</p>
                    </div>
                    <div class="cd-item">
                        <span>12</span>
                        <p>Hrs</p>
                    </div>
                    <div class="cd-item">
                        <span>40</span>
                        <p>Mins</p>
                    </div>
                    <div class="cd-item">
                        <span>52</span>
                        <p>Secs</p>
                    </div>
                </div>
                <a href="#" class="primary-btn">Shop Now</a>
            </div>
        </div>

        )
    }
} 