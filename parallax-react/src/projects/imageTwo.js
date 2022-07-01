import { Parallax } from 'react-parallax';
import image3 from "../images/RM_5_6.png"

const ImageThree = () => (
    <Parallax className='image' bgImage={image3} strength={800}>
        <div className='content'>
            <span className='image-txt'> Your next Culinary Creation</span>
        </div>
    </Parallax>
);

export default ImageThree