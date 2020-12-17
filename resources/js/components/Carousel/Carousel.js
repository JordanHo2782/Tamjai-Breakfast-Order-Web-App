import React from 'react'

import Breakfast from "../../../images/breakfast.jpg";
import Lunch1 from "../../../images/lunch1.jpg";
import Chickenwings from "../../../images/chickenwings.jpg";

export default function Carousel() {
    return (
        <div id="carouselCommercialIndicators" class="carousel slide w-100 carousel-size" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselCommercialIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselCommercialIndicators" data-slide-to="1"></li>
                <li data-target="#carouselCommercialIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={Breakfast} class="d-block w-100 carousel-size" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={Lunch1} class="d-block w-100 carousel-size" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={Chickenwings} class="d-block w-100 carousel-size" alt="..."/>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselCommercialIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselCommercialIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    )
}
