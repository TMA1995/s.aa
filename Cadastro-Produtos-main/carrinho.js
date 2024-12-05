function exibirCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    const listaCarrinho = document.getElementById('listaCarrinho');

    listaCarrinho.innerHTML = '';  // Limpa a lista para que a exibição seja atualizada.

    // Se o carrinho estiver vazio, exibe uma mensagem e retorna para não tentar criar elementos, caso o seu carrinho seja fixo na tela, desconsiderar
    if (carrinho.length === 0) {
        listaCarrinho.innerHTML = 'Seu carrinho está vazio!';
        return;
    }

    // Itera sobre os itens do carrinho (cada item é um produto).
    for (let i in carrinho) {
        const produto = carrinho[i];  // Acessa o produto na posição 'i' do carrinho.

        const li = document.createElement('li');

        // Cria um elemento de imagem (<img>) para mostrar a foto do produto.
        const img = document.createElement('img');
        img.src = produto.urlImage;  // Define o URL da imagem do produto.
        img.style.margin = '10px';  
        img.style.width = '50px';    
        img.style.height = 'auto';   

        // Adiciona o nome, preço e descrição do produto ao texto do item da lista.
        li.textContent = `${produto.nome} - R$${produto.preco} - ${produto.descricao}`;

        // Cria um botão "Remover" que permite remover o produto do carrinho.
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remover';  // Define o texto do botão.
        removeBtn.classList.add('remove-from-cart-btn');  // CSS para estilizar esse botão.

        // Ao clicar no botão "Remover", a função removerDoCarrinho é chamada para remover o produto.
        removeBtn.onclick = () => removerDoCarrinho(i);  // 'i' é o índice do produto no carrinho.

        // Adiciona a imagem e o botão de remoção ao item da lista (<li>).
        li.appendChild(img);
        li.appendChild(removeBtn);

        // Adiciona o item da lista (<li>) à lista do carrinho na página HTML.
        listaCarrinho.appendChild(li);
    }
}

function removerDoCarrinho(index) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    // Remove o produto do carrinho baseado no índice fornecido (index).
    carrinho.splice(index, 1); // O método splice remove o item na posição "index" do array (1 item é removido).

    localStorage.setItem('carrinho', JSON.stringify(carrinho)); // Armazena novamente o carrinho no localStorage.

    // 4. Chama a função exibirCarrinho() para atualizar e exibir o carrinho modificado.
    exibirCarrinho();  
}
