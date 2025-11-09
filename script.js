console.log("The Ashes of Unity script is working.");
const title = document.querySelector("h1");

title.addEventListener("click", function() {
    alert("The battle begins!");
    
    if (title.classList.contains("is-red")) {
        title.classList.remove("is-red");
        title.classList.add("is-gold");
    } else {
        title.classList.remove("is-gold");
        title.classList.add("is-red");
    }
});
