import React from 'react'
import "./TopCategories.css"
function TopCategories() {
  return (
    <div className="topCategories">
        <h3>Top categories</h3>
        <div className="row">
          <div className='card'>
            <img
              src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg"
              className="card-img-top mb-2 zoom"
              alt="Design"
            />
            <b className="card-text">Design</b>
          </div>
          <div className='card'>
            <img
              src="https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg"
              className="card-img-top mb-2 zoom"
              alt="Development"
            />
            <b className="card-text">Development</b>
          </div>
          <div className='card'>
            <img
              src="https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg"
              className="card-img-top mb-2 zoom"
              alt="Marketing"
            />
            <b className="card-text">Marketing</b>
          </div>
          <div className='card'>
            <img
              src="https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg"
              className="card-img-top mb-2 zoom"
              alt="IT and Software"
            />
            <b className="card-text">IT and Software</b>
          </div>
          <div className='card'>
            <img
              src="https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg"
              className="card-img-top mb-2 zoom"
              alt="Personal Development"
            />
            <b className="card-text">Personal Development</b>
          </div>
          <div className='card'>
            <img
              src="https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg"
              className="card-img-top mb-2 zoom"
              alt="Business"
            />
            <b className="card-text">Business</b>
          </div>
          <div className='card'>
            <img
              src="https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg"
              className="card-img-top mb-2 zoom"
              alt="Photography"
            />
            <b className="card-text">Photography</b>
          </div>
          <div className='card'>
            <img
              src="https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg"
              className="card-img-top mb-2 zoom"
              alt="Music"
            />
            <b className="card-text">Music</b>
          </div>
        </div>
      </div>
  )
}

export default TopCategories