const createMovieMenu = parsedRes => {
  let selectEl = document.querySelector(".mymenu");
  parsedRes.forEach(el => {
    let optionEl = document.createElement("option");
    optionEl.innerText = el.title;
    selectEl.appendChild(optionEl);
  });
};

const displayInfo = parsedRes => {
  let button = document.querySelector(".mybutton");
  let sel = document.getElementsByTagName("option");
  let title = document.createElement("h2");
  let allInfo = document.createElement("p");

  button.addEventListener("click", () => {
    parsedRes.forEach((el, i) => {
      if (sel[i].selected) {
        title.innerText = `Title: ${el.title}`;
        title.style.fontStyle = "italic";
        allInfo.style.color = "navy";
        allInfo.innerHTML = `Director: ${el.director} <br> <hr> Description: ${
          el.description
        } <br> <hr> Rotten Tomatoes Score: ${
          el.rt_score
        } <br> <hr> Release Date: ${el.release_date} <hr>`;

        document.body.appendChild(title);
        document.body.appendChild(allInfo);
      }
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector(".button");
  let apiLink = "https://ghibliapi.herokuapp.com/films";

  fetch(apiLink)
    .then(res => {
      let res1 = res.json();
      return res1;
    })
    .then(innerRes => {
      createMovieMenu(innerRes);
      displayInfo(innerRes);
    });
});
