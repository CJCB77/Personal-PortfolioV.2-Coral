import { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import './Carousel.css'
//Hooks


interface CarouselProps {
  imagesArray: string[];
}

function Carousel({imagesArray}:CarouselProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    if (currentImage === imagesArray.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
    console.log(currentImage);
  };

  const handlePrev = () => {
    if (currentImage === 0) {
      setCurrentImage(imagesArray.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  }
  
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImage]);
  
  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    swipeDuration: 1000,
    preventScrollOnSwipe: true,
    trackMouse: true
  })
  
  const slides = imagesArray.map((image,index) => {
    return(
      <div className='carousel__slide' key={index} onClick={handleNext}
        style={{
          transform:`translateX(${currentImage * -100}%`,
          }}>
        <img src={image} alt="project image" className='carousel__img'/>
      </div>
    )
  })
  
  return (
    <div {...handlers}>
      <section className='carousel'>
        {slides}
      </section>
    </div>
  )
}

export default Carousel