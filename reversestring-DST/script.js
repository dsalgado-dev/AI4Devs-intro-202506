// script.js - L�gica para invertir cadenas de texto en tiempo real

// Funci�n para invertir una cadena de texto
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Funci�n para actualizar el contador de caracteres
function updateCharCount(count) {
    const charCountElement = document.getElementById('charCount');
    charCountElement.textContent = `${count} caracteres`;
}

// Funci�n para procesar el input y mostrar el resultado
function processInput() {
    const inputElement = document.getElementById('inputText');
    const outputElement = document.getElementById('reversedText');
    const inputValue = inputElement.value;
    const charCount = inputValue.length;
    
    // Actualizar contador de caracteres
    updateCharCount(charCount);
    
    // Verificar si tiene m�s de 3 caracteres
    if (charCount >= 3) {
        const reversedString = reverseString(inputValue);
        outputElement.textContent = reversedString;
        outputElement.style.opacity = '1';
        outputElement.style.transform = 'translateY(0)';
    } else {
        // Mostrar mensaje cuando hay menos de 3 caracteres
        if (charCount === 0) {
            outputElement.textContent = 'Ingresa al menos 3 caracteres para ver el resultado...';
        } else {
            outputElement.textContent = `Necesitas ${3 - charCount} caracteres m�s...`;
        }
        outputElement.style.opacity = '0.7';
        outputElement.style.transform = 'translateY(-5px)';
    }
}

// Funci�n para inicializar los eventos cuando el DOM est� listo
function initializeApp() {
    const inputElement = document.getElementById('inputText');
    
    if (inputElement) {
        // Agregar event listeners para capturar cambios en tiempo real
        inputElement.addEventListener('input', processInput);
        inputElement.addEventListener('keyup', processInput);
        inputElement.addEventListener('paste', () => {
            // Peque�o delay para que el paste se procese
            setTimeout(processInput, 10);
        });
        
        // Procesar input inicial (por si hay texto pre-cargado)
        processInput();
        
        // Enfocar el input al cargar la p�gina
        inputElement.focus();
        
        console.log('? Inversor de cadenas inicializado correctamente');
    } else {
        console.error('? Error: No se encontr� el elemento input');
    }
}

// Esperar a que el DOM est� completamente cargado
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    // El DOM ya est� cargado
    initializeApp();
}

// Funci�n adicional para testing (opcional)
function testReverseFunction() {
    const testCases = [
        { input: 'AI4Devs', expected: 'sveD4IA' },
        { input: 'JavaScript', expected: 'tpircSavaJ' },
        { input: 'Hello World!', expected: '!dlroW olleH' },
        { input: '12345', expected: '54321' }
    ];
    
    console.log('?? Ejecutando tests de la funci�n reverseString:');
    
    testCases.forEach((test, index) => {
        const result = reverseString(test.input);
        const passed = result === test.expected;
        console.log(`Test ${index + 1}: ${passed ? '?' : '?'} "${test.input}" ? "${result}" ${passed ? '' : `(esperado: "${test.expected}")`}`);
    });
}

// Ejecutar tests al cargar (comentar esta l�nea en producci�n)
// testReverseFunction();
