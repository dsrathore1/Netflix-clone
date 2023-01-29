import React from 'react';
import logo from "../../Assets/Netflix-Logo.svg";
import styles from '../../Styles/NavStyle.module.css';
import { useNavigate } from 'react-router-dom';

const Nav = (props) => {
    const navigate = useNavigate();

    return (
        <>
            <img className={styles.logo} src={logo} alt="#" />
            <div className={styles.navContainer}>
                <div className={styles.btnContainer}>
                    <select style={{ display: props.display }} className={styles.langSelection}>
                        <option className={styles.lang}>English</option>
                        <option className={styles.lang}>Hindi</option>
                    </select>
                    <button className={styles.signInBtn} onClick={() => { navigate(props.login ? "/signOut" : "/logIn") }}>{props.login ? "Sign Out" : "Sign In"}</button>
                </div>
            </div>
        </>
    )
}
export default Nav