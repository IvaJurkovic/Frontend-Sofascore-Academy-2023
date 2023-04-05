//starting params
const baseURL = "https://pokeapi.co/api/v2/pokemon";
var totalPokemonCount = 0;
var offset = 0;

//fetching pokemon based on the width of the screen
async function getPokemon(currentPage, pokemonPerPage) {
  try {
    //we have an option of fetching with the offset and the limit
    //so we're going to use it instead of hardcoding stuff

    //we do it with the params we get from updating the pages
    //and from changing the window size
    console.log(currentPage);
    offset = (currentPage - 1) * pokemonPerPage;

    const response = await fetch(
      baseURL + "?offset=" + offset + "&limit=" + pokemonPerPage
    );

    if (response.status === 200) {
      const decodedData = await response.json();
      console.log("Decoded response", decodedData);
      totalPokemonCount = decodedData.count;

      if ("content" in document.createElement("template")) {
        const topRow = document.querySelector("#top-row");
        const bottomRow = document.querySelector("#bottom-row");
        const template = document.querySelector("#card-template");

        if (
          topRow.children.length === decodedData.results.length / 2 ||
          topRow.children.length >= decodedData.results.length / 2
        ) {
          while (topRow.firstChild) {
            topRow.removeChild(topRow.firstChild);
          }
        }
        if (
          bottomRow.children.length === decodedData.results.length / 2 ||
          bottomRow.children.length >= decodedData.results.length / 2
        ) {
          while (bottomRow.firstChild) {
            bottomRow.removeChild(bottomRow.firstChild);
          }
        }

        for (let i = 0; i < decodedData.results.length; i++) {
          const clone = template.content.cloneNode(true);
          let card = clone.querySelector("#card");
          let no = clone.querySelector("#pokedex-number");
          let name = clone.querySelector("#pokedex-name");
          let hide = clone.querySelector("#hide-element");
          let imageFront = clone.querySelector("#image-holder-front");
          let imageBack = clone.querySelector("#image-holder-back");
          let dataContainerFront = clone.querySelector("#data-container-front");
          let dataContainerBack = clone.querySelector("#data-container-back");
          let type = clone.querySelector("#pokedex-type");
          let weight = clone.querySelector("#pokedex-weight");
          let height = clone.querySelector("#pokedex-height");
          let hp = clone.querySelector("#pokedex-hp");
          let details = clone.querySelector("#pokedex-description")

          if (localStorage.getItem(offset + i) === decodedData.results[i].name) {
            hideElement();
          }

          if(localStorage.length)

          hide.addEventListener("click", hideElement, true);

          if (localStorage.getItem(offset + i) === null) {
            card.addEventListener("click", flipCard, false);
          }

          function flipCard() {
            card.classList.toggle("flipped");
          }

          function hideElement() {
            card.classList.toggle("hide");
            localStorage.setItem(offset + i, decodedData.results[i].name);
          }

          no.textContent = "#000" + (offset + i + 1) + ":";

          name.textContent =
            decodedData.results[i].name.charAt(0).toUpperCase() +
            decodedData.results[i].name.slice(1).replace(/-/g, " ");

          let pokemonURL = decodedData.results[i].url;


          try {
            const responsePokemon = await fetch(pokemonURL);

            if (responsePokemon.status === 200) {
              const pokemonDetails = await responsePokemon.json();
              let colorKey = "";

              console.log(pokemonDetails)

              imageFront["src"] = pokemonDetails.sprites.front_default;
              imageBack["src"] = pokemonDetails.sprites.back_default;

              type.textContent += "Type: ";
              for (let j = 0; j < pokemonDetails.types.length; j++) {
                if (j < pokemonDetails.types.length - 1) {
                  if (j === 0) {
                    colorKey = pokemonDetails.types[j].type.name;
                  }
                  type.textContent += pokemonDetails.types[j].type.name;
                  type.textContent += " | ";
                } else {
                  if (j === 0) {
                    colorKey = pokemonDetails.types[j].type.name;
                  }
                  type.textContent += pokemonDetails.types[j].type.name;
                }
              }
              dataContainerFront.classList.add(colorKey);
              dataContainerBack.classList.add(colorKey);
              weight.textContent = "Weight: " + pokemonDetails.weight + " kg";
              height.textContent =
                "Height: " + pokemonDetails.height * 10 + " cm";
              hp.textContent =
                "Health points: " + pokemonDetails.stats[0].base_stat + " HP";
              
              let detailsURL = pokemonDetails.species.url;
              
              try {
                const responseDetails = await fetch(detailsURL)

                if(responseDetails.status === 200) {
                  const detailsJSON = await responseDetails.json();

                  console.log(detailsJSON)
                  details.textContent = "Details: " + detailsJSON.flavor_text_entries[0].flavor_text.replace("\f", " ")
                }
              } catch (error) {
                console.error("Error: " + error)
              }
            }
          } catch (error) {
            console.error("Error:", error);
          }

          if (i < decodedData.results.length / 2) {
            topRow.appendChild(clone);
          } else {
            bottomRow.appendChild(clone);
          }
        }
      }
    } else {
      console.log("Response status code is not OK!");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
