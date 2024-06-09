'use strict'

// Array of country phone codes with associated country names and flags
const countryPhoneCodes = [
    { code: '+234', name: 'Nigeria', flag: '🇳🇬' },
    { code: '+27', name: 'South Africa', flag: '🇿🇦' },
    { code: '+20', name: 'Egypt', flag: '🇪🇬' },
    { code: '+254', name: 'Kenya', flag: '🇰🇪' },
    { code: '+233', name: 'Ghana', flag: '🇬🇭' },
    { code: '+212', name: 'Morocco', flag: '🇲🇦' },
    { code: '+221', name: 'Senegal', flag: '🇸🇳' },
    { code: '+213', name: 'Algeria', flag: '🇩🇿' },
    { code: '+220', name: 'Gambia', flag: '🇬🇲' },
    { code: '+267', name: 'Botswana', flag: '🇧🇼' },
    { code: '+81', name: 'Japan', flag: '🇯🇵' },
    { code: '+86', name: 'China', flag: '🇨🇳' },
    { code: '+91', name: 'India', flag: '🇮🇳' },
    { code: '+82', name: 'South Korea', flag: '🇰🇷' },
    { code: '+62', name: 'Indonesia', flag: '🇮🇩' },
    { code: '+966', name: 'Saudi Arabia', flag: '🇸🇦' },
    { code: '+971', name: 'United Arab Emirates', flag: '🇦🇪' },
    { code: '+90', name: 'Turkey', flag: '🇹🇷' },
    { code: '+92', name: 'Pakistan', flag: '🇵🇰' },
    { code: '+964', name: 'Iraq', flag: '🇮🇶' },
    { code: '+60', name: 'Malaysia', flag: '🇲🇾' },
    { code: '+66', name: 'Thailand', flag: '🇹🇭' },
    { code: '+65', name: 'Singapore', flag: '🇸🇬' }
];

// Get the select elements for country codes
const countrySelect1 = document.getElementById('cCode');
const countrySelect2 = document.getElementById('cCode2');

// Populate the first country code dropdown
countryPhoneCodes.forEach(country => {
    const option1 = document.createElement('option');
    option1.value = country.code;
    option1.textContent = `${country.code}`;
    countrySelect1.appendChild(option1);
});

// Populate the second country code dropdown
countryPhoneCodes.forEach(country => {
    const option2 = document.createElement('option');
    option2.value = country.code;
    option2.textContent = `${country.code}`;
    countrySelect2.appendChild(option2);
});

// Toggle password visibility
document.querySelectorAll('.showPass').forEach(showPass => {
    showPass.addEventListener('click', function() {
        const passwordField = this.previousElementSibling; // Get the password input field
        const icon = this.querySelector('i'); // Get the eye icon within the clicked element

        if (passwordField.type === 'password') { // If the password is hidden
            passwordField.type = 'text'; // Show the password
            icon.classList.replace('fa-eye', 'fa-eye-slash'); // Change icon to eye-slash
        } else { // If the password is visible
            passwordField.type = 'password'; // Hide the password
            icon.classList.replace('fa-eye-slash', 'fa-eye'); // Change icon to eye
        }
    });
});

// Function to toggle between signup and login sections
function toggleSection(section) {
    const signUpSection = document.getElementById('signUpSection');
    const loginSection = document.getElementById('loginSection');

    if (section === 'signup') {
        signUpSection.style.display = 'block'; // Show signup section
        loginSection.style.display = 'none'; // Hide login section
        resetTabs('signUpEmail'); // Set default tab for signup
    } else {
        signUpSection.style.display = 'none'; // Hide signup section
        loginSection.style.display = 'block'; // Show login section
        resetTabs('loginEmail'); // Set default tab for login
    }
}

// Function to reset tabs and set the default tab
function resetTabs(defaultTabId) {
    var tabs = document.getElementsByClassName('pretabs');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none'; // Hide all tabs
    }
    document.getElementById(defaultTabId).style.display = 'block'; // Show the default tab

    var logButtons = document.getElementsByClassName('logs');
    for (var i = 0; i < logButtons.length; i++) {
        logButtons[i].className = logButtons[i].className.replace(' active', ''); // Remove active class from all buttons
    }

    document.getElementById('defaultPage').className += ' active'; // Set the default page button to active
    document.getElementById('defaultPage2').className += ' active'; // Set the default page button to active for second section
}

// Function to open a specific tab
function openCity(evt, cityName) {
    var i, pretabs, logs;

    pretabs = document.getElementsByClassName('pretabs');
    for (i = 0; i < pretabs.length; i++) {
        pretabs[i].style.display = 'none'; // Hide all tabs
    }

    logs = document.getElementsByClassName('logs');
    for (i = 0; i < logs.length; i++) {
        logs[i].className = logs[i].className.replace(' active', ''); // Remove active class from all buttons
    }

    document.getElementById(cityName).style.display = 'block'; // Show the selected tab
    evt.currentTarget.className += ' active'; // Set the clicked button to active
}

// Event listener to set default page on DOM content load
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('defaultPage').click(); // Click the default page button to set initial state
});