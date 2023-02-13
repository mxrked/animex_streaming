/**
 *
 *  This is used to signup the user and store the info into the db
 *
 */

import mongoose from "mongoose";

import { connection } from "../../lib/connection";

import Account from "../../lib/schema";

export default async function handler(req, res) {
  connection();

  try {
    await Account.create(req.body);
    res.redirect("/login_signup");
  } catch (error) {
    res.redirect("/login_signup#SIGNUP_ERROR");
  }
}
