// Função para exibir produtos cadastrados na página inicial como cards
function exibirProduto() {
    // 1. Recupera os produtos armazenados no localStorage, ou um array vazio se não houver produtos salvos
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];

    // 2. Seleciona o elemento HTML onde os produtos serão exibidos (ul com id "listaProdutos")
    const listaProdutos = document.getElementById('listaProdutos');
    
    // 3. Limpa o conteúdo atual da lista para evitar duplicação de produtos quando a página é recarregada
    listaProdutos.innerHTML = '';

    // 4. Percorre cada produto no array "produtos" e cria um card para exibi-lo
    for (let produto of produtos) {
        // 5. Cria um elemento <li> que servirá como o card do produto
        const li = document.createElement('li');
        li.classList.add('produto-item'); // Adiciona uma classe para aplicar o estilo de card

        // 6. Cria um elemento <img> para exibir a imagem do produto e define o src e o texto alternativo (alt)
        const img = document.createElement('img');
        img.src = produto.urlImage; // Define a URL da imagem do produto
        img.alt = produto.nome; // Define o nome do produto como texto alternativo da imagem
        img.classList.add('produto-img'); // Classe para aplicar o estilo da imagem

        // 7. Cria um parágrafo <p> para exibir o nome do produto
        const nome = document.createElement('p');
        nome.textContent = produto.nome; // Define o texto como o nome do produto

        // 8. Cria um parágrafo <p> para exibir o preço do produto, adicionando a palavra "Preço:"
        const preco = document.createElement('p');
        preco.innerHTML = `<span>Preço:</span> R$${produto.preco}`; // Define o texto como "Preço: R$" seguido pelo valor

        // 9. Cria um parágrafo <p> para exibir a descrição do produto, com a palavra "Descrição:"
        const descricao = document.createElement('p');
        descricao.innerHTML = `<span>Descrição:</span> ${produto.descricao}`; // Define o texto como "Descrição:" seguido pela descrição

        // 10. Cria o botão "Adicionar ao Carrinho"
        const addToCartBtn = document.createElement('button');
        addToCartBtn.textContent = 'Adicionar ao Carrinho'; // Texto do botão
        addToCartBtn.classList.add('add-to-cart-btn'); // Adiciona uma classe para estilizar o botão
        addToCartBtn.onclick = () => adicionarAoCarrinho(produto); // Chama a função para adicionar o produto ao carrinho

        // 11. Adiciona a imagem, o nome, o preço, a descrição e o botão ao elemento <li> (card)
        li.appendChild(img);
        li.appendChild(nome);
        li.appendChild(preco);
        li.appendChild(descricao);
        li.appendChild(addToCartBtn); // Adiciona o botão de adicionar ao carrinho

        // 12. Adiciona o card (li) à lista de produtos (ul) na página
        listaProdutos.appendChild(li);
    }
}

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(produto) {
    // 1. Recupera os produtos do carrinho no localStorage, ou um array vazio se não houver carrinho salvo
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // 2. Verifica se o produto já existe no carrinho
    const produtoExistente = carrinho.find(p => p.nome === produto.nome);

    if (produtoExistente) {
        alert('Este produto já foi adicionado ao carrinho.');
    } else {
        // 3. Adiciona o produto ao carrinho
        carrinho.push(produto);
        localStorage.setItem('carrinho', JSON.stringify(carrinho)); // Atualiza o localStorage com o novo carrinho
        alert('Produto adicionado ao carrinho!');
    }
}

// Executa a função ao carregar a página inicial
window.onload = exibirProduto;
