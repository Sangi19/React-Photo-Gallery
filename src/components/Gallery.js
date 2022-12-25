import React from 'react'

export default function Gallery({galleryImages}) {
  return (
    <div>

        <div className='galleryWrap'>
            {galleryImages.map((slide,index)=>{
                return(
                <div className='single' key={index}>
                    <img src={slide.img} alt=''/>
                </div>
                )}
            )}
        </div>
    </div>
  )
}
