const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");
let games;
let users = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  users.forEach(user => {
    const isVisible = user.title.toLowerCase().includes(value);
    user.element.classList.toggle("hide", !isVisible);
  })
});

const options = {
	method: 'GET',

        headers: {

            'X-RapidAPI-Key': '7f8c7381b8mshc8673d5334fb03fp1baa05jsndefe19a557df',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'

        }
};

fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
  .then(response => response.json())
  .then(data => {
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0];
      const header = card.querySelector("[data-header]");
      const body = card.querySelector("[data-body]");
      header.innerHTML = `<div class="games">
                                        <img src="${user.thumbnail}" alt="anal"> 
                                    </div>`
      console.log(user.thumbnail);
      body.textContent = user.title;
      userCardContainer.append(card);
      return { title: user.title, thumbnail: user.thumbnail,game_url: user.game_url ,element: card }
    })
  }).catch(err => console.error(err));