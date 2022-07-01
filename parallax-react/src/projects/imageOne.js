import { Parallax } from 'react-parallax';
import Homepage from "../images/moonmoon.jpeg"

const ImageOne = () => (
    <Parallax className='image' bgImage={Homepage} style={{height: "800px"}} strength={800}>
        <div className='content'>
            <span className='image-txt'> About me </span>
        </div>
    </Parallax>
);

export default ImageOne