import Slider2 from './Slider2';
import vegetableImg from '../assets/images/vegetables.jpeg';
import shopImg from '../assets/images/shop.jpeg';
import jeanImg from '../assets/images/jeans.jpeg';

const Index = () => {
  return (
    <Slider2
      images={[
        {
          url: vegetableImg,
          title: 'hihi',
          description: 'hello',
        },
        {
          url: shopImg,
          title: 'hihi',
          description: 'hello',
        },
        {
          url: jeanImg,
          title: 'hihi',
          description: 'hello',
        },
      ]}
    />
  );
};
export default Index;
