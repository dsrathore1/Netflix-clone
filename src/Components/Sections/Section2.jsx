import React from 'react';
import TV from "../../Assets/tv.png";
import "../../Styles/Section2Style.css";

const Section2 = () => {
    return (
        <>
            <div className='section2'>
                <div className='leftSide'>
                    <h1 className='section2Heading'>Enjoy on your TV.</h1>
                    <p className='section2Para'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                </div>
                <div className='rightSide'>
                    <video className='videoPlay' autoPlay playsInline loop muted><source src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v' type='video/mp4' /></video>
                    <img className='tvImg' src={TV} alt="#TV"></img>
                </div>
            </div>
        </>
    )
}

export default Section2