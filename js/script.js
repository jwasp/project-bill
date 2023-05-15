const billValue = document.getElementById("billNumber");
const totalValue = document.getElementById("totalAmount");
const netValue = document.getElementById("netAmount");
const taxValue = document.getElementById("taxAmount");
const errorMsgBill = document.getElementById("error-message-bill");
const errorMsgTotal = document.getElementById("error-message-total");
const errorMsgNet = document.getElementById("error-message-net");
const errorMsgTax = document.getElementById("error-message-tax");
const regexp = /^(0|[1-9]\d*)(\,[0-9]{1,2})?$/;

if (totalValue.value && netValue.value) {
    taxValue.value = parseFloat(totalValue.value) - parseFloat(netValue.value)
};

// validation of bill value

billValue.addEventListener("input", () => {
    errorMsgBill.innerText = isNaN(billValue.value) ? "Nur Zahlen" : "";
    document.getElementById("saveBtn").disabled = isNaN(billValue.value);
});

// validation of total value

totalValue.addEventListener("input", () => {
    errorMsgTotal.innerText = regexp.test(totalValue.value) || !totalValue.value
        ? ""
        : "nur Zahlen und Format 0,00";
    document.getElementById("saveBtn").disabled = !regexp.test(
        totalValue.value
    );
    if (totalValue.value && netValue.value) {
        taxValue.value = parseFloat(totalValue.value) - parseFloat(netValue.value)
    } else {
        taxValue.value = "";
    }
});

// validation of net value

netValue.addEventListener("input", () => {
    errorMsgNet.innerText = regexp.test(netValue.value) || !netValue.value
        ? ""
        : "nur Zahlen und Format 0,00";
    document.getElementById("saveBtn").disabled = !regexp.test(netValue.value);
    if (totalValue.value && netValue.value) {
        taxValue.value = parseFloat(totalValue.value) - parseFloat(netValue.value)
    } else {
        taxValue.value = "";

    }
});

// validation of tax value

taxValue.addEventListener("input", () => {
    errorMsgTax.innerText = regexp.test(taxValue.value) || !taxValue.value
        ? ""
        : "nur Zahlen und Format 0,00";
});