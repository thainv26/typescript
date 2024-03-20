import React from 'react'

const Banner = () => {
  return (
    <div id='demo' className='carousel slide' data-bs-ride='carousel'>
      {/* Indicators/dots */}
      <div className='carousel-indicators'>
        <button type='button' data-bs-target='#demo' data-bs-slide-to={0} className='active' />
        <button type='button' data-bs-target='#demo' data-bs-slide-to={1} />
        <button type='button' data-bs-target='#demo' data-bs-slide-to={2} />
      </div>
      {/* The slideshow/carousel */}
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <img src='../image/Dark Forest _ 4k wallpaper.jpg' alt='Los Angeles' className='d-block w-100' />
        </div>
        <div className='carousel-item'>
          <img src='../image/tải xuống.jpg' alt='Chicago' className='d-block w-100' />
        </div>
        <div className='carousel-item'>
          <img src='../image/Tryfog.jpg' alt='New York' className='d-block w-100' />
        </div>
      </div>
      {/* Left and right controls/icons */}
      <button className='carousel-control-prev' type='button' data-bs-target='#demo' data-bs-slide='prev'>
        <span className='carousel-control-prev-icon' />
      </button>
      <button className='carousel-control-next' type='button' data-bs-target='#demo' data-bs-slide='next'>
        <span className='carousel-control-next-icon' />
      </button>
    </div>
  )
}

export default Banner
