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
    let result = 0;

    if (document.getElementById("taxHigh").checked) {
        percent = .19;
    } else {
        percent = .07;
    }

    if (document.getElementById("netto").checked && input != null) {
        document.getElementById("resultTaxAmount").innerHTML = (input * percent).toFixed(2) + " €";
        document.getElementById("resultTax").innerHTML = (input * (1 + percent)).toFixed(2) + " €";
    } else {
        document.getElementById("resultTaxAmount").innerHTML = (input * percent).toFixed(2) + " €";
        document.getElementById("resultTax").innerHTML = (input / (1 + percent)).toFixed(2) + " €";
    }

}