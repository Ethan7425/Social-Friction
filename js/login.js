function login(event) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginStatus = document.getElementById('loginStatus');
    const loginContainer = document.getElementById('loginContainer');


    // Hardcoded users
    const users = [
        { username: 'user1', password: 'password1' },
        { username: 'user2', password: 'password2' }
    ];

    // Check if entered credentials match any of the hardcoded users
    const matchedUser = users.find(user => user.username === username && user.password === password);

    if (matchedUser) {
        loginStatus.textContent = 'Login successful!';
        loginStatus.style.color = 'green';

		// Wait for 2 seconds (you can adjust the time as needed)
		setTimeout(() => {
			loginContainer.style.display = 'none';
		}, 2000);
    
	} else {
        loginStatus.textContent = 'Invalid credentials';
        loginStatus.style.color = 'red';
    }

	event.preventDefault();
}
