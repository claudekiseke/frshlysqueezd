import Image from 'next/image';
import styles from './brands.module.css';

const Brands = ({ brand }) => {

    const brands = brand.brandsImgs;
    const brandImg = brands.map((item, index) => {
        const url = item.fields.file.url;
        const width = item.fields.file.details.image.width;
        const height = item.fields.file.details.image.height;
        const alt = item.fields.title;

        return (
                <Image
                    src={`https:${url}`}
                    width={width}
                    height={height}
                    alt={alt}
                    key={index}
                />
        )
    });

    return (
            <div className={styles.brands}>
                <h2 className={styles.brands__title}>{brand.brandsTitle}</h2>
                <div className={styles.brands__images}>{brandImg}</div>
            </div>
    );
}

export default Brands;