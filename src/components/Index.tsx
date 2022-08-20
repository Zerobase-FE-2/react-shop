import Slider from './Slider';

const Index = () => {
  return (
    <Slider
      images={[
        {
          url: './src/assets/images/vegetables.jpeg',
          title: 'hihi',
          description: 'hello',
        },
        {
          url: './src/assets/images/shop.jpeg',
          title: 'hihi',
          description: 'hello',
        },
        {
          url: './src/assets/images/jeans.jpeg',
          title: 'hihi',
          description: 'hello',
        },
      ]}
      totalSlides={3}
    />
  );
};
export default Index;
