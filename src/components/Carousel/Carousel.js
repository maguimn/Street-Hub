import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css'; 



const Caroussel = () => {
  return (
    <Carousel className="custom-carousel">
      <Carousel.Item>
        <img
          className=" w-100 "
          src="/images/poster-jordan.jpg"
          alt="Primeiro slide"
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className=" w-100 "
          src="/images/poster-bape.jpg"
          alt="Segundo slide"
        />
        <Carousel.Caption>
     
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
};

export default Caroussel;
