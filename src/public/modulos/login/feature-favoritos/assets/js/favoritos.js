// retorno da API de livros
// Função para alternar a exibição dos filtros
function toggleFiltros() {
    const filtrosAdicionais = document.getElementById('filtrosAdicionais');
    filtrosAdicionais.classList.toggle('hidden');
}

// Função para buscar livros na API com filtros aplicados
function filtrarLivros() {
    const titulo = document.getElementById('searchInput').value;
    const genero = document.getElementById('genreFilter').value;
    const autor = document.getElementById('authorFilter').value;
    const paginasMin = document.getElementById('pagesFilter').value;

    // Construir URL da API com parâmetros de pesquisa
    let url = `https://openlibrary.org/search.json?q=${titulo}`;
    if (genero) {
        url += `&subject=${genero}`;
    }
    if (autor) {
        url += `&author=${autor}`;
    }
    if (paginasMin) {
        url += `&min_pages=${paginasMin}`;
    }

    // Buscar dados na API
    fetch(url)
        .then(response => response.json())
        .then(data => {
            exibirLivros(data.docs);
        })
        .catch(error => console.error('Erro ao buscar livros:', error));
}

// Função para exibir livros na tela
function exibirLivros(livros) {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';

    livros.forEach(livro => {
        const bookItem = document.createElement('div');
        bookItem.className = 'book-item';

        const imagemCapa = livro.cover_i ? `https://covers.openlibrary.org/b/id/${livro.cover_i}-M.jpg` : 'default-cover.jpg';
        
        bookItem.innerHTML = `
            <img src="${imagemCapa}" alt="Capa do livro" class="book-cover">
            <div class="book-info">
                <h3>${livro.title}</h3>
                <p>Autor: ${livro.author_name ? livro.author_name.join(', ') : 'Desconhecido'}</p>
                <p>Ano: ${livro.first_publish_year || 'Desconhecido'}</p>
                <button class="btn-adicionar-favoritos">Adicionar aos Favoritos</button>
            </div>
        `;

        // seleciona o botão de add favoritos para que não selecione o card todo ao clicar
        const botaoFavoritos = bookItem.querySelector('.btn-adicionar-favoritos');
        botaoFavoritos.addEventListener('click', function (event) {
            event.stopPropagation(); 
            adicionarAosFavoritos(livro); 
        });

        bookList.appendChild(bookItem);
    });
}

// Preencher opções de gênero (simulado)
document.addEventListener('DOMContentLoaded', () => {
    const genres = ['Ficção', 'Fantasia', 'Terror', 'Romance', 'História'];
    const genreFilter = document.getElementById('genreFilter');
    
    genres.forEach(genero => {
        const option = document.createElement('option');
        option.value = genero.toLowerCase();
        option.textContent = genero;
        genreFilter.appendChild(option);
    });
});

// FAVORITOS

// função para adicionar livro aos favoritos
function adicionarAosFavoritos(livro) {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    // verifica se o livro já está nos favoritos
    const jaFavoritado = favoritos.some(f => f.titulo === livro.title);
    if (!jaFavoritado) {
        const novoFavorito = {
            key: livro.key,
            titulo: livro.title,
            autor: livro.author_name ? livro.author_name.join(', ') : 'Desconhecido',
            capa: livro.cover_i ? `https://covers.openlibrary.org/b/id/${livro.cover_i}-M.jpg` : 'default-cover.jpg',
            ano: livro.first_publish_year || 'Desconhecido'
        };
        favoritos.push(novoFavorito);

        localStorage.setItem('favoritos', JSON.stringify(favoritos));

        alert(`${livro.title} foi adicionado aos favoritos!`);
    } else {
        alert(`${livro.title} já está nos favoritos!`);
    }
}

// exibir os livros favoritos
function exibirFavoritos() {
    const containerFavoritos = document.getElementById('container-favoritos');
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    containerFavoritos.innerHTML = '';

    // loop para cada livro favoritado
favoritos.forEach(livro => {
        const elementoLivro = document.createElement('div');
        elementoLivro.innerHTML = `
            <img src="${livro.capa}" alt="Capa do livro">
            <h3>${livro.titulo}</h3>
            <p>Autor: ${livro.autor}</p>
            <p>Ano: ${livro.first_publish_year || 'Desconhecido'}</p>
            <button onclick="removerDosFavoritos('${livro.key}')">Remover dos Favoritos</button>
        `;
        containerFavoritos.appendChild(elementoLivro);
    });
}

// remover livro dos favoritos
function removerDosFavoritos(key) {
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    favoritos = favoritos.filter(livro => livro.key !== key);
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    alert("Livro removido dos favoritos.");
    exibirFavoritos(); // atualiza a lista
}

function voltarParaPesquisa() {
    window.location.href = 'addfavoritos.html';
}
document.addEventListener('DOMContentLoaded', exibirFavoritos);
