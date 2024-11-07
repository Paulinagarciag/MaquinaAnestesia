import React, { useState } from 'react';


const Carrusel = ({ images }) => {
 const [activeIndex, setActiveIndex] = useState(0);

 const nextSlide = () => {
   setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
 };

 const prevSlide = () => {
   setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
 };

 return (
   <div className="carrusel">
     <button className="prev" onClick={prevSlide}>&#10094;</button>
     {images.map((image, index) => (
       <div
         key={index}
         className={index === activeIndex ? "slide active" : "slide"}
       >
         {index === activeIndex && <img src={image} alt={`Slide ${index + 1}`} style={{ height: '300px', objectFit: 'cover' }} />}
       </div>
     ))}
     <button className="next" onClick={nextSlide}>&#10095;</button>
   </div>
 );
};

export default Carrusel;