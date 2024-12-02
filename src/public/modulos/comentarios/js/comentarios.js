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
