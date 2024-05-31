document.addEventListener("DOMContentLoaded", function() {
    const pesoSlider = document.getElementById("peso");
    const alturaSlider = document.getElementById("altura");
    const pesoValue = document.getElementById("peso-value");
    const alturaValue = document.getElementById("altura-value");
    const calcularButton = document.getElementById("calcular");
    const resultadoDiv = document.getElementById("resultado");
    const imcBar = document.getElementById("imc-bar");
    const descripcionDiv = document.getElementById("descripcion");

    pesoSlider.oninput = function() {
        pesoValue.textContent = this.value;
    }

    alturaSlider.oninput = function() {
        alturaValue.textContent = this.value;
    }

    calcularButton.onclick = function() {
        const peso = parseFloat(pesoSlider.value);
        const altura = parseFloat(alturaSlider.value) / 100;
        const imc = (peso / (altura * altura)).toFixed(2);

        resultadoDiv.textContent = `Tu IMC es ${imc}`;

        let descripcion = "";
        let imcLevel = parseFloat(imc);

        if (imcLevel < 18.5) {
            descripcion = "Bajo peso";
        } else if (imcLevel >= 18.5 && imcLevel < 24.9) {
            descripcion = "Peso normal";
        } else if (imcLevel >= 25 && imcLevel < 29.9) {
            descripcion = "Sobrepeso";
        } else {
            descripcion = "Obesidad";
        }

        descripcionDiv.textContent = `Resultado: ${descripcion}`;

        // Actualizar posición de la barra de IMC
        const porcentaje = Math.min(Math.max((imcLevel - 10) / 40 * 100, 0), 100);
        imcBar.style.width = porcentaje + "%";
        imcBar.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
    }
});
