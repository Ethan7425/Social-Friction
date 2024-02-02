
// Get elements
const choiceContainer = document.getElementById("choiceContainer");
const timerContainer = document.getElementById("timerContainer");
const countdownElement = document.querySelector(".timer");
const yes = document.getElementById("yesContainer");
const nbYesElement = document.querySelector('.nbYes');


// const slider = document.getElementById('mySlider');
// const sliderValue = document.getElementById("sliderValue");

// // Update the slider value on input
// slider.addEventListener('input', function () 
// {
//     sliderValue.textContent = this.value;
//     // Save the slider value to localStorage
//     localStorage.setItem('sliderValue', this.value);
// });

// // Initialize the output value
// const storedSliderValue = localStorage.getItem('sliderValue');
// slider.value = storedSliderValue || 15;  // Set a default value if not stored
// sliderValue.textContent = storedSliderValue || 15;



function counter() 
{
	countdownElement.textContent = "0"; // Set initial value
	timerContainer.style.display = "block";
	
	var c = 0;
	
  	// Get the integer value of the slider in seconds
  	const seconds = parseInt(sliderValue.textContent);

  	// Calculate the interval in milliseconds
  	const interval = (seconds * 1000) / 100;

	var count = setInterval(function () 
	{  
		c = parseInt(countdownElement.textContent);
		countdownElement.textContent = (++c).toString();
		if (c == 100) 
		{
			clearInterval(count);
			timerContainer.style.display = "none";
			yes.style.display = "block"
		}
	}, interval);
}
  