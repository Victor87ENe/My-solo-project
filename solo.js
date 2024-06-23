

    
    function login() {
      alert(`i am on the ryt path`)
        const username = prompt("Enter your username:");
        const password = prompt("Enter your password:");

        localStorage.setItem('username', username);
        localStorage.setItem('password', password);



// JavaScript
// my pass and usee are stored in alocalStorage with ver usernames & passwords
const usernames = localStorage.getItem('username');
const passwords = localStorage.getItem('password');


// this just print and show me for somwhere
document.getElementById('username-display').innerText = username;
document.getElementById('password-display').innerText = password;
}



const form = document.getElementById('user-form');
const table = document.getElementById('users-table');

// Add an event listener to the form submit event
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the username and password from the form
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // victor scrutnice ur intake here

  // Store the username and password in Local Storage
  const users = JSON.parse(localStorage.getItem('users')) || [];
  users.push({ username, password });
  localStorage.setItem('users', JSON.stringify(users));

  // Display the stored users in the table
  const usersTbody = document.getElementById('users-tbody');
  users.forEach((user) => {
    const row = document.createElement('tr');
    const usernameCell = document.createElement('td');
    const passwordCell = document.createElement('td');
    usernameCell.textContent = user.username;
    passwordCell.textContent = user.password;
    row.appendChild(usernameCell);
    row.appendChild(passwordCell);
    usersTbody.appendChild(row);
  });
});

// phone number validation
const phoneInput = document.getElementById('validationDefault05');
 phoneInput.addEventListener('input', (e) => {
    const phoneNumber = e.target.value;
    if (!phoneNumber.match(/^\d{4}-\d{3}-\d{4}$/)) {
      alert('Please enter a valid phone number');
    }
  });