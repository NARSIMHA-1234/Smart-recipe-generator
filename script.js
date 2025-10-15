// Recipe Database
const recipeDatabase = [
    {
        id: 1,
        name: "Chicken Fried Rice",
        ingredients: ["chicken", "rice", "eggs", "soy sauce", "vegetables", "garlic", "ginger"],
        instructions: [
            "Cook rice and let it cool completely",
            "Cut chicken into small pieces and season",
            "Heat oil in wok and cook chicken until golden",
            "Push chicken to one side, scramble eggs",
            "Add cold rice and vegetables",
            "Season with soy sauce and mix well",
            "Garnish with green onions and serve hot"
        ],
        cookingTime: 25,
        difficulty: "easy",
        servings: 4,
        cuisine: "asian",
        nutrition: { calories: 420, protein: 28, carbs: 45, fat: 12 },
        dietary: [],
        image: "🍛",
        rating: 4.5,
        category: "popular"
    },
    {
        id: 2,
        name: "Spaghetti Carbonara",
        ingredients: ["pasta", "eggs", "bacon", "parmesan", "garlic", "black pepper"],
        instructions: [
            "Cook spaghetti according to package directions",
            "Fry bacon until crispy, reserve fat",
            "Whisk eggs with parmesan cheese",
            "Toss hot pasta with bacon and fat",
            "Add egg mixture off heat, toss quickly",
            "Season with black pepper and serve"
        ],
        cookingTime: 20,
        difficulty: "medium",
        servings: 4,
        cuisine: "italian",
        nutrition: { calories: 520, protein: 22, carbs: 45, fat: 28 },
        dietary: [],
        image: "🍝",
        rating: 4.8,
        category: "trending"
    },
    {
        id: 3,
        name: "Beef Tacos",
        ingredients: ["ground beef", "tortillas", "lettuce", "cheese", "tomatoes", "onions"],
        instructions: [
            "Brown ground beef with taco seasoning",
            "Warm tortillas in dry skillet",
            "Shred lettuce and dice tomatoes",
            "Grate cheese and slice onions",
            "Fill tortillas with seasoned beef",
            "Top with fresh vegetables and cheese"
        ],
        cookingTime: 20,
        difficulty: "easy",
        servings: 6,
        cuisine: "mexican",
        nutrition: { calories: 380, protein: 22, carbs: 25, fat: 20 },
        dietary: [],
        image: "🌮",
        rating: 4.4,
        category: "quick"
    },
    {
        id: 4,
        name: "Caesar Salad",
        ingredients: ["lettuce", "parmesan", "croutons", "caesar dressing", "anchovies"],
        instructions: [
            "Wash and dry romaine lettuce",
            "Tear lettuce into bite-sized pieces",
            "Toss lettuce with caesar dressing",
            "Add freshly grated parmesan",
            "Top with golden croutons",
            "Garnish with anchovy fillets"
        ],
        cookingTime: 10,
        difficulty: "easy",
        servings: 4,
        cuisine: "american",
        nutrition: { calories: 250, protein: 8, carbs: 15, fat: 18 },
        dietary: [],
        image: "🥬",
        rating: 4.3,
        category: "healthy"
    },
    {
        id: 5,
        name: "Vegetable Stir Fry",
        ingredients: ["broccoli", "carrots", "bell peppers", "soy sauce", "garlic", "ginger", "rice"],
        instructions: [
            "Cut all vegetables into uniform pieces",
            "Heat oil in wok over high heat",
            "Add garlic and ginger, stir briefly",
            "Add harder vegetables first",
            "Stir-fry until crisp-tender",
            "Season with soy sauce and serve over rice"
        ],
        cookingTime: 15,
        difficulty: "easy",
        servings: 4,
        cuisine: "asian",
        nutrition: { calories: 220, protein: 8, carbs: 35, fat: 6 },
        dietary: ["vegetarian", "vegan"],
        image: "🥦",
        rating: 4.2,
        category: "healthy"
    },
    {
        id: 6,
        name: "Grilled Salmon",
        ingredients: ["salmon", "lemon", "olive oil", "herbs", "garlic", "asparagus"],
        instructions: [
            "Marinate salmon with lemon and herbs",
            "Preheat grill to medium-high heat",
            "Grill salmon 4-5 minutes per side",
            "Grill asparagus alongside salmon",
            "Check salmon flakes easily with fork",
            "Serve with lemon wedges"
        ],
        cookingTime: 20,
        difficulty: "medium",
        servings: 4,
        cuisine: "american",
        nutrition: { calories: 350, protein: 35, carbs: 5, fat: 20 },
        dietary: ["gluten-free"],
        image: "🐟",
        rating: 4.7,
        category: "healthy"
    },
    {
        id: 7,
        name: "Margherita Pizza",
        ingredients: ["pizza dough", "tomato sauce", "mozzarella", "basil", "olive oil"],
        instructions: [
            "Preheat oven to 475°F",
            "Roll out pizza dough",
            "Spread tomato sauce evenly",
            "Add fresh mozzarella pieces",
            "Drizzle with olive oil",
            "Bake 12-15 minutes until golden",
            "Top with fresh basil before serving"
        ],
        cookingTime: 25,
        difficulty: "medium",
        servings: 4,
        cuisine: "italian",
        nutrition: { calories: 380, protein: 16, carbs: 45, fat: 14 },
        dietary: ["vegetarian"],
        image: "🍕",
        rating: 4.6,
        category: "popular"
    },
    {
        id: 8,
        name: "Chicken Curry",
        ingredients: ["chicken", "onions", "tomatoes", "curry powder", "coconut milk", "rice"],
        instructions: [
            "Cut chicken into bite-sized pieces",
            "Sauté onions until golden brown",
            "Add curry powder and cook until fragrant",
            "Add tomatoes and cook until soft",
            "Add chicken and brown on all sides",
            "Pour in coconut milk and simmer 20 minutes",
            "Serve over steamed rice"
        ],
        cookingTime: 40,
        difficulty: "medium",
        servings: 6,
        cuisine: "indian",
        nutrition: { calories: 480, protein: 35, carbs: 25, fat: 28 },
        dietary: ["gluten-free"],
        image: "🍛",
        rating: 4.5,
        category: "trending"
    },
    {
        id: 9,
        name: "Greek Salad",
        ingredients: ["tomatoes", "cucumber", "olives", "feta cheese", "olive oil", "oregano"],
        instructions: [
            "Cut tomatoes and cucumber into chunks",
            "Add kalamata olives and feta cheese",
            "Drizzle with olive oil",
            "Sprinkle with dried oregano",
            "Season with salt and pepper",
            "Toss gently and serve"
        ],
        cookingTime: 10,
        difficulty: "easy",
        servings: 4,
        cuisine: "mediterranean",
        nutrition: { calories: 180, protein: 8, carbs: 12, fat: 14 },
        dietary: ["vegetarian", "gluten-free"],
        image: "🥙",
        rating: 4.3
    },
    {
        id: 10,
        name: "Pancakes",
        ingredients: ["flour", "eggs", "milk", "sugar", "baking powder", "butter"],
        instructions: [
            "Mix dry ingredients in large bowl",
            "Whisk eggs and milk separately",
            "Combine wet and dry ingredients",
            "Heat griddle over medium heat",
            "Pour batter and cook until bubbles form",
            "Flip and cook until golden brown"
        ],
        cookingTime: 15,
        difficulty: "easy",
        servings: 4,
        cuisine: "american",
        nutrition: { calories: 280, protein: 8, carbs: 45, fat: 8 },
        dietary: ["vegetarian"],
        image: "🥞",
        rating: 4.4
    },
    {
        id: 11,
        name: "Beef Stir Fry",
        ingredients: ["beef", "broccoli", "carrots", "soy sauce", "ginger", "garlic"],
        instructions: [
            "Slice beef into thin strips",
            "Marinate beef in soy sauce",
            "Heat oil in wok over high heat",
            "Cook beef until browned",
            "Add vegetables and stir-fry",
            "Season and serve over rice"
        ],
        cookingTime: 15,
        difficulty: "medium",
        servings: 4,
        cuisine: "asian",
        nutrition: { calories: 380, protein: 32, carbs: 15, fat: 22 },
        dietary: [],
        image: "🥩",
        rating: 4.6
    },
    {
        id: 12,
        name: "Caprese Salad",
        ingredients: ["tomatoes", "mozzarella", "basil", "olive oil", "balsamic vinegar"],
        instructions: [
            "Slice tomatoes and mozzarella",
            "Arrange alternating on plate",
            "Add fresh basil leaves",
            "Drizzle with olive oil",
            "Add balsamic vinegar",
            "Season with salt and pepper"
        ],
        cookingTime: 5,
        difficulty: "easy",
        servings: 4,
        cuisine: "italian",
        nutrition: { calories: 220, protein: 12, carbs: 8, fat: 16 },
        dietary: ["vegetarian", "gluten-free"],
        image: "🍅",
        rating: 4.5
    },
    {
        id: 13,
        name: "Chicken Soup",
        ingredients: ["chicken", "carrots", "celery", "onions", "noodles", "herbs"],
        instructions: [
            "Boil chicken with vegetables",
            "Remove chicken and shred",
            "Strain broth and return to pot",
            "Add noodles and cook",
            "Return chicken to pot",
            "Season with herbs and serve"
        ],
        cookingTime: 45,
        difficulty: "medium",
        servings: 6,
        cuisine: "american",
        nutrition: { calories: 250, protein: 20, carbs: 25, fat: 8 },
        dietary: [],
        image: "🍲",
        rating: 4.7
    },
    {
        id: 14,
        name: "Fish Tacos",
        ingredients: ["fish", "tortillas", "cabbage", "lime", "cilantro", "avocado"],
        instructions: [
            "Season fish with spices",
            "Cook fish until flaky",
            "Warm tortillas",
            "Shred cabbage finely",
            "Slice avocado",
            "Assemble tacos with toppings"
        ],
        cookingTime: 20,
        difficulty: "medium",
        servings: 4,
        cuisine: "mexican",
        nutrition: { calories: 320, protein: 25, carbs: 30, fat: 12 },
        dietary: [],
        image: "🌮",
        rating: 4.5
    },
    {
        id: 15,
        name: "Mushroom Risotto",
        ingredients: ["rice", "mushrooms", "onions", "white wine", "parmesan", "butter"],
        instructions: [
            "Sauté mushrooms until golden",
            "Cook onions until translucent",
            "Add rice and toast briefly",
            "Add wine and stir until absorbed",
            "Add broth gradually, stirring",
            "Finish with parmesan and butter"
        ],
        cookingTime: 35,
        difficulty: "hard",
        servings: 4,
        cuisine: "italian",
        nutrition: { calories: 450, protein: 15, carbs: 55, fat: 18 },
        dietary: ["vegetarian"],
        image: "🍚",
        rating: 4.8
    },
    {
        id: 16,
        name: "BBQ Ribs",
        ingredients: ["ribs", "bbq sauce", "brown sugar", "paprika", "garlic powder"],
        instructions: [
            "Season ribs with dry rub",
            "Wrap in foil and bake 2 hours",
            "Remove foil and brush with sauce",
            "Grill for 10 minutes",
            "Brush with more sauce",
            "Serve with extra sauce"
        ],
        cookingTime: 150,
        difficulty: "hard",
        servings: 4,
        cuisine: "american",
        nutrition: { calories: 650, protein: 45, carbs: 25, fat: 40 },
        dietary: [],
        image: "🍖",
        rating: 4.9
    },
    {
        id: 17,
        name: "Pad Thai",
        ingredients: ["rice noodles", "shrimp", "eggs", "bean sprouts", "peanuts", "lime"],
        instructions: [
            "Soak rice noodles in warm water",
            "Heat oil in wok",
            "Cook shrimp until pink",
            "Push aside and scramble eggs",
            "Add noodles and sauce",
            "Toss with bean sprouts and peanuts"
        ],
        cookingTime: 20,
        difficulty: "medium",
        servings: 4,
        cuisine: "asian",
        nutrition: { calories: 420, protein: 20, carbs: 55, fat: 15 },
        dietary: ["gluten-free"],
        image: "🍜",
        rating: 4.6
    },
    {
        id: 18,
        name: "Stuffed Peppers",
        ingredients: ["bell peppers", "ground turkey", "rice", "onions", "cheese"],
        instructions: [
            "Cut tops off peppers and remove seeds",
            "Cook ground turkey with onions",
            "Mix with cooked rice",
            "Stuff peppers with mixture",
            "Top with cheese",
            "Bake 35-40 minutes"
        ],
        cookingTime: 45,
        difficulty: "medium",
        servings: 4,
        cuisine: "american",
        nutrition: { calories: 320, protein: 25, carbs: 30, fat: 12 },
        dietary: ["gluten-free"],
        image: "🫑",
        rating: 4.4
    },
    {
        id: 19,
        name: "Chocolate Chip Cookies",
        ingredients: ["flour", "butter", "sugar", "eggs", "chocolate chips", "vanilla"],
        instructions: [
            "Cream butter and sugar",
            "Beat in eggs and vanilla",
            "Mix in flour gradually",
            "Fold in chocolate chips",
            "Drop on baking sheet",
            "Bake until golden brown"
        ],
        cookingTime: 25,
        difficulty: "easy",
        servings: 24,
        cuisine: "american",
        nutrition: { calories: 180, protein: 2, carbs: 25, fat: 8 },
        dietary: ["vegetarian"],
        image: "🍪",
        rating: 4.8
    },
    {
        id: 20,
        name: "Quinoa Salad",
        ingredients: ["quinoa", "cucumber", "tomatoes", "feta cheese", "olive oil", "lemon"],
        instructions: [
            "Cook quinoa and let cool",
            "Dice cucumber and tomatoes",
            "Crumble feta cheese",
            "Whisk olive oil with lemon",
            "Mix all ingredients",
            "Chill before serving"
        ],
        cookingTime: 20,
        difficulty: "easy",
        servings: 4,
        cuisine: "mediterranean",
        nutrition: { calories: 280, protein: 12, carbs: 35, fat: 10 },
        dietary: ["vegetarian", "gluten-free"],
        image: "🥗",
        rating: 4.3
    }
];

