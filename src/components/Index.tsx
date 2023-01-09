import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const sliders = [
  {
    title: ' 나만의 악세서리 구경하러가기',
    image:
      'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80',
  },
  {
    title: '  나만의 디지털기기 구경하러가기',
    image:
      'https://images.unsplash.com/photo-1534723452862-4c874018d66d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80',
  },
  {
    title: ' 나만의 패션 아이템 구경하러가기',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80',
  },
];

const Index = () => {
  const settings = {
    arrows: false,
    infinite: true,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    pauseOnHover: true,
    dots: true,
  };
  return (
    <Slider {...settings}>
      {sliders.map((slider, idx) => (
        <div
          key={idx}
          className="relative h-[70vh] w-full overflow-hidden bg-center bg-no-repeat"
        >
          <LazyLoadImage
            className="absloute w-full"
            alt="accessory"
            effect="blur"
            src={slider.image}
          />
          <h2 className="dropdown-content absolute top-[50%] left-[10%] text-6xl font-extrabold text-gray-100 opacity-80">
            {slider.title}
          </h2>
          <button className="btn-xl absolute left-[10%] top-[65%] rounded-lg bg-gray-600 py-3 px-10 text-3xl text-gray-200 drop-shadow-2xl transition hover:bg-gray-800 hover:text-gray-400">
            <Link to="/accessory">바로가기</Link>
          </button>
        </div>
      ))}
    </Slider>
  );
};
export default Index;
