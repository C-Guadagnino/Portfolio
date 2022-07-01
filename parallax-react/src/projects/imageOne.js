import { Parallax } from 'react-parallax';
import Homepage from "../images/RM_Home_AND_SKEWER.png"

const ImageOne = () => (
    <Parallax className='image' bgImage={Homepage} strength={800}>
        <div className='content'>
            <span className='image-txt'> Your next Culinary Creation</span>
        </div>
    </Parallax>
);

export default ImageOne