const apiKey = "edf88a6e4eec4335a9e38659a6a1b698";

document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname.endsWith("results.html")) {
    displayResults();
  } else if (window.location.pathname.endsWith("maincourses.html")) {
    displayMainCourses();
  } else if (window.location.pathname.endsWith("desserts.html")) {
    displayDesserts();
  }
});

function searchRecipes() {
  const searchInput = document.getElementById("searchInput").value;
  localStorage.setItem("searchInput", searchInput);
  window.location.href = "results.html";
}

function displayResults() {
  const searchInput = localStorage.getItem("searchInput");
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${encodeURIComponent(searchInput)}&number=10`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const recipes = data.results;
      displayRecipes(recipes, "results");
    })
    .catch(error => {
      console.error("Error fetching recipes:", error);
    });
}

function displayMainCourses() {
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&type=main course&number=10`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const recipes = data.results;
      displayRecipes(recipes, "main");
    })
    .catch(error => {
      console.error("Error fetching recipes:", error);
    });
}

function displayDesserts() {
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&type=dessert&number=10`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const recipes = data.results;
      displayRecipes(recipes, "desserts");
    })
    .catch(error => {
      console.error("Error fetching recipes:", error);
    });
}

function displayRecipes(recipes, type) {
  const container = document.querySelector(`.${type}-recipe-grid`);

  recipes.forEach((recipe) => {
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card");

    const recipeImage = document.createElement("img");
    recipeImage.src = recipe.image;
    recipeCard.appendChild(recipeImage);

    const recipeContent = document.createElement("div");
    recipeContent.classList.add("recipe-card-content");

    const recipeTitle = document.createElement("h3");
    recipeTitle.textContent = recipe.title;
    recipeContent.appendChild(recipeTitle);

    recipeCard.appendChild(recipeContent);
    container.appendChild(recipeCard);
  });
}
