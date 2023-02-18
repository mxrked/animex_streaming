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
// import "../assets/styles/modules/Login_Register/Login_Register.module.css";

export default function Login_Register() {
  const router = useRouter();

  return (
    <div id="page" className="page overrides_Login_Register full-second">
      <PageHead
        title="Animex Streaming - Login/Register"
        keywords=""
        description="Looking for an anime streaming website that has all your favorite shows in one place? Look no further than Animex Streaming! Our vast collection of anime includes classic favorites and new releases, all available to stream in high quality. With easy-to-use navigation and a user-friendly interface, Animex Streaming is the perfect destination for anime fans of all ages. Sign up now and start watching your favorite shows today!"
        robots="index, follow"
        url="https://sparkling-dragon-f3af91.netlify.app/login_register/"
      />

      <main id="pageCnt" className="page-cnt full-second"></main>
    </div>
  );
}
