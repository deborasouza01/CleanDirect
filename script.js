document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("whatsapp-button");
    
    setInterval(() => {
        button.classList.toggle("animate-bounce");
    }, 2000);
});