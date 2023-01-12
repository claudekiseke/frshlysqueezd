import { Caveat } from '@next/font/google';
import { Rock_Salt } from '@next/font/google';

const caveat = Caveat({
    weight: '400',
    subsets: ['latin'],
});
const rockSalt = Rock_Salt({
    weight: '400',
    subsets: ['latin'],
})

export default function Signature({ font, fontSize, name, styles }) {

    const signature = () => {
        let fontFamily;

        switch (font) {
            case 'Caveat':
                fontFamily = caveat;
                break;

            case 'Rock Salt':
                fontFamily = rockSalt;
                break;
        }

        return fontFamily.className;

    }

    return (
        <h4 className={`${styles.signature} ${signature()}`} style={{ fontSize: fontSize + 'px' }}>{name}</h4>
    );
}