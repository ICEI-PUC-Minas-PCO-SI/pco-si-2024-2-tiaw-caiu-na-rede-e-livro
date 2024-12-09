document.addEventListener("DOMContentLoaded", function () {
    const bookList = document.getElementById("book-list");
  
    function fetchBooks() {
      fetch("https://openlibrary.org/subjects/bestsellers.json")
        .then((response) => response.json())
        .then((data) => {
          bookList.innerHTML = "";
  
          if (data.works && data.works.length > 0) {
            data.works.forEach((book) => {
              const bookItem = document.createElement("div");
              bookItem.classList.add("book-item");
              const title = book.title || "Sem título";
              const author =
                book.authors && book.authors.length > 0
                  ? book.authors.map((author) => author.name).join(", ")
                  : "Autor desconhecido";
              const coverUrl = book.cover_id
                ? `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`
                : "https://via.placeholder.com/200x300.png?text=Sem+Capa";
              bookItem.innerHTML = `
                <img src="${coverUrl}" alt="${title}">
                <h3>${title}</h3>
                <p>${author}</p>
              `;
              bookList.appendChild(bookItem);
            });
          } else {
            bookList.innerHTML = "<p>Nenhum livro encontrado.</p>";
          }
        })
        .catch((error) => {
          console.error("Erro ao carregar os livros:", error);
          bookList.innerHTML =
            "<p>Não foi possível carregar os livros. Tente novamente mais tarde.</p>";
        });
    }
    fetchBooks();
  });