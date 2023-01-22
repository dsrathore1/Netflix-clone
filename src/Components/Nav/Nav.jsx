import React from 'react';
import logo from "../../Assets/Netflix-Logo.svg";
import '../../Styles/NavStyle.css';
import { useNavigate } from 'react-router-dom';

const Nav = (props) => {
    const navigate = useNavigate();

    return (
        <>
            <img className='logo' src={logo} alt="#" />
            <div className='navContainer'>
                <div className='btnContainer'>
                    <select className='langSelection'>
                        <option className='lang'>English</option>
                        <option className='lang'>Hindi</option>
                    </select>
                    <button className='signInBtn' onClick={() => { navigate(props.login ? "/signOut" : "/logIn") }}>{props.login ? "Sign Out" : "Sign In"}</button>
                </div>
            </div>
        </>
    )
}
export default Nav