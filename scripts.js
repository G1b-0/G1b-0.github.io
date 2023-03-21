const mockRecipesData = [
  {
    "id": 1,
    "title": "Spaghetti Bolognese",
    "image": "spaghetti-bolognese.jpg",
    "ingredients": [
      "spaghetti",
      "ground beef",
      "onion",
      "garlic",
      "carrot",
      "celery",
      "tomato sauce",
      "red wine",
      "salt",
      "pepper"
    ],
    "type": "main course"
  },
  {
    "id": 2,
    "title": "Chocolate Chip Cookies",
    "image": "chocolate-chip-cookies.jpg",
    "ingredients": [
      "butter",
      "sugar",
      "brown sugar",
      "vanilla extract",
      "eggs",
      "flour",
      "baking soda",
      "salt",
      "chocolate chips"
    ],
    "type": "dessert"
  },
  {
    "id": 3,
    "title": "Caesar Salad",
    "image": "caesar-salad.jpg",
    "ingredients": [
      "romaine lettuce",
      "croutons",
      "parmesan cheese",
      "anchovies",
      "lemon juice",
      "olive oil",
      "garlic",
      "egg",
      "dijon mustard",
      "salt",
      "pepper"
    ],
    "type": "main course"
  }
];

document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname.endsWith("index.html")) {
    displayPopularDishes();
  } else if (window.location.pathname.endsWith("maincourses.html")) {
    displayMainCourses();
  } else if (window.location.pathname.endsWith("desserts.html")) {
    displayDesserts();
  } else if (window.location.pathname.endsWith("results.html")) {
    displayResults();
  }
});

function searchRecipes() {
  const searchInput = document.getElementById("searchInput").value;
  localStorage.setItem("searchInput", searchInput);
  window.location.href = "results.html";
}

function displayResults() {
  const searchInput = localStorage.getItem("searchInput");
  const matchedRecipes = mockRecipesData.filter(recipe => recipe.title.toLowerCase().includes(searchInput.toLowerCase()));
  displayRecipes(matchedRecipes, "results");
}

function displayMainCourses() {
  const mainCourses = mockRecipesData.filter(recipe => recipe.type === "main course");
  displayRecipes(mainCourses, "main");
}

function displayDesserts() {
  const desserts = mockRecipesData.filter(recipe => recipe.type === "dessert");
  displayRecipes(desserts, "desserts");
}

function displayPopularDishes() {
  displayRecipes(mockRecipesData.slice(0, 2), "popular-dishes");
}

function displayRecipes(recipes, type) {
  const container = document.querySelector(`.${type}-recipe-grid`);
  container.innerHTML = "";

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