// Application State
let userIngredients = [];
let favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
let currentTheme = localStorage.getItem('theme') || 'light';

// Common ingredients for suggestions
const commonIngredients = [
    'chicken', 'beef', 'pork', 'fish', 'shrimp', 'eggs', 'milk', 'cheese', 'butter',
    'rice', 'pasta', 'bread', 'flour', 'potatoes', 'onions', 'garlic', 'tomatoes',
    'bell peppers', 'carrots', 'broccoli', 'spinach', 'lettuce', 'mushrooms',
    'olive oil', 'soy sauce', 'salt', 'pepper', 'herbs', 'spices'
];

// DOM Elements
const navBtns = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.section');
const themeToggle = document.getElementById('themeToggle');
const imageInput = document.getElementById('imageInput');
const uploadArea = document.getElementById('uploadArea');
const imagePreview = document.getElementById('imagePreview');
const ingredientInput = document.getElementById('ingredientInput');
const addIngredientBtn = document.getElementById('addIngredient');
const ingredientTags = document.getElementById('ingredientTags');
const ingredientCount = document.getElementById('ingredientCount');
const suggestions = document.getElementById('suggestions');
const generateBtn = document.getElementById('generateRecipes');
const loading = document.getElementById('loading');
const resultsSection = document.getElementById('resultsSection');
const recipeResults = document.getElementById('recipeResults');
const favoriteRecipesContainer = document.getElementById('favoriteRecipes');
const recommendedRecipesContainer = document.getElementById('recommendedRecipes');
const modal = document.getElementById('recipeModal');
const modalContent = document.getElementById('modalContent');
const toast = document.getElementById('toast');

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    displayFavoriteRecipes();
    displayRecommendedRecipes('popular');
    applyTheme(currentTheme);
    showSuggestions();
});

