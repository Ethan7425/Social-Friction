
// // Function to handle login
// function login(event) {
//     event.preventDefault();

//     // Get user input
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
//     const loginStatus = document.getElementById('loginStatus');
//     const loginContainer = document.getElementById('loginContainer');
//     const profileNoah = document.getElementById('NonoContainer');
//     const profileEthan = document.getElementById('MinouContainer');
//     const profileAlex = document.getElementById('RalexContainer');

//     // Hardcoded users
//     const users = [
//         { username: 'Minou', password: '0510' },
//         { username: 'Nono', password: '0401' },
//         { username: 'Ralex', password: '2208' }
//     ];

//     // Check if entered credentials match any of the hardcoded users
//     const matchedUser = users.find(user => user.username === username && user.password === password);

//     if (matchedUser) {
//         loginStatus.textContent = 'Login successful!';
//         loginStatus.style.color = 'green';

//         // Store user information in localStorage
//         localStorage.setItem('loggedInUser', JSON.stringify(matchedUser));

//         // Wait for ... seconds
//         setTimeout(() => {
// 			// Show the Choice container
// 			const choiceContainer = document.getElementById('choiceContainer');
// 			choiceContainer.style.display = 'block';

// 			const messagelog = document.getElementById('messageLogin');
// 			messagelog.style.display = 'none';

//             // Check which user has logged in
//             if (matchedUser.username === 'Minou') {
//                 // Action for user1
//                 profileEthan.style.display = 'block';
// 				sliderMinou.style.display = 'block';
//                 console.log('User 1 logged in');
//             } else if (matchedUser.username === 'Nono') {
//                 // Action for user2
//                 profileNoah.style.display = 'block';
//                 console.log('User 2 logged in');
//             } else if (matchedUser.username === 'Ralex') {
//                 // Action for user3
//                 profileAlex.style.display = 'block';
//                 console.log('User 3 logged in');
//             }
//             // Hide the login container
//             loginContainer.style.display = 'none';
//         }, 1000);
//     } else {
//         loginStatus.textContent = 'Invalid Informations';
//         loginStatus.style.color = 'red';
//     }
// }

// // Check if a user is already logged in on page load
// window.onload = function () 
// {
//     const loggedInUser = localStorage.getItem('loggedInUser');
	
//     if (loggedInUser) 
// 	{
//         // Parse the stored user information
//         const user = JSON.parse(loggedInUser);

//         // Show the corresponding profile container
//         const profileContainer = document.getElementById(`${user.username}Container`);
//         profileContainer.style.display = 'block';
        
//         // Hide the login container
//         const loginContainer = document.getElementById('loginContainer');
//         loginContainer.style.display = 'none';

// 		// Show the Choice container
// 		const choiceContainer = document.getElementById('choiceContainer');
// 		choiceContainer.style.display = 'block';

// 		const messagelog = document.getElementById('messageLogin');
// 		messagelog.style.display = 'none';

// 		const slidercontainer = document.getElementById('slider-container');
// 		slidercontainer.style.display = 'block';

// 		// Retrieve the stored slider value from localStorage
// 		const storedSliderValue = localStorage.getItem('sliderValue');

// 		// If a stored value exists, set it on the slider
// 		slider.value = storedSliderValue;
// 		sliderValue.textContent = storedSliderValue;

//     } 
// 	else 
// 	{
// 		const profileEthan = document.getElementById('MinouContainer');
// 	    const profileNoah = document.getElementById('NonoContainer');
// 	    const profileAlex = document.getElementById('RalexContainer');

// 		profileEthan.style.display = 'none';
// 		profileNoah.style.display = 'none';
// 		profileAlex.style.display = 'none';

//     	loginContainer.style.display = 'block';

// 		// Hide Slider for timer
// 		const slidercontainer = document.getElementById('slider-container');
// 		slidercontainer.style.display = 'none';
//     }
// };


// function logout() {
//     // Clear the stored user information
//     localStorage.removeItem('loggedInUser');

//     // Hide all profile containers
//     const profileContainers = document.querySelectorAll('.profileCard');
//     profileContainers.forEach(container => {
//         container.style.display = 'none';
//     });

//     // Show the login container
//     const loginContainer = document.getElementById('loginContainer');
//         loginContainer.style.display = 'block';
    
// 	// Hide the Choice container
// 	const choiceContainer = document.getElementById('choiceContainer');
// 	choiceContainer.style.display = 'none';
	
// 	const messagelog = document.getElementById('messageLogin');
// 	messagelog.style.display = 'block';

// 	const slider = document.getElementById('slider-container');
// 	slider.style.display = 'none';
// }


// Function to handle login
function login(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginStatus = document.getElementById('loginStatus');
    const loginContainer = document.getElementById('loginContainer');

    // Hardcoded users
    const users = [
        { username: 'Minou', password: '0510' },
        { username: 'Nono', password: '0401' },
        { username: 'Ralex', password: '2208' }
    ];

    const matchedUser = users.find(user => user.username === username && user.password === password);

    if (matchedUser) {
        loginStatus.textContent = 'Login successful!';
        loginStatus.style.color = 'green';

        localStorage.setItem('loggedInUser', JSON.stringify(matchedUser));

        // Wait for ... seconds
        setTimeout(() => {
            handleLoggedInUser(matchedUser);
            loginContainer.style.display = 'none';
        }, 1000);
    } else {
        loginStatus.textContent = 'Invalid Information';
        loginStatus.style.color = 'red';
    }
}

// Function to handle actions for a logged-in user
function handleLoggedInUser(user) {

	// Hide the login container
    const loginContainer = document.getElementById('loginContainer');
	loginContainer.style.display = 'none';

    const profileContainer = document.getElementById(`${user.username}Container`);
    profileContainer.style.display = 'block';

    const choiceContainer = document.getElementById(`${user.username}ChoiceContainer`);
    choiceContainer.style.display = 'block';

    const messageLog = document.getElementById('messageLogin');
    messageLog.style.display = 'none';

    const sliderContainer = document.getElementById(`${user.username}SliderContainer`);
    sliderContainer.style.display = 'block';

}

// Check if a user is already logged in on page load
window.onload = function () {
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
        const user = JSON.parse(loggedInUser);
        handleLoggedInUser(user);
    } else {
        const profileContainers = document.querySelectorAll('.profileCard');
        profileContainers.forEach(container => {
            container.style.display = 'none';
        });

        const sliderContainers = document.querySelectorAll('.sliderContainer');
        sliderContainers.forEach(container => {
            container.style.display = 'none';
        });

        const loginContainer = document.getElementById('loginContainer');
        loginContainer.style.display = 'block';

    }
};

// Function to handle logout
function logout() {
    localStorage.removeItem('loggedInUser');

    const profileContainers = document.querySelectorAll('.profileCard');
    profileContainers.forEach(container => {
        container.style.display = 'none';
    });

    const choiceContainers = document.querySelectorAll('.choiceContainer');
    choiceContainers.forEach(container => {
        container.style.display = 'none';
    });

    const sliderContainers = document.querySelectorAll('.sliderContainer');
    sliderContainers.forEach(container => {
        container.style.display = 'none';
    });

    const loginContainer = document.getElementById('loginContainer');
    loginContainer.style.display = 'block';

    const messageLog = document.getElementById('messageLogin');
    messageLog.style.display = 'block';

}
