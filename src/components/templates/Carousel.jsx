import React, {useEffect, useState} from "react";

const Carousel =()=>{
    const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(()=>{
    setInterval(()=>{
      setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );  
    },2000);
  },[]);

    return(
        <div>
             <header className="App-header">
        <h1>Image Carousel using React and Framer Motion</h1>
      </header>
         <div className="carousel">
        <img
          key={currentIndex}
          src={images[currentIndex]}
          alt="imageslides"
          loading="lazy"
        />
        <div className="slide_direction">
        <div className="left" onClick={handlePrevious}>
         {"<"}
        </div>
        <div className="right" onClick={handleNext}>
          {">"}
        </div>
      </div>
      <div className="indicator">
        {images.map((elm, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div> 
    </div>

    )
}
export default Carousel;

const images = [
    "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
    "https://www.pinterest.com/pin/650770214932385506/",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1w15C7WXj5e3S74SHaGa03vPeO1-3Q4Qzcg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOcZ10UEQpiXGm4k1v8fs9f7RiE5l22OAqT-3QkDn5HXLJO97cge1rbKoyzjcVq1ybJD8&usqp=CAU",
];
