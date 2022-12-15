const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.getElementById("search_id");
const lol = "";
let games;
let users = [];

searchInput.addEventListener("input", habib => {

    const value = habib.target.value.toLowerCase();
    jogos.innerHTML = '';
    // function remove(){
    //     lol = document.getElementById("search_id").innerText;
    //     value="";
    //     userCardContainer.removeChild(card);
    // }
if (users != '') {
        users.forEach(user => {
            const isVisible = user.title.toLowerCase().includes(value);
            user.element.classList.toggle("hide", !isVisible);
            if (value == "") {
                carregar_jogos("home", "all");
                user.element.classList.toggle("hide");
            }
        })
    } else {
        fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
            .then(response => response.json())
            .then(data => {
                users = data.map(user => {
                    const card = userCardTemplate.content.cloneNode(true).children[0];
                    const header = card.querySelector("[data-header]");
                    header.innerHTML = `<div class="imagem-jogo">
                                                <a href="${user.game_url}" target="blank">
                                                    <img class="jogo" src="${user.thumbnail}" alt="anal">
                                                </a>
                                                <input type="checkbox" id="cm_star-empty${user.id}" >  
                                                <label for="cm_star-empty${user.id}">
                                                    <i class="fa"></i>
                                                </label>
                                            </div>
                                            <p>${user.title}</p>`
                    userCardContainer.append(card);
                    return { title: user.title, id: user.id, thumbnail: user.thumbnail, game_url: user.game_url, element: card }
                })
            });
        users.forEach(user => {
            const isVisible = user.title.toLowerCase().includes(value);
            user.element.classList.toggle("hide", !isVisible);
        })
    }

});



// variaveis para exibir os jogos
let plataforma;
let categoria;
let jogos;
let lista_jogos = 10;
let destaque;
let carregar;
// variaveis de favorito

let checked;
let favoritos = [];
// headers da requisicao
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '968d1203e3msh721b6f8d73b6fe9p1da73fjsnd2c87f2e006d',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
};


//funcao para carregar os jogos
function carregar_jogos(categoria, plataforma) {

    if (categoria == "home") {
        fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=' + plataforma, options)
            .then(response => response.json())
            .then(response => {
                console.log(response[0]);
                destaque.innerHTML = '<div class="imagem_game"><video id="video" class="imagem_grande" autoplay="autoplay"><source src="https://www.freetogame.com/g/' + response[0].id + '/videoplayback.webm" alt="imagem grande" type="video/webm"></video><div class="imagen_game_center"><p>'+response[0].title+'</p><p>'+response[0].short_description+'</p></div></div>';
                jogos.innerHTML = '';
                for (var i = 1; i <= lista_jogos; i++) {

                    jogos.innerHTML += '<div class="jogo"><div class="imagem-jogo"><a href="' + response[i].game_url + '" target="blank"><img src="' + response[i].thumbnail + '" alt="anal"> </a><input onclick="fav(' + response[i].id + ')" name="' + response[i].id + '" type="checkbox" id="cm_star-empty' + response[i].id + '" >  <label for="cm_star-empty' + response[i].id + '"><i class="fa"></i></label></div><p>' + response[i].title + '</p></div>';

                }
                
            })
            .then(response => console.log(response))
            .catch(err => console.error(err));

    } else {

        fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=' + plataforma + '&category=' + categoria + '&sort-by=release-date', options)
            .then(response => response.json())
            .then(response => {
                console.log(response[0]);
                destaque.innerHTML = '<div class="imagem_game"><video class="imagem_grande" autoplay="autoplay"><source src="https://www.freetogame.com/g/' + response[0].id + '/videoplayback.webm" alt="imagem grande" type="video/webm"></video><div class="imagen_game_center"><p>'+response[0].title+'</p><p>'+response[0].short_description+'</p></div></div>';
                jogos.innerHTML = '';
                for (var i = 1; i <= lista_jogos; i++) {
                    jogos.innerHTML += '<div class="jogo"><div class="imagem-jogo"><a href="' + response[i].game_url + '" target="blank"><img src="' + response[i].thumbnail + '" alt="anal"> </a><input onclick="fav(' + response[i].id + ')" name="' + response[i].id + '" type="checkbox" id="cm_star-empty' + response[i].id + '" >  <label for="cm_star-empty' + response[i].id + '"><i class="fa"></i></label></div><p>' + response[i].title + '</p></div>';
                }
            }).catch(err => console.error(err));

    }
}


