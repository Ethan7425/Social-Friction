// function login(event) 
// {
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
//     const loginStatus = document.getElementById('loginStatus');
//     const loginContainer = document.getElementById('loginContainer');
//     const profileNoah = document.getElementById('NoahContainer');
//     const profileEthan = document.getElementById('EthanContainer');

//     // Hardcoded users
//     const users = 
//     [
//         { username: 'Minou', password: '0510' },
//         { username: 'Nono', password: '0401' }
//     ];

//     // Check if entered credentials match any of the hardcoded users
//     const matchedUser = users.find(user => user.username === username && user.password === password);

//     if (matchedUser) 
//     {
//         loginStatus.textContent = 'Login successful!';
//         loginStatus.style.color = 'green';

//         // Wait for 2 seconds (you can adjust the time as needed)
//         setTimeout(() => 
//         {
//             // Check which user has logged in
//             if (matchedUser.username === 'Minou') 
//             {
//                 // Action for user1
//                 profileEthan.style.display = 'block';
//                 console.log('User 1 logged in');
//             } 
//             else if (matchedUser.username === 'Nono') 
//             {
//                 // Action for user2
//                 profileNoah.style.display = 'block';
//                 console.log('User 2 logged in');
//             }
//             // Hide the login container
//             loginContainer.style.display = 'none';
//         }, 1500);
//     } 
//     else
//     {
//         loginStatus.textContent = 'Invalid Informations';
//         loginStatus.style.color = 'red';
//     }

//     event.preventDefault();
// }


// Function to handle login
function login(event) {
    event.preventDefault();

    // Get user input
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginStatus = document.getElementById('loginStatus');
    const loginContainer = document.getElementById('loginContainer');
    const profileNoah = document.getElementById('NonoContainer');
    const profileEthan = document.getElementById('MinouContainer');

    // Hardcoded users
    const users = [
        { username: 'Minou', password: '0510' },
        { username: 'Nono', password: '0401' }
    ];

    // Check if entered credentials match any of the hardcoded users
    const matchedUser = users.find(user => user.username === username && user.password === password);

    if (matchedUser) {
        loginStatus.textContent = 'Login successful!';
        loginStatus.style.color = 'green';

        // Store user information in localStorage
        localStorage.setItem('loggedInUser', JSON.stringify(matchedUser));

        // Wait for 2 seconds (you can adjust the time as needed)
        setTimeout(() => {
            // Check which user has logged in
            if (matchedUser.username === 'Minou') {
                // Action for user1
                profileEthan.style.display = 'block';
                console.log('User 1 logged in');
            } else if (matchedUser.username === 'Nono') {
                // Action for user2
                profileNoah.style.display = 'block';
                console.log('User 2 logged in');
            }
            // Hide the login container
            loginContainer.style.display = 'none';
        }, 1500);
    } else {
        loginStatus.textContent = 'Invalid Informations';
        loginStatus.style.color = 'red';
    }
}

// Check if a user is already logged in on page load
window.onload = function () {
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
        // Parse the stored user information
        const user = JSON.parse(loggedInUser);

        // Show the corresponding profile container
        const profileContainer = document.getElementById(`${user.username}Container`);
        if (profileContainer) {
            profileContainer.style.display = 'block';
        }

        // Hide the login container
        const loginContainer = document.getElementById('loginContainer');
        if (loginContainer) {
            loginContainer.style.display = 'none';
        }
    }
};
