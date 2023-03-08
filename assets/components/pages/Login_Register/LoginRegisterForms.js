/**
 *
 *  This is the login register page forms
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import CryptoAES from "crypto-js/aes";

import ExitAndRoute from "@/assets/functions/routing/ExitAndRoute";
import RemoveStorageVariable from "@/assets/functions/data/storage/RemoveStorageVariable";
import DeclareStorageVariable from "@/assets/functions/data/storage/DeclareStorageVariable";

import styles from "../../../styles/modules/Login_Register/Login_Register.module.css";

const ValidateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function CheckRegisterFormInputs() {
  let completedFields,
    samePassword,
    validEmail = false;

  let passed;

  const REGISTER_INPUTS = document.querySelectorAll(".register-input");

  REGISTER_INPUTS.forEach((input) => {
    // Checking if fields are completed and not empty
    if (input.value == null || input.value == "") {
      completedFields = false;

      input.style.borderColor = "red";
    }

    if (input.value !== null && input.value !== "") {
      completedFields = true;

      input.style.borderColor = "#fafafa";
    }
  });

  // Checking if both password inputs are the same
  if (REGISTER_INPUTS[2].value == REGISTER_INPUTS[3].value) {
    if (
      REGISTER_INPUTS[2].value !== null &&
      REGISTER_INPUTS[2].value !== "" &&
      REGISTER_INPUTS[3].value !== null &&
      REGISTER_INPUTS[3].value !== ""
    ) {
      samePassword = true;

      REGISTER_INPUTS[2].style.borderColor = "#fafafa";
      REGISTER_INPUTS[3].style.borderColor = "#fafafa";
    }
  }

  if (REGISTER_INPUTS[2].value !== REGISTER_INPUTS[3].value) {
    samePassword = false;

    REGISTER_INPUTS[2].style.borderColor = "red";
    REGISTER_INPUTS[3].style.borderColor = "red";
  }

  // Checking if the email input value is valid
  if (ValidateEmail(REGISTER_INPUTS[1].value)) {
    validEmail = true;

    REGISTER_INPUTS[1].style.borderColor = "#fafafa";
  } else {
    validEmail = false;

    REGISTER_INPUTS[1].style.borderColor = "red";
  }

  // Checking if all things are true
  if (completedFields && samePassword && validEmail) {
    passed = true;

    REGISTER_INPUTS.forEach((input) => {
      input.style.borderColor = "green";
    });
  } else {
    passed = false;
  }

  return passed;
}

function CheckingLoginFormInputs() {
  let completedFields = false;
  let passed;
  const LOGIN_INPUTS = document.querySelectorAll(".login-input");

  LOGIN_INPUTS.forEach((input) => {
    if (input.value == null || input.value == "") {
      completedFields = false;

      input.style.borderColor = "red";
    }

    if (input.value !== null && input.value !== "") {
      completedFields = true;

      input.style.borderColor = "#fafafa";
    }
  });

  if (completedFields) {
    passed = true;

    LOGIN_INPUTS.forEach((input) => {
      input.style.borderColor = "green";
    });
  } else {
    passed = false;
  }

  return passed;
}

export const LoginRegisterForms = () => {
  const router = useRouter();

  // Checkers
  let indexRouted = false;

  // Removing error HASHES and storage variables after load
  useEffect(() => {
    if (
      window.location.hostname == "localhost" ||
      window.location.hostname == "127.0.0.1"
    ) {
      if (router.asPath.indexOf("LOGIN_ERROR") > -1) {
        history.pushState("", "", window.location.pathname);

        RemoveStorageVariable("local", "Logged In");
        RemoveStorageVariable("local", "Username");
        RemoveStorageVariable("local", "E_Email");
        RemoveStorageVariable("local", "E_Password");
      }

      if (router.asPath.indexOf("REGISTER_ERROR") > -1) {
        history.pushState("", "", window.location.pathname);

        RemoveStorageVariable("local", "Logged In");
        RemoveStorageVariable("local", "Username");
        RemoveStorageVariable("local", "E_Email");
        RemoveStorageVariable("local", "E_Password");
      }
    }
  }, []);

  // Redirects user after logging in and prevents user from having a undefined account username
  useEffect(() => {
    if (
      window.location.hostname == "localhost" ||
      window.location.hostname == "127.0.0.1"
    ) {
      if (localStorage.getItem("Logged In")) {
        if (
          localStorage.getItem("Username") !== "undefined" &&
          localStorage.getItem("Username")
        ) {
          router.push("/");
        }
      }
    }
  }, []);

  // Clearing encrypted data
  useEffect(() => {
    if (router.asPath.indexOf("/login_register/#REGISTER_ERROR") > -1) {
      RemoveStorageVariable("local", "E_Email");
      RemoveStorageVariable("local", "E_Password");
    }
    if (router.asPath.indexOf("/login_register/#LOGIN_ERROR") > -1) {
      RemoveStorageVariable("local", "E_Email");
      RemoveStorageVariable("local", "E_Password");
    }
  }, []);

  // Display Error based on url
  useEffect(() => {
    // Register Error
    if (router.asPath.indexOf("#REGISTER_ERROR") > -1) {
      document.querySelectorAll(".error")[0].style.opacity = 1;
      document.querySelectorAll(".error")[0].style.visibility = "visible";
    }

    // Login Error
    if (router.asPath.indexOf("#LOGIN_ERROR") > -1) {
      document.querySelectorAll(".error")[1].style.opacity = 1;
      document.querySelectorAll(".error")[1].style.visibility = "visible";
    }
  }, []);

  return (
    <div className={`${styles.login_register_forms}`}>
      <span className={`${styles.register_error} error`}>
        <span>ERROR:</span> That account/user already exists.
      </span>

      <span className={`${styles.form_heading}`}>Register/Create</span>

      <div className={`${styles.form_holder}`}>
        <form
          id="registerForm"
          noValidate
          className={`${styles.form} ${styles.register_form}`}
          method="POST"
          onSubmit={(e) => {
            // Makes it so the user gets routed to a different place based on their enviroment
            if (
              window.location.hostname == "localhost" ||
              window.location.hostname == "127.0.0.1"
            ) {
              let passed = CheckRegisterFormInputs(); // This is used to check if the form will submit

              if (passed) {
                e.currentTarget.action = "/api/registerUser";
              }

              if (!passed) {
                e.preventDefault();
              }
            } else {
              ExitAndRoute(router, "/", indexRouted);
            }
          }}
        >
          <div className={`${styles.form_group}`}>
            <div className={`${styles.form_set}`}>
              <input
                name="username"
                id="registerUsername"
                type="text"
                className="register-input half-second"
                placeholder="Create Username"
                autoComplete="off"
                onKeyUp={(e) => {
                  e.currentTarget.style.borderColor = "#fafafa";
                }}
              />
            </div>
          </div>
          <div className={`${styles.form_group}`}>
            <div className={`${styles.form_set}`}>
              <input
                name="email"
                id="registerEmail"
                type="email"
                className="register-input half-second"
                placeholder="Create Email Address"
                autoComplete="off"
                onKeyUp={(e) => {
                  e.currentTarget.style.borderColor = "#fafafa";
                }}
              />
            </div>
          </div>
          <div className={`${styles.form_group} ${styles.double_group}`}>
            <div className={`${styles.form_set}`}>
              <input
                name="password"
                id="registerPassword"
                type="password"
                className="register-input half-second"
                placeholder="Create Password"
                autoComplete="off"
                onKeyUp={(e) => {
                  e.currentTarget.style.borderColor = "#fafafa";
                }}
              />
            </div>
            <div className={`${styles.form_set}`}>
              <input
                name="confirmPassword"
                id="registerConfirmPassword"
                type="password"
                className="register-input half-second"
                placeholder="Confirm Password"
                autoComplete="off"
                onKeyUp={(e) => {
                  e.currentTarget.style.borderColor = "#fafafa";
                }}
              />
            </div>
          </div>

          <div className={`${styles.btns}`}>
            <button type="submit" className={`${styles.submit} half-second`}>
              <span>CREATE</span>
            </button>
            <button
              type="reset"
              onClick={() => {
                document
                  .querySelectorAll(".register-input")
                  .forEach((input) => {
                    input.style.borderColor = "#fafafa";
                  });
              }}
              className={`${styles.reset} half-second`}
            >
              <span>RESET</span>
            </button>
          </div>
        </form>
      </div>

      <span className={`${styles.login_error} error`}>
        <span>ERROR:</span> That account/user does not exist.
      </span>
      <span className={`${styles.form_heading}`}>Account Login</span>
      <div className={`${styles.form_holder}`}>
        <form
          id="registerForm"
          noValidate
          className={`${styles.form} ${styles.register_form}`}
          method="POST"
          onSubmit={(e) => {
            // Makes it so the user gets routed to a different place based on their enviroment
            if (
              window.location.hostname == "localhost" ||
              window.location.hostname == "127.0.0.1"
            ) {
              let passed = CheckingLoginFormInputs(); // This is used to check if the form will submit

              if (passed) {
                // Encrypting values for later use
                const ENCRYPTED_EMAIL = CryptoAES.encrypt(
                  document.getElementById("loginEmail").value,
                  "secret key 123"
                );
                const ENCRYPTED_PASSWORD = CryptoAES.encrypt(
                  document.getElementById("loginPassword").value,
                  "secret key 123"
                );

                // Removing storage variables
                RemoveStorageVariable("local", "Logged In");
                RemoveStorageVariable("local", "Username");
                RemoveStorageVariable("local", "E_Email");
                RemoveStorageVariable("local", "E_Password");

                // Declaring storage variables
                DeclareStorageVariable("local", "Logged In", true); // This marks that the user has logged in

                DeclareStorageVariable("local", "E_Email", ENCRYPTED_EMAIL);
                DeclareStorageVariable(
                  "local",
                  "E_Password",
                  ENCRYPTED_PASSWORD
                );

                e.currentTarget.action = "/api/loginUser";
              }

              if (!passed) {
                e.preventDefault();
              }
            } else {
              ExitAndRoute(router, "/", indexRouted);
            }
          }}
        >
          <div className={`${styles.form_group}`}>
            <div className={`${styles.form_set}`}>
              <input
                name="username"
                id="loginUsername"
                type="text"
                className="login-input half-second"
                placeholder="Enter Username"
                autoComplete="off"
                onKeyUp={(e) => {
                  e.currentTarget.style.borderColor = "#fafafa";
                }}
              />
            </div>
          </div>
          <div className={`${styles.form_group}`}>
            <div className={`${styles.form_set}`}>
              <input
                name="email"
                id="loginEmail"
                type="email"
                className="login-input half-second"
                placeholder="Enter Email Address"
                autoComplete="off"
                onKeyUp={(e) => {
                  e.currentTarget.style.borderColor = "#fafafa";
                }}
              />
            </div>
          </div>
          <div className={`${styles.form_group}`}>
            <div className={`${styles.form_set}`}>
              <input
                name="password"
                id="loginPassword"
                type="password"
                className="login-input half-second"
                placeholder="Enter Password"
                autoComplete="off"
                onKeyUp={(e) => {
                  e.currentTarget.style.borderColor = "#fafafa";
                }}
              />
            </div>
          </div>

          <div className={`${styles.btns}`}>
            <button type="submit" className={`${styles.submit} half-second`}>
              <span>CREATE</span>
            </button>
            <button
              type="reset"
              onClick={() => {
                document.querySelectorAll(".login-input").forEach((input) => {
                  input.style.borderColor = "#fafafa";
                });
              }}
              className={`${styles.reset} half-second`}
            >
              <span>RESET</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
