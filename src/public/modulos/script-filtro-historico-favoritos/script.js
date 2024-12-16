
//FILTROS
function toggleFiltros() {
    const filtrosAdicionais = document.getElementById('filtrosAdicionais');
    filtrosAdicionais.classList.toggle('hidden');
}

function filtrarLivros() {
    const titulo = document.getElementById('searchInput').value;
    const genero = document.getElementById('genreFilter').value;
    const autor = document.getElementById('authorFilter').value;
    const paginasMin = document.getElementById('pagesFilter').value;

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

    fetch(url)
        .then(response => response.json())
        .then(data => {
            exibirLivros(data.docs);
        })
        .catch(error => console.error('Erro ao buscar livros:', error));
}

function exibirLivros(livros) {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';

    livros.forEach(livro => {
        const bookItem = document.createElement('div');
        bookItem.className = 'book-item';

        const imagemCapa = livro.cover_i ? `https://covers.openlibrary.org/b/id/${livro.cover_i}-M.jpg` : 'default-cover.jpg';

        bookItem.innerHTML = `
            <a href="/modulos/historico/detalhes-livro.html?id=${livro.key}" class="book-link">
                <img src="${imagemCapa}" alt="Capa do livro">
                <div>
                    <h3>${livro.title}</h3>
                    <p>Autor: ${livro.author_name ? livro.author_name.join(', ') : 'Desconhecido'}</p>
                    <p>Ano: ${livro.first_publish_year || 'Desconhecido'}</p>
                </div>
                     <button class="btn-adicionar-favoritos">Adicionar aos Favoritos</button>

            </a>
        `;

        const botaoFavoritos = bookItem.querySelector('.btn-adicionar-favoritos');
        botaoFavoritos.addEventListener('click', function (event) {
            event.stopPropagation();
            adicionarAosFavoritos(livro);
        });

        bookItem.addEventListener('click', () => salvarLivroVisualizado(livro));

        bookList.appendChild(bookItem);
    });
}


//HISTORICO
// Salvar o livro visualizado no localStorage
function salvarLivroVisualizado(livro) {
    const livrosVisualizados = JSON.parse(localStorage.getItem('recentlyViewedBooks')) || [];

    if (!livrosVisualizados.some(l => l.key === livro.key)) {
        livrosVisualizados.unshift({
            key: livro.key,
            title: livro.title,
            author: livro.author_name ? livro.author_name.join(', ') : 'Desconhecido',
            cover: livro.cover_i ? `https://covers.openlibrary.org/b/id/${livro.cover_i}-M.jpg` : 'default-cover.jpg'
        });

        if (livrosVisualizados.length > 5) {
            livrosVisualizados.pop();
        }

        localStorage.setItem('recentlyViewedBooks', JSON.stringify(livrosVisualizados));
        exibirLivrosVisualizados();
    }
}

// Exibir visualizados recentemente
function exibirLivrosVisualizados() {
    const recentlyViewedContainer = document.getElementById('recently-viewed');
    const livrosVisualizados = JSON.parse(localStorage.getItem('recentlyViewedBooks')) || [];

    recentlyViewedContainer.innerHTML = '';

    livrosVisualizados.forEach(livro => {
        const bookItem = document.createElement('div');
        bookItem.className = 'book-item';

        bookItem.innerHTML = `
        <a href="/modulos/historico/detalhes-livro.html?id=${livro.key}" class="book-link">
        <img src="${livro.cover}" alt="Capa do livro">
        <div>
            <h3>${livro.title}</h3>
            <p>Autor: ${livro.author}</p>
        </div>
    </a>
`;

        recentlyViewedContainer.appendChild(bookItem);
    });
}

// FAVORITOS
// Adiciona livro aos favoritos
function adicionarAosFavoritos(livro) {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    // Verifica se o livro já está nos favoritos
    const jaFavoritado = favoritos.some(f => f.key === livro.key);
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

// Exibir os livros favoritos
function exibirFavoritos() {
    if (!window.location.pathname.includes('meus-favoritos.html')) return;

    const containerFavoritos = document.getElementById('container-favoritos');
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    containerFavoritos.innerHTML = '';

    if (favoritos.length === 0) {
        containerFavoritos.innerHTML = `<p>Você ainda não tem livros favoritos!</p>`;
        return;
    }

    favoritos.forEach(livro => {
        const elementoLivro = document.createElement('div');
        elementoLivro.className = 'favorito-card';
        elementoLivro.innerHTML = `
            <div class="card">
                <img src="${livro.capa}" alt="Capa do livro" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${livro.titulo}</h5>
                    <p class="card-text">Autor: ${livro.autor}</p>
                    <p class="card-text">Ano: ${livro.ano}</p>
                    <button class="btn btn-danger" onclick="removerDosFavoritos('${livro.key}')">Remover dos Favoritos</button>
                </div>
            </div>
        `;
        containerFavoritos.appendChild(elementoLivro);
    });
}

// Remover livro dos favoritos
function removerDosFavoritos(key) {
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    favoritos = favoritos.filter(livro => livro.key !== key);
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    alert("Livro removido dos favoritos.");
    exibirFavoritos(); // Atualiza a lista
}



document.addEventListener('DOMContentLoaded', exibirFavoritos);


document.addEventListener('DOMContentLoaded', () => {
    const genres = ['Ficção', 'Fantasia', 'Terror', 'Romance', 'História'];
    const genreFilter = document.getElementById('genreFilter');

    genres.forEach(genero => {
        const option = document.createElement('option');
        option.value = genero.toLowerCase();
        option.textContent = genero;
        genreFilter.appendChild(option);
    });

    exibirLivrosVisualizados();
    exibirFavoritos();
});