// Event Listeners
function setupEventListeners() {
    // Navigation
    navBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const section = e.target.getAttribute('data-section');
            showSection(section);
            updateActiveNav(e.target);
        });
    });

    // Theme toggle
    themeToggle?.addEventListener('click', toggleTheme);

    // Image upload
    uploadArea?.addEventListener('click', () => imageInput.click());
    uploadArea?.addEventListener('dragover', handleDragOver);
    uploadArea?.addEventListener('drop', handleDrop);
    imageInput?.addEventListener('change', handleImageUpload);

    // Ingredient input
    addIngredientBtn?.addEventListener('click', addIngredient);
    ingredientInput?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addIngredient();
    });
    ingredientInput?.addEventListener('input', handleIngredientInput);

    // Generate recipes
    generateBtn?.addEventListener('click', generateRecipes);

    // Recommend filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            const filter = e.target.getAttribute('data-filter');
            displayRecommendedRecipes(filter);
        });
    });

    // Modal
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', closeModal);
    });
    modal?.addEventListener('click', (e) => {
        if (e.target === modal || e.target.classList.contains('modal-backdrop')) {
            closeModal();
        }
    });
}

// Navigation
function showSection(sectionId) {
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId)?.classList.add('active');
    
    if (sectionId !== 'favorites') {
        resultsSection?.classList.add('hidden');
    }
}

