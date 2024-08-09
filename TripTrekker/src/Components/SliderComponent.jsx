import React, { useState } from 'react';


const SliderComponent = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n;
      if (newIndex > slides.length) {
        newIndex = 1;
      } else if (newIndex < 1) {
        newIndex = slides.length;
      }
      return newIndex;
    });
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  const slides = [
    { src: 'https://wallpapers.com/images/featured/beautiful-mountain-pictures-wfvd4x42htesrnyp.jpg', caption: 'The Himalayan Mountains' },
    { src: 'https://i.pinimg.com/736x/35/ac/ac/35acac4d67e6cc4f00ba1c5ca3e87ad6.jpg', caption: 'Fresh air and water ' },
    { src: 'https://c4.wallpaperflare.com/wallpaper/499/282/471/forest-trees-shrubs-houses-streams-green-natural-scenery-wallpaper-preview.jpg', caption: 'Peaceful and Soulful place' },
  ];

  return (
    <div>
      <div className="slideshow-container">
        {slides.map((slide, index) => (
          <div
            className={`mySlides fade ${slideIndex === index + 1 ? 'active' : ''}`}
            key={index}
            style={{ display: slideIndex === index + 1 ? 'block' : 'none' }}
          >
            <div className="numbertext">{index + 1} / {slides.length}</div>
            <img src={slide.src} style={{ width: '100%', height:'500px'}} alt={`Slide ${index + 1}`} />
            <div className="text">{slide.caption}</div>
          </div>
        ))}
        <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
        <a className="next" onClick={() => plusSlides(1)}>❯</a>
      </div>
      <br />
      <div style={{ textAlign: 'center' }}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${slideIndex === index + 1 ? 'active' : ''}`}
            onClick={() => currentSlide(index + 1)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SliderComponent;
