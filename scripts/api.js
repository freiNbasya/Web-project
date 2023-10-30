document.addEventListener("DOMContentLoaded", () => {
    let adviceContainer = document.getElementById("advice-div");

    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => {
            let adviceText = data.slip.advice;
            adviceContainer.innerHTML = `<p>${adviceText}</p>`;
        })
        .catch(error => console.error("Error fetching data:", error));
});
