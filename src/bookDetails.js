function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function exibirDetalhesDoLivro() {
    const bookId = getQueryParam('id');
    console.log("ID do livro:", bookId); 
    if (bookId) {
        fetch(`https://openlibrary.org${bookId}.json`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erro na resposta da API: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Dados do livro:", data); 
                const titulo = data.title || 'Título não disponível';
                let autores = 'Autor desconhecido';

                if (data.authors && data.authors.length > 0) {
                    const authorPromises = data.authors.map(author =>
                        fetch(`https://openlibrary.org${author.key}.json`).then(res => res.json())
                    );

                    Promise.all(authorPromises).then(authorData => {
                        autores = authorData.map(author => author.name).join(', ');
                        mostrarDetalhesLivro(titulo, autores, data);
                    }).catch(error => {
                        console.error('Erro ao buscar dados dos autores:', error);
                        mostrarDetalhesLivro(titulo, autores, data);
                    });
                } else {
                    mostrarDetalhesLivro(titulo, autores, data);
                }
            })
            .catch(error => console.error('Erro ao buscar detalhes do livro:', error));
    } else {
        console.error("ID do livro não encontrado na URL.");
    }
}

function mostrarDetalhesLivro(titulo, autores, data) {
    const bookDetails = document.getElementById('bookDetails');
    const anoPublicacao = data.first_publish_year || 'Ano desconhecido';
    let descricao = 'Descrição não disponível.';

    if (data.description) {
        if (typeof data.description === 'string') {
            descricao = data.description;
        } else if (data.description.value) {
            descricao = data.description.value;
        }
    }

    bookDetails.innerHTML = `
        <h1>${titulo}</h1>
        <p><strong>Autor:</strong> ${autores}</p>
        <p><strong>Ano de Publicação:</strong> ${anoPublicacao}</p>
        <p><strong>Descrição:</strong> ${descricao}</p>
    `;
}

document.addEventListener('DOMContentLoaded', exibirDetalhesDoLivro);
