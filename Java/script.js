var leftHand = "";
var operators = "+-/*=";
var rightHand = "";
var selectedOperator = "";
var result = "";
var equal = "";
var intege = parseFloat(leftHand);
var integer1 = parseFloat(rightHand);
var number = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "+",
  "-",
  "*",
  "/",
];
document.addEventListener("keydown", function (event) {
  let key = event.key;
  if (number.includes(key)) {
    buttonsDown(key);
  } else if (key == "=") {
    // console.log(answerFor)
    answerFor();
  }
});
// document.addEventListener("keydown", function (event) {
//   let key = event.key;

//   if (key == "=" && selectedOperator == "+") {
//     equal = key + intege + integer1;
//     console.log(equa);
//   } else if (key == "=" && selectedOperator == "-") {
//     equal = intege - integer1;
//   } else if (key == "=" && selectedOperator == "*") {
//     equal = intege * integer1;
//   } else if (key == "=" && selectedOperator == "/") {
//     equal = intege / integer1;
//   } else if (key == "=" && selectedOperator == "=") {
//     equal += leftHand;
//   } else result = equal;
//   document.getElementById("childs").innerHTML =
//     leftHand + selectedOperator + rightHand;
//   // console.log(resultFrom);
//   $("#childs").css("font-size", "30px");
//   $("#childs").css("float", "right");
// });

$(".clearAll").click(function deleteFunction() {
  document.querySelector("#demo").innerHTML = "0";
  leftHand = "";
  selectedOperator = "";
  rightHand = "";
  $("#answer").css("font-size", "30px");
  $("#answer").css("float", "right");

  // $("#childs").css("margin-top", "17px");
});

$(".similar").click(function myFunction(el) {
  var value = el.target.value;
  buttonsDown(value);
});
$(".pointss").click(function pointsss(ell) {
  var points = ell.target.value;
  if (rightHand != "" && !rightHand.includes(points)) {
    rightHand += points;
  } else if (rightHand == "" && selectedOperator != "") {
    rightHand += "0.";
  } else if (leftHand == "") {
    leftHand += "0.";
  } else if (leftHand != "" && !leftHand.includes(points)) {
    leftHand += points;
  }

  document.getElementById("answer").innerHTML =
    leftHand + selectedOperator + rightHand;
  $("#answer").css("font-size", "30px");
  $("#answer").css("float", "right");
  // $("#childs").css("margin-top", "17px");
});
$(".back").click(function backOne() {
  if (rightHand != "") {
    rightHand = rightHand.substring(0, rightHand.length - 1);
  } else if (selectedOperator != "") {
    selectedOperator = selectedOperator.substring(
      0,
      selectedOperator.length - 1
    );
  } else {
    if (leftHand != "") leftHand = leftHand.substring(0, leftHand.length - 1);
  }

  document.getElementById("answer").innerHTML =
    leftHand + selectedOperator + rightHand;

  $("#answer").css("font-size", "30px");
  $("#answer").css("float", "right");
  // $("#childs").css("margin-top", "17px");
});

$(".equalTo").on("click", answerFor);

function buttonsDown(value) {
  if (operators.includes(value)) {
    selectedOperator = value;

    if (leftHand == "" && result == "") {
      leftHand = "0";
    } else if (result != "" && leftHand == "") {
      leftHand += result;
      result = "";
    }
  } else if (selectedOperator == "") {
    leftHand += value;
  } else {
    rightHand += value;
  }

  document.getElementById("answer").innerHTML =
    leftHand + selectedOperator + rightHand;
  $("#answer").css("font-size", "30px");
  $("#answer").css("float", "right");
  // $("#childs").css("margin-top", "17px");
}
function answerFor() {
  // var equal = document.getElementsByClassName("result").value;
  var intege = parseFloat(leftHand);
  var integer1 = parseFloat(rightHand);
  if (selectedOperator == "+") {
    equal = intege + integer1;
  } else if (selectedOperator == "-") {
    equal = intege - integer1;
  } else if (selectedOperator == "*") {
    equal = intege * integer1;
  } else if (selectedOperator == "/") {
    equal = intege / integer1;
  } else if (selectedOperator == "=") {
    equal += leftHand;
  }
  result = equal;

  document.getElementById("childs").innerHTML = equal;
  leftHand = "";
  selectedOperator = "";
  rightHand = "";
  $("#childs").css("font-size", "30px");
  $("#childs").css("float", "right");
  $("#childs").css("margin-top", "40px");
}
