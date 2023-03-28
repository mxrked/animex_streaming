/**
 *
 *  This is used to check specific inputs and if they are valid
 *
 */

// Checks if an input is empty or null
function CheckForEmptyInput(input) {
  if (input.value !== null && input.value !== "") {
    return true;
  } else {
    return false;
  }
}

// Adding/removing red border over invalid inputs
function StyleInvalidInput(input) {
  if (!CheckForEmptyInput(input)) {
    input.style.border = "1px solid red";
  } else {
    input.style.border = "none";
  }
}

// This checks if any of the inputs are empty
function CheckNonEmptyInputs() {
  const FN = document.getElementById("firstName");
  const LN = document.getElementById("lastName");
  const PHONE_NUMBER = document.getElementById("phoneNumber");
  const EMAIL_ADDRESS = document.getElementById("emailAddress");
  const SUBJECT = document.getElementById("messageSubject");
  const MESSAGE = document.getElementById("message");

  let nonEmptyInputs = false;

  // Checking if all inputs have something in it
  if (
    CheckForEmptyInput(FN) &&
    CheckForEmptyInput(LN) &&
    CheckForEmptyInput(PHONE_NUMBER) &&
    CheckForEmptyInput(EMAIL_ADDRESS) &&
    CheckForEmptyInput(SUBJECT) &&
    CheckForEmptyInput(MESSAGE)
  ) {
    nonEmptyInputs = true;

    console.log("Non empty inputs: " + nonEmptyInputs);
  } else {
    nonEmptyInputs = false;

    console.log("Non empty inputs: " + nonEmptyInputs);
  }

  // Adding a red border over invalid inputs
  StyleInvalidInput(FN);
  StyleInvalidInput(LN);
  StyleInvalidInput(PHONE_NUMBER);
  StyleInvalidInput(EMAIL_ADDRESS);
  StyleInvalidInput(SUBJECT);
  StyleInvalidInput(MESSAGE);

  return nonEmptyInputs;
}

// This checks if the phone number is valid
function CheckValidPhoneNumber() {
  let validPhoneNumber = false;

  var phoneRegex =
    /(\+|00)(297|93|244|1264|358|355|376|971|54|374|1684|1268|61|43|994|257|32|229|226|880|359|973|1242|387|590|375|501|1441|591|55|1246|673|975|267|236|1|61|41|56|86|225|237|243|242|682|57|269|238|506|53|5999|61|1345|357|420|49|253|1767|45|1809|1829|1849|213|593|20|291|212|34|372|251|358|679|500|33|298|691|241|44|995|44|233|350|224|590|220|245|240|30|1473|299|502|594|1671|592|852|504|385|509|36|62|44|91|246|353|98|964|354|972|39|1876|44|962|81|76|77|254|996|855|686|1869|82|383|965|856|961|231|218|1758|423|94|266|370|352|371|853|590|212|377|373|261|960|52|692|389|223|356|95|382|976|1670|258|222|1664|596|230|265|60|262|264|687|227|672|234|505|683|31|47|977|674|64|968|92|507|64|51|63|680|675|48|1787|1939|850|351|595|970|689|974|262|40|7|250|966|249|221|65|500|4779|677|232|503|378|252|508|381|211|239|597|421|386|46|268|1721|248|963|1649|235|228|66|992|690|993|670|676|1868|216|90|688|886|255|256|380|598|1|998|3906698|379|1784|58|1284|1340|84|678|681|685|967|27|260|263)(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{4,20}$/;

  const REMOVE_PHONE_SPACES = document
    .getElementById("phoneNumber")
    .value.replace(/\s/g, ""); // This removes the spaces
  const REMOVE_PHONE_MINUSES = REMOVE_PHONE_SPACES.replace(/\-/g, ""); // This removes the minuses

  // Finalizing the phone value
  const CLEAN_PHONE = REMOVE_PHONE_MINUSES.replace(/\(/g, "");
  const CLEANER_PHONE = CLEAN_PHONE.replace(/\)/g, "");

  const FINAL_PHONE =
    "+" + sessionStorage.getItem("Country Code") + CLEANER_PHONE;

  if (FINAL_PHONE.match(phoneRegex)) {
    if (
      FINAL_PHONE.length == 12 ||
      FINAL_PHONE.length == 14 ||
      (FINAL_PHONE.length == 15 &&
        document.getElementById("phoneNumber").value.length == 10)
    ) {
      validPhoneNumber = true;
      console.log("Valid Phone Number: " + validPhoneNumber);

      return validPhoneNumber;
    } else {
      validPhoneNumber = false;
      console.log("Valid Phone Number: " + validPhoneNumber);

      return validPhoneNumber;
    }
  } else {
    validPhoneNumber = false;
    console.log("Valid Phone Number: " + validPhoneNumber);

    return validPhoneNumber;
  }
}

// This checks if the email address is valid
function CheckValidEmailAddress() {
  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  let validEmailAddress = false;

  if (document.getElementById("emailAddress").value.match(EMAIL_REGEX)) {
    validEmailAddress = true;
    console.log("Valid Email: " + validEmailAddress);

    return validEmailAddress;
  } else {
    validEmailAddress = false;
    console.log("Valid Email: " + validEmailAddress);

    return validEmailAddress;
  }
}

// This checks if the terms and cons are checked
function CheckTermsAndCons() {
  const TERMS_AND_CONS = document.getElementById("termsAndCons");

  let validTermsAndCons = false;

  if (TERMS_AND_CONS.checked) {
    validTermsAndCons = true;
    console.log("Valid Terms and Cons: " + validTermsAndCons);

    return validTermsAndCons;
  } else {
    validTermsAndCons = false;

    console.log("Valid Terms and Cons: " + validTermsAndCons);

    return validTermsAndCons;
  }
}

export {
  CheckNonEmptyInputs,
  CheckValidPhoneNumber,
  CheckValidEmailAddress,
  CheckTermsAndCons,
};
