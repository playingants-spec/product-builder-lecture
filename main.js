// Lotto Generation Logic
const generateButton = document.getElementById('generate');
const numberElements = document.querySelectorAll('.number');

function generateNumbers() {
    const numbers = [];
    while (numbers.length < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    numbers.sort((a, b) => a - b);
    
    numberElements.forEach((element, index) => {
        // Reset animation
        element.style.animation = 'none';
        element.offsetHeight; // trigger reflow
        element.style.animation = null;
        
        // Update content with a slight delay for each number
        setTimeout(() => {
            element.textContent = numbers[index];
        }, index * 100);
    });
}

generateButton.addEventListener('click', generateNumbers);

// Theme Switching Logic
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const htmlElement = document.documentElement;

function setTheme(theme) {
    if (theme === 'dark') {
        htmlElement.setAttribute('data-theme', 'dark');
        themeIcon.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        htmlElement.removeAttribute('data-theme');
        themeIcon.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
}

// Check for saved theme or system preference
const savedTheme = localStorage.getItem('theme');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
    setTheme('dark');
}

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        setTheme('light');
    } else {
        setTheme('dark');
    }
});