function updateActiveNav(activeBtn) {
    navBtns.forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');
}

// Theme Management
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(currentTheme);
    localStorage.setItem('theme', currentTheme);
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const icon = themeToggle?.querySelector('i');
    if (icon) {
        icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
}

// Image Upload
function handleDragOver(e) {
    e.preventDefault();
    uploadArea.style.borderColor = 'var(--primary)';
}

function handleDrop(e) {
    e.preventDefault();
    uploadArea.style.borderColor = 'var(--border)';
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        handleImageFile(files[0]);
    }
}

function handleImageUpload(e) {
    const file = e.target.files[0];
    if (file) {
        handleImageFile(file);
    }
}

function handleImageFile(file) {
    if (!file.type.startsWith('image/')) {
        showToast('Please select an image file', 'error');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        imagePreview.innerHTML = `
            <img src="${e.target.result}" alt="Uploaded ingredient">
            <button class="btn-primary" onclick="removeImage()">
                <i class="fas fa-trash"></i> Remove
            </button>
        `;
        imagePreview.classList.remove('hidden');
        
        showToast('Processing image...', 'info');
        setTimeout(() => {
            const recognizedIngredients = processIngredientRecognition();
            recognizedIngredients.forEach(ingredient => {
                if (!userIngredients.includes(ingredient)) {
                    userIngredients.push(ingredient);
                }
            });
            updateIngredientTags();
            showToast(`Found ${recognizedIngredients.length} ingredients!`, 'success');
        }, 2000);
    };
    reader.readAsDataURL(file);
}

