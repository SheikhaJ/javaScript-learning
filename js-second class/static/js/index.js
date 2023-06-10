let body = document.getElementsByTagName("body");
console.log(body);
console.log();

let Section = document.getElementsByClassName("section");
console.log(Section);

let section3 = document.getElementById("section-3");
console.log(section3);


// section[0].textContent = "Lorem ipsum, dolor sit";


let bodyy = document.querySelectorAll("body");
let Sectionn = document.querySelector(".section");
let section33 = document.querySelector("#section-3");

console.log(bodyy);
console.log(Sectionn);
console.log(section33);

// document.querySelectorAll("p").style.color = "red";
console.log(document.querySelectorAll("p"));
console.log(document.querySelector("p"));

document.querySelector("p").style.color = "yellow";
document.querySelectorAll("p")[1].style.color = "red";


section33.addEventListener("click", function(e){
    // console.log(e.target);
    // console.log(e);

    // section33.style.color="green";
    // section33.style.display = "none";
    section33.previousElementSibling.style.display = "none";
    section33.nextElementSibling.style.display = "none";
}
)

