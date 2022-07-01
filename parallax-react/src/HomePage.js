import React from 'react';
import { data } from './mockData';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import passion from "./images/passion.png"

function HomePage() {

    const slideLeft = () => {
      let slider = document.getElementById('slider')
      slider.scrollLeft = slider.scrollLeft - 500
    }
    
    const slideRight = () => {
      let slider = document.getElementById('slider')
      slider.scrollLeft = slider.scrollLeft + 500
    }
  
    return (
      <>
       <img
          className='w-full h-[440px] object-cover object-center'
          src= { passion }
          alt='' />
        <div className='relative flex items-center'>
          <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
            <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
              {data.map((item) => (
                <img className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'src={item.img} alt='/' />
              ))}
            </div>
          <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
        </div>
      </>
    );
  }
  
  export default HomePage;