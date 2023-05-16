const billValue = document.getElementById("billNumber");
const supplierValue = document.getElementById("supplier");
const headTitleValue = document.getElementById("headTitle");
const totalValue = document.getElementById("totalAmount");
const netValue = document.getElementById("netAmount");
const taxValue = document.getElementById("taxAmount");
const errorMsgBill = document.getElementById("error-message-bill");
const errorMsgTotal = document.getElementById("error-message-total");
const errorMsgNet = document.getElementById("error-message-net");
const errorMsgTax = document.getElementById("error-message-tax");
const errorMsgSupplier = document.getElementById("error-message-supplier");
const errorMsgHeadTitle = document.getElementById("error-message-headTitle");
const regexp = /^(0|[1-9]\d*)(\,[0-9]{1,2})?$/;

// button disable function

const blockButton = (value) => {
    document.getElementById("saveBtn").disabled = !regexp.test(value);
};

// tax calculation function

const countTaxValue = (total, net) => {
    errorMsgTax.innerText = "";
    return (tax = parseFloat(total) - parseFloat(net));
};

const countNetValue = (total, tax) => {
    // errorMsgTax.innerText = "";
    return (net = parseFloat(total) - parseFloat(tax));
};

const countTotalValue = (net, tax) => {
    // errorMsgTax.innerText = "";
    return (total = parseFloat(net) + parseFloat(tax));
};

const checkEmptyFields = () => {
    if (!billValue.value) errorMsgBill.innerText = "Bitte ausfüllen";
    if (!supplierValue.value) errorMsgSupplier.innerText = "Bitte ausfüllen";
    if (!headTitleValue.value) errorMsgHeadTitle.innerText = "Bitte ausfüllen";
    if (!totalValue.value) errorMsgTotal.innerText = "Bitte ausfüllen";
    if (!netValue.value) errorMsgNet.innerText = "Bitte ausfüllen";
    if (!taxValue.value) errorMsgTax.innerText = "Bitte ausfüllen";
}

if (totalValue.value && netValue.value) {
    taxValue = countTaxValue(totalValue.value, netValue.value);
}

// validation of bill value

billValue.addEventListener("input", () => {
    errorMsgBill.innerText = isNaN(billValue.value) ? "Nur Zahlen" : "";
    document.getElementById("saveBtn").disabled = isNaN(billValue.value);
    if (!billValue.value) errorMsgBill.innerText = "Bitte ausfüllen";
});

// validation of supplier value

supplierValue.addEventListener("input", () => {
    errorMsgSupplier.innerText = (!supplierValue.value) ? "Bitte ausfüllen" : "";
});

// validation of head title value

headTitleValue.addEventListener("input", () => {
    errorMsgHeadTitle.innerText = !headTitleValue.value
        ? "Bitte ausfüllen"
        : "";
});

// validation of total value

totalValue.addEventListener("input", () => {
    errorMsgTotal.innerText = regexp.test(totalValue.value)
        ? ""
        : "nur Zahlen und Format 0,00";
    if (!totalValue.value) {
        errorMsgTotal.innerText = "Bitte ausfüllen";
        taxValue.value = "";
        errorMsgTax.innerText = "Bitte ausfüllen";
    }
    blockButton(totalValue.value);
    if (
        totalValue.value &&
        netValue.value &&
        !errorMsgTotal.innerText &&
        !errorMsgNet.innerText
    ) {
        taxValue.value = countTaxValue(totalValue.value, netValue.value);
    }

    else if (
        taxValue.value &&
        totalValue.value &&
        !errorMsgTax.innerText &&
        !errorMsgTotal.innerText
    ) {
        netValue.value = countNetValue(totalValue.value, taxValue.value);
        errorMsgNet.innerText = "";
    }
});

// validation of net value

netValue.addEventListener("input", () => {
    errorMsgNet.innerText = regexp.test(netValue.value)
        ? ""
        : "nur Zahlen und Format 0,00";
    if (!netValue.value) {
        errorMsgNet.innerText = "Bitte ausfüllen";
        taxValue.value = "";
        errorMsgTax.innerText = "Bitte ausfüllen";
    }
    blockButton(netValue.value);
    if (
        totalValue.value &&
        netValue.value &&
        !errorMsgNet.innerText &&
        !errorMsgTotal.innerText
    ) taxValue.value = countTaxValue(totalValue.value, netValue.value);

    else if (
        taxValue.value &&
        netValue.value &&
        !errorMsgNet.innerText &&
        !errorMsgTax.innerText
    ) {
        totalValue.value = countTotalValue(taxValue.value, netValue.value);
        errorMsgTotal.innerText = "";
    }
});

// validation of tax value

taxValue.addEventListener("input", () => {
    errorMsgTax.innerText = regexp.test(taxValue.value)
        ? ""
        : "nur Zahlen und Format 0,00";
    if (!taxValue.value) errorMsgTax.innerText = "Bitte ausfüllen";
    blockButton(taxValue.value);

    if (
        taxValue.value &&
        netValue.value &&
        !errorMsgNet.innerText &&
        !errorMsgTax.innerText
    ) {
        totalValue.value = countTotalValue(taxValue.value, netValue.value);
        errorMsgTotal.innerText = "";
    }

    else if (
        !netValue.value &&
        taxValue.value &&
        totalValue.value &&
        !errorMsgTax.innerText &&
        !errorMsgTotal.innerText
    ) {
        netValue.value = countNetValue(totalValue.value, taxValue.value);
        errorMsgNet.innerText = "";
    }
});