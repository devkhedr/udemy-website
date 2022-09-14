import React from 'react'
import "./HeaderPhoto.css"
function HeaderPhoto() {
  return (
    <div class="pageHeader">
          <img src={require('../../assets/header/header-photo.jpg')} />
          <div class="text">
            <h1>Learning that gets you</h1>
            <p>
              Skills for your present (and your future). Get started with us.
            </p>
          </div>
        </div>
  )
}

export default HeaderPhoto