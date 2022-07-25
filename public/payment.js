const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
button1.addEventListener("click", (e) => {
  if (isEmpty() == true) {
    document.getElementById("first").style.display = "none";
    document.getElementById("second").style.display = "inline";
    document.getElementById("box1").style.background="rgb(22, 201, 22)";
    document.getElementById("circle2").style.background="rgb(22, 201, 22)";
    document.getElementById("circle2").style.height="1rem";
    document.getElementById("circle2").style.width="1rem";

  } else {
    document.getElementById("error").style.display = "inline";
  }
});
button2.addEventListener("click", (e) => {
  if (isEmpty1() == true) {
    document.getElementById("second").style.display = "none";
    document.getElementById("btn").style.display="inline";
    document.getElementById("success").style.display = "inline";
    document.getElementById("flexbox").style.display="none";
  } else {
    document.getElementById("error1").style.display = "inline";
  }
});
function isEmpty() {
  let Name = document.getElementById("name").value;
  let Email = document.getElementById("email").value;
  let Adress = document.getElementById("adress").value;
  let City = document.getElementById("city").value;
  let Pincode = document.getElementById("pincode").value;
  var flag = 0;
  if (
    Name != "" &&
    Email != "" &&
    Adress != "" &&
    City != "" &&
    Pincode != ""
  ) {
    return true;
    // document.getElementById("button1").removeAttribute("disabled");
  }
  if (Name == "") {
    document.getElementById("error").innerHTML = "Name cannot be Empty";
    flag += 1;
  }
  if (Email == "") {
    document.getElementById("error").innerHTML = "Email cannot be Empty";
    flag += 1;
  }
  if (Adress == "") {
    document.getElementById("error").innerHTML = "Adress cannot be Empty";
    flag += 1;
  }
  if (City == "") {
    document.getElementById("error").innerHTML = "City cannot be Empty";
    flag += 1;
  }
  if (Pincode == "") {
    document.getElementById("error").innerHTML = "Pincode cannot be Empty";
    flag += 1;
  }
    if (flag > 1) {
      document.getElementById("error").innerHTML =
        "Two or more fields cannot be Empty";
      return false;
    }
  if (flag == 1) {
    return false;
  }
  
}

function isEmpty1() {
  let cardname = document.getElementById("cardname").value;
  let cardno = document.getElementById("cardno").value;
  let expdate = document.getElementById("expdate").value;
  let cvv = document.getElementById("cvv").value;
  var flag = 0;
  if (cardname != "" && cardno != "" && expdate != "" && cvv != "") {
    // document.getElementById("button2").removeAttribute("disabled");
    return true;
  }
  if (cardname == "") {
    document.getElementById("error1").innerHTML = "Card Name cannot be Empty";
    flag += 1;
  }
  if (cardno == "") {
    document.getElementById("error1").innerHTML = "Card Number cannot be Empty";
    flag += 1;
  }
  if (expdate == "") {
    document.getElementById("error1").innerHTML = "Expiry Date cannot be Empty";
    flag += 1;
  }
  if (cvv == "") {
    document.getElementById("error1").innerHTML = "CVV cannot be Empty";
    flag += 1;
  }
  if (flag > 1) {
    document.getElementById("error1").innerHTML =
      "Two or more fields cannot be Empty";
    return false;
  }
  if (flag == 1) {
    return false;
  }
}
