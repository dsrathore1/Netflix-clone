import React from 'react';
import Mob_tab from "../../Assets/mob_tab.jpg";
import "../../Styles/Section3Style.css";

const Section3 = () => {
    return (
        <>
            <div className='section3'>
                <div className='rightSide'>
                    <img className='tvImg' src={Mob_tab} alt="#TV" />
                </div>
                <div className='leftSide'>
                    <h1 className='section2Heading'>Download your shows to watch offline.</h1>
                    <p className='section2Para'>Save your favourites easily and always have something to watch.</p>
                </div>
                <div className='downloadBox'>
                    <img className='downloadImg' src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png' alt='#none' />
                    <div className='downloadTitles'>
                        <p className='downloadHeading'>Stranger Things</p>
                        <p className='downloading'>Downloading...</p>
                    </div>
                    <div className='downloadLoader'>
                        <img className='loader' src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif' alt='#loader' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section3