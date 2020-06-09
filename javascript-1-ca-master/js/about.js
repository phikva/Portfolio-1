const selectContainer = document.querySelector(".container.content");
const selectHeading = document.querySelector("h1");
const selectText = document.querySelector(".about");

function replaceWords() {
  newHTML = selectContainer.innerHTML
    .replace(/the/g, "banana")
    .replace(/The/g, "Banana");
  selectContainer.innerHTML = newHTML;
}
setTimeout(replaceWords, 4000);
