import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import vegetableImg from '../assets/images/vegetables.jpeg';
import shopImg from '../assets/images/shop.jpeg';
import jeanImg from '../assets/images/jeans.jpeg';
import { Link } from 'react-router-dom';

const Index = () => {
  const settings = {
    dots: false,
    infinite: true,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 20000,

    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="relative h-[70vh] w-full bg-[url('/img/vegetables.jpeg')] bg-cover bg-center bg-no-repeat">
        <h2 className="dropdown-content absolute top-[50%] left-[10%] text-6xl font-extrabold text-green-400 opacity-80">
          나만의 악세서리 구경하러가기
        </h2>
        <button className="btn-xl absolute left-[10%] top-[65%] rounded-lg bg-gray-600 py-3 px-10 text-3xl text-gray-200 drop-shadow-2xl transition hover:bg-gray-800 hover:text-gray-400">
          <Link to="/accessory">바로가기</Link>
        </button>
      </div>
      <div className="relative h-[70vh] w-full bg-[url('/img/shop.jpeg')] bg-cover bg-center bg-no-repeat">
        <h2 className="dropdown-content absolute top-[50%] left-[10%] text-6xl font-extrabold text-blue-300 opacity-80 ">
          나만의 패션 아이템 구경하러가기
        </h2>
        <button className="btn-xl absolute left-[10%] top-[65%] rounded-lg bg-gray-600 py-3 px-10 text-3xl text-gray-200 drop-shadow-2xl transition hover:bg-gray-800 hover:text-gray-400">
          <Link to="/fashion">바로가기</Link>
        </button>
      </div>
      <div className="relative h-[70vh] w-full bg-[url('/img/jeans.jpeg')] bg-cover bg-center bg-no-repeat">
        <h2 className="dropdown-content absolute top-[50%] left-[10%] text-6xl font-extrabold text-cyan-500 opacity-80">
          나만의 디지털기기 구경하러가기
        </h2>
        <button className="btn-xl absolute left-[10%] top-[65%] rounded-lg bg-gray-600 py-3 px-10 text-3xl text-gray-200 drop-shadow-2xl transition hover:bg-gray-800 hover:text-gray-400">
          <Link to="/digital">바로가기</Link>
        </button>
      </div>
    </Slider>
  );
};
export default Index;
