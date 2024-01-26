function changeScene(sceneId) {
	// Get all buttons
	const buttons = document.querySelectorAll('.navButton');
  
	// Remove active class from all buttons
	buttons.forEach(button => {
	  button.classList.remove('active');
	});
  
	// Get clicked button and add active class
	if(sceneId == "home" || sceneId == "profile" || sceneId == "settings")
	{
		const clickedButton = document.getElementById(sceneId + 'Button');
		clickedButton.classList.add('active');
	}

	// Hide all scenes
	const scenes = document.querySelectorAll('.scene');
	scenes.forEach(scene => {
	  scene.style.display = 'none';
	});
  
	// Show clicked scene
	const desiredScene = document.getElementById(sceneId);
	desiredScene.style.display = 'block';
  }
  
  // Event listeners for navbar buttons
  document.getElementById("homeButton").addEventListener("click", () => changeScene('home'));
  document.getElementById("profileButton").addEventListener("click", () => changeScene('profile'));
  document.getElementById("settingsButton").addEventListener("click", () => changeScene('settings'));
  

function hideYesPage()
{
	const yes = document.getElementById("yesContainer");
	yes.style.display = "none";
}