const discountOne = "40% de descuento";
const discountTwo = "60% de descuento";

const password = (usuario) => {
    let pass = "";

    while (pass == "" || pass == null) {
        pass = prompt(`Ingrese su Contraseña ${usuario}`);


    }

    alert(`Registrado con Éxito ${usuario}!`)

}

const registrar = () => {

    let usuario = "";

    while (usuario == "" || usuario == null) {

        usuario = prompt(`¿Cuál es su Usuario?`)

    }
    password(usuario);

}


const bienvenido = () => {
    alert("¡¡Bienvenido colega!!")

    let respuesta = prompt(`¿Con cuánta variedad de desayunos contamos actualmente?
    
    6
    4
    `);

    while (respuesta.toLowerCase() != "6" && respuesta != 1) {

        alert("Averigua en nuestra página. Gracias.");

        respuesta = prompt(`¿Con cuánta variedad de desayunos contamos actualmente?
    
    6
    4
    `);


    }

}

function oneDiscount(adults, kids) {
    let total = adults + kids;
    if (adults <= 0 && kids !== 0) {
        alert('No puede hacer entrega para solo niños');
    }
    else if (total > 6) {
        alert('Sobrepasa la cantidad (6 personas), eliga la segunda opción para más envios');
    }
    else if (total <= 6) {
        alert(`Obtendrás: $${discountOne}`);
    }
    else (total <= 6)
    { register(); }

    return total;
}

function twoDiscount(adults, kids) {
    let total = adults + kids;
    if (adults <= 0 && kids !== 0) {
        alert('No se puede hacer entrega para solo niños');
    }
    else if (total > 12) {

        alert('Sobrepasa el limite de 12, la promoción es hasta máximo 12 desayunos');
    }
    else if (total <= 12) {
        alert(`Obtendrás: $${discountTwo}`);
    }
    else (total <= 12)
    { main(); }
    return total;
}

function showTotal(total) {
    if (total <= 7 || total <= 13) {
        alert(`El total de envios integrados es : ${total}`);
    }
}

function showMenu(menu) {
    let userOrders = prompt('¿Para quienes van a ser los desayunos en el 2023?');
    alert(`Excelente, para ${userOrders.toUpperCase()} tenemos disponible...`);

    let options = prompt(`Eliga la opción más acorde...\n \n 1. Desayunos Sorpresas (hasta 6 en el próximo año) \n 2. Desayunos Sorpresas (hasta 12 en el próximo año) `);
    return options;
}

function quotation() {
    let selectedOption = showMenu();
    while (selectedOption !== '') {
        if (!isNaN(selectedOption !== '')) {
            let adults = parseInt(prompt('Ingrese el número de adultos'));
            let kids = parseInt(prompt('Ingrese el número de niños'));
            selectedOption = parseInt(selectedOption);


            switch (selectedOption) {
                case 1:
                    let totalOne = oneDiscount(adults, kids);
                    showTotal(totalOne);
                    break;
                case 2:
                    let totalTwo = twoDiscount(adults, kids);
                    showTotal(totalTwo);
                    break;
                default:
                    alert('Ingrese la opción 1, 2 o 3 para continuar');
                    break;
            }
        } else {
            alert('Opción no válida');
        }
        selectedOption = showMenu();
    }
}

const openCodigo = () => {
    let codigo = prompt("Bienvenido cliente, ingrese código para averiguar beneficios");

    while (codigo != "desayunossecretos") {

        codigo = prompt("Usted no es cliente actualmente")
    }

}

const main = () => {
    openCodigo();
    bienvenido();
    registrar();
    quotation();

}
main();
