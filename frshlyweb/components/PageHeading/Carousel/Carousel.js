const Carousel = ({ carousel }) => {
console.log(carousel.fields.images);    

const carouselItems = carousel.fields.images;
const carouselItem = carouselItems.map((item, index) => {
    
console.log(item); 
});
return 'tert';
}

export default Carousel;