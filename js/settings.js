// Get the slider and output elements
const slider = document.getElementById("mySlider");
const output = document.getElementById("sliderValue");

// Update the slider value on input
slider.addEventListener("input", function() {
  output.textContent = this.value;
});

// Initialize the output value
output.textContent = slider.value;

// Make slider global
window.slider = slider;