window.removeImage = function() {
    imagePreview.innerHTML = '';
    imagePreview.classList.add('hidden');
    imageInput.value = '';
}

function processIngredientRecognition() {
    const possibleIngredients = ['tomatoes', 'onions', 'garlic', 'chicken', 'beef', 'cheese', 'lettuce', 'carrots', 'bell peppers', 'mushrooms'];
    const numIngredients = Math.floor(Math.random() * 4) + 2;
    const recognized = [];
    
    for (let i = 0; i < numIngredients; i++) {
        const ingredient = possibleIngredients[Math.floor(Math.random() * possibleIngredients.length)];
        if (!recognized.includes(ingredient)) {
            recognized.push(ingredient);
        }
    }
    
    return recognized;
}

// Ingredient Management
function handleIngredientInput(e) {
    const value = e.target.value.toLowerCase();
    if (value.length > 1) {
        const filtered = commonIngredients.filter(ingredient => 
            ingredient.toLowerCase().includes(value) && !userIngredients.includes(ingredient)
        ).slice(0, 5);
        
        displaySuggestions(filtered);
    } else {
        showSuggestions();
    }
}

function showSuggestions() {
    const randomSuggestions = commonIngredients
        .filter(ingredient => !userIngredients.includes(ingredient))
        .sort(() => 0.5 - Math.random())
        .slice(0, 8);
    
    displaySuggestions(randomSuggestions);
}

