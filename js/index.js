const lista = document.getElementById("lista");


fetch("./data.json", { mode: "no-cors" })
    .then(resp => resp.json())
    .then(preparativos => {
        console.log(preparativos);
        preparativos.forEach(preparativo => {
            const li = document.createElement('li');
            li.innerHTML = `
                <h2>${preparativo.nombre}</h2>
                <p>codigo: ${preparativo.id}</p>
                <p>${preparativo.img}</p>
                <hr/>
            `;
            lista.append(li);
        });
    })