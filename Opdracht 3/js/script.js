const pokemonImage = document.getElementById("js--pokemon--image");
let randomNumber = Math.floor(Math.random() * 1010 + 1);

let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
    .then(function(response){
        return response.json();
    })
    .then(function(realData){
        pokemonImage.src = realData.sprites.front_default;
    });

const catchButton = document.getElementById("js--catch-button");
const pokemonText = document.getElementById("js--pokemon-text");
const pokemonName = document.getElementById("js--pokemon-name");
let pokemonGamePlayed = false;


catchButton.onclick = function(){
    if (pokemonGamePlayed === false){
        let catchNumber = Math.floor(Math.random() * 2);

        fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
            .then(function(response){
                return response.json();
            })
            .then(function(realName){
                let pokemonName = realName.species.name;

                if(catchNumber === 0){
                    pokemonText.innerText =  pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1) + " Fled";
                }
                else{
                    pokemonText.innerText = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1) + " Caught!";
                }

                pokemonGamePlayed = true;
            });
    }
}

const names = document.getElementById("js--name");
const inputField = document.getElementById("js--input");

inputField.onkeyup = function(event){
    if(event.keyCode === 13){
        let name = inputField.value;
        let age = fetch("https://api.agify.io?name=" + name)
            .then(function(response){
                return response.json();
            })
            .then(function(echteData){
                inputField.style.display = "none";
                names.innerText = echteData.age;
            });
    }
}

const show = document.getElementById("js--name--show");
const showImage = document.getElementById("js--image--show");
const showSummary = document.getElementById("js--summary--show");
const inputShow = document.getElementById("js--input--show");

inputShow.onkeyup = function(event){
    if(event.keyCode === 13){
        let showName = inputShow.value;
        let nameShow = fetch("https://api.tvmaze.com/search/shows?q=" + showName)
            .then(function(response){
                return response.json();
            })
            .then(function(showData){
                inputShow.style.display = "none";
                show.innerText = showData[0].show.name;
                showImage.src = showData[0].show.image.medium;
                showSummary.innerHTML = showData[0].show.summary.replace(/(<([^>]+)>)/ig,"");
            });
    }
};

function getPokemon(){
    let normal = 0, fighting = 0, flying = 0, poison = 0, ground = 0, rock = 0, bug = 0,
    ghost = 0, steel = 0, fire = 0, water = 0, grass = 0, electric = 0, psychic = 0,
    ice = 0, dragon = 0, dark = 0, fairy = 0, unknown = 0, shadow = 0;
    
    const labels = ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug',
        'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic',
        'ice', 'dragon', 'dark', 'fairy', 'unknown', 'shadow']
    
    for(i = 0; i < 10; i++){
        let randomNumber = Math.floor(Math.random() * 1010 + 1);
        let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
        .then(function(response){
        return response.json()
        })
        .then(function(realData){
            switch(realData.types[0].type.name){
                case 'normal':
                    normal = normal + 1;
                    break;
                case 'fighting':
                    fighting = fighting + 1;
                    break;
                case 'flying':
                    flying = flying + 1;
                    break;
                case 'poison':
                    poison = poison + 1;
                    break;
                case 'ground':
                    ground = ground + 1;
                    break;
                case 'rock':
                    rock = rock + 1;
                    break;
                case 'bug':
                    bug = bug + 1;
                    break;
                case 'ghost':
                    ghost = ghost + 1;
                    break;
                case 'steel':
                    steel = steel + 1;
                    break;
                case 'fire':
                    fire = fire + 1;
                    break;
                case 'water':
                    water = water + 1;
                    break;
                case 'grass':
                    grass = grass + 1;
                    break;
                case 'electric':
                    electric = electric + 1;
                    break;
                case 'psychic':
                    psychic = psychic + 1;
                    break;
                case 'ice':
                    ice = ice + 1;
                    break;
                case 'dragon':
                    dragon = dragon + 1;
                    break;
                case 'dark':
                    dark = dark + 1;
                    break;
                case 'fairy':
                    fairy = fairy + 1;
                    break;
                case 'unknown':
                    unknown = unknown + 1;
                    break;
                case 'shadow':
                    shadow = shadow + 1;
                    break;
                }
            }).then(function(){
                dataPokemon.datasets[0].data = [normal, fighting, flying, poison, ground, rock, bug,
                    ghost, steel, fire, water, grass, electric, psychic,
                    ice, dragon, dark, fairy, unknown, shadow];
                graph.update();
            })
        }
        
        const dataPokemon = {
            labels: labels,
            datasets: [
                {
                    label: "Pokemon types",
                    data: [],
                        backgroundColor: ['red', 'blue', 'green', 'pink', 'purple', 'yellow', 'orange'],
                }
            ]
        }
    
        const configPokemon = {
            type: 'line',
            data: dataPokemon,
        }
    
        const graph = new Chart(document.getElementById("js--chart--1"), configPokemon);
    
    };
    
    getPokemon();

    
