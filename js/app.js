// this is for total price
function getTotalPrice() {
  const memoryCost = document.getElementById("memory-cost");
  const bestPrice = document.getElementById("best-price");
  const totalPrice = document.getElementById("total-price");
  const storageCost = document.getElementById("storage-cost");
  const deliveryCost = document.getElementById("delivery-cost");

  totalPrice.innerText =
    parseFloat(memoryCost.innerText) +
    parseFloat(bestPrice.innerText) +
    parseFloat(storageCost.innerText) +
    parseFloat(deliveryCost.innerText);
}
// this is common function for memory cost
function totalMemoryCost(checkMemory) {
  const memoryCost = document.getElementById("memory-cost");
  if (checkMemory == true) {
    memoryCost.innerText = 200;
    getTotalPrice(memoryCost);
  } else {
    memoryCost.innerText = 400;
    getTotalPrice();
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

function totalStorageCost(price) {
  const storageCostInput = document.getElementById("storage-cost");
  storageCostInput.innerText = price;
}

document.getElementById("ssd1").addEventListener("click", function () {
  totalStorageCost(500);
  getTotalPrice();
});
document.getElementById("ssd2").addEventListener("click", function () {
  totalStorageCost(700);
  getTotalPrice();
});
document.getElementById("ssd3").addEventListener("click", function () {
  totalStorageCost(900);
  getTotalPrice();
});
