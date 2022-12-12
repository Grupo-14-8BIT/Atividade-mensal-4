// variaveis para exibir os jogos
let plataforma;
let categoria;
let jogos;
let lista_jogos = 10;
let destaque;
let carregar;
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
                destaque.innerHTML = '<img class="img_grande" src="' + response[0].thumbnail + '" alt="iamgem grande"></img>';
                jogos.innerHTML = '';
                for (var i = 1; i <= lista_jogos; i++) {

                    jogos.innerHTML += '<div class="jogo"><div class="imagem-jogo"><a href="' + response[i].game_url + '" target="blank"><img src="' + response[i].thumbnail + '" alt="anal"> </a><input type="checkbox" id="cm_star-empty' + [i] + '" >  <label for="cm_star-empty' + [i] + '"><i class="fa"></i></label></div><p>' + response[i].title + '</p></div>';

                }
            }).catch(err => console.error(err));

    } else {

        fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=' + plataforma + '&category=' + categoria + '&sort-by=release-date', options)
            .then(response => response.json())
            .then(response => {
                console.log(response[0]);
                destaque.innerHTML = '<img class="img_grande" src="' + response[0].thumbnail + '" alt="iamgem grande"></img>';
                jogos.innerHTML = '';
                for (var i = 1; i <= lista_jogos; i++) {

                    jogos.innerHTML += '<div class="jogo"><div class="imagem-jogo"><a href="' + response[i].game_url + '" target="blank"><img src="' + response[i].thumbnail + '" alt="anal"> </a><input type="checkbox" id="cm_star-empty' + [i] + '" >  <label for="cm_star-empty' + [i] + '"><i class="fa"></i></label></div><p>' + response[i].title + '</p></div>';

                }
            }).catch(err => console.error(err));
    }
    //jogos.innerHTML += '<div class="jogo"><div class="imagem-jogo"><a href="' + response[i].game_url + '" target="blank"><img src="' + response[i].thumbnail + '" alt="anal"> </a><input type="checkbox" id="cm_star-empty' + [i] + '"> <label for=cm_star-empty' + [i] + '><i class="fa"></i></label></div><p>' + response[i].title + '</p></div>';



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
            cat.style.backgroundColor = "red";
        } else { categorias[i].style.backgroundColor = "rgba(60, 1, 74, 0.585)"; }
    }
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

////////////////////////////////
console.log(home);
plataforma = "pc";
categoria = "home";
carregar = document.getElementById("carregar");
jogos = document.getElementById("jogos");
destaque = document.getElementById("destaque");
selecionar_categoria(home)