function displaySuggestions(suggestionList) {
    if (suggestions) {
        suggestions.innerHTML = suggestionList.map(ingredient => 
            `<span class="suggestion-tag" onclick="addSuggestedIngredient('${ingredient}')">${ingredient}</span>`
        ).join('');
    }
}

window.addSuggestedIngredient = function(ingredient) {
    if (!userIngredients.includes(ingredient)) {
        userIngredients.push(ingredient);
        updateIngredientTags();
        showSuggestions();
        showToast(`Added ${ingredient}`, 'success');
    }
}

function addIngredient() {
    const ingredient = ingredientInput.value.trim().toLowerCase();
    if (ingredient && !userIngredients.includes(ingredient)) {
        userIngredients.push(ingredient);
        ingredientInput.value = '';
        updateIngredientTags();
        showSuggestions();
        showToast(`Added ${ingredient}`, 'success');
    } else if (userIngredients.includes(ingredient)) {
        showToast('Ingredient already added', 'error');
    }
}

window.removeIngredient = function(ingredient) {
    userIngredients = userIngredients.filter(item => item !== ingredient);
    updateIngredientTags();
    showSuggestions();
    showToast(`Removed ${ingredient}`, 'info');
}

function updateIngredientTags() {
    if (ingredientTags) {
        ingredientTags.innerHTML = userIngredients.map(ingredient => 
            `<div class="ingredient-tag">
                ${ingredient}
                <span class="remove" onclick="removeIngredient('${ingredient}')">×</span>
            </div>`
        ).join('');
    }
    
    if (ingredientCount) {
        ingredientCount.textContent = `${userIngredients.length} ingredient${userIngredients.length !== 1 ? 's' : ''}`;
    }
}

// Serving adjustment
window.adjustServings = function(change) {
    const servingsInput = document.getElementById('servingsInput');
    if (servingsInput) {
        const currentValue = parseInt(servingsInput.value);
        const newValue = Math.max(1, Math.min(12, currentValue + change));
        servingsInput.value = newValue;
    }
}

// Recipe Generation
function generateRecipes() {
    if (userIngredients.length === 0) {
        showToast('Please add some ingredients first!', 'error');
        return;
    }

    showLoading();
    
    setTimeout(() => {
        const matchedRecipes = findMatchingRecipes();
        displayRecipes(matchedRecipes);
        hideLoading();
    }, 2000);
}

function findMatchingRecipes() {
    const preferences = getSelectedPreferences();
    const filters = getSelectedFilters();
    
    let matchedRecipes = recipeDatabase.filter(recipe => {
        const matchCount = recipe.ingredients.filter(ingredient => 
            userIngredients.some(userIng => 
                ingredient.toLowerCase().includes(userIng) || userIng.includes(ingredient.toLowerCase())
            )
        ).length;
        
        if (matchCount === 0) return false;
        
        if (preferences.length > 0) {
            const hasMatchingDiet = preferences.some(pref => recipe.dietary.includes(pref));
            if (!hasMatchingDiet && recipe.dietary.length > 0) return false;
        }
        
        if (filters.difficulty && recipe.difficulty !== filters.difficulty) return false;
        if (filters.time && recipe.cookingTime > filters.time) return false;
        if (filters.cuisine && recipe.cuisine !== filters.cuisine) return false;
        
        return true;
    });
    
    matchedRecipes = matchedRecipes.map(recipe => {
        const matchCount = recipe.ingredients.filter(ingredient => 
            userIngredients.some(userIng => 
                ingredient.toLowerCase().includes(userIng) || userIng.includes(ingredient.toLowerCase())
            )
        ).length;
        
        const matchPercentage = (matchCount / recipe.ingredients.length) * 100;
        
        return { ...recipe, matchScore: matchCount, matchPercentage };
    }).sort((a, b) => b.matchScore - a.matchScore || b.rating - a.rating);
    
    return matchedRecipes.slice(0, 20);
}

function getSelectedPreferences() {
    return Array.from(document.querySelectorAll('.preference-card input:checked'))
        .map(input => input.value);
}

