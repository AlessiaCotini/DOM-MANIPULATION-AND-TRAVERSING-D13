const formSubmit = function (e) {
  e.preventDefault();
  const bandName = document.getElementById("inputId").value;
  console.log(bandName);
  const containerBand = document.getElementById("bandContainers");
  containerBand.innerHTML += `
        <article class="band-class">
            <p>${bandName}</p>
            <button onclick="done(event)"class="scndButton">LET'S GO</button>
            <button onclick="deleteRow(event)" class="scndButton">MAYBE SOMEDAY</button>
        </article>`;
  form.reset();
};
const deleteRow = function (e) {
  console.log(e.target);
  const button = e.target;
  const article = button.parentElement;
  article.remove();
};
const done = function (e) {
  console.log(e.target);
  const button = e.target;
  const article = button.parentElement;
  article.style.textDecoration = "line-through";
};
const form = document.querySelector("form");
form.addEventListener("submit", formSubmit);
