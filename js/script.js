const billValue = document.getElementById("billNumber");
const totalValue = document.getElementById("totalAmount");
const netValue = document.getElementById("netAmount");
const taxValue = document.getElementById("taxAmount");
const errorMsgBill = document.getElementById("error-message-bill");
const errorMsgTotal = document.getElementById("error-message-total");
const errorMsgNet = document.getElementById("error-message-net");
const errorMsgTax = document.getElementById("error-message-tax");

billValue.addEventListener("input", () => {
    errorMsgBill.innerText = isNaN(billValue.value) ? "Nur Zahlen" : "";
    document.getElementById("saveBtn").disabled = isNaN(billValue.value);
});

totalValue.addEventListener("input", () => {
    errorMsgTotal.innerText = isNaN(totalValue.value) ? "Nur Zahlen" : "";
    document.getElementById("saveBtn").disabled = isNaN(totalValue.value);
});

netValue.addEventListener("input", () => {
    errorMsgNet.innerText = isNaN(netValue.value) ? "Nur Zahlen" : "";
    document.getElementById("saveBtn").disabled = isNaN(netValue.value);
});

taxValue.addEventListener("input", () => {
    errorMsgTax.innerText = isNaN(taxValue.value) ? "Nur Zahlen" : "";
    document.getElementById("saveBtn").disabled = isNaN(taxValue.value);
});
