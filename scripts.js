function displayRecipes(recipes, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  recipes.forEach(recipe => {
    const recipeElement = document.createElement('div');
    recipeElement.className = 'recipe';

    const recipeImage = document.createElement('img');
    recipeImage.src = recipe.imageUrl;
    recipeImage.alt = recipe.name;

    const recipeName = document.createElement('h3');
    recipeName.textContent = recipe.name;

    const recipeDescription = document.createElement('p');
    recipeDescription.textContent = recipe.description;

    recipeElement.appendChild(recipeImage);
    recipeElement.appendChild(recipeName);
    recipeElement.appendChild(recipeDescription);

    container.appendChild(recipeElement);
  });
}

function displayMainCourses() {
  if (window.location.pathname.includes('maincourses.html')) {
    displayRecipes(mockRecipesData.mainCourses, 'main-courses-container');
  }
}

function displayDesserts() {
  if (window.location.pathname.includes('desserts.html')) {
    displayRecipes(mockRecipesData.desserts, 'desserts-container');
  }
}

function displayPopularDishes() {
if (window.location.pathname.includes('index.html')) {
displayRecipes(mockRecipesData.popularDishes, 'popular-dishes-container');
 }
}

function searchRecipes(query) {
const filteredRecipes = [];
const allRecipes = [...mockRecipesData.mainCourses, ...mockRecipesData.desserts];

allRecipes.forEach(recipe => {
if (recipe.name.toLowerCase().includes(query.toLowerCase()) || recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(query.toLowerCase()))) {
filteredRecipes.push(recipe);
 }
});

return filteredRecipes;
}

function handleSearchButtonClick() {
const searchInput = document.getElementById('search-input');
const query = searchInput.value.trim();
if (query) {
const results = searchRecipes(query);
displayRecipes(results, 'popular-dishes-container');
 }
}

document.getElementById('search-button').addEventListener('click', handleSearchButtonClick);

displayMainCourses();
displayDesserts();
displayPopularDishes();
