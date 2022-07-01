import { Parallax } from 'react-parallax';
import image2 from "../images/RM_3_4.png"

const ImageThree = () => (
    <Parallax className='image' bgImage={image2} strength={800}>
        <div className='content'>
            <span className='image-txt'> Your next Culinary Creation</span>
        </div>
    </Parallax>
);

export default ImageThree