const nomeInput = document.querySelector("#name");
const paletaInput = document.querySelector("#palette");

async function adicionarEscola () {
    const cabecalho = {
        "Content-type": "application/json; charset=UTF-8",
        "Accept": "application/json"
    }
    
    const corpo = {
        "name": nomeInput.value,
        "palette": paletaInput.value
    }
    
    const minhaEstrutura = {
        "method": "POST", // Método
        "headers": cabecalho, // Cabeçalho
        "body": JSON.stringify(corpo) // Corpo
    }
    
    const resposta = function(resp) { 
        return resp.text(); // escola criada com sucesso!
    }

    const escola = await fetch("http://localhost:8080/school/save", minhaEstrutura).then(resposta);
    console.log(escola);
}

async function getEscolas() {
    const cabecalho = {
        "Content-type": "application/json; charset=UTF-8",
        "Accept": "application/json"
    }
    
    const minhaEstrutura = {
        "method": "GET", // Método
        "headers": cabecalho, // Cabeçalho
    }
    
    const resposta = function(resp) { 
        return resp.json(); // escola criada com sucesso!
    }
    
    const escola = await fetch("http://localhost:8080/school", minhaEstrutura).then(resposta);
    
    const schoolBox = document.querySelector(".escolas-wrapper");
    for (const item of escola) {
        const schoolCard = document.createElement("ul");
        schoolCard.classList.add("school-card");

        const nameP = document.createElement("li");
        nameP.innerHTML = item.name + " - " + item.palette;

        schoolCard.appendChild(nameP);
        schoolBox.appendChild(schoolCard);
    }
}

const botao = document.querySelector(".send-button");
botao.addEventListener("click", adicionarEscola);

const escolas = getEscolas();
