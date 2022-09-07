import { useEffect, useRef, useState } from 'react';
import tw from 'tailwind-styled-components';
import useInterval from '../hooks/useInterval';

type Image = {
  url: string;
  title?: string;
  description?: string;
};

const delay = 5000;
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
  const [moveAuto, setMoveAuto] = useState(true);
  const [carouselItems, setCarouselItems] = useState<Image[]>(images);

  const handleAnimationEnd = () => {
    if (moveClass === 'prev') {
      shiftNext([...carouselItems]);
    } else if (moveClass === 'next') {
      shiftPrev([...carouselItems]);
    }
    setMoveClass('');
  };

  const shiftNext = (copy: Image[]) => {
    let firstcard = copy.shift();
    if (firstcard) {
      copy.splice(copy.length, 0, firstcard);
      setCarouselItems(copy);
    }
  };

  const shiftPrev = (copy: Image[]) => {
    let lastcard = copy.pop();
    if (lastcard) {
      copy.splice(0, 0, lastcard);
      setCarouselItems(copy);
    }
  };

  useInterval(
    () => {
      setMoveClass('next');
    },
    moveAuto ? delay : null
  );

  const handleCheck = () => {
    setMoveAuto(!moveAuto);
  };

  const SliderImage = ({ url, title, description }: Image) => {
    return (
      <li className="relative min-w-full">
        <img src={url} alt={`${title}`} />
        <div className="absolute top-[40%] left-[5%]">
          <p className="font-bold text-6xl">{title}</p>
          <p className="text-4xl">{description}</p>
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
    );
  };

  return (
    <SliderSection
      onMouseEnter={() => {
        if (moveAuto) handleCheck();
      }}
    >
      <SliderList
        className={`${moveClass}`}
        onAnimationEnd={handleAnimationEnd}
      >
        {carouselItems.map((image, index) => (
          <SliderImage
            url={image.url}
            title={image.title}
            description={image.description}
            key={index}
          />
        ))}
      </SliderList>
      <label
        htmlFor="default-toggle"
        className="inline-flex absolute top-10 right-10 items-center cursor-pointer "
      >
        <input
          type="checkbox"
          checked={moveAuto}
          id="default-toggle"
          className="sr-only peer"
          onChange={handleCheck}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label>
      <PrevBtn
        onClick={() => {
          if (moveAuto) handleCheck();
          setMoveClass('prev');
        }}
      >
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
      <NextBtn
        onClick={() => {
          if (moveAuto) handleCheck();
          setMoveClass('next');
        }}
      >
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