function getPokemonData(){
    let normal = 0, fighting = 0, flying = 0, poison = 0, ground = 0, rock = 0, bug = 0,
    ghost = 0, steel = 0, fire = 0, water = 0, grass = 0, electric = 0, psychic = 0,
    ice = 0, dragon = 0, dark = 0, fairy = 0, unknown = 0, shadow = 0;
    
    const labels = ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug',
        'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic',
        'ice', 'dragon', 'dark', 'fairy', 'unknown', 'shadow']
    
    for(i = 0; i < 10; i++){
        let randomNumber2 = Math.floor(Math.random() * 1010 + 1);
        let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber2)
        .then(function(response2){
        return response2.json()
        })
        .then(function(realPokemonData){
            switch(realPokemonData.types[0].type.name){
                case 'normal':
                    normal = normal + 1;
                    break;
                case 'fighting':
                    fighting = fighting + 1;
                    break;
                case 'flying':
                    flying = flying + 1;
                    break;
                case 'poison':
                    poison = poison + 1;
                    break;
                case 'ground':
                    ground = ground + 1;
                    break;
                case 'rock':
                    rock = rock + 1;
                    break;
                case 'bug':
                    bug = bug + 1;
                    break;
                case 'ghost':
                    ghost = ghost + 1;
                    break;
                case 'steel':
                    steel = steel + 1;
                    break;
                case 'fire':
                    fire = fire + 1;
                    break;
                case 'water':
                    water = water + 1;
                    break;
                case 'grass':
                    grass = grass + 1;
                    break;
                case 'electric':
                    electric = electric + 1;
                    break;
                case 'psychic':
                    psychic = psychic + 1;
                    break;
                case 'ice':
                    ice = ice + 1;
                    break;
                case 'dragon':
                    dragon = dragon + 1;
                    break;
                case 'dark':
                    dark = dark + 1;
                    break;
                case 'fairy':
                    fairy = fairy + 1;
                    break;
                case 'unknown':
                    unknown = unknown + 1;
                    break;
                case 'shadow':
                    shadow = shadow + 1;
                    break;
                }
            }).then(function(){
                dataPokemon.datasets[0].data = [normal, fighting, flying, poison, ground, rock, bug,
                    ghost, steel, fire, water, grass, electric, psychic,
                    ice, dragon, dark, fairy, unknown, shadow];
                barChart.update();
            })
        }   
        
        const dataPokemon = {
            labels: labels,
            datasets: [
                {
                    label: "Pokemon types",
                    data: [],
                        backgroundColor: ['red', 'blue', 'green', 'pink', 'purple', 'yellow', 'orange'],
                }
            ]
        }
    
        const configPokemonData = {
            type: 'bar',
            data: dataPokemon
        }
    
        const barChart = new Chart(document.getElementById("js--chart--2"), configPokemonData);
    
    };
    
    getPokemonData();


    let date = document.getElementById("js--current-date");
    let time = document.getElementById("js--current-time");
    
    let today = new Date();
    let hour = today.getHours();
    
    setInterval(() =>{
        let d = new Date();
        date.innerHTML =d.toLocaleDateString([], { month: '2-digit', day: 'numeric'});
    },1000);
    
    setInterval(() =>{
        let c = new Date();
        time.innerHTML = c.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    },1000);