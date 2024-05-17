document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores do formulário
    var id = document.getElementById("id").value;
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;

    // Cria um objeto para representar o produto
    var produto = {
        id: id,
        nome: nome,
        telefone: telefone
    };

    // Verifica se a sessionStorage é suportada pelo navegador
    if (typeof(Storage) !== "undefined") {
        // Verifica se já existe algum dado na sessionStorage
        if (sessionStorage.getItem("produtos")) {
            // Se existir, obtém os dados atuais e converte para um array JavaScript
            var produtosArray = JSON.parse(sessionStorage.getItem("produtos"));
            // Adiciona o novo produto ao array
            produtosArray.push(produto);
            // Salva o array atualizado na sessionStorage
            sessionStorage.setItem("produtos", JSON.stringify(produtosArray));
        } else {
            // Se não existir, cria um novo array com o produto e salva na sessionStorage
            var novoArray = [produto];
            sessionStorage.setItem("produtos", JSON.stringify(novoArray));
        }

        // Limpa os campos do formulário após o cadastro
        document.getElementById("cadastroForm").reset();

        // Mensagem de sucesso
        alert("Produto cadastrado com sucesso!");

        location.reload();
    } else {
        // Se o navegador não suportar sessionStorage, exibe uma mensagem de erro
        alert("Seu navegador não suporta a sessionStorage. Não é possível salvar os dados.");
    }

    
});