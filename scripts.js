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

document.addEventListener('DOMContentLoaded', () => {
  displayMainCourses();
  displayDesserts();
  displayPopularDishes();
});
