// this is for total price
function getTotalPrice(memoryCost) {
  const bestPrice = document.getElementById("best-price");
  const totalPrice = document.getElementById("total-price");
  totalPrice.innerText =
    parseFloat(memoryCost.innerText) + parseFloat(bestPrice.innerText);
}
// this is common function for memory cost
function totalMemoryCost(checkMemory) {
  const memoryCost = document.getElementById("memory-cost");
  if (checkMemory == true) {
    memoryCost.innerText = 200;
    getTotalPrice(memoryCost);
  } else {
    memoryCost.innerText = 400;
    getTotalPrice(memoryCost);
  }
}
// this code for 8GB memory
document.getElementById("eightGB").addEventListener("click", function () {
  totalMemoryCost(true);
});
// this code for 16GB memory
document.getElementById("sixteenGB").addEventListener("click", function () {
  totalMemoryCost(false);
});
