document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector(".mybutton");
  let img = document.createElement("img");
  document.body.append(img);
  img.style.width = "400px";

  button.addEventListener("click", () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => {
        return response.json();
      })
      .then(parsedRes => {
        img.setAttribute("src", parsedRes.message);
      });
  });
});
