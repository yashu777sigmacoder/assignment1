// Very simple JavaScript – no complex logic

document.addEventListener("DOMContentLoaded", function () {
    // 1. Dynamic greeting on home page
    var greetingEl = document.getElementById("greeting");
    if (greetingEl) {
        var now = new Date();
        var hour = now.getHours();
        var message = "Hello!";

        if (hour >= 5 && hour < 12) {
            message = "Good Morning!";
        } else if (hour >= 12 && hour < 17) {
            message = "Good Afternoon!";
        } else {
            message = "Good Evening!";
        }
        greetingEl.textContent = message;
    }

    // 2. Set current year in footer
    var yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // 3. Simple click event for Download button on resume page
    var downloadBtn = document.getElementById("downloadBtn");
    if (downloadBtn) {
        downloadBtn.addEventListener("click", function () {
            alert("In a real website, this button would download your resume as a PDF.");
        });
    }
});
