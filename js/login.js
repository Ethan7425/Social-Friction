

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


window.onload = function () {
    const loggedInUser = localStorage.getItem('loggedInUser');

    // Retrieve and set the stored 't' values for each user
    const tMinou = localStorage.getItem('MinouYesCount');
    document.getElementById('MinouYes').textContent = `Minou said Yes ${tMinou} times`;

    const tNono = localStorage.getItem('NonoYesCount');
    document.getElementById('NonoYes').textContent = `Nono said Yes ${tNono} times`;

    const tRalex = localStorage.getItem('RalexYesCount');
    document.getElementById('RalexYes').textContent = `Ralex said Yes ${tRalex} times`;

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
