// Retrieve dark mode preference from local storage
const isDarkMode = localStorage.getItem('darkMode') === 'true';
const body = document.body;

// Apply dark mode if it's enabled
if (isDarkMode) {
    body.classList.add('dark-mode');
    toggleDarkMode();
}

// Function to toggle dark mode
function toggleDarkMode() {
    const isDarkMode = body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode); // Update local storage

    // Update CSS variables based on dark mode state
    if (isDarkMode) {
        document.documentElement.style.setProperty('--green-color', '#000000');
        document.documentElement.style.setProperty('--light-green-color', '#fff');
        document.documentElement.style.setProperty('--orange-color', '#3cb815');
        // document.documentElement.style.setProperty('--body-color', '#000000');
    } else {
        document.documentElement.style.setProperty('--green-color', '#3cb815');
        document.documentElement.style.setProperty('--light-green-color', 'rgb(235, 247, 237)');
        document.documentElement.style.setProperty('--orange-color', '#ff7e00');
        document.documentElement.style.setProperty('--body-color', '#e3e6f3');
    }
}

// Event listener for dark mode toggle button
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', toggleDarkMode);