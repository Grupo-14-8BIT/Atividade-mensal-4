<<<<<<< HEAD
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

searchInput.addEventListener("input", (e) => {

    // for ( i = 0; i < list_games; i++) {

    //     games.innerHTML += `<div class="games">
    //                                 <img src="${response[i].thumbnail}" alt="anal"> 
    //                                 <p>${response[i].title}</p>
    //                         </div>`

    // }
    
        const value = e.target.value;
        console.log("value:");
        console.log(value);
        

        for( i=0 ; i<list_games; i++){

            if(response[i].title == value){

                games.innerHTML = `<div class="games">
                                        <a href="${response[i].game_url} " target="blank">
                                        <img src="${response[i].thumbnail}" alt="anal"> 
                                        </a>
                                        <p>${response[i].title}</p>
                                    </div>`
                

            }if(response[i].title != value){


                
                console.log ("not found");
            }
        }
    })
        
    //});
}).catch(err => console.error("err"));

document.addEventListener("DOMContentLoaded", () => {

    games = document.getElementById("games");

});


=======
>>>>>>> 481cb8c3ab36599771ccf36846780474874682e6
