const addTaskBtn = document.getElementById("addTaskBtn");
const texto = document.getElementById("taskInput").value;
const taskList = document.getElementById("taskList")

let minhasTarefas = []

const dadosSalvos = localStorage.getItem("tarefasSalvas")
if (dadosSalvos !== null){
    minhasTarefas = JSON.parse(dadosSalvos);
    minhasTarefas.forEach(function(tarefaTexto){
        const novoItem = document.createElement("li");
        novoItem.textContent = tarefaTexto;
        taskList.appendChild(novoItem);
    });
}

addTaskBtn.addEventListener("click", function(){
    const texto = taskInput.value;

    if (texto === ""){
        alert("Acho que você prescisa escrever alguma coisa...");
        return

    } else{
        const novoItem = document.createElement("li");
        novoItem.textContent = texto;
        taskList.appendChild(novoItem);

        minhasTarefas.push(texto);

        const listaEmTexto = JSON.stringify(minhasTarefas);
        localStorage.setItem("tarefasSalvas", listaEmTexto);

        

        taskInput.value = "";
    } 
})