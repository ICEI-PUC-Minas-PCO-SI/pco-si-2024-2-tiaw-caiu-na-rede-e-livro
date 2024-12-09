const urlParams = new URLSearchParams(window.location.search);
const bookId = urlParams.get('id');

const titleElement = document.getElementById('book-title');
const authorsElement = document.getElementById('book-authors');
const yearElement = document.getElementById('book-year');
const descriptionElement = document.getElementById('book-description');


if (!bookId) {
  document.body.innerHTML = '<h1>Erro: ID do livro não especificado na URL.</h1>';
} else {
  
  const bookUrl = `https://openlibrary.org${bookId}.json`;

  
  fetch(bookUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao buscar dados do livro.');
      }
      return response.json();
    })
    .then(bookData => {
        
      // Título
      titleElement.textContent = bookData.title || "Título Desconhecido";

      // Autores
      if (bookData.authors && bookData.authors.length > 0) {
        const authorsPromises = bookData.authors.map(author =>
          fetch(`https://openlibrary.org${author.author.key}.json`).then(res => res.json())
        );
        Promise.all(authorsPromises).then(authors => {
          const authorNames = authors.map(author => author.name);
          authorsElement.textContent = authorNames.join(', ');
        }).catch(() => {
          authorsElement.textContent = "Autor Desconhecido";
        });
      } else {
        authorsElement.textContent = "Autor Desconhecido";
      }

      // Ano
      yearElement.textContent = bookData.first_publish_date || bookData.publish_date || "Ano desconhecido";

      // Descrição
      if (bookData.description) {
        const descriptionText =
          typeof bookData.description === 'string'
            ? bookData.description
            : bookData.description.value;

        
        const markdownToHtml = descriptionText.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank">$1</a>');
        descriptionElement.innerHTML = markdownToHtml;
      } else {
        descriptionElement.textContent = "Nenhuma descrição disponível.";
      }
    })
    .catch(error => {
      console.error('Erro ao buscar os dados:', error);
      document.body.innerHTML = '<h1>Erro ao carregar os dados do livro.</h1>';
    });
}
