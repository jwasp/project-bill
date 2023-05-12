const billValue = document.getElementById("billNumber");
const totalValue = document.getElementById("totalAmount");
const netValue = document.getElementById("netAmount");
const taxValue = document.getElementById("taxAmount");
const errorMsgBill = document.getElementById("error-message-bill");
const errorMsgTotal = document.getElementById("error-message-total");
const errorMsgNet = document.getElementById("error-message-net");
const errorMsgTax = document.getElementById("error-message-tax");
const regexp = /^(0|[1-9]\d*)(\,[0-9]{1,2})?$/;

taxValue.innerText = parseFloat(totalValue.value) - parseFloat(netValue.value);

billValue.addEventListener("input", () => {
    errorMsgBill.innerText = isNaN(billValue.value) ? "Nur Zahlen" : "";
    document.getElementById("saveBtn").disabled = isNaN(billValue.value);
});

totalValue.addEventListener("input", () => {
    errorMsgTotal.innerText = regexp.test(totalValue.value)
        ? ""
        : "nur Zahlen und Format 0.00";
    document.getElementById("saveBtn").disabled = !regexp.test(
        totalValue.value
    );
    taxValue.innerText =
        totalValue.value && netValue.value
            ? parseFloat(totalValue.value) - parseFloat(netValue.value)
            : "";
});

netValue.addEventListener("input", () => {
    errorMsgNet.innerText = regexp.test(netValue.value)
        ? ""
        : "nur Zahlen und Format 0.00";
    document.getElementById("saveBtn").disabled = !regexp.test(netValue.value);
    taxValue.innerText =
        totalValue.value && netValue.value
            ? parseFloat(totalValue.value) - parseFloat(netValue.value)
            : "";
});