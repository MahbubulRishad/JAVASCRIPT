const result = document.getElementById("result");
const submit = document.getElementById("submit");

function convertBinary(e){
    e.preventDefault();

    const input = document.getElementById("number").value;
    if (input === ""){
        alert("Enter decimal number.");
    }
    else if (input < 0 ){
        alert("Enter positive value.");
    }
    else{
        result.style.visibility = "visible";
    }

    // converting
    const binaryNumber = Number(input).toString(2);
    result.innerText = binaryNumber;
}
submit.addEventListener("click", convertBinary);