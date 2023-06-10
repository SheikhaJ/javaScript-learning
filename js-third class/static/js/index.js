const inputText = document.querySelector("#txt");
const myButton = document.querySelector(".btn-list");
const list = document.querySelector(".container ul");

myButton.addEventListener("click", function(e){
    if(inputText.value != ""){
    e.preventDefault();
    //create li
    const myLi = document.createElement("li");
    myLi.innerHTML = inputText.value;
    list.appendChild(myLi);
    //create span (x)
    const mySpan = document.createElement("span");
    mySpan.innerHTML="x";
    myLi.appendChild(mySpan);
}

//delete li
const del = document.querySelectorAll('span');
for(let i=0; i<= del.length; i++){
    del[i].addEventListener('click', function(e){
        del[i].parentElement.style.opacity=0;
        del[i].parentElement.style.display='none';
    })
}

})

