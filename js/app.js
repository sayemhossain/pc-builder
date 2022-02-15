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

// this is common function for stroge cost
function totalStorageCost(price) {
  const storageCostInput = document.getElementById("storage-cost");
  storageCostInput.innerText = price;
}
// this is for 256GB
document.getElementById("ssd1").addEventListener("click", function () {
  totalStorageCost(500);
  getTotalPrice();
});
// this is for 512GB
document.getElementById("ssd2").addEventListener("click", function () {
  totalStorageCost(700);
  getTotalPrice();
});
// this is for 1TB
document.getElementById("ssd3").addEventListener("click", function () {
  totalStorageCost(900);
  getTotalPrice();
});
// this code is for total delivery cost
function getDeliveryCost(cost) {
  const deliveryCost = document.getElementById("delivery-cost");
  deliveryCost.innerText = cost;
}
// this is for free delivery
document.getElementById("free-delivery").addEventListener("click", function () {
  getDeliveryCost(0);
  getTotalPrice();
});
// this is paid delivery
document.getElementById("paid-delivery").addEventListener("click", function () {
  getDeliveryCost(20);
  getTotalPrice();
});

document.getElementById("reset-btn").addEventListener("click", function () {
  document.getElementById("memory-cost").innerText = 0;
  document.getElementById("total-price").innerText = 0;
  document.getElementById("storage-cost").innerText = 0;
  document.getElementById("delivery-cost").innerText = 0;
});
