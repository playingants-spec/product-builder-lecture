document.getElementById('generate').addEventListener('click', () => {
    const numbers = [];
    while (numbers.length < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    numbers.sort((a, b) => a - b);
    const numberElements = document.querySelectorAll('.number');
    numberElements.forEach((element, index) => {
        element.textContent = numbers[index];
    });
});
