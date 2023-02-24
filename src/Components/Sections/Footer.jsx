import React from 'react'
import { Link } from 'react-router-dom';
import '../../Styles/FooterStyle.css';

const Footer = () => {
    
    return (
        <div className='footerContainer'>
            <div className='footerRow'>
                <p className='question'>Questions? Call 000-800-919-1694</p>
                <div className='footerColumn'>
                    <div className='column1 commonColumnStyle'>
                        <ol className='columnList1'>
                            <li><Link to="/faq" className='c1'>FAQ</Link></li>
                            <li><Link to='#home' className='c1'>Investor Relations</Link></li>
                            <li><Link to='#home' className='c1'>Privacy</Link></li>
                            <li><Link to='#home' className='c1'>Speed Test</Link></li>
                        </ol>
                    </div>
                    <div className='column2 commonColumnStyle'>
                        <ol className='columnList2'>
                            <li><Link to='#home' className='c2'>Help Center</Link></li>
                            <li><Link to='#home' className='c2'>Jobs</Link></li>
                            <li><Link to='#home' className='c2'>Cookie Preference</Link></li>
                            <li><Link to='#home' className='c2'>Legal Notices</Link></li>
                        </ol>
                    </div>
                    <div className='column3 commonColumnStyle'>
                        <ol className='columnList3'>
                            <li><Link to='#home' className='c3'>Account</Link></li>
                            <li><Link to='#home' className='c3'>Way to Watch</Link></li>
                            <li><Link to='#home' className='c3'>Privacy</Link></li>
                            <li><Link to='#home' className='c3'>Only on Netflix</Link></li>
                        </ol>
                    </div>
                    <div className='column4 commonColumnStyle'>
                        <ol className='columnList4'>
                            <li><Link to='#home' className='c4'>Media Center</Link></li>
                            <li><Link to='#home' className='c4'>Terms of Use</Link></li>
                            <li><Link to='#home' className='c4'>Contact Us</Link></li>
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
        </div >
    )
}

export default Footer