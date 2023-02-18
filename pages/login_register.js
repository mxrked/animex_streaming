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

// Style Imports
import "../assets/styles/modules/Login_Register/Login_Register.module.css";

export default function Login_Register() {
  const router = useRouter();

  return (
    <div id="page" className="page overrides_Login_Register full-second">
      <PageHead
        title="Animex Streaming - Login/Register"
        robots="index, follow"
        url="https://sparkling-dragon-f3af91.netlify.app/login_register/"
      />

      <main id="pageCnt" className="page-cnt full-second"></main>
    </div>
  );
}
