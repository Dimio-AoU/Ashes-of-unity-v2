console.log("The Ashes of Unity script is working.");
const title = document.querySelector("h1");

// Click: toggle between gold and red
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

// --- Glow behavior (hover/touch) ---
function addGlow(){ title.classList.add("glow"); }
function removeGlow(){ title.classList.remove("glow"); }

title.addEventListener("mouseenter", addGlow);
title.addEventListener("mouseleave", removeGlow);

title.addEventListener("touchstart", () => {
    addGlow();
    setTimeout(removeGlow, 600);
}, { passive: true});