const searchElement = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
const cardList = document.querySelector("#cardList");

const initData = () => {
  cardList.innerHTML = '<img src="assets/loading.gif" alt="">';

  fetch(`https://api.pokemontcg.io/v2/cards/?pageSize=40`)
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      cardList.innerHTML = "";
      if (responseJson.data) {
        for (let i = 0; i < responseJson.data.length; i++) {
          const cardItem = document.createElement("div");
          cardItem.setAttribute("class", "card");

          cardItem.innerHTML = `
                        <div class="container">
                            <img src="${responseJson.data[i].images.small}" />
                            <h2>${responseJson.data[i].name}</h2>
                        </div>
                    `;

          cardList.appendChild(cardItem);
        }
      } else {
        alert(`Terjadi kesalahan. Mohon coba kembali`);
      }
    });
};

const searchData = () => {
  cardList.innerHTML = '<img src="assets/loading.gif" alt="">';

  fetch(`https://api.pokemontcg.io/v2/cards?q=name:${searchElement.value}&pageSize=20`)
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      cardList.innerHTML = "";

      if (responseJson.data) {
        for (let i = 0; i < responseJson.data.length; i++) {
          const cardItem = document.createElement("div");
          cardItem.setAttribute("class", "card");

          cardItem.innerHTML = `
                          <div class="container">
                              <img src="${responseJson.data[i].images.small}" />
                              <h2>${responseJson.data[i].name}</h2>
                          </div>
                      `;

          cardList.appendChild(cardItem);
        }
      } else {
        alert(`Terjadi kesalahan. Mohon coba kembali`);
      }
    });
};

initData();

searchButton.addEventListener("click", searchData);
