import React from 'react'
import LogoIcon from "../../assets/assets/logo.png"
import styles from "./Logo.module.css"
const Logo = () => {
  return <img className={styles.Logo} src={LogoIcon} alt='q-tify' width={70}/>
}

export default Logo