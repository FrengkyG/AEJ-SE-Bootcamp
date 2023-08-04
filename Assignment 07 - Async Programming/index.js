const searchElement = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
const searchItemsList = document.querySelector("#searchItemsList");

export const initData = () => {
  searchItemsList.innerHTML = '<img src="assets/loading.gif" alt="">';

  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      searchItemsList.innerHTML = "";
      if (responseJson.meals) {
        for (let i = 0; i < responseJson.meals.length; i++) {
          const searchItem = document.createElement("div");
          searchItem.setAttribute("class", "card item");

          searchItem.innerHTML = `
                            <img src="${responseJson.meals[i].strMealThumb}"
                                alt="">
                            <p>${responseJson.meals[i].strMeal}</p>
                    `;

          searchItemsList.appendChild(searchItem);
        }
      } else {
        console.log(responseJson);
        alert(`Terjadi kesalahan. Mohon coba kembali`);
      }
    });
};

export const searchFood = () => {
  searchItemsList.innerHTML = "";

  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchElement.value}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      if (responseJson.meals) {
        for (let i = 0; i < responseJson.meals.length; i++) {
          const searchItem = document.createElement("div");
          searchItem.setAttribute("class", "card item");

          searchItem.innerHTML = `
                            <img src="${responseJson.meals[i].strMealThumb}"
                                alt="">
                            <p>${responseJson.meals[i].strMeal}</p>
                    `;

          searchItemsList.appendChild(searchItem);
        }
      } else {
        alert(`Maaf ${searchElement.value} tidak tersedia!`);
      }
    });
};

initData();

searchButton.addEventListener("click", searchFood);
