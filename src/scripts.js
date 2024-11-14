
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

        
        // No script.js, dentro da função exibirLivros
bookItem.innerHTML = `
<a href="livro.html?id=${livro.key}" class="book-link">
    <img src="${imagemCapa}" alt="Capa do livro">
    <div>
        <h3>${livro.title}</h3>
        <p>Autor: ${livro.author_name ? livro.author_name.join(', ') : 'Desconhecido'}</p>
        <p>Ano: ${livro.first_publish_year || 'Desconhecido'}</p>
    </div>
</a>
`;


        bookList.appendChild(bookItem);
    });
}


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
