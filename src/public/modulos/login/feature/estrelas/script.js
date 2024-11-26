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
