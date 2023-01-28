import React from 'react';
import styles from '../../../Styles/SignUpStyle.module.css';
import SignUpNav from './SignUpNav';

const SignUp = () => {

    return (
        <>
            <div className='signUpContainer'>
                <SignUpNav />
                <div className={styles.signUpMainPage}>
                    <div className={styles.signUpMainContainer}>
                        <img className={styles.signUpDevices} src='https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png' alt='#' />
                        <span className={styles.signUpPageSteps}>step <strong>1</strong> of <strong>3</strong></span>
                        <h2 className={styles.signUpHeading}>Finish setting up your account</h2>
                        <p className={styles.signUpPara}>Netflix is personalized for you. Create a password to watch on any device at any time.</p>
                        <button className={styles.signUpNextBtn}>NEXT</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp