// JavaScript for Calculator

// Selecting the display element
const display = document.getElementById('display');

// Adding click event listeners to all number and operator buttons
const buttons = document.querySelectorAll('.btn-number, .btn-operator');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;
    display.textContent += buttonText;
  });
});

// Adding click event listener to the equal button
const equalButton = document.getElementById('equal');
equalButton.addEventListener('click', () => {
  try {
    const result = eval(display.textContent); // Using eval for simplicity
    display.textContent = result;
  } catch (error) {
    display.textContent = 'Error';
  }
});

// Adding click event listener to the clear button
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => {
  display.textContent = '';
});

// Adding click event listener to the backspace button
const backspaceButton = document.getElementById('backspace');
backspaceButton.addEventListener('click', () => {
  display.textContent = display.textContent.slice(0, -1);
});

// Adding click event listener to the dark mode toggler
const darkModeToggler = document.querySelector('.toggler');
darkModeToggler.addEventListener('click', () => {
  document.body.classList.toggle('darkmode');
});
