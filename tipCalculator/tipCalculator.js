
document.querySelector("#tip-form").onchange = function (){
    // DOM selection
    const bill = Number(document.querySelector("#bill").value);
    const tipInput = document.querySelector("#tipInput").value;
    const tipOutput = document.querySelector("#tipOutput");
    const results = document.querySelector("#results");
    const tipAmount = document.querySelector("#tipAmount");
    const totalBillWithTip = document.querySelector("#totalBillWithTip");

    // calculation
    const tipBill = bill * (tipInput / 100);
    const totalBill = bill + tipBill;

    tipAmount.value = tipBill.toFixed(2);

    totalBillWithTip.value = totalBill.toFixed(2);
   
  // showing results
    tipOutput.innerHTML =  `${tipInput}%`;
    results.style.display = "block";



}
