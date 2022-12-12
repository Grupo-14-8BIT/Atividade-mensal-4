let plataforma = "browser";
let categoria = "mmorpg";
let jogos;
let lista_jogos = 10;

// document.addEventListener("DOMContentLoaded", funciona());

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '968d1203e3msh721b6f8d73b6fe9p1da73fjsnd2c87f2e006d',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
};

function carregar_jogos(categoria, plataforma) {
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=' + plataforma + '&category=' + categoria + '&sort-by=release-date', options)
        .then(response => response.json())
        .then(response => {
            console.log(response[0]);
            for (var i = 0; i < lista_jogos; i++) {

                jogos.innerHTML += '<div class="jogo"><div class="imagem-jogo"><a href="' + response[i].game_url + '" target="blank"><img src="' + response[i].thumbnail + '" alt="anal"> </a><input type="checkbox" id="cm_star-empty" >  <label for="cm_star-empty"><i class="fa"></i></label></div><p>' + response[i].title + '</p></div>';

            }
        }).catch(err => console.error(err));
}

document.addEventListener("DOMContentLoaded", () => {
    jogos = document.getElementById("jogos");
    carregar_jogos(categoria, plataforma);
    console.log(jogos);
});
