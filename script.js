var leftHand = "";
var operators = "+-/*=";
var rightHand = "";
var selectedOperator = "";
$(".clearAll").click(function deleteFunction() {
  document.getElementById("childs").innerHTML = "0";
  leftHand = "";
  selectedOperator = "";
  rightHand = "";
  $("#childs").css("font-size", "30px");
  $("#childs").css("float", "right");
  $("#childs").css("margin-top", "17px");
});

$(".similar").click(function myFunction(el) {
  var value = el.target.value;
  if (operators.includes(value)) {
    selectedOperator = value;
    if (leftHand == "") {
      leftHand = "0";
    }
  } else if (selectedOperator == "") {
    leftHand += value;
  } else {
    rightHand += value;
  }
  document.getElementById("childs").innerHTML =
    leftHand + selectedOperator + rightHand;
  $("#childs").css("font-size", "30px");
  $("#childs").css("float", "right");
  $("#childs").css("margin-top", "17px");
});
$(".pointss").click(function pointsss(ell) {
  var points = ell.target.value;

  if (leftHand.includes(points) || rightHand.includes(points)) {
    points = "";
  }

  document.getElementById("childs").innerHTML = ell.target.value;
  //  $("#childs").css("font-size", "30px");
  // $("#childs").css("float", "right");
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

  document.getElementById("childs").innerHTML =
    leftHand + selectedOperator + rightHand;

  $("#childs").css("font-size", "30px");
  $("#childs").css("float", "right");
  $("#childs").css("margin-top", "17px");
});

$(".equalTo").click(function answerFor() {
  var equal = document.getElementsByClassName("result").value;
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
  } else if (leftHand == "") {
    equal = "0";
  } else leftHand = "";

  document.getElementById("childs").innerHTML = equal;
  leftHand = "";
  selectedOperator = "";
  rightHand = "";
  $("#childs").css("font-size", "30px");
  $("#childs").css("float", "right");
  $("#childs").css("margin-top", "17px");
});
