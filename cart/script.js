let numberinput = document.getElementById("number");
let priceinput = document.getElementById("price");

let numbervalue = numberinput.value;
let pricevalue = priceinput.textContent;

// let number_value = JSON.parse(numbervalue);
let price_value = JSON.parse(pricevalue);

function inputKeydown(params) {
  if (event.key === "Enter") {
    CalculateTotal();
  }
}
