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

    // Mostrar el resultado en el elemento HTML correspondiente de salario por dia
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

    // Mostrar el total de salarios en el elemento HTML correspondiente del total de salarios
    document.getElementById('totalSalarios').textContent = 'Total de Salarios: $' + totalSalarios.toLocaleString();
}

/*
    // Calcular bonificaciones, comisiones, incentivos (pueden depender de ciertas condiciones)
    var bonificacion = calcularBonificacion(); // Función para calcular bonificaciones
    var comision = calcularComision(); // Función para calcular comisiones
    var incentivo = calcularIncentivo(); // Función para calcular incentivos

    // Sumar bonificaciones, comisiones e incentivos al salario total
    totalSalarios += bonificacion + comision + incentivo;

    // Calcular deducciones (impuestos, seguro médico, planes de jubilación, etc.)
    var deduccionImpuestos = calcularImpuestos(); // Función para calcular impuestos
    var deduccionSeguroMedico = calcularSeguroMedico(); // Función para calcular seguro médico
    var deduccionJubilacion = calcularJubilacion(); // Función para calcular planes de jubilación, etc.

    // Restar deducciones del salario total
    totalSalarios -= deduccionImpuestos + deduccionSeguroMedico + deduccionJubilacion;

    // Determinar el período de pago y calcular el salario total según el período (por hora, semanal, quincenal o mensual)
    var salarioTotalPeriodo = calcularSalarioTotalSegunPeriodo(totalSalarios); // Función para calcular el salario total según el período

    // Verificar el cumplimiento de leyes y regulaciones laborales donde se agregaria una funcion para calcularlos
    //dependiendo de la empresa

    // Calcular el salario total sumando bonificaciones, comisiones, incentivos y restando deducciones
    document.getElementById('totalSalarios').textContent = 'Total de Salarios: $' + salarioTotalPeriodo.toLocaleString();
*/

// Función para calcular el salario total según el período de pago
/*
function calcularSalarioTotalSegunPeriodo(salarioTotal) {
    var periodoPago = document.getElementById("periodoPago").value;
    var salarioTotalPeriodo;

    switch (periodoPago) {
        case "hora":
            salarioTotalPeriodo = salarioTotal; // El salario total ya está en base a horas trabajadas
            break;
        case "semanal":
            salarioTotalPeriodo = salarioTotal * 7; // Multiplicar por días laborales en una semana
            break;
        case "quincenal":
            salarioTotalPeriodo = salarioTotal * 14; // Multiplicar por días laborales en dos semanas
            break;
        case "mensual":
            salarioTotalPeriodo = salarioTotal * 30; // Multiplicar por días laborales en un mes
            break;
        default:
            salarioTotalPeriodo = salarioTotal;
            break;
    }

    return salarioTotalPeriodo;
}
*/

