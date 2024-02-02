
const MinouSliderValue = document.getElementById("MinouSliderValue");
const NonoSliderValue = document.getElementById("NonoSliderValue");
const RalexSliderValue = document.getElementById("RalexSliderValue");


// Update the slider value on input for Minou
MinouSlider.addEventListener('input', function () {
    MinouSliderValue.textContent = this.value;
    // Save the slider value to localStorage
    localStorage.setItem('MinouSliderValue', this.value);
});

// Update the slider value on input for Nono
NonoSlider.addEventListener('input', function () {
    NonoSliderValue.textContent = this.value;
    // Save the slider value to localStorage
    localStorage.setItem('NonoSliderValue', this.value);
});

// Update the slider value on input for Ralex
RalexSlider.addEventListener('input', function () {
    RalexSliderValue.textContent = this.value;
    // Save the slider value to localStorage
    localStorage.setItem('RalexSliderValue', this.value);
});

// Initialize the output value for Minou
const storedMinouSliderValue = localStorage.getItem('MinouSliderValue');
MinouSlider.value = storedMinouSliderValue || 15;  // Set a default value if not stored
MinouSliderValue.textContent = storedMinouSliderValue || 15;

// Initialize the output value for Nono
const storedNonoSliderValue = localStorage.getItem('NonoSliderValue');
NonoSlider.value = storedNonoSliderValue || 15;  // Set a default value if not stored
NonoSliderValue.textContent = storedNonoSliderValue || 15;

// Initialize the output value for Ralex
const storedRalexSliderValue = localStorage.getItem('RalexSliderValue');
RalexSlider.value = storedRalexSliderValue || 15;  // Set a default value if not stored
RalexSliderValue.textContent = storedRalexSliderValue || 15;
