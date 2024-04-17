// Vue App
// eslint-disable-next-line no-unused-vars, no-undef
const app = new Vue({
    el: '#app',
    data: function() {
return {
        recipes: [
            { id: 1, name: 'Pasta Carbonara', description: 'Delicious Italian pasta with creamy sauce.', image: 'path/to/image1.jpg' },
            { id: 2, name: 'Chicken Curry', description: 'Spicy and flavorful Indian chicken curry.', image: 'path/to/image2.jpg' },
            // Add more recipes here
        ],
        selectedRecipe: null
    };
},
    methods: {
        showRecipeDetails: function(recipeId) {
            // Find the selected recipe by ID
            this.selectedRecipe = this.recipes.find(recipe => recipe.id === recipeId);
        }
    }
});
