console.log("connected");
const personName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const submit = document.getElementById("submit");
let validUser = false;
let validEmail = false;
let validPhone = false;

// console.log(name, email, phone);

personName.addEventListener("blur", () => {
  console.log("name is blured");
  let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
  let str = personName.value;
  console.log(str);
  console.log(regex, str);
  // console.log(str.match(regex));
  if (regex.test(str)) {
    console.log("it is matched");
    validUser = true;
    personName.classList.remove("is-invalid");
  } else {
    console.log("not matched");
    validUser = false;
    personName.classList.add("is-invalid");
  }
});

email.addEventListener("blur", () => {
  console.log("email is blured");
  let regex = /^\w{2,20}@\w{2,20}\.\w{3,5}$/g;
  let str = email.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("it is matched");
    validEmail = true;
    email.classList.remove("is-invalid");
  } else {
    console.log("not matched");
    validEmail = false;
    email.classList.add("is-invalid");
  }
});

phone.addEventListener("blur", () => {
  console.log("phone is blured");
  let regex = /^([0-9]){10}$/;
  let str = phone.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("it is matched");
    validPhone = true;
    phone.classList.remove("is-invalid");
  } else {
    console.log("not matched");
    validPhone = false;
    phone.classList.add("is-invalid");
  }
});
function resetInput() {
  personName.value = "";
  email.value = "";
  phone.value = "";
}
submit.addEventListener("click", (evt) => {
  evt.preventDefault();
  resetInput();
  console.log("you clicked the submit button");
  if (validUser && validEmail && validPhone) {
    console.log("sumbmitting the form");
    let success = document.getElementById("success");
    success.classList.add("show");
    failure.classList.remove("show");
  } else {
    console.log("one of them is not correct please check!!!");
    let failure = document.getElementById("failure");
    failure.classList.add("show");
    success.classList.remove("show");
  }
});
