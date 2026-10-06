const menu = document.getElementById("menu");
const qty = document.getElementById("qty");
const spicy = document.getElementById("spicy");
const payment = document.getElementById("payment");

const cartCount = document.getElementById("cartCount");
const menuPrice = document.getElementById("menuPrice");
const summaryQty = document.getElementById("summaryQty");
const spicyFee = document.getElementById("spicyFee");
const subtotal = document.getElementById("subtotal");
const discount = document.getElementById("discount");
const total = document.getElementById("total");
const paymentSummary = document.getElementById("paymentSummary");
const message = document.getElementById("message");

function rupiah(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(value);
}

document.getElementById("calculate").addEventListener("click", function () {
  const price = Number(menu.value);
  const quantity = Number(qty.value);
  const spicyFeeValue = Number(spicy.value);

  /*
    FAULT 1:
    Subtotal should be (price + spicyFeeValue) * quantity.
    Version 1 only multiplies the menu price.
  */
  const subtotalValue = price * quantity;

  /*
    FAULT 2:
    A 10% discount should be calculated from subtotal.
    Version 1 uses a fixed Rp10.000 discount for every order.
  */
  const discountValue = subtotalValue >= 50000 ? 10000 : 0;

  /*
    FAULT 3:
    Quantity <= 0 should be rejected.
    Version 1 does not validate the quantity before calculation.
  */
  const totalValue = subtotalValue - discountValue;

  message.textContent = "";

  menuPrice.textContent = rupiah(price);
  summaryQty.textContent = quantity;
  spicyFee.textContent = rupiah(spicyFeeValue);
  subtotal.textContent = rupiah(subtotalValue);
  discount.textContent = rupiah(discountValue);
  total.textContent = rupiah(totalValue);
  paymentSummary.textContent = payment.value;

  cartCount.textContent = quantity;
});

document.getElementById("reset").addEventListener("click", function () {
  menu.selectedIndex = 0;
  qty.value = 1;
  spicy.selectedIndex = 0;
  payment.selectedIndex = 0;

  cartCount.textContent = "0";
  menuPrice.textContent = "Rp0";
  summaryQty.textContent = "0";
  spicyFee.textContent = "Rp0";
  subtotal.textContent = "Rp0";
  discount.textContent = "Rp0";
  total.textContent = "Rp0";
  paymentSummary.textContent = "-";
  message.textContent = "";
});