function getSelectedFilters() {
    return {
        difficulty: document.getElementById('difficultyFilter')?.value || '',
        time: parseInt(document.getElementById('timeFilter')?.value) || null,
        servings: parseInt(document.getElementById('servingsInput')?.value) || 4,
        cuisine: document.getElementById('cuisineFilter')?.value || ''
    };
}

function displayRecipes(recipes) {
    if (!recipeResults) return;
    
    if (recipes.length === 0) {
        recipeResults.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No recipes found</h3>
                <p>Try adding more ingredients or adjusting your filters</p>
            </div>
        `;
    } else {
        recipeResults.innerHTML = recipes.map(recipe => createRecipeCard(recipe)).join('');
    }
    
    resultsSection?.classList.remove('hidden');
}

function createRecipeCard(recipe) {
    const isFavorite = favoriteRecipes.includes(recipe.id);
    const matchPercentage = recipe.matchPercentage || 0;
    
    return `
        <div class="recipe-card">
            <div class="recipe-image">${recipe.image}</div>
            <div class="recipe-content">
                <h3 class="recipe-title">${recipe.name}</h3>
                <div class="recipe-meta">
                    <span><i class="fas fa-clock"></i> ${recipe.cookingTime} min</span>
                    <span><i class="fas fa-users"></i> ${recipe.servings}</span>
                    <span><i class="fas fa-signal"></i> ${recipe.difficulty}</span>
                </div>
                ${matchPercentage > 0 ? `
                    <div class="match-indicator">
                        <span class="match-percentage">${Math.round(matchPercentage)}% match</span>
                    </div>
                ` : ''}
                <div class="recipe-ingredients">
                    <strong>Ingredients:</strong> ${recipe.ingredients.slice(0, 3).join(', ')}${recipe.ingredients.length > 3 ? '...' : ''}
                </div>
                <button class="view-recipe-btn" onclick="showRecipeDetails(${recipe.id})">
                    <i class="fas fa-eye"></i>
                    <span>View Recipe</span>
                </button>
                <div class="recipe-actions">
                    <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${recipe.id})">
                        ${isFavorite ? '❤️' : '🤍'}
                    </button>
                    <div class="rating">
                        ${[1,2,3,4,5].map(star => 
                            `<span class="star ${star <= recipe.rating ? 'active' : ''}" onclick="rateRecipe(${recipe.id}, ${star})">⭐</span>`
                        ).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

window.showRecipeDetails = function(recipeId) {
    const recipe = recipeDatabase.find(r => r.id === recipeId);
    if (!recipe || !modalContent) return;
    
    modalContent.innerHTML = `
        <div class="recipe-details">
            <h2>${recipe.name} ${recipe.image}</h2>
            <div class="recipe-meta">
                <span><i class="fas fa-clock"></i> ${recipe.cookingTime} minutes</span>
                <span><i class="fas fa-users"></i> ${recipe.servings} servings</span>
                <span><i class="fas fa-signal"></i> ${recipe.difficulty}</span>
                <span><i class="fas fa-globe"></i> ${recipe.cuisine}</span>
            </div>
            
            <div class="nutrition-info">
                <h3><i class="fas fa-chart-pie"></i> Nutrition (per serving)</h3>
                <div class="nutrition-grid">
                    <div><strong>${recipe.nutrition.calories}</strong><br>Calories</div>
                    <div><strong>${recipe.nutrition.protein}g</strong><br>Protein</div>
                    <div><strong>${recipe.nutrition.carbs}g</strong><br>Carbs</div>
                    <div><strong>${recipe.nutrition.fat}g</strong><br>Fat</div>
                </div>
            </div>
            
            <h3><i class="fas fa-list"></i> Ingredients</h3>
            <ul class="ingredients-list">
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            
            <h3><i class="fas fa-utensils"></i> Instructions</h3>
            <ol class="steps">
                ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
            </ol>
            
            ${recipe.dietary.length > 0 ? `
                <h3><i class="fas fa-leaf"></i> Dietary Information</h3>
                <div class="dietary-tags">
                    ${recipe.dietary.map(diet => `<span class="diet-tag">${diet}</span>`).join('')}
                </div>
            ` : ''}
        </div>
    `;
    
    modal?.classList.remove('hidden');
}

function closeModal() {
    modal?.classList.add('hidden');
}

// Favorites
window.toggleFavorite = function(recipeId) {
    if (favoriteRecipes.includes(recipeId)) {
        favoriteRecipes = favoriteRecipes.filter(id => id !== recipeId);
        showToast('Removed from favorites', 'info');
    } else {
        favoriteRecipes.push(recipeId);
        showToast('Added to favorites', 'success');
    }
    
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
    displayFavoriteRecipes();
    
    const favoriteBtn = document.querySelector(`[onclick*="toggleFavorite(${recipeId})"]`);
    if (favoriteBtn) {
        const isFavorite = favoriteRecipes.includes(recipeId);
        favoriteBtn.textContent = isFavorite ? '❤️' : '🤍';
        favoriteBtn.classList.toggle('active', isFavorite);
    }
}

window.rateRecipe = function(recipeId, rating) {
    showToast(`Rated ${rating} stars`, 'success');
    
    const ratingContainer = event.target.parentElement;
    const stars = ratingContainer.querySelectorAll('.star');
    stars.forEach((star, index) => {
        star.classList.toggle('active', index < rating);
    });
}

function displayFavoriteRecipes() {
    if (!favoriteRecipesContainer) return;
    
    const favoriteRecipeData = favoriteRecipes
        .map(id => recipeDatabase.find(recipe => recipe.id === id))
        .filter(recipe => recipe);
    
    if (favoriteRecipeData.length === 0) {
        favoriteRecipesContainer.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-heart"></i>
                <h3>No favorite recipes yet</h3>
                <p>Start exploring and save your favorites!</p>
            </div>
        `;
    } else {
        favoriteRecipesContainer.innerHTML = favoriteRecipeData
            .map(recipe => createRecipeCard(recipe))
            .join('');
    }
}

// Display Recommended Recipes
function displayRecommendedRecipes(filter) {
    if (!recommendedRecipesContainer) return;
    
    let filteredRecipes = [];
    
    switch(filter) {
        case 'popular':
            filteredRecipes = recipeDatabase.filter(recipe => recipe.rating >= 4.5).slice(0, 8);
            break;
        case 'trending':
            filteredRecipes = recipeDatabase.filter(recipe => recipe.category === 'trending' || recipe.rating >= 4.6).slice(0, 8);
            break;
        case 'quick':
            filteredRecipes = recipeDatabase.filter(recipe => recipe.cookingTime <= 20).slice(0, 8);
            break;
        case 'healthy':
            filteredRecipes = recipeDatabase.filter(recipe => 
                recipe.dietary.includes('vegetarian') || 
                recipe.dietary.includes('vegan') || 
                recipe.dietary.includes('gluten-free') ||
                recipe.nutrition.calories < 300
            ).slice(0, 8);
            break;
        default:
            filteredRecipes = recipeDatabase.slice(0, 8);
    }
    
    recommendedRecipesContainer.innerHTML = filteredRecipes
        .map(recipe => createRecipeCard(recipe))
        .join('');
}

// Loading States
function showLoading() {
    loading?.classList.remove('hidden');
    if (generateBtn) {
        generateBtn.disabled = true;
        generateBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Finding Recipes...';
    }
}

function hideLoading() {
    loading?.classList.add('hidden');
    if (generateBtn) {
        generateBtn.disabled = false;
        generateBtn.innerHTML = '<i class="fas fa-magic"></i><span>Find Perfect Recipes</span>';
    }
}

// Toast Notifications
function showToast(message, type = 'info') {
    if (!toast) return;
    
    const toastIcon = toast.querySelector('.toast-icon');
    const toastMessage = toast.querySelector('.toast-message');
    
    const icons = {
        success: 'fas fa-check-circle',
        error: 'fas fa-exclamation-circle',
        info: 'fas fa-info-circle',
        warning: 'fas fa-exclamation-triangle'
    };
    
    if (toastIcon) toastIcon.className = `toast-icon ${icons[type]}`;
    if (toastMessage) toastMessage.textContent = message;
    toast.className = `toast ${type}`;
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}