import React from "react";
import { Carousel } from 'react-responsive-carousel';

interface Props {
    sliders?: string[];
}

const DEFAULT_SLIDERS = ["/slide1.jpg", "/slide2.png"];

const CarouselComponent: React.FC<Props> =  ({sliders = DEFAULT_SLIDERS}: Props) => {
    return(
        <Carousel showThumbs={false}>
            {sliders.map((image: string) => 
                (
                   <div key={image}>
                    <img src={image} />
                  </div>
                )
            )}
      </Carousel>
    );
};

export default CarouselComponent;