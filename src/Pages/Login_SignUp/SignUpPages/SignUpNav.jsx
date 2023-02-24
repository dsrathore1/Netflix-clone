import React from 'react'
import logo from "../../../Assets/Netflix-Logo.svg"
import styles from '../../../Styles/SignUpNavStyle.module.css';
import { Link, useNavigate } from 'react-router-dom';

const SignUpNav = (props) => {
    const navigate = useNavigate();
    return (
        <>
            <Link to={navigate(-1)}><img style={{ height: props.height, top: props.logoTop }} className={styles.logo} src={logo} alt="#" /></Link>
            <div style={{ borderBottom: props.borderBottom, height: props.navHeight, backgroundColor: props.navBg }} className={styles.navContainer}>
                <div className={styles.btnContainer}>
                    <button style={{ display: props.btnDisplay }} className={styles.signInBtn} onClick={() => { navigate(props.login ? "/signOut" : "/logIn") }}>{props.login ? "Sign Out" : "Sign In"}</button>
                </div>
            </div>
        </>
    )
}

export default SignUpNav