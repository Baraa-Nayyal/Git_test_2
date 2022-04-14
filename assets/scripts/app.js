function get() {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => show(res))
    .catch((err) => console.log(err));
}
// res.data[0].title
function show(res) {
  for (let i = 0; i < res.data.length; i++) {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.style.width = "18rem";
    cardDiv.innerHTML = `
    <img class="card-img-top" src="${
      res.data[i].image
    }" alt="Card image cap" />
    <div class="card-body">
    <h5 class="card-title">${JSON.stringify(res.data[i].title)}</h5>
    <p class="card-text">${res.data[i].description}</p>
    <p class="card-text"><b>Price: ${res.data[i].price}$</b></p>
    </div>
    `;
    document.body.append(cardDiv);
  }
}
get();

// xhr.onload = () => {
//   console.log(listOfPosts);
//   for (let post of listOfPosts) {
//     let cardDiv = document.createElement("div");
//     cardDiv.classList.add("card");
//     cardDiv.style.width = "18rem";
//     cardDiv.innerHTML = `
//       <img class="card-img-top" src="${post.image}" alt="Card image cap" />
//       <div class="card-body">
//         <h5 class="card-title">${post.category}</h5>
//         <p class="card-text">${post.description}</p>
//         <p class="card-text"><b>Price: ${post.price}$</b></p>
//       </div>
//       `;
//     document.body.append(cardDiv);
//   }
// };

// xhr.send();
