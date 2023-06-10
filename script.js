// plus btn first class
var addFclass = document.getElementById('addFclass');
addFclass.addEventListener('click', function () {
  updateTicket('firstclass-input', 1);
  updateSubtotal('currentSubtotal', 150);
  taxCalculate();
  totalCalculate();
});

// minus btn first class
var minusFclass = document.getElementById('minusFclass');
minusFclass.addEventListener('click', function () {
  updateTicket('firstclass-input', -1);
  updateSubtotal('currentSubtotal', -150);
  taxCalculate();
  totalCalculate();
});

// add eco class
var addEclass = document.getElementById('addEclass');
addEclass.addEventListener('click', function () {
  updateTicket('ecoClass-input', 1);
  updateSubtotal('currentSubtotal', 100);
  taxCalculate();
  totalCalculate();
});
// minus eco class
var minusEclass = document.getElementById('minusEclass');
minusEclass.addEventListener('click', function () {
  updateTicket('ecoClass-input', -1);
  updateSubtotal('currentSubtotal', -100);
  taxCalculate();
  totalCalculate();
});

// common function
function updateTicket(id, value) {
  var currentInput = document.getElementById(id).value;
  var inputNum = parseFloat(currentInput);
  var newInput = inputNum + value;
  if (newInput >= 0) {
    document.getElementById(id).value = newInput;
  }
}

function updateSubtotal(id, ticketPrice) {
  var subtotalNum = floatInnerText('currentSubtotal');
  var subtotal = subtotalNum + ticketPrice;
  if (subtotal >= 0) {
    document.getElementById('currentSubtotal').innerText = subtotal;
  }
}

function taxCalculate() {
  var subtotalNum = floatInnerText('currentSubtotal');
  var totalTax = subtotalNum * 0.1;
  document.getElementById('currentTax').innerText = totalTax;
}

function totalCalculate() {
  var subtotalNum = floatInnerText('currentSubtotal');
  var taxNum = floatInnerText('currentTax');
  var total = subtotalNum + taxNum;
  document.getElementById('currentTotal').innerText = total;
}

function floatInnerText(id) {
  var text = document.getElementById(id).innerText;
  var num = parseFloat(text);
  return num;
}
