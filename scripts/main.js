let form = document.querySelector("form");
let cardHolder = document.getElementById("card-holder");
let cardID = document.getElementById("card-number");
let dateMM = document.getElementById("card-month");
let dateYY = document.getElementById("card-year");
let cvc = document.getElementById("cvc");
let cardNumber = document.getElementById("card-number-txt");
let cardH = document.getElementById("cardholder-name");
let cdateMM = document.querySelector(".exp-date-MM");
let cdateYY = document.querySelector(".exp-date-YY");
let cvcNumber = document.getElementById("cvc-number");
let button = document.getElementById("submit-btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

cardHolder.addEventListener("keyup", (e) => {
  if (cardHolder.value.length === 0) {
    cardH.innerHTML = "Jane Appleseed";
  } else {
    cardH.innerHTML = "";
    cardH.innerHTML = cardHolder.value;
  }
});

dateMM.addEventListener("keyup", (e) => {
  if (dateMM.value.length === 0 || dateMM.value > 12) {
    cdateMM.innerHTML = "00";
    dateMM.value = "";
  } else {
    cdateMM.innerHTML = "";
    cdateMM.innerHTML = dateMM.value;
  }
});

dateYY.addEventListener("keyup", (e) => {
  if (dateYY.value.length === 0) {
    cdateYY.innerHTML = "00";
  } else {
    cdateYY.innerHTML = "";
    cdateYY.innerHTML = dateYY.value;
  }
});

cvc.addEventListener("keyup", (e) => {
  if (cvc.value.length === 0) {
    cvcNumber.innerHTML = "000";
  } else {
    cvcNumber.innerHTML = "";
    cvcNumber.innerHTML = cvc.value;
  }
});

cardID.addEventListener("keyup", (e) => {
  if (cardID.value.length === 0) {
    cardNumber.innerHTML = "0000 0000 0000 0000";
  } else {
    cardNumber.innerHTML = "";
    cardNumber.innerHTML = cardID.value;
  }
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerHTML = message;

  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerHTML = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const validateInputs = () => {
  const cardHolderValue = cardHolder.value.trim();
  const cardIDValue = cardID.value.trim();
  const dateMMValue = dateMM.value.trim();
  const dateYYValue = dateYY.value.trim();
  const cvcValue = cvc.value.trim();

  if (cardHolderValue === "") {
    setError(cardHolder, "Username is required");
  } else if (cardHolderValue.length <= 10) {
    setError(cardHolder, "Cardholder must be at least 10 character");
  } else {
    setSuccess(cardHolder);
  }
  if (cardIDValue === "") {
    setError(cardID, "Card ID is required");
  } else if (cardIDValue.length <= 16) {
    setError(cardID, "CardID must be at least 16 digits");
  } else {
    setSuccess(cardID);
  }
  if (cvcValue === "") {
    setError(cvc, "CVC is required");
  } else if (cvcValue.length < 3) {
    setError(cvc, "CVC must be at least 3 digits");
  } else {
    setSuccess(cvc);
  }
  if (dateMMValue === "" || dateYYValue === "") {
    setError(dateMM, "Cant't be blank");
    setError(dateYY, "Cant't be blank");
  } else if (dateMMValue.length < 2 || dateYYValue.length < 2) {
    setError(dateMM, "date must be at least 2 digits");
    setError(dateYY, "date must be at least 2 digits");
  } else {
    setSuccess(dateMM);
    setSuccess(dateYY);
  }
};

function formats(ele, e) {
  if (ele.value.length < 19) {
    ele.value = ele.value.replace(/\W/gi, "").replace(/(.{4})/g, "$1 ");
    console.log(ele.value);
    // return true;
  } else {
    return false;
  }
}

function numberValidation(e) {
  e.target.value = e.target.value.replace(/[^\d ]/g, "");
  return false;
}
