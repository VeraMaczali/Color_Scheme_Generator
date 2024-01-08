const colors = document.querySelector("#colors");
const colorPicker = document.querySelector("#color-picker");
const scheme = document.querySelector("#scheme");
const btn = document.querySelector(".btn");

function gatherInfo() {
  colorPicker.addEventListener("change", () => colorPicker.value);
  scheme.addEventListener("change", () => scheme.value);
}

function getColorScheme() {
  colors.innerHTML = "";
  gatherInfo();
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${
      colorPicker.value.split("#")[1]
    }&mode=${scheme.value}&count=5`
  )
    .then((res) => res.json())
    .then((data) => {
      const colorsArray = data.colors;
      colorsArray.forEach((color) => {
        console.log(color.hex.value);
        const div = document.createElement("div");
        div.classList.add("stripe");
        div.innerHTML = `
        <div class="color-stripe" style="background-color:${color.hex.value}"></div>
        <p class="color-name">${color.hex.value}</p>
        `;
        colors.appendChild(div);
      });
    });
}

btn.addEventListener("click", function (e) {
  e.preventDefault();
  getColorScheme();
});
