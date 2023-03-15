import styles from './carousel.module.css';

const Carousel = ({ carousel }) => {
 

const carouselA = carousel.fields.link1;
console.log(carouselA);   

return (
    <div className={styles.carousel_item}>
       <iframe src={`${carouselA}?controls=0`} width="100%" height="100%" frameBorder="0" allow="autoplay;"></iframe>
    </div>
)
}
export default Carousel;