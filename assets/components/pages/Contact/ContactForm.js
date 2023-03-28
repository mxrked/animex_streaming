/**
 *
 *  This is the contact form
 *
 */

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FADES } from "@/assets/data/variables/ARRAYS";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";
import {
  CheckNonEmptyInputs,
  CheckValidPhoneNumber,
  CheckValidEmailAddress,
  CheckTermsAndCons,
} from "@/assets/functions/dom/checkers/contact/CheckValidInputs";

import styles from "../../../styles/modules/Contact/Contact.module.css";
import RemoveStorageVariable from "@/assets/functions/data/storage/RemoveStorageVariable";
import DeclareStorageVariable from "@/assets/functions/data/storage/DeclareStorageVariable";

export const ContactForm = () => {
  const [isMobile, setIsMobile] = useState(false); // This is used to indicate if the variant needs to be changed

  const router = useRouter();

  //! Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  //! Changing Variant based on device size
  useEffect(() => {
    // Fade In
    if (window.innerWidth < 1024) {
      setIsMobile(true);
    }

    // Fade Up
    if (window.innerWidth >= 1024) {
      setIsMobile(false);
    }
  }, [router]);

  // Storing selected country code
  useEffect(() => {
    // Storing the selected country code
    setTimeout(() => {
      DeclareStorageVariable(
        "session",
        "Country Code",
        document.getElementById("countryCode").value
      );
    }, 710);
  }, []);

  return (
    <section id="contactForm" className={`${styles.contact_form}`}>
      <motion.div
        className={`fm-motion full-second fade-right-fix ${styles.fm_motion}`}
        ref={REF}
        animate={CONTROLS}
        initial="hidden"
        // isMobile = true - Fade In
        // isMobile = false - Fade Up
        variants={isMobile ? FADES[0] : FADES[3]}
      >
        <div className={`${styles.contact_form_inner}`}>
          <div className={`${styles.contact_form_inner_top}`}>
            <h1 className="half-second">Request assistance/help.</h1>

            <p>
              If you need immediate support, you can fill out the support form
              below and our support team will get back in touch with you
              shortly.
              <br />
              <br />
              Or you can call our phone number for further direct assistance.
              <br />
              <br />
              <span className="half-second">+1 (202)-555-0371</span>
            </p>
          </div>

          <div className={`${styles.contact_form_inner_form_holder}`}>
            <form
              noValidate="noValidate"
              autoComplete={"false"}
              className={styles.form}
            >
              <div className={`${styles.form_group}`}>
                <div className={`${styles.form_set}`}>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    className="form-input half-second"
                    placeholder="First Name"
                    autoComplete={"off"}
                    role={"presentation"}
                  />
                </div>
                <div className={`${styles.form_set}`}>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    className="form-input half-second"
                    placeholder="Last Name"
                    autoComplete={"off"}
                    role={"presentation"}
                  />
                </div>
              </div>
              <div className={`${styles.form_group}`}>
                <div className={`${styles.form_set} ${styles.phone_set}`}>
                  <select
                    name="countryCode"
                    id="countryCode"
                    onChange={(e) => {
                      // Storing the selected country code
                      RemoveStorageVariable("session", "Country Code");

                      DeclareStorageVariable(
                        "session",
                        "Country Code",
                        e.currentTarget.value
                      );
                    }}
                  >
                    {" "}
                    <option data-countryCode="US" value="1" selected>
                      (+1)
                    </option>{" "}
                    <option data-countryCode="DZ" value="213">
                      (+213)
                    </option>{" "}
                    <option data-countryCode="AD" value="376">
                      (+376)
                    </option>{" "}
                    <option data-countryCode="AO" value="244">
                      (+244)
                    </option>{" "}
                    <option data-countryCode="AI" value="1264">
                      (+1264)
                    </option>{" "}
                    <option data-countryCode="AG" value="1268">
                      (+1268)
                    </option>{" "}
                    <option data-countryCode="AR" value="54">
                      (+54)
                    </option>{" "}
                    <option data-countryCode="AM" value="374">
                      (+374)
                    </option>{" "}
                    <option data-countryCode="AW" value="297">
                      (+297)
                    </option>{" "}
                    <option data-countryCode="AU" value="61">
                      (+61)
                    </option>{" "}
                    <option data-countryCode="AT" value="43">
                      (+43)
                    </option>{" "}
                    <option data-countryCode="AZ" value="994">
                      (+994)
                    </option>{" "}
                    <option data-countryCode="BS" value="1242">
                      (+1242)
                    </option>{" "}
                    <option data-countryCode="BH" value="973">
                      (+973)
                    </option>{" "}
                    <option data-countryCode="BD" value="880">
                      (+880)
                    </option>{" "}
                    <option data-countryCode="BB" value="1246">
                      (+1246)
                    </option>{" "}
                    <option data-countryCode="BY" value="375">
                      (+375)
                    </option>{" "}
                    <option data-countryCode="BE" value="32">
                      (+32)
                    </option>{" "}
                    <option data-countryCode="BZ" value="501">
                      (+501)
                    </option>{" "}
                    <option data-countryCode="BJ" value="229">
                      (+229)
                    </option>{" "}
                    <option data-countryCode="BM" value="1441">
                      (+1441)
                    </option>{" "}
                    <option data-countryCode="BT" value="975">
                      (+975)
                    </option>{" "}
                    <option data-countryCode="BO" value="591">
                      (+591)
                    </option>{" "}
                    <option data-countryCode="BA" value="387">
                      (+387)
                    </option>{" "}
                    <option data-countryCode="BW" value="267">
                      (+267)
                    </option>{" "}
                    <option data-countryCode="BR" value="55">
                      (+55)
                    </option>{" "}
                    <option data-countryCode="BN" value="673">
                      (+673)
                    </option>{" "}
                    <option data-countryCode="BG" value="359">
                      (+359)
                    </option>{" "}
                    <option data-countryCode="BF" value="226">
                      (+226)
                    </option>{" "}
                    <option data-countryCode="BI" value="257">
                      (+257)
                    </option>{" "}
                    <option data-countryCode="KH" value="855">
                      (+855)
                    </option>{" "}
                    <option data-countryCode="CM" value="237">
                      (+237)
                    </option>{" "}
                    <option data-countryCode="CA" value="1">
                      (+1)
                    </option>{" "}
                    <option data-countryCode="CV" value="238">
                      (+238)
                    </option>{" "}
                    <option data-countryCode="KY" value="1345">
                      (+1345)
                    </option>{" "}
                    <option data-countryCode="CF" value="236">
                      (+236)
                    </option>{" "}
                    <option data-countryCode="CL" value="56">
                      (+56)
                    </option>{" "}
                    <option data-countryCode="CN" value="86">
                      (+86)
                    </option>{" "}
                    <option data-countryCode="CO" value="57">
                      (+57)
                    </option>{" "}
                    <option data-countryCode="KM" value="269">
                      (+269)
                    </option>{" "}
                    <option data-countryCode="CG" value="242">
                      (+242)
                    </option>{" "}
                    <option data-countryCode="CK" value="682">
                      (+682)
                    </option>{" "}
                    <option data-countryCode="CR" value="506">
                      (+506)
                    </option>{" "}
                    <option data-countryCode="HR" value="385">
                      (+385)
                    </option>{" "}
                    <option data-countryCode="CU" value="53">
                      (+53)
                    </option>{" "}
                    <option data-countryCode="CY" value="90392">
                      (+90392)
                    </option>{" "}
                    <option data-countryCode="CY" value="357">
                      (+357)
                    </option>{" "}
                    <option data-countryCode="CZ" value="42">
                      (+42)
                    </option>{" "}
                    <option data-countryCode="DK" value="45">
                      (+45)
                    </option>{" "}
                    <option data-countryCode="DJ" value="253">
                      (+253)
                    </option>{" "}
                    <option data-countryCode="DM" value="1809">
                      (+1809)
                    </option>{" "}
                    <option data-countryCode="DO" value="1809">
                      (+1809)
                    </option>{" "}
                    <option data-countryCode="EC" value="593">
                      (+593)
                    </option>{" "}
                    <option data-countryCode="EG" value="20">
                      (+20)
                    </option>{" "}
                    <option data-countryCode="SV" value="503">
                      (+503)
                    </option>{" "}
                    <option data-countryCode="GQ" value="240">
                      (+240)
                    </option>{" "}
                    <option data-countryCode="ER" value="291">
                      (+291)
                    </option>{" "}
                    <option data-countryCode="EE" value="372">
                      (+372)
                    </option>{" "}
                    <option data-countryCode="ET" value="251">
                      (+251)
                    </option>{" "}
                    <option data-countryCode="FK" value="500">
                      (+500)
                    </option>{" "}
                    <option data-countryCode="FO" value="298">
                      (+298)
                    </option>{" "}
                    <option data-countryCode="FJ" value="679">
                      (+679)
                    </option>{" "}
                    <option data-countryCode="FI" value="358">
                      (+358)
                    </option>{" "}
                    <option data-countryCode="FR" value="33">
                      (+33)
                    </option>{" "}
                    <option data-countryCode="GF" value="594">
                      (+594)
                    </option>{" "}
                    <option data-countryCode="PF" value="689">
                      (+689)
                    </option>{" "}
                    <option data-countryCode="GA" value="241">
                      (+241)
                    </option>{" "}
                    <option data-countryCode="GM" value="220">
                      (+220)
                    </option>{" "}
                    <option data-countryCode="GE" value="7880">
                      (+7880)
                    </option>{" "}
                    <option data-countryCode="DE" value="49">
                      (+49)
                    </option>{" "}
                    <option data-countryCode="GH" value="233">
                      (+233)
                    </option>{" "}
                    <option data-countryCode="GI" value="350">
                      (+350)
                    </option>{" "}
                    <option data-countryCode="GR" value="30">
                      (+30)
                    </option>{" "}
                    <option data-countryCode="GL" value="299">
                      (+299)
                    </option>{" "}
                    <option data-countryCode="GD" value="1473">
                      (+1473)
                    </option>{" "}
                    <option data-countryCode="GP" value="590">
                      (+590)
                    </option>{" "}
                    <option data-countryCode="GU" value="671">
                      (+671)
                    </option>{" "}
                    <option data-countryCode="GT" value="502">
                      (+502)
                    </option>{" "}
                    <option data-countryCode="GN" value="224">
                      (+224)
                    </option>{" "}
                    <option data-countryCode="GW" value="245">
                      (+245)
                    </option>{" "}
                    <option data-countryCode="GY" value="592">
                      (+592)
                    </option>{" "}
                    <option data-countryCode="HT" value="509">
                      (+509)
                    </option>{" "}
                    <option data-countryCode="HN" value="504">
                      (+504)
                    </option>{" "}
                    <option data-countryCode="HK" value="852">
                      (+852)
                    </option>{" "}
                    <option data-countryCode="HU" value="36">
                      (+36)
                    </option>{" "}
                    <option data-countryCode="IS" value="354">
                      (+354)
                    </option>{" "}
                    <option data-countryCode="IN" value="91">
                      (+91)
                    </option>{" "}
                    <option data-countryCode="ID" value="62">
                      (+62)
                    </option>{" "}
                    <option data-countryCode="IR" value="98">
                      (+98)
                    </option>{" "}
                    <option data-countryCode="IQ" value="964">
                      (+964)
                    </option>{" "}
                    <option data-countryCode="IE" value="353">
                      (+353)
                    </option>{" "}
                    <option data-countryCode="IL" value="972">
                      (+972)
                    </option>{" "}
                    <option data-countryCode="IT" value="39">
                      (+39)
                    </option>{" "}
                    <option data-countryCode="JM" value="1876">
                      (+1876)
                    </option>{" "}
                    <option data-countryCode="JP" value="81">
                      (+81)
                    </option>{" "}
                    <option data-countryCode="JO" value="962">
                      (+962)
                    </option>{" "}
                    <option data-countryCode="KZ" value="7">
                      (+7)
                    </option>{" "}
                    <option data-countryCode="KE" value="254">
                      (+254)
                    </option>{" "}
                    <option data-countryCode="KI" value="686">
                      (+686)
                    </option>{" "}
                    <option data-countryCode="KP" value="850">
                      (+850)
                    </option>{" "}
                    <option data-countryCode="KR" value="82">
                      (+82)
                    </option>{" "}
                    <option data-countryCode="KW" value="965">
                      (+965)
                    </option>{" "}
                    <option data-countryCode="KG" value="996">
                      (+996)
                    </option>{" "}
                    <option data-countryCode="LA" value="856">
                      (+856)
                    </option>{" "}
                    <option data-countryCode="LV" value="371">
                      (+371)
                    </option>{" "}
                    <option data-countryCode="LB" value="961">
                      (+961)
                    </option>{" "}
                    <option data-countryCode="LS" value="266">
                      (+266)
                    </option>{" "}
                    <option data-countryCode="LR" value="231">
                      (+231)
                    </option>{" "}
                    <option data-countryCode="LY" value="218">
                      (+218)
                    </option>{" "}
                    <option data-countryCode="LI" value="417">
                      (+417)
                    </option>{" "}
                    <option data-countryCode="LT" value="370">
                      (+370)
                    </option>{" "}
                    <option data-countryCode="LU" value="352">
                      (+352)
                    </option>{" "}
                    <option data-countryCode="MO" value="853">
                      (+853)
                    </option>{" "}
                    <option data-countryCode="MK" value="389">
                      (+389)
                    </option>{" "}
                    <option data-countryCode="MG" value="261">
                      (+261)
                    </option>{" "}
                    <option data-countryCode="MW" value="265">
                      (+265)
                    </option>{" "}
                    <option data-countryCode="MY" value="60">
                      (+60)
                    </option>{" "}
                    <option data-countryCode="MV" value="960">
                      (+960)
                    </option>{" "}
                    <option data-countryCode="ML" value="223">
                      (+223)
                    </option>{" "}
                    <option data-countryCode="MT" value="356">
                      (+356)
                    </option>{" "}
                    <option data-countryCode="MH" value="692">
                      (+692)
                    </option>{" "}
                    <option data-countryCode="MQ" value="596">
                      (+596)
                    </option>{" "}
                    <option data-countryCode="MR" value="222">
                      (+222)
                    </option>{" "}
                    <option data-countryCode="YT" value="269">
                      (+269)
                    </option>{" "}
                    <option data-countryCode="MX" value="52">
                      (+52)
                    </option>{" "}
                    <option data-countryCode="FM" value="691">
                      (+691)
                    </option>{" "}
                    <option data-countryCode="MD" value="373">
                      (+373)
                    </option>{" "}
                    <option data-countryCode="MC" value="377">
                      (+377)
                    </option>{" "}
                    <option data-countryCode="MN" value="976">
                      (+976)
                    </option>{" "}
                    <option data-countryCode="MS" value="1664">
                      (+1664)
                    </option>{" "}
                    <option data-countryCode="MA" value="212">
                      (+212)
                    </option>{" "}
                    <option data-countryCode="MZ" value="258">
                      (+258)
                    </option>{" "}
                    <option data-countryCode="MN" value="95">
                      (+95)
                    </option>{" "}
                    <option data-countryCode="NA" value="264">
                      (+264)
                    </option>{" "}
                    <option data-countryCode="NR" value="674">
                      (+674)
                    </option>{" "}
                    <option data-countryCode="NP" value="977">
                      (+977)
                    </option>{" "}
                    <option data-countryCode="NL" value="31">
                      (+31)
                    </option>{" "}
                    <option data-countryCode="NC" value="687">
                      (+687)
                    </option>{" "}
                    <option data-countryCode="NZ" value="64">
                      (+64)
                    </option>{" "}
                    <option data-countryCode="NI" value="505">
                      (+505)
                    </option>{" "}
                    <option data-countryCode="NE" value="227">
                      (+227)
                    </option>{" "}
                    <option data-countryCode="NG" value="234">
                      (+234)
                    </option>{" "}
                    <option data-countryCode="NU" value="683">
                      (+683)
                    </option>{" "}
                    <option data-countryCode="NF" value="672">
                      (+672)
                    </option>{" "}
                    <option data-countryCode="NP" value="670">
                      (+670)
                    </option>{" "}
                    <option data-countryCode="NO" value="47">
                      (+47)
                    </option>{" "}
                    <option data-countryCode="OM" value="968">
                      (+968)
                    </option>{" "}
                    <option data-countryCode="PW" value="680">
                      (+680)
                    </option>{" "}
                    <option data-countryCode="PA" value="507">
                      (+507)
                    </option>{" "}
                    <option data-countryCode="PG" value="675">
                      (+675)
                    </option>{" "}
                    <option data-countryCode="PY" value="595">
                      (+595)
                    </option>{" "}
                    <option data-countryCode="PE" value="51">
                      (+51)
                    </option>{" "}
                    <option data-countryCode="PH" value="63">
                      (+63)
                    </option>{" "}
                    <option data-countryCode="PL" value="48">
                      (+48)
                    </option>{" "}
                    <option data-countryCode="PT" value="351">
                      (+351)
                    </option>{" "}
                    <option data-countryCode="PR" value="1787">
                      (+1787)
                    </option>{" "}
                    <option data-countryCode="QA" value="974">
                      (+974)
                    </option>{" "}
                    <option data-countryCode="RE" value="262">
                      (+262)
                    </option>{" "}
                    <option data-countryCode="RO" value="40">
                      (+40)
                    </option>{" "}
                    <option data-countryCode="RU" value="7">
                      (+7)
                    </option>{" "}
                    <option data-countryCode="RW" value="250">
                      (+250)
                    </option>{" "}
                    <option data-countryCode="SM" value="378">
                      (+378)
                    </option>{" "}
                    <option data-countryCode="ST" value="239">
                      (+239)
                    </option>{" "}
                    <option data-countryCode="SA" value="966">
                      (+966)
                    </option>{" "}
                    <option data-countryCode="SN" value="221">
                      (+221)
                    </option>{" "}
                    <option data-countryCode="CS" value="381">
                      (+381)
                    </option>{" "}
                    <option data-countryCode="SC" value="248">
                      (+248)
                    </option>{" "}
                    <option data-countryCode="SL" value="232">
                      (+232)
                    </option>{" "}
                    <option data-countryCode="SG" value="65">
                      (+65)
                    </option>{" "}
                    <option data-countryCode="SK" value="421">
                      (+421)
                    </option>{" "}
                    <option data-countryCode="SI" value="386">
                      (+386)
                    </option>{" "}
                    <option data-countryCode="SB" value="677">
                      (+677)
                    </option>{" "}
                    <option data-countryCode="SO" value="252">
                      (+252)
                    </option>{" "}
                    <option data-countryCode="ZA" value="27">
                      (+27)
                    </option>{" "}
                    <option data-countryCode="ES" value="34">
                      (+34)
                    </option>{" "}
                    <option data-countryCode="LK" value="94">
                      (+94)
                    </option>{" "}
                    <option data-countryCode="SH" value="290">
                      (+290)
                    </option>{" "}
                    <option data-countryCode="KN" value="1869">
                      (+1869)
                    </option>{" "}
                    <option data-countryCode="SC" value="1758">
                      (+1758)
                    </option>{" "}
                    <option data-countryCode="SD" value="249">
                      (+249)
                    </option>{" "}
                    <option data-countryCode="SR" value="597">
                      (+597)
                    </option>{" "}
                    <option data-countryCode="SZ" value="268">
                      (+268)
                    </option>{" "}
                    <option data-countryCode="SE" value="46">
                      (+46)
                    </option>{" "}
                    <option data-countryCode="CH" value="41">
                      (+41)
                    </option>{" "}
                    <option data-countryCode="SI" value="963">
                      (+963)
                    </option>{" "}
                    <option data-countryCode="TW" value="886">
                      (+886)
                    </option>{" "}
                    <option data-countryCode="TJ" value="7">
                      (+7)
                    </option>{" "}
                    <option data-countryCode="TH" value="66">
                      (+66)
                    </option>{" "}
                    <option data-countryCode="TG" value="228">
                      (+228)
                    </option>{" "}
                    <option data-countryCode="TO" value="676">
                      (+676)
                    </option>{" "}
                    <option data-countryCode="TT" value="1868">
                      (+1868)
                    </option>{" "}
                    <option data-countryCode="TN" value="216">
                      (+216)
                    </option>{" "}
                    <option data-countryCode="TR" value="90">
                      (+90)
                    </option>{" "}
                    <option data-countryCode="TM" value="7">
                      (+7)
                    </option>{" "}
                    <option data-countryCode="TM" value="993">
                      (+993)
                    </option>{" "}
                    <option data-countryCode="TC" value="1649">
                      (+1649)
                    </option>{" "}
                    <option data-countryCode="TV" value="688">
                      (+688)
                    </option>{" "}
                    <option data-countryCode="UG" value="256">
                      (+256)
                    </option>{" "}
                    <option data-countryCode="GB" value="44">
                      (+44)
                    </option>{" "}
                    <option data-countryCode="UA" value="380">
                      (+380)
                    </option>{" "}
                    <option data-countryCode="AE" value="971">
                      (+971)
                    </option>{" "}
                    <option data-countryCode="UY" value="598">
                      (+598)
                    </option>{" "}
                    <option data-countryCode="UZ" value="7">
                      (+7)
                    </option>{" "}
                    <option data-countryCode="VU" value="678">
                      (+678)
                    </option>{" "}
                    <option data-countryCode="VA" value="379">
                      (+379)
                    </option>{" "}
                    <option data-countryCode="VE" value="58">
                      (+58)
                    </option>{" "}
                    <option data-countryCode="VN" value="84">
                      (+84)
                    </option>{" "}
                    <option data-countryCode="VG" value="84">
                      (+1284)
                    </option>{" "}
                    <option data-countryCode="VI" value="84">
                      (+1340)
                    </option>{" "}
                    <option data-countryCode="WF" value="681">
                      (+681)
                    </option>{" "}
                    <option data-countryCode="YE" value="969">
                      (+969)
                    </option>{" "}
                    <option data-countryCode="YE" value="967">
                      (+967)
                    </option>{" "}
                    <option data-countryCode="ZM" value="260">
                      (+260)
                    </option>{" "}
                    <option data-countryCode="ZW" value="263">
                      (+263)
                    </option>{" "}
                  </select>

                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    className="form-input half-second"
                    placeholder="Phone Number"
                    autoComplete={"off"}
                    role={"presentation"}
                    onKeyDown={(e) => {
                      // Preventing letters and only allowing numbers in phone number input
                      if (
                        isNaN(String.fromCharCode(e.keyCode)) &&
                        e.keyCode != 8
                      ) {
                        e.preventDefault();
                      }

                      // if (e.currentTarget.value.length == 2) {
                      //   if (e.keyCode == 8) {
                      //     e.preventDefault();
                      //   }
                      // } else {
                      //   return;
                      // }
                    }}
                  />
                </div>
                <div className={`${styles.form_set}`}>
                  <input
                    id="emailAddress"
                    name="emailAddress"
                    type="email"
                    className="form-input half-second"
                    placeholder="Email Address"
                    autoComplete={"off"}
                    role={"presentation"}
                  />
                </div>
              </div>
              <div className={`${styles.form_group} ${styles.single}`}>
                <div className={`${styles.form_set}`}>
                  <input
                    id="messageSubject"
                    name="messageSubject"
                    type="text"
                    className="form-input half-second"
                    placeholder="Reason for Message"
                    autoComplete={"off"}
                    role={"presentation"}
                  />
                </div>
              </div>
              <div className={`${styles.form_group} ${styles.single}`}>
                <div className={`${styles.form_set}`}>
                  <textarea
                    id="message"
                    name="message"
                    className="form-input half-second"
                    placeholder="What is your message?"
                    data-gramm="false"
                    data-gramm_editor="false"
                    data-enable-grammarly="false"
                  />
                </div>
              </div>

              <div className={`${styles.terms_and_cons}`}>
                <input type="checkbox" id="termsAndCons" name="termsAndCons" />

                <label for="termsAndCons">
                  I accept Animex Streaming's terms and conditions.
                </label>
              </div>

              <div className={`${styles.btns}`}>
                <button
                  className={`${styles.submit} half-second`}
                  onClick={(e) => {
                    e.preventDefault();

                    const IS_NON_EMPTY_INPUTS = CheckNonEmptyInputs();
                    const IS_VALID_PHONE_NUMBER = CheckValidPhoneNumber();
                    const IS_VALID_EMAIL_ADDRESS = CheckValidEmailAddress();
                    const IS_VALID_TERMS_AND_CONS = CheckTermsAndCons();

                    if (
                      IS_NON_EMPTY_INPUTS &&
                      IS_VALID_PHONE_NUMBER &&
                      IS_VALID_EMAIL_ADDRESS &&
                      IS_VALID_TERMS_AND_CONS
                    ) {
                      console.log("Valid Form Inputs!!");
                    } else {
                      console.log("Invalid Form Inputs...");
                    }
                  }}
                >
                  <span>SEND</span>
                </button>
                <button
                  type="reset"
                  className={`${styles.reset} half-second`}
                  onClick={() => {
                    // Removing border from invalids
                    document
                      .querySelectorAll(".form-input")
                      .forEach((input) => {
                        input.style.border = "none";
                      });

                    document.getElementById("termsAndCons").checked = false;
                  }}
                >
                  <span>RESET</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
