// loading-script.js
window.addEventListener('load', () => {
    // Hide the loading screen and show the main content
    const loadingScreen = document.querySelector('.loading-screen');
    const mainContent = document.querySelector('.main-content');
    
    loadingScreen.style.display = 'none';
    mainContent.style.display = 'block';
});