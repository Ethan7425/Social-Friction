
// Get elements
const choiceContainer = document.getElementById("choiceContainer");
const timerContainer = document.getElementById("timerContainer");
const countdownElement = document.querySelector(".timer");
const yes = document.getElementById("yesContainer");
const nbYesElement = document.querySelector('.nbYes');


function counter(containerId) 
{

	countdownElement.textContent = "0"; // Set initial value
	timerContainer.style.display = "block";
	
	var c = 0;
	
  	// Get the integer value of the slider in seconds
  	const seconds = parseInt(document.getElementById(`${containerId}SliderValue`).textContent);

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
  