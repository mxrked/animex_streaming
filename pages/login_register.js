/**
 *
 *  This is the Login and Register Page
 *
 */

// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports

// Component Imports
import { PageHead } from "@/assets/components/global/PageHead";

import { LoginRegisterBG } from "@/assets/components/pages/Login_Register/LoginRegisterBG";
import { LoginRegisterTop } from "@/assets/components/pages/Login_Register/LoginRegisterTop";
import { LoginRegisterForms } from "@/assets/components/pages/Login_Register/LoginRegisterForms";

// Style Imports

import pageStyles from "../assets/styles/modules/Login_Register/Login_Register.module.css";
import "../assets/styles/modules/Login_Register/Login_Register.module.css";

export default function Login_Register() {
  const router = useRouter();

  // Routes user back to home page on production
  useEffect(() => {
    if (location.hostname !== "localhost") {
      router.push("/");
    }
  }, [router]);

  return (
    <div id="page" className="page overrides_Login_Register full-second">
      <PageHead
        title="Animex Streaming - Login/Register"
        robots="index, follow"
        url="https://sparkling-dragon-f3af91.netlify.app/login_register/"
      />

      <main id="pageCnt" className="page-cnt full-second">
        <div className={`${pageStyles.page_cnt_box} container-fluid`}>
          <div className={`${pageStyles.page_cnt_row} row`}>
            <div
              className={`${pageStyles.page_cnt_side} ${pageStyles.page_cnt_L} col-lg-4 col-md-4 col-sm-4 col-xs-12`}
            >
              <LoginRegisterBG />
            </div>
            <div
              className={`${pageStyles.page_cnt_side} ${pageStyles.page_cnt_R} col-lg-8 col-md-8 col-sm-8 col-xs-12`}
            >
              <div className={`${pageStyles.page_cnt_side_cnt}`}>
                <LoginRegisterTop />
                <LoginRegisterForms />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
