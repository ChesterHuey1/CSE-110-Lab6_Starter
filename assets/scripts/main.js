// main.js

// Run the init() function when the page has loaded
window.addEventListener("DOMContentLoaded", init);

// Starts the program, all function calls trace back here
function init() {
	// Get the recipes from localStorage
	let recipes = getRecipesFromStorage();
	// Add each recipe to the <main> element
	addRecipesToDocument(recipes);
	// Add the event listeners to the form elements
	initFormHandler();
}

/**
 * Reads 'recipes' from localStorage and returns an array of
 * all of the recipes found (parsed, not in string form). If
 * nothing is found in localStorage for 'recipes', an empty array
 * is returned.
 * @returns {Array<Object>} An array of recipes found in localStorage
 */
function getRecipesFromStorage() {
	// A9. TODO - Complete the functionality as described in this function
	//           header. It is possible in only a single line, but should
	//           be no more than a few lines.
    const recipesString = localStorage.getItem('recipes');
    if (recipesString) {
      return JSON.parse(recipesString);
    } else {
      return [];
    }

}

/**
 * Takes in an array of recipes and for each recipe creates a
 * new <recipe-card> element, adds the recipe data to that card
 * using element.data = {...}, and then appends that new recipe
 * to <main>
 * @param {Array<Object>} recipes An array of recipes
 */
function addRecipesToDocument(recipes) {
	// A10. TODO - Get a reference to the <main> element
    const mainElement = document.querySelector('main');
	// A11. TODO - Loop through each of the recipes in the passed in array,
	//            create a <recipe-card> element for each one, and populate
	//            each <recipe-card> with that recipe data using element.data = ...
	//            Append each element to <main>
    recipes.forEach(recipe => {
        const recipeCard = document.createElement('recipe-card');
        recipeCard.data = recipe;
        mainElement.appendChild(recipeCard);
    });
}


/**
 * Takes in an array of recipes, converts it to a string, and then
 * saves that string to 'recipes' in localStorage
 * @param {Array<Object>} recipes An array of recipes
 */
function saveRecipesToStorage(recipes) {
	// EXPLORE - START (All explore numbers start with B)
	// B1. TODO - Complete the functionality as described in this function
	//            header. It is possible in only a single line, but should
	//            be no more than a few lines.
}

/**
 * Adds the necessary event handlers to <form> and the clear storage
 * <button>.
 */
function initFormHandler() {
    const formElement = document.querySelector('form');
    formElement.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(formElement);
        const recipeObject = {};
        formData.forEach((value, key) => {
            recipeObject[key] = value;
        });
        const recipeCard = document.createElement('recipe-card');
        recipeCard.data = recipeObject;
        const mainElement = document.querySelector('main');
        mainElement.appendChild(recipeCard);
        let recipes = getRecipesFromStorage();
        recipes.push(recipeObject);
        saveRecipesToStorage(recipes);
        formElement.reset();
    });
    const clearStorageButton = document.querySelector('.danger');
    clearStorageButton.addEventListener('click', () => {
        localStorage.clear();
        const mainElement = document.querySelector('main');
        mainElement.innerHTML = '';
    });
}

