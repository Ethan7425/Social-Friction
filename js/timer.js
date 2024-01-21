// Get elements
const choiceContainer = document.getElementById("choiceContainer");
const timerContainer = document.getElementById("timerContainer");
const timerValue = document.getElementById("timerValue");

// Check if elements exist before using them
if (slider && sliderValue && timerValue && choiceContainer && timerContainer) {
  // Update the slider value on input
  slider.addEventListener("input", function () {
    sliderValue.textContent = this.value;
  });

  // Function to start the timer
  function startTimer() 
  {
    // Hide the choice container
    choiceContainer.style.display = "none";

    // Show the timer container
    timerContainer.style.display = "block";

    // Get the selected value from the slider
    const duration = parseInt(slider.value);

    // Set initial timer value
    let timeRemaining = duration;

    // Update timer value every second
    const timerInterval = setInterval(function () {
      timerValue.textContent = timeRemaining;
      timeRemaining--;

      // Stop the timer when it reaches 0
      if (timeRemaining < 0) {
        clearInterval(timerInterval);
        // You can perform additional actions when the timer ends
      }
    }, 1000);
  }
}
