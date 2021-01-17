let dummyText = ["aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "b","c", "d","e", "f","g", "h","i", "j"];
// console.log(dummyText);

// selection
const form = document.querySelector("#form");
const amount = document.querySelector("#amount");
const result = document.querySelector("#result");

// event listener
form.addEventListener("submit", function(e){
    e.preventDefault();
    // console.log("Hello");

    const value = parseInt(amount.value);
    // console.log(typeof value);

    const random = Math.floor(Math.random() * dummyText.length);
    // console.log(random);


    if(isNaN(value) || value <= 0 || value > 9){
        result.innerHTML = `<p>${dummyText[random]}</p>`;
    }
    else{
        const sliceArray = dummyText.slice(0, value);
        const finalArray = sliceArray.map(function(singleDummy){
            return `<p>${singleDummy}</p>`;
        }).join("");
        result.innerHTML = finalArray;
    }
});