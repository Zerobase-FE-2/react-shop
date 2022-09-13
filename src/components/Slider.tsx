import { useEffect, useRef, useState } from 'react';
import tw from 'tailwind-styled-components';

type Image = {
  url: string;
  title?: string;
  description?: string;
};

function useInterval(callback: Function, delay: number) {
  const savedCallback = useRef<Function>();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Slider = ({
  images,
  totalSlides = 5,
}: {
  images: Image[];
  totalSlides: number;
}) => {
  const SliderSection = tw.section`
block w-full relative
`;
  const SliderList = tw.ul`
  relative flex
`;
  const NextBtn = tw.button`
  absolute h-full w-8 top-0 right-0  bg-transparent hover:bg-gray-500 hover:bg-opacity-25 hover:ease-in duration-200`;
  const PrevBtn = tw.button`
absolute h-full w-8 top-0 left-0 bg-transparent hover:bg-gray-500 hover:bg-opacity-25 hover:ease-in duration-200`;

  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef<HTMLUListElement>(null);
  const intervalTime = 3000;

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transition = 'all 0.5s ease-in-out';
      slideRef.current.style.transform = `translateX(-${currentIndex}00%)`;
    }
  }, [currentIndex]);

  const prevSlide = () => {
    if (currentIndex - 1 < 0) setCurrentIndex(totalSlides - 1);
    else {
      setCurrentIndex((currentIndex) => (currentIndex - 1) % totalSlides);
    }
  };

  const nextSlide = () => {
    console.log('next', currentIndex);
    setCurrentIndex((currentIndex) => (currentIndex + 1) % totalSlides);
  };

  useInterval(nextSlide, intervalTime);

  return (
    <SliderSection>
      <SliderList ref={slideRef}>
        {images.map((image, index) => (
          <li className="relative min-w-full flex">
            <img src={image.url} alt={`${image.title}`} />
            <div className="absolute top-[42%] left-[5%]">
              <p className="font-bold text-6xl">{image.title}</p>
              <p className="text-4xl">{image.description}</p>
              <button className="btn btn-md mt-3 text-lg">
                바로가기
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </li>
        ))}
      </SliderList>
      <PrevBtn onClick={prevSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </PrevBtn>
      <NextBtn onClick={nextSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </NextBtn>
    </SliderSection>
  );
};

export default Slider;
