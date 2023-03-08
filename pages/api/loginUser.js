/**
 *
 *  This is used to login the user with the databases info
 *
 */

import mongoose from "mongoose";

import { connection } from "../../lib/connection";

import Account from "../../lib/schema";

export default async function handler(req, res) {
  connection();

  const { username, password, email } = req.body;
  const user = await Account.findOne({ username, password, email });

  if (!user) {
    res.redirect("/login_register#LOGIN_ERROR");
    res.redirect("/login_register");
  } else {
    res.redirect("/login_register#succesful_login/#" + username); // Made it route back to the login page to prevent null error
  }
}
