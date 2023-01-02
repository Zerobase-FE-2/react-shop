import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import vegetableImg from '../assets/images/vegetables.jpeg';
import shopImg from '../assets/images/shop.jpeg';
import jeanImg from '../assets/images/jeans.jpeg';

const Index = () => {
  const settings = {
    dots: true,
    infinite: true,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    fade: true,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="relative h-2/4 w-full">
        <h2 className="absolute top-[50%] left-[50%]">3</h2>
        <button className="btn btn-ghost absolute right-[50%] top-[50%] bg-gray-600 text-xl text-white">
          바로가기
        </button>
        <img className="h-2/4" src={vegetableImg} />
      </div>
      <div className="relative h-2/4 w-full">
        <h2 className="absolute top-[50%]">3</h2>
        <button className="absolute right-[50%] top-[50%]">바로가기</button>
        <img className="h-2/4" src={shopImg} />
      </div>
      <div className="h-2/4 w-full">
        <h2 className="absolute top-[50%]">3</h2>
        <button className="absolute right-[50%] top-[50%]">바로가기</button>
        <img className="h-2/4" src={jeanImg} />
      </div>
    </Slider>
  );
};
export default Index;
