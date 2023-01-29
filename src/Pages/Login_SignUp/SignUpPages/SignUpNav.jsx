import React from 'react'
import logo from "../../../Assets/Netflix-Logo.svg"
import styles from '../../../Styles/SignUpNavStyle.module.css';
import { useNavigate } from 'react-router-dom';

const SignUpNav = (props) => {
    const navigate = useNavigate();
    return (
        <>
            <img className={styles.logo} src={logo} alt="#" />
            <div className={styles.navContainer}>
                <div className={styles.btnContainer}>
                    <button className={styles.signInBtn} onClick={() => { navigate(props.login ? "/signOut" : "/logIn") }}>{props.login ? "Sign Out" : "Sign In"}</button>
                </div>
            </div>
        </>
    )
}

export default SignUpNav