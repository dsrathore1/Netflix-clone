import React from 'react'
import Devices from "../../Assets/devices.png";
import "../../Styles/Section4Style.css";

const Section4 = () => {
    return (
        <>
            <div className='section4'>
                <div className='leftSide'>
                    <h1 className='section2Heading'>Watch everywhere.</h1>
                    <p className='section2Para'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                </div>
                <div className='rightSide'>
                    <img className='deviceImg' src={Devices} alt="#TV"></img>
                    <video className='deviceVid' autoPlay loop muted playsInline ><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4" /></video>
                </div>
            </div>
        </>
    )
}

export default Section4