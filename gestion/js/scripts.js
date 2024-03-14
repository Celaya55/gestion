// scripts.js

function calcularHorasExtra() {
    var horasExtraTrabajadas = parseFloat(document.getElementById("horasextra").value);
    const extra = 35;
    var totalHorasExtra = horasExtraTrabajadas * extra;

    // Calcular el salario total con horas extra
    var totalSalario = parseFloat(document.getElementById("resultado").innerText.split(": ")[1]);
    var salarioConExtra = totalSalario + totalHorasExtra;

    // Mostrar el resultado en el elemento HTML correspondiente
    document.getElementById("resultado1").innerText = "Salario por día (incluyendo horas extra): " + salarioConExtra;
}

function calcularSalario() {
    var horasTrabajadas = parseFloat(document.getElementById("numero").value);
    var comboBox = document.getElementById("puesto");
    var puestoSeleccionado = comboBox.value;

    var salarioHora;

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
    var totalSalario = horasTrabajadas * salarioHora;

    // Mostrar el resultado en el elemento HTML correspondiente
    document.getElementById("resultado").innerText = "Salario por día: " + totalSalario;

    // Llamar a calcularHorasExtra para actualizar el salario con horas extra
    calcularHorasExtra();
}
function calcularTotalSalarios() {
    var filas = document.querySelectorAll('table tr');
    var totalSalarios = 0;

    for (var i = 1; i < filas.length; i++) {
      var salario = filas[i].querySelector('td:nth-child(4)').textContent;
      salario = salario.replace('$', '').replace(',', '');
      totalSalarios += parseInt(salario);
    }

    document.getElementById('totalSalarios').textContent = 'Total de Salarios: $' + totalSalarios.toLocaleString();
  }