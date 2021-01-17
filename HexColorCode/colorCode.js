

function generateColor(){

    let hexColor = ["1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","A","B","C","D","E","F"];
    let color = ["#"];

    for(let i=0 ; i<= 5; i++){
        let randomIndex = Math.round(Math.random() * 20);
        let colorCode = hexColor[randomIndex];

        color = color + colorCode;
    }

    // document.getElementById("container").style.background = color;
    document.body.style.background = color;
    document.getElementById("output").style.color = color;
    document.getElementById("output").innerHTML = color;

}
