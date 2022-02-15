// this is for total price
function getTotalPrice() {
  const memoryCost = document.getElementById("memory-cost");
  const bestPrice = document.getElementById("best-price");
  const totalPriceInput = document.getElementById("total-price");
  const storageCost = document.getElementById("storage-cost");
  const deliveryCost = document.getElementById("delivery-cost");

  const totalPrice =
    parseFloat(memoryCost.innerText) +
    parseFloat(bestPrice.innerText) +
    parseFloat(storageCost.innerText) +
    parseFloat(deliveryCost.innerText);
  totalPriceInput.innerText = totalPrice;

  const usePromoCode = totalPrice - totalPrice / 10;
  return usePromoCode;
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
// this is for paid delivery
document.getElementById("paid-delivery").addEventListener("click", function () {
  getDeliveryCost(20);
  getTotalPrice();
});

// this is for reset all price and remove promo code message
document.getElementById("reset-btn").addEventListener("click", function () {
  document.getElementById("memory-cost").innerText = 0;
  document.getElementById("total-price").innerText = 1299;
  document.getElementById("storage-cost").innerText = 0;
  document.getElementById("delivery-cost").innerText = 0;
  document.getElementById("not-match").style.display = "none";
  document.getElementById("applied-text").style.display = "none";
});
// verifying promo code
function matchPromoCode() {
  const promoCodeFeild = document.getElementById("promo-input");
  const inputPromoCode = parseInt(promoCodeFeild.value);
  if (inputPromoCode == 1251) {
    const usePromoCode = getTotalPrice();
    document.getElementById("total-price").innerText = usePromoCode;
    document.getElementById("applied-text").style.display = "block";
    document.getElementById("not-match").style.display = "none";
    promoCodeFeild.value = "";
  } else {
    document.getElementById("not-match").style.display = "block";
    document.getElementById("applied-text").style.display = "none";
    promoCodeFeild.value = "";
  }
}
// apply promo code
document.getElementById("apply-btn").addEventListener("click", function () {
  matchPromoCode();
});
