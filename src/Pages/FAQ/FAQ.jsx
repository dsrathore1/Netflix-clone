import React, { useEffect } from 'react';

import Logo from '../../Assets/Netflix-Logo.png';
import BackBtn from '../../Assets/backArrow.png';
import PageIcon from '../../Assets/page.svg';
import Image1 from '../../Assets/netflix-about.png';
import Image2 from '../../Assets/tvShows.png';
import Image3 from '../../Assets/Supported-Devices.png';
import Image4 from '../../Assets/plans-pricing.png';
import Image5 from '../../Assets/getStarted.png';

import style from '../../Styles/FAQStyle.module.css';
import FaqComponents from '../../Components/Extra/FaqComponents';
import { Link } from 'react-router-dom';

const FAQ = () => {
    useEffect(() => {
        document.title = "What is Netflix?";
    }, [])
    return (
        <>
            <div className={style.FAQContainer}>
                {/* Navbar */}
                <div className={style.FAQNavContainer}>
                    <div className={style.FAQLogoContainer}>
                        <img className={style.FAQLogo} src={Logo} alt="#home"></img>
                        <a href='#home' className={style.FAQDivider}>|</a>
                        <a href='#home' className={style.FAQHelpCenter} > Help Center</a>
                    </div>
                    <div className={style.FAQBtnContainer}>
                        <button className={style.joinNow} >Join Netflix</button>
                        <button className={style.signIn}>Sign In</button>
                    </div>
                </div>
                {/* Navbar */}


                {/* Main Content */}
                <div className={style.FAQMainContent}>
                    <div className={style.leftContent}>
                        <div className={style.backToHome}>
                            <img className={style.backArrow} src={BackBtn} alt='' />
                            <span>Back to Help Home</span>
                        </div>
                        <div className={style.aboutNetflix}>
                            <FaqComponents title={"What is Netflix?"} image={Image1} para={
                                <>
                                    <p>
                                        Netflix is a subscription-based streaming service that allows our members to watch TV shows and movies on an internet-connected device.
                                    </p>
                                    <br />
                                    <p>
                                        Depending on your plan, you can also download TV shows and movies to your iOS, Android, or Windows 10 device and watch without an internet connection.
                                    </p>
                                    <br />
                                    <p>
                                        If you're already a member and would like to learn more about using Netflix, visit Getting started with Netflix.
                                    </p>
                                    <br />
                                </>
                            } />
                            <hr />
                            <FaqComponents subTitles="TV Shows & Movies" image={Image2} para={
                                <>
                                    <p>
                                        Netflix content varies by region and may change over time. You can watch a variety of award-winning Netflix originals, TV shows, movies, documentaries, and more.
                                    </p>
                                    <br />
                                    <p>
                                        The more you watch, the better Netflix gets at recommending TV shows and movies.
                                    </p>
                                    <br />
                                </>
                            } />
                            <hr />

                            <FaqComponents subTitles="Supported Devices" image={Image3} para={
                                <>
                                    <p>
                                        You can watch Netflix through any internet-connected device that offers the Netflix app, including smart TVs, game consoles, streaming media players, set-top boxes, smartphones, and tablets. You can also watch Netflix on your computer using an internet browser. You can review the  system requirements for web browser compatibility, and check our internet speed recommendations to achieve the best performance.
                                    </p>
                                    <br />
                                </>
                            } />
                            <hr />
                            <FaqComponents subTitles="Plans And Pricing" image={Image4} para={
                                <>
                                    <p>
                                        Each Netflix plan determines the number of devices you can watch Netflix on at the same time and whether you can watch in High Definition (HD), Full High Definition (FHD), or Ultra High Definition (UHD).
                                    </p>
                                    <br />
                                    <br />
                                    <p>
                                        You can change your plan or cancel online at any time.
                                    </p>
                                    <br />
                                </>
                            } />
                            <hr />
                            <FaqComponents subTitles="Get Started" image={Image5} para={
                                <>
                                    <span>To start watching Netflix:</span>
                                    <br />
                                    <ol className='faqAllLinks'>
                                        <li className='faqLinks'>1. Visit <Link to="/signUp"> netflix.com/signup. </Link></li>
                                        <li className='faqLinks'>2. <Link to="/signUp">Choose a plan.</Link></li>
                                        <li className='faqLinks'>3. Create an account by entering your email address and creating a password.</li>
                                        <li className='faqLinks'>4. Enter a <Link to="/signUp"> payment method. </Link></li>
                                    </ol>
                                    <span className={style.faqLastSpan}>As a Netflix member, you are charged once a month on the date you signed up.</span>

                                    <br />
                                    <br />
                                </>
                            } />
                            <hr />
                            <span className={style.faqQuestion}><strong>Was this article helpful?
                            </strong> Yes  No</span>
                        </div>
                    </div>
                    <div className={style.rightContent}>
                        <div className={style.linkTable}>
                            <div className={style.links}>
                                <h3 className={style.relatedHeading}>Related Articles</h3>
                                <div className={style.link1}>
                                    <img className={style.pageIcon} src={PageIcon} alt=''></img>
                                    <a className={style.realLink} href='#home'>Getting started with Netflix</a>
                                </div>
                                <div className={style.link1}>
                                    <img className={style.pageIcon} src={PageIcon} alt=''></img>
                                    <a className={style.realLink} href='#home'>Billing and Payments</a>
                                </div>
                                <div className={style.link1}>
                                    <img className={style.pageIcon} src={PageIcon} alt=''></img>
                                    <a className={style.realLink} href='#home'>Netflix Gift Cards</a>
                                </div>
                                <div className={style.link1}>
                                    <img className={style.pageIcon} src={PageIcon} alt=''></img>
                                    <a className={style.realLink} href='#home'>Can't sign in to Netflix</a>
                                </div>
                                <div className={style.link1}>
                                    <img className={style.pageIcon} src={PageIcon} alt=''></img>
                                    <a className={style.realLink} href='#home'>How to create, change, or delete profiles</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Main Content */}


            </div>
        </>
    )
}

export default FAQ