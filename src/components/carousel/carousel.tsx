import MuiCarousel from 'react-material-ui-carousel'

const Carousel = ({ content } : {content: string}) => {

    const slides = [
        {
          id:1,  
          header: 'Slide 1',
          image: 'slide1',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          id:2,  
          header: 'Slide 2',
          image: 'slide2',
          content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          id:3,  
          header: 'Slide 3',
          image: 'slide3',
          content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        
      ];
    
 <MuiCarousel
       
        navButtonsProps={{
     
        }}
  
        activeIndicatorIconButtonProps={{
     
        }}
        
    
      >
        {slides.map((slide) => (
          <div key={`group-${slide.id}`} slide={slide} />
        ))}
      </MuiCarousel>

export default Carousel;

