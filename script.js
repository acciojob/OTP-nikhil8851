
const codes = document.querySelectorAll('.code');

codes.forEach((code, index) => {
    code.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && index !== 0) {
            codes[index - 1].focus();
        }
    });

    code.addEventListener('input', () => {
        if (code.value.length === 1 && index < codes.length - 1) {
            codes[index + 1].focus();
        }
    });
});
