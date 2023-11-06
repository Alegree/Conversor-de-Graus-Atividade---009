function converterTemperatura() {
    // Obter valores do formulário
    const temperatura = parseFloat(prompt("Digite a temperatura:"));
    const escala = prompt("Escolha a escala (celsius, fahrenheit, kelvin):");


    // Verificação de valores
    if (isNaN(temperatura)) {
        alert("Por favor, digite um valor de temperatura e a respetiva escala.");
        return
    }
    if ((escala === 'kelvin' && temperatura < 0) || (escala === 'celsius' && temperatura <= -273.15) || (escala === 'fahrenheit' && temperatura <= -459.67)) {

        alert("Digite um valor válido, não existe esse valor")
        return;
    }
    // Converter temperatura
    let resultado;
    switch (escala) {
        case 'celsius':
            resultado = {
                fahrenheit: (temperatura * 1.8) + 32,
                kelvin: temperatura + 273.15
            };
            break;
        case 'fahrenheit':
            resultado = {
                celsius: (temperatura - 32) / 1.8,
                kelvin: (temperatura - 32) / 1.8 + 273.15
            };
            break;
        case 'kelvin':
            resultado = {
                celsius: temperatura - 273.15,
                fahrenheit: (temperatura - 273.15) * 1.8 + 32
            };
            break;
        default:
            alert("Escala inválida. Escolha entre celsius, fahrenheit, ou kelvin.");
            return;
    }

    // Exibir resultado na página
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p>${temperatura.toFixed(2)} graus ${escala} é equivalente a:</p>
        <ul>
          ${resultado.celsius ? `<li>${resultado.celsius.toFixed(2)} graus Celsius</li>` : ''}
          ${resultado.fahrenheit ? `<li>${resultado.fahrenheit.toFixed(2)} graus Fahrenheit</li>` : ''}
          ${resultado.kelvin ? `<li>${resultado.kelvin.toFixed(2)} graus Kelvin</li>` : ''}
        </ul>
      `;

    updateBackground(temperatura, escala); // Atualizar cor de fundo com base na temperatura e escala
}

function updateBackground(temperatura, escala) {
    const body = document.body;

    if ((escala === 'celsius' && temperatura <= 10) ||
        (escala === 'fahrenheit' && temperatura <= 50) ||
        (escala === 'kelvin' && temperatura <= 283.15)) {
        body.style.backgroundColor = '#3498db'; // Azul no caso de frio
    } else if ((escala === 'celsius' && temperatura >= 30) ||
        (escala === 'fahrenheit' && temperatura >= 86) ||
        (escala === 'kelvin' && temperatura >= 303.15)) {
        body.style.backgroundColor = '#e74c3c'; // Vermelho no caso de quente
    } else {
        body.style.backgroundColor = '#f39c12'; // Amarelo no caso de ameno
    }
}
