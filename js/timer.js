
// Get elements
const choiceContainer = document.getElementById("choiceContainer");
const timerContainer = document.getElementById("timerContainer");
const countdownElement = document.querySelector(".timer");
const yes = document.getElementById("yesContainer");
// const nbYesElement = document.querySelector('.nbYes');




// Load the initial 't' values for each user
const tMinou = parseInt(localStorage.getItem('MinouYesCount')) || 0;
const tNono = parseInt(localStorage.getItem('NonoYesCount')) || 0;
const tRalex = parseInt(localStorage.getItem('RalexYesCount')) || 0;

function counter(containerId)
{
	const nbYesElement = document.getElementById(`${containerId}Yes`);

	// Retrieve the stored 't' value for the current user
    let t = parseInt(localStorage.getItem(`${containerId}YesCount`)) || 0;

	countdownElement.textContent = "0"; // Set initial value
	timerContainer.style.display = "block";
	
	var c = 0;
	 
	// let t = localStorage.getItem('${containerId}YesCount');
	t++;
	// Save the updated 't' back to localStorage
	localStorage.setItem(`${containerId}YesCount`, t.toString());
	nbYesElement.textContent = `${containerId} said Yes ${t} times`;



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
  


//!  I need to find a solution for the t (nb of times yes) because it's the same t for all profiles and even if i save all 3 separetely it still causes 
//!  troubles with the onload function 