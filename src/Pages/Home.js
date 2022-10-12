import React from 'react'
import Slider from '../Components/Slider'
import Images from "../images.js"

function Home() {
    return (
        <>
            <Slider images={Images} />
        </>
    )
}

export default Home