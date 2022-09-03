import { useEffect, useRef, useState } from 'react';
import tw from 'tailwind-styled-components';

type Image = {
  url: string;
  title?: string;
  description?: string;
};
const SliderSection = tw.section`
w-full relative overflow-x-hidden slidersection
`;

const SliderList = tw.ul` relative flex slider 
`;

const NextBtn = tw.button`
  absolute h-full w-8 top-0 right-0  bg-transparent hover:bg-gray-500 hover:bg-opacity-25 hover:ease-in duration-200
`;

const PrevBtn = tw.button`
absolute h-full w-8 top-0 left-0 bg-transparent hover:bg-gray-500 hover:bg-opacity-25 hover:ease-in duration-200
`;

const Slider = ({ images }: { images: Image[] }) => {
  const [moveClass, setMoveClass] = useState('');
  const [carouselItems, setCarouselItems] = useState<Image[]>(images);

  const handleAnimationEnd = () => {
    if (moveClass === 'prev') {
      shiftNext([...carouselItems]);
    } else if (moveClass === 'next') {
      shiftPrev([...carouselItems]);
    }
    setMoveClass('');
  };

  const shiftPrev = (copy: Image[]) => {
    let lastcard = copy.pop();
    if (lastcard) {
      copy.splice(0, 0, lastcard);
      setCarouselItems(copy);
    }
  };

  const shiftNext = (copy: Image[]) => {
    let firstcard = copy.shift();
    if (firstcard) {
      copy.splice(copy.length, 0, firstcard);
      setCarouselItems(copy);
    }
  };
  return (
    <SliderSection>
      <SliderList
        className={`${moveClass}`}
        onAnimationEnd={handleAnimationEnd}
      >
        {carouselItems.map((image, index) => (
          <li className="relative min-w-full" key={index}>
            <img src={image.url} alt={`${image.title}`} />
            <div className="absolute top-[40%] left-[5%]">
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
      <PrevBtn onClick={() => setMoveClass('prev')}>
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
      <NextBtn onClick={() => setMoveClass('next')}>
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
