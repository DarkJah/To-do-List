/* 
      Lista de Tarefas
[1] Saber Quando o Botão foi Clicado ✅
[2] Pegar o Texto dentro do Input ✅
[3] Colocar o Texto na Tela ✅
[4] Deletar Tarefa da Tela 

*/

function adicionarTarefa() {
    // 1. Obtém o valor do campo de entrada (input) e armazena na variável 'valorDoInput'
    let valorDoInput = document.querySelector("input").value;

    // 2. Cria um novo item de lista (li)
    let li = document.createElement('li');

    // 3. Define o conteúdo do item de lista:
    // - O valor do input é o texto da tarefa
    // - Adiciona um ícone ❌ com um evento onclick para remover o item
    li.innerHTML = valorDoInput + '<span onclick="deletarTarefa(this)">❌</span>';

    // 4. Adiciona o novo item de lista (li) à lista existente (ul)
    document.querySelector("ul").appendChild(li);

    // 5. Limpa o campo de entrada (input) após adicionar a tarefa
    document.querySelector("input").value = "";
}

function deletarTarefa(span) {
    // 1. Remove o item de lista (li) que contém o ícone ❌ clicado
    // 'span.parentElement' refere-se ao elemento <li> que contém o <span>
    span.parentElement.remove();
}



   

