document.querySelector("header button").addEventListener("click", ({currentTarget: target}) => {
    if (target.textContent.startsWith("Pause")) {
        //pause all animations
        target.innerHTML = "Play All <span>&#9658;</span>";
        document.querySelectorAll(".spinner").forEach(s => s.classList.add("pause"));
    }
    else {
        //play all animations
        target.innerHTML = "Pause All <span>&#10074;&#10074;</span>";
        document.querySelectorAll(".spinner").forEach(s => s.classList.remove("pause"));
    }
});
