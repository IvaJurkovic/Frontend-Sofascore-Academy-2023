//starting params
var elementsPerPage = 0;
var currentPage = 1;
const pageDisplay = document.getElementById("page-display");

//checking the window dimensions so that we can update
//the number of pokemon per page
let currentWindowWidth = window.screen.width;
let currentWindowHeight = window.screen.height;

//for phones and tablets there are going to be 4 pokemon per page
//2 in one row
if (currentWindowWidth >= 320 && currentWindowWidth <= 1000) {
  elementsPerPage = 4;
}

//for smaller screens there are going to be 8 pokemon per page
//4 in one row
if (currentWindowWidth > 1000 && currentWindowWidth <= 2000) {
  elementsPerPage = 8;
}

//for big screens there are going to be 10 pokemon per page
//5 in one row
if (currentWindowWidth > 2000) {
  elementsPerPage = 10;
}

//on load we call the functions to start the process
window.onload = function () {
  console.log("onLoad");
  changePageCount(1);
};

//function for moving forward in pages
function pageForward() {
  if (currentPage < totalPageAmount()) {
    currentPage++;
    changePageCount(currentPage);
  }
}

//function for moving backwards in pages
function pageBack() {
  if (currentPage > 1) {
    currentPage--;
    changePageCount(currentPage);
  }
}

//event listeners
document.getElementById("back-button").onclick = function () {
  pageBack();
};

document.getElementById("forward-button").onclick = function () {
  pageForward();
};

//function for calculating the total amount of pages based on the width of the screen
function totalPageAmount() {
  return Math.ceil(totalPokemonCount / elementsPerPage);
}

//change function for updating the number of current page which displays on the users screen
function changePageCount(page) {
  currentPage = page;
  if (page < 1) {
    page = 1;
  }

  if (page > totalPageAmount()) {
    page = totalPageAmount();
  }

  //we have to wait for the pokemon count so we can display the total pages count
  getPokemon(currentPage, elementsPerPage).finally(() => {
    pageDisplay.innerHTML = currentPage + "/" + totalPageAmount();
  });
}
