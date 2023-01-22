import React from 'react'
import ChildProf from "../../Assets/childProf.png";
import '../../Styles/Section5Style.css'; 

const Section5 = () => {
    return (
        <>
            <div className='section5'>
                <div className='rightSide'>
                    <img className='childImg' src={ChildProf} alt="#TV" />
                </div>
                <div className='leftSide'>
                    <h1 className='section2Heading'>Create profiles for children.</h1>
                    <p className='section2Para'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
                </div>
            </div>
        </>
    )
}

export default Section5