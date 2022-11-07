/*
ish
*/

(function(){
    let button = document.querySelector("button");
    let inputt = document.querySelectorAll(".inputt");
    let emaddy = document.querySelector(".emaddy");
    let valid = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    let small = document.querySelectorAll(".small")

    button.addEventListener("click", () => {

        small.forEach((sma) => {
            sma.classList.toggle("hide");
        })

        inputt.forEach((inp) => {
            if (inp.value === "") {
                inp.classList.toggle("icon");
            } else {
                inp.nextElementSibling.textContent = "Good to go. Thanks";
                inp.nextElementSibling.style.color = "green";
            }
        })

        if (!emaddy.value.match(valid)){
            emaddy.classList.toggle("icon");
        } else {
            emaddy.nextElementSibling.textContent = "Good to go. Thanks";
            emaddy.nextElementSibling.style.color = "green";
        }
        })

})();