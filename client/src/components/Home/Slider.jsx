import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'


const Slider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className='ct'>
          <img
            className="d-block w-100"
            src={`images/rui-silvestre-9vxJQmZmTYU-unsplash.jpg?text=First slide&bg=373940`}
            alt="First slide"
          />
          <Carousel.Caption className='c-caption'>
            <h3>Be A Creator Yourself!! <br /> Welcome to the amazing community</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='ct'>
          <img
            className="d-block w-100"
            src={`images/rui-silvestre-9vxJQmZmTYU-unsplash.jpg?text=First slide&bg=373940`}
            alt="Second slide"
          />
  
          <Carousel.Caption className='c-caption'>
            <h3>Be A Creator Yourself!! <br /> Welcome to the amazing community</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='ct'>
          <img
            className="d-block w-100"
            src={`images/rui-silvestre-9vxJQmZmTYU-unsplash.jpg?text=First slide&bg=373940`}
            alt="Third slide"
          />
  
          <Carousel.Caption className='c-caption'>
            <h3>Be A Creator Yourself!! <br /> Welcome to the amazing community</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}

export default Slider