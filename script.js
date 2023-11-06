function calcular() {
    // Buscar Valores ao input do html
    const valor = parseFloat(document.getElementById('valor').value);
    const base = parseFloat(document.getElementById('base').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const idadeAnos = parseFloat(document.getElementById('idadeAnos').value);
    const idadeDiasInput = parseFloat(document.getElementById('idadeDias').value);
    const valorProduto = parseFloat(document.getElementById('valorProduto').value);
    const numero = parseFloat(document.getElementById('numero').value);
    const raio = parseFloat(document.getElementById('raio').value);

    // Verificar se algum campo está vazio ou não é um número
    if (isNaN(valor) || isNaN(base) || isNaN(altura) || isNaN(idadeDiasInput) || isNaN(valorProduto) || isNaN(numero) || isNaN(raio)) {
        alert("Por favor, preencha todos os campos com números.");
        return;
    }
    // Calcular sucessor e antecessor
    const sucessor = valor + 1;
    const antecessor = valor - 1;

    // Calcular área e perímetro do retângulo
    const area = base * altura;
    const perimetro = 2 * (base + altura);

    // Calcular idade em dias
    const idadeDias = idadeAnos * 365;

    // Calcular idade em anos com um número decimal
    const idadeAnosDecimal = idadeDiasInput / 365;

    // Calcular valor com 10% de desconto
    const valorComDesconto = valorProduto * 0.9;

    // Calcular metade, dobro, quadrado e cubo
    const metade = numero / 2;
    const dobro = numero * 2;
    const quadrado = numero * numero;
    const cubo = numero ** 3;

    // Calcular perimetro e area do circulo
    const perimetroCirculo = 2 * Math.PI * raio;
    const areaCirculo = Math.PI * Math.pow(raio, 2);

    // Mostrar resultados na consola
    console.log("Resultados:");
    console.log("Sucessor e Antecessor do Valor: Sucessor =", sucessor, "Antecessor =", antecessor);
    console.log("Área/Períemtro: Área do retângulo =", area, "Perímetro do retângulo =", perimetro);
    console.log("Idade de anos para dias: Idade em dias =", idadeDias);
    console.log("Idade de dias para anos: Idade em anos =", idadeAnosDecimal.toFixed(1));
    console.log("Desconto do produto: Valor com 10% de desconto =", valorComDesconto);
    console.log("Metade/dobro/quadrado/cubo do número: Metade =", metade, "Dobro =", dobro, "Quadrado =", quadrado, "Cubo =", cubo);
    console.log("Perímetro e Área do círculo: Perímetro =", perimetroCirculo.toFixed(2), "Área =", areaCirculo.toFixed(2));

    // Mostrar resultados em elementos HTML
    document.getElementById('outputHTML').innerHTML = `
          <p>Sucessor e Antecessor do Valor: Sucessor = ${sucessor}, Antecessor = ${antecessor}</p>
          <p>Área/Períemtro: Área do retângulo = ${area}, Perímetro do retângulo = ${perimetro}</p>
          <p>Idade de anos para dias: Idade em dias = ${idadeDias}</p>
          <p>Idade de dias para anos: Idade em anos = ${idadeAnosDecimal.toFixed(1)}</p>
          <p>Desconto do produto: Valor com 10% de desconto = ${valorComDesconto}</p>
          <p>Metade/dobro/quadrado/cubo do número: Metade = ${metade}, Dobro = ${dobro}, Quadrado = ${quadrado}, Cubo = ${cubo}</p>
          <p>Perímetro e Área do círculo: Perímetro = ${perimetroCirculo.toFixed(2)}, Área = ${areaCirculo.toFixed(2)}</p>
      `;
}