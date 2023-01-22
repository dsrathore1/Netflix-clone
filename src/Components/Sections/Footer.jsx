import React from 'react'
import '../../Styles/FooterStyle.css';

const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className='footerRow'>
                <p className='question'>Questions? Call 000-800-919-1694</p>
                <div className='footerColumn'>
                    <div className='column1 commonColumnStyle'>
                        <ol className='columnList1'>
                            <li><a href='#home' className='c1'>FAQ</a></li>
                            <li><a href='#home' className='c1'>Investor Relations</a></li>
                            <li><a href='#home' className='c1'>Privacy</a></li>
                            <li><a href='#home' className='c1'>Speed Test</a></li>
                        </ol>
                    </div>
                    <div className='column2 commonColumnStyle'>
                        <ol className='columnList2'>
                            <li><a href='#home' className='c2'>Help Center</a></li>
                            <li><a href='#home' className='c2'>Jobs</a></li>
                            <li><a href='#home' className='c2'>Cookie Preference</a></li>
                            <li><a href='#home' className='c2'>Legal Notices</a></li>
                        </ol>
                    </div>
                    <div className='column3 commonColumnStyle'>
                        <ol className='columnList3'>
                            <li><a href='#home' className='c3'>Account</a></li>
                            <li><a href='#home' className='c3'>Way to Watch</a></li>
                            <li><a href='#home' className='c3'>Privacy</a></li>
                            <li><a href='#home' className='c3'>Only on Netflix</a></li>
                        </ol>
                    </div>
                    <div className='column4 commonColumnStyle'>
                        <ol className='columnList4'>
                            <li><a href='#home' className='c4'>Media Center</a></li>
                            <li><a href='#home' className='c4'>Terms of Use</a></li>
                            <li><a href='#home' className='c4'>Contact Us</a></li>
                        </ol>
                    </div>
                </div>
                <div className='footerLangBtn'>
                    <select className='footerLangSelection'>
                        <option className='lang eng'>English</option>
                        <option className='lang hin'>Hindi</option>
                    </select>
                </div>
                <span>Netflix India</span>
            </div>
        </div>
    )
}

export default Footer