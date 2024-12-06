function showAlert(message) {
  alert(message || "Comentário Enviado Com Sucesso!");
}

function handleCommentSubmit(event) {
  event.preventDefault();
  const commentInput = document.getElementById("comment");
  const commentText = commentInput.value.trim();

  if (commentText) {
    showAlert();
    commentInput.value = "";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".secao-de-comentario form");
  form.addEventListener("submit", handleCommentSubmit);
});

const stars = document.querySelectorAll(".stars i");

function setRating(rating) {
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add("active");
        } else {
            star.classList.remove("active");
        }
    });
}
const savedRating = localStorage.getItem("starRating");
if (savedRating) {
    setRating(parseInt(savedRating));
}
stars.forEach((star, index1) => {
    star.addEventListener("click", () => {
        setRating(index1 + 1);
        localStorage.setItem("starRating", index1 + 1);
    });
});
