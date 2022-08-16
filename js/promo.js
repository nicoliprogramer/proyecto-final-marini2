let codigo = prompt("Bienvenido cliente, ingrese código para averiguar beneficios");
let limite = 0;

while (codigo != "desayunossecretos") {
    alert("Usted no es cliente actualmente")
    if (limite === 2) {
        break;
    }
    limite++;
    codigo = prompt("Intentelo de nuevo...")
}

if (limite === 2) {
    alert("Todavia no cuentas con beneficios, escríbenos para averiguarlos")
} else {
    alert("¡¡Bienvenido colega, te comentamos tus beneficos!!")
}


const password = (usuario) => {
    console.log("Password");
    let pass = "";

    while (pass == "" || pass == null) {
        pass = prompt(`Ingrese su Contraseña ${usuario}`);

        if (pass != "" && usuario != null) {
            alert(`Registrado con Éxito ${usuario}!`)
            break;
        }
    }
}

const registro = () => {

    let usuario = "";

    while (usuario == "" || usuario == null) {

        usuario = prompt(`¿Cuál es su Usuario?`)

        if (usuario != "" && usuario != null) {
            alert(`Cliente ${usuario}`)
            password(usuario);

            break;
        }


    }

}


const bienvenido = () => { }

alert("Antes que nada...");

let respuesta = prompt(`¿Con cuánta variedad de desayunos contamos actualmente?
    
    6
    4
    `);


if (respuesta.toLowerCase() == "6" || parseInt(respuesta) == 1) {

    registro();

} else {

    alert("Averigua en nuestra página. Gracias.");

}

let worthOne = "40% de descuento";
let worthTwo = "60% de descuento";

let userOrders = prompt('¿Para quienes van a ser los desayunos en el 2023?');
alert(`Excelente, para ${userOrders.toUpperCase()} tenemos disponible...`);

class User {
    constructor(name, lastName, age) {
        this.name = name.toUpperCase();
        this.lastName = lastName.toUpperCase();
        this.age = age;
    }
}

// funciones

function oneDept(adults, kids) {
    let total = adults + kids;
    if (adults <= 0 && kids !== 0) {
        alert('No puede hacer entrega para solo niños');
    }
    else if (total > 6) {
        alert('Sobrepasa la cantidad (6 personas), eliga la segunda opción para más envios');
    }
    else if (total <= 6) {
        alert(`Obtendrás: $${worthOne}`);
    }
    else (total <= 6)
    { main(); }

    return total;
}

function twoDept(adults, kids) {
    let total = adults + kids;
    if (adults <= 0 && kids !== 0) {
        alert('No se puede hacer entrega para solo niños');
    }
    else if (total > 12) {

        alert('Sobrepasa el limite de 12, la promoción es hasta máximo 12 desayunos');
    }
    else if (total <= 12) {
        alert(`Obtendrás: $${worthTwo}`);
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
                    let totalOne = oneDept(adults, kids);
                    showTotal(totalOne);
                    break;
                case 2:
                    let totalTwo = twoDept(adults, kids);
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

quotation();
