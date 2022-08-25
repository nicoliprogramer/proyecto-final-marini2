const discountOne = "40% de descuento";
const discountTwo = "60% de descuento";

const password = async (usuario) => {
    let pass = "";

    while (pass == "" || pass == null) {
        const inputUsuario = await Swal.fire({ title: 'Ingrese su contraseña', input: 'text' })

        pass = inputUsuario.value
        // pass = prompt(`Ingrese su Contraseña ${usuario}`);


    }

    // alert(`Registrado con Éxito ${usuario}!`)
    await Swal.fire(`Registrado con Éxito ${usuario}!`)


}

const registrar = async () => {

    let usuario = "";

    while (usuario == "" || usuario == null) {
        const inputUsuario = await Swal.fire({ title: '¿Cuál es su usuario?', input: 'text' })
        usuario = inputUsuario.value
        // usuario = prompt(`¿Cuál es su Usuario?`)

    }
    password(usuario);

}




async function oneDiscount(adults, kids) {
    let total = adults + kids;
    if (adults <= 0 && kids !== 0) {

        await Swal.fire('No puede hacer entrega para solo niños')
        // alert('No puede hacer entrega para solo niños');
    }
    else if (total > 6) {

        await Swal.fire('Sobrepasa la cantidad (6 personas), eliga la segunda opción para más envios')
        // alert('Sobrepasa la cantidad (6 personas), eliga la segunda opción para más envios');
    }
    else if (total <= 6) {
        await Swal.fire(`Obtendrás: $${discountOne}`)
        // alert(`Obtendrás: $${discountOne} `);
    }

}

async function twoDiscount(adults, kids) {
    let total = adults + kids;
    if (adults <= 0 && kids !== 0) {

        await Swal.fire('No puede hacer entrega para solo niños')
        // alert('No se puede hacer entrega para solo niños');
    }
    else if (total > 12) {

        await Swal.fire('Sobrepasa el limite de 12, la promoción es hasta máximo 12 desayunos')
        // alert('Sobrepasa el limite de 12, la promoción es hasta máximo 12 desayunos');
    }
    else if (total <= 12) {

        await Swal.fire(`Obtendrás: $${discountTwo} `)
        // alert(`Obtendrás: $${discountTwo} `);
    }

}


async function showMenu() {

    let { value: userOrders } = await Swal.fire({ title: '¿Para quienes van a ser los desayunos en el 2023?', input: 'text' })
    console.log(userOrders);
    // let userOrders = prompt('¿Para quienes van a ser los desayunos en el 2023?');

    // alert(`Excelente, para ${userOrders.toUpperCase()} tenemos disponible...`);

    await Swal.fire(`Excelente, para ${userOrders.toUpperCase()} tenemos disponible...`);

    // let options = prompt(`Eliga la opción más acorde...\n \n 1. Desayunos Sorpresas(hasta 6 en el próximo año) \n 2. Desayunos Sorpresas(hasta 12 en el próximo año)`);

    let { value: options } = await Swal.fire({ title: `Eliga la opción más acorde...\n \n 1. Desayunos Sorpresas(hasta 6 en el próximo año) \n 2. Desayunos Sorpresas(hasta 12 en el próximo año)`, input: 'text' })



    return options;
}

async function quotation() {
    let selectedOption = await showMenu();
    console.log("selectedOption", selectedOption);
    while (selectedOption !== '') {
        if (!isNaN(selectedOption !== '')) {

            // let adults = parseInt(prompt('Ingrese el número de adultos'));

            let { value: adults } = await Swal.fire({ title: 'Ingrese el número de adultos', input: 'text' });

            let { value: kids } = await Swal.fire({ title: 'Ingrese el número de niños', input: 'text' });

            adults = parseInt(adults);
            kids = parseInt(kids);
            console.log(adults);
            console.log(kids);

            // selectedOption = parseInt(selectedOption);


            switch (selectedOption) {
                case "1":
                    await oneDiscount(adults, kids);
                    break;
                case "2":
                    await twoDiscount(adults, kids);
                    break;
                default:
                    await Swal.fire('Ingrese 1, 2 o más para continuar')
                    // alert('Ingrese la opción 1, 2 o 3 para continuar');
                    break;
            }

        } else {
            alert('Opción no válida');
        }
        selectedOption = await showMenu();


    }
}

const openCodigo = async () => {
    let { value: codigo } = await Swal.fire({ title: 'Bienvenido cliente, ingrese código para averiguar beneficios', input: 'text' })
    // let codigo = prompt("Bienvenido cliente, ingrese código para averiguar beneficios");

    if (codigo != "desayunossecretos") {

        await Swal.fire({
            icon: 'error',
            title: 'Usted no es cliente actual',
        })
    }

}

const bienvenido = async () => {
    await Swal.fire('¡¡¡Bienvenido colega!!!')

    let { value: respuesta } = await Swal.fire({ title: '¿Con cuánta variedad de desayunos contamos actualmente? ¿6 0 4?', input: 'text' })


    if (respuesta.toLowerCase() != "6" && respuesta != 1) {

        await Swal.fire('Averigua en nuestra página. Gracias.')


        let { value: respuesta } = await Swal.fire({ title: '¿Con cuánta variedad de desayunos contamos actualmente? ¿6 0 4?', input: 'text' })

    }

}
const main = async () => {
    await openCodigo();
    await bienvenido();
    await registrar();
    await password();
    await quotation();

}
main();
