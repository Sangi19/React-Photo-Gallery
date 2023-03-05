import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleChevronLeft,
    faCircleChevronRight,
    faCircleXmark
} from '@fortawesome/free-solid-svg-icons';
import "./gallery.css";

export default function Gallery({galleryImages}) {
    const [slideNumber, setSlideNumber] = useState(0)
    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal=(index)=>{
        setSlideNumber(index)
        setOpenModal(true)
    }

    const handleCloseModal=(index)=> {
        setOpenModal(false)
    }
    const prevSlide=(index)=> {
        slideNumber===0? setSlideNumber[galleryImages.length-1]: setSlideNumber(slideNumber-1)
    }

    const nextSlide=(index)=> {
        setOpenModal(false)
    }

  return (
    <div>
        {openModal &&
        <div className='sliderWrap'>
            <FontAwesomeIcon icon={faCircleXmark} className='btnClose' onClick={handleCloseModal} />
            <FontAwesomeIcon icon={faCircleChevronLeft} className='btnPrev'  onClick={prevSlide}/>
            <FontAwesomeIcon icon={faCircleChevronRight} className='btnNext' onClick={nextSlide} />
            <div className='fullScreenImage'>
                <img src={galleryImages[slideNumber].img} alt='' />
            </div>
        </div>
        }

        <div className='galleryWrap'>
            {galleryImages && galleryImages.map((slide,index)=>{
                return(
                <div 
                    className='single' 
                    key={index}
                    onClick={()=> handleOpenModal(index)}
                >
                    <img src={slide.img} alt=''/>
                </div>
                )}
            )}
        </div>
    </div>
  )
}
