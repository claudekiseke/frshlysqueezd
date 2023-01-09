import Image from 'next/image';
import myImageLoader from '../../public/loader';
import styles from './brands.module.css';

const Brands = ({ brand }) => {

    const brands = brand.brandsImgs;
    const brandImg = brands.map((item, index) => {
        const url = item.fields.file.url;
        const width = item.fields.file.details.image.width;
        const height = item.fields.file.details.image.height;
        const alt = item.fields.title;

        return (
            <div key={index}>
                <Image
                    src={`https:${url}`}
                    width={width}
                    height={height}
                    alt={alt}
                    loader={myImageLoader}
                />
            </div>
        )
    });

    return (
        <div className={styles.center}>
            <div>
                <h2 className={styles.h2}>{brand.brandsTitle}</h2>
            </div>
            {brandImg}
        </div>
    );
}

export default Brands;