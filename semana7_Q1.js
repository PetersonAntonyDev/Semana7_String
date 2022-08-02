function createList(numero, nome) {
    var i;
    const ul = document.querySelector('#lista');
    const item = document.querySelector('#items').value;
    const number = document.querySelector('#qtd').value;
    
    for (i = 0; i < number; i++) {

        const list = document.createElement("li");
        list.appendChild(document.createTextNode(item));
        list.classList.add("liCreat")
        ul.appendChild(list);

    }
}

function clean() {
    document.getElementById("lista").innerHTML = "";
}

