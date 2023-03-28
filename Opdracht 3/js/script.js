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
}

var refreshButton = document.getElementById("js--refresh");
  refreshButton.addEventListener("click", function() {
    location.reload();
  });