function changeBrutto() {
    document.getElementById("amountText").innerHTML = "Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro";
    document.getElementById("resultText").innerHTML = "Nettobetrag";
}
function changeNetto() {
    document.getElementById("amountText").innerHTML = "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro";
    document.getElementById("resultText").innerHTML = "Bruttobetrag (Endpreis)";
}

function getPercent() {
}

function calculateTax() {

    let input = Number(document.getElementById("amount").value);
    let percent = 0;
    let taxAmount = 0;

    if (document.getElementById("taxHigh").checked) {
        percent = .19;
    } else {
        percent = .07;
    }
    
    taxAmount = input * percent;

    if (document.getElementById("brutto").checked && input != null) {
        document.getElementById("resultTaxAmount").innerHTML = taxAmount.toFixed(2) + " €";
        document.getElementById("resultTax").innerHTML = (input + taxAmount).toFixed(2) + " €";
    } else {
        document.getElementById("resultTaxAmount").innerHTML = taxAmount.toFixed(2) + " €";
        document.getElementById("resultTax").innerHTML = (input - taxAmount).toFixed(2) + " €";
    }

}