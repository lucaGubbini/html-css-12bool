document.addEventListener('DOMContentLoaded', (event) => {
    const container = document.querySelector('.container');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Log container width when the container is clicked
    container.addEventListener('click', () => {
        console.log('Current container width:', container.offsetWidth);
    });

    // Dark mode toggle
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });

    // Font size buttons
    const increaseFontSize = document.getElementById('increase-font-size');
    const decreaseFontSize = document.getElementById('decrease-font-size');
    let currentFontSize = 100; // Percentage of font size

    increaseFontSize.addEventListener('click', () => {
        currentFontSize += 10;
        document.documentElement.style.fontSize = `${currentFontSize}%`;
    });

    decreaseFontSize.addEventListener('click', () => {
        if (currentFontSize > 100) {
            currentFontSize -= 10;
            document.documentElement.style.fontSize = `${currentFontSize}%`;
        }
    });

    // Print viewport dimensions to the console on resize
    window.addEventListener('resize', () => {
        console.log('Viewport width:', window.innerWidth, 'height:', window.innerHeight);
    });
});
