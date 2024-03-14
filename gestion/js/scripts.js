// scripts.js

function calcularHorasExtra() {
    let horasExtraTrabajadas = parseFloat(document.getElementById("horasextra").value);
    const extra = 35;
    let totalHorasExtra = horasExtraTrabajadas * extra;

    // Calcular el salario total con horas extra
    let totalSalario = parseFloat(document.getElementById("resultado").innerText.split(": ")[1]);
    let salarioConExtra = totalSalario + totalHorasExtra;

    // Mostrar el resultado en el elemento HTML correspondiente
    document.getElementById("resultado1").innerText = "Salario por día (incluyendo horas extra): " + salarioConExtra;
}

function calcularSalario() {
    let horasTrabajadas = parseFloat(document.getElementById("numero").value);
    let comboBox = document.getElementById("puesto");
    let puestoSeleccionado = comboBox.value;

    let salarioHora;

    switch (puestoSeleccionado) {
        case "ingeniero":
            salarioHora = 80; // Salario por hora para ingeniero
            break;
        case "analista":
            salarioHora = 18; // Salario por hora para analista
            break;
        case "gerente":
            salarioHora = 25; // Salario por hora para gerente
            break;
        case "asistente":
            salarioHora = 15; // Salario por hora para asistente
            break;
        default:
            salarioHora = 0;
            break;
    }

    // Calcular el salario total
    let totalSalario = horasTrabajadas * salarioHora;

    // Mostrar el resultado en el elemento HTML correspondiente
    document.getElementById("resultado").innerText = "Salario por día: " + totalSalario;

    // Llamar a calcularHorasExtra para actualizar el salario con horas extra
    calcularHorasExtra();
}
function calcularTotalSalarios() {
    let filas = document.querySelectorAll('table tr');
    let totalSalarios = 0;

    for (let i = 1; i < filas.length; i++) {
      let salario = filas[i].querySelector('td:nth-child(4)').textContent;
      salario = salario.replace('$', '').replace(',', '');
      totalSalarios += parseInt(salario);
    }

    document.getElementById('totalSalarios').textContent = 'Total de Salarios: $' + totalSalarios.toLocaleString();
  }