//funcao para carregar +10 jogos
function carregar_mais() {
    lista_jogos += 10;
    carregar_jogos(categoria, plataforma);
}

// funcao para selecionar a categoria
function selecionar_categoria(cat) {

    categoria = cat.id;
    carregar_jogos(categoria, plataforma);

    for (var i = 0; i <= categorias.length; i++) {
        if (cat == categorias[i]) {
            cat.style.backgroundColor = "#3c015e";
        } else { categorias[i].style.backgroundColor = "rgba(60, 1, 74, 0.585)"; }
    }
}

// funcao para selecionar plataforma 

function plataformas(plat) {
    favor = document.getElementById("favoritos");

    plataforma = plat;

    if (plataforma == "all") {
        all.style.color = "blueviolet";
        pc.style.color = "white";
        browser.style.color = "white"
        favor.style.color = "white"
    }
    if (plataforma == "pc") {
        pc.style.color = "blueviolet";
        browser.style.color = "white"
        all.style.color = "white";
        favor.style.color = "white"
    }
    if (plataforma == "browser") {
        browser.style.color = "blueviolet"
        all.style.color = "white";
        pc.style.color = "white";
        favor.style.color = "white"
    }
    carregar_jogos(categoria, plataforma);
}

// coletando os IDs das categorias para jogos
const home = document.getElementById('home');
const pvp = document.getElementById('pvp');
const mmofps = document.getElementById('mmofps');
const survival = document.getElementById('survival');
const card = document.getElementById('card');
const fighting = document.getElementById('fighting');
const shooting = document.getElementById('shooter');
const world = document.getElementById('open-world');
const categorias = [home, pvp, mmofps, survival, card, fighting, shooting, world];

// plataformas dos jogos
const pc = document.getElementById('pc');
const browser = document.getElementById('browser');
const all = document.getElementById('all');
//


console.log(home);
plataforma;
categoria;
carregar = document.getElementById("carregar");
jogos = document.getElementById("jogos");
destaque = document.getElementById("destaque");

plataformas("all");
selecionar_categoria(home);
carregar_jogos(categoria, plataforma);

// FAVORITOS


function fav(id) {
    //checked = document.querySelectorAll('input:checked');
    let item = document.getElementById("cm_star-empty" + id);
    if (item.checked == true) {
        localStorage.setItem(id, 1);
    } else {
        localStorage.removeItem(id);
    }
}

function f() {
    favor = document.getElementById("favoritos");

    favor.style.color = "blueviolet";
    browser.style.color = "white";
    all.style.color = "white";
    pc.style.color = "white";
    destaque.innerHTML = "";
    jogos.innerHTML = '';
    document.getElementById("carregar").style.display = "none";



    for (i = 0; i < localStorage.length; i++) {
        fetch('https://free-to-play-games-database.p.rapidapi.com/api/game?id=' + localStorage.key(i), options)
            .then(response => response.json())
            .then(response => {
                jogos.innerHTML += '<div id="' + response.id + '" class="jogo"><div class="imagem-jogo"><a href="' + response.game_url + '" target="blank"><img src="' + response.thumbnail + '" alt="anal"> </a><input onclick="fav(' + response.id + ')"  name="' + response.id + '" type="checkbox" id="cm_star-empty' + response.id + '" >  <label for="cm_star-empty' + response.id + '"><i class="fa"></i></label></div><p>' + response.title + '</p></div>';
            }).catch(err => console.error(err));
    }
}

const newLocal = favoritos = [];
// ativar as cehckbox salvas

// function check() {
//     checkboxes = document.querySelectorAll('input[type="checkbox"]');

//     for (var i = 0; i < localStorage.length; i++) {
//         favoritos.push(localStorage.key(i));
//     }
//     console.log(favoritos);
//     for (i = 0; i < checkboxes.length; i++) {
//         if (favoritos.includes(checkboxes[i].tagName)) {
//             checkboxes[i].checked = true;
//         } else {}

//     }

// }
// checkbox.addEventListener('change', function() {
//     if (this.checked) {
//         console.log("Checkbox is checked..");
//     } else {
//         console.log("Checkbox is not checked..");
//     }
// });