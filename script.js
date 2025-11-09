console.log("The Ashes of Unity script is working.");
const title = document.querySelector("h1");
title.addEventListener("click", function() {
    alert("The battle begins!");
    if (title.style.color === "red") { 
        title.style.color = "gold"; 
} else { 
title.style.color = "red";
}
});
