const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you! Our real estate expert will contact you soon.");

    form.reset();

});

const searchBtn = document.querySelector(".search-box button");
const searchInput = document.querySelector(".search-box input");

searchBtn.addEventListener("click", function(){

    const value = searchInput.value.trim();

    if(value === ""){
        alert("Please enter a city or property name.");
    }else{
        alert("Searching for: " + value);
    }

});