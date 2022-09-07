import Slider from './Slider';
import vegetableImg from '../assets/images/vegetables.jpeg';
import shopImg from '../assets/images/shop.jpeg';
import jeanImg from '../assets/images/jeans.jpeg';

const Index = () => {
  return (
    <Slider
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
