const form = document.getElementById("feedbackForm");
const message = document.getElementById("message");
const result = document.getElementById("result");
const resultText = document.getElementById("resultText");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const experience = document.getElementById("experience").value;
    const feedback = document.getElementById("feedback").value.trim();

    const rating = document.querySelector(
        'input[name="rating"]:checked'
    );

    // Form Validation
    if (name === "") {
        showMessage("Please enter your name.");
        return;
    }

    if (email === "") {
        showMessage("Please enter your email.");
        return;
    }

    if (!email.includes("@")) {
        showMessage("Please enter a valid email address.");
        return;
    }

    if (!rating) {
        showMessage("Please select a rating.");
        return;
    }

    if (experience === "") {
        showMessage("Please select your experience.");
        return;
    }

    if (feedback === "") {
        showMessage("Please enter your feedback.");
        return;
    }

    // Successful Submission
    message.textContent = "Feedback submitted successfully! ✓";
    message.style.color = "green";

    result.style.display = "block";

    resultText.innerHTML =
        "Thank you, <b>" + name + "</b>!<br><br>" +
        "Your Rating: " + rating.value + " ⭐<br>" +
        "Experience: " + experience + "<br><br>" +
        "Your feedback has been recorded successfully.";

    form.reset();

    // Scroll to result
    result.scrollIntoView({
        behavior: "smooth"
    });
});


// Error Message Function
function showMessage(text) {
    message.textContent = text;
    message.style.color = "red";
    result.style.display = "none";
}