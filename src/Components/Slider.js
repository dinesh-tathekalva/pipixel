import React, { useRef } from 'react';
import PipixelLogo from '../svgs/PipixelLogo.svg'
import useSlider from '../Hooks/useSlider.js'
import { useNavigate } from 'react-router-dom'

const Slider = ({ images }) => {
  let navigate = useNavigate()
  const slideImage = useRef(null)
  const slideText = useRef(null)
  const { goToPreviousSlide, goToNextSlide } = useSlider(slideImage, slideText, images)

  return (
    <div className="slider" ref={slideImage} style={{ overflow: "hidden" }}>
      <div className='mt-3 text-uppercase homeNav'>
        <span className='homeNavText' onClick={() => {
          navigate("/portraits")
        }}>Portraits </span>
        <span className='homeNavText' onClick={() => {
          navigate("/portraits")
        }}>weddings </span>
        <span className='homeNavText' onClick={() => {
          navigate("/aboutUs")
        }}>About Us</span>
        <span className='homeNavText' onClick={() => {
          navigate("/contact")
        }}>Contact</span>
      </div>
      <div className="slider--content">
        <button onClick={goToPreviousSlide} className="slider__btn-left">
          {`${"<"}`}
        </button>
        <div className="slider--feature">
          {/* <h1 className="feature--title">Dreaming</h1> */}
          <p ref={slideText} className="feature--text"></p>
          <img className="mx-auto my-auto contrastColor" src={PipixelLogo} alt='' width='800' />

          {/* <button className="feature__btn">Get started</button> */}
        </div>
        <button onClick={goToNextSlide} className="slider__btn-right">
          {`${">"}`}
        </button>
      </div>
    </div>
  );
}

export default Slider;