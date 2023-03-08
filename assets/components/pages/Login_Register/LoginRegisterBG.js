/**
 *
 *  This is the login register page background
 *
 */

import { BackgroundImage } from "react-image-and-background-image-fade";

import { LOGIN_REGISTER_BG } from "@/assets/cdns/CDNBgs";

import styles from "../../../styles/modules/Login_Register/Login_Register.module.css";

export const LoginRegisterBG = () => {
  return (
    <div className={`${styles.login_register_bg}`}>
      <BackgroundImage
        src={LOGIN_REGISTER_BG}
        width="100%"
        height="100%"
        className={`${styles.bg}`}
      />

      <div className={`${styles.darken}`} />
    </div>
  );
};
