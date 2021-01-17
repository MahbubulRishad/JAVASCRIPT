// DOM selection
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");
const btn = document.querySelector(".btn");
const bookList = document.querySelector("#book-list");

// add event listener
btn.addEventListener("click", function(e){
    e.preventDefault();

    if(title.value == "" || author.value == "" || year.value == ""){
        alert("Please enter correct title, author & year");
    }
    else{
        const newRow = document.createElement("tr");

        // new Title
        const newTitle = document.createElement("th");
        newTitle.innerHTML = title.value;

        newRow.appendChild(newTitle);

        // new author
        const newAuthor = document.createElement("th");
        newAuthor.innerHTML = author.value;

        newRow.appendChild(newAuthor);
        
        // new year
        const newYear = document.createElement("th");
        newYear.innerHTML = year.value;

        newRow.appendChild(newYear);

        // final append
        bookList.appendChild(newRow);

    }
});