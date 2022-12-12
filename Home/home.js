let games;
let list_games = 372;
let i;
const searchInput = document.getElementById("searchInput");

const options = {
	method: 'GET',

        headers: {

            'X-RapidAPI-Key': '7f8c7381b8mshc8673d5334fb03fp1baa05jsndefe19a557df',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'

        }
};

fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
.then(response => response.json())
.then(response => {

searchInput.addEventListener("keyup", (e) => {    

        for( i=0 ; i<list_games; i++){

            const value = e.target.value;
            console.log("value:");
            console.log(value);

            if(response[i].title == value){

                games.innerHTML = `<div class="games">
                                        <div class="gam">
                                                <h3 class="search-res">Search Results</h3>
                                                <a href="${response[i].game_url} " target="blank">
                                                <img class="imagem" src="${response[i].thumbnail}" alt="anal"> 
                                                </a>
                                                <p class="game-name" >${response[i].title}</p>
                                        </div>
                                    </div>`
                

            }if(response[i].title != value){

                games.innerHTML = `<div class="games"></div>`
                
                console.log ("not found");
            }
    
        }
    })
        
    //});
}).catch(err => console.error(err));

document.addEventListener("DOMContentLoaded", () => {

    games = document.getElementById("games");

});


