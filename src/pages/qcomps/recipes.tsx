export const recipes = [
  {
    id: 'greek-salad',
    name: 'Greek Salad',
    ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
  },
  {
    id: 'hawaiian-pizza',
    name: 'Hawaiian Pizza',
    ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
  },
  {
    id: 'hummus',
    name: 'Hummus',
    ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
  }
];

function IngredientList({ ingredients }: { ingredients: string[] }) {
  return (
    <ul>
      {ingredients.map((ingredient) => (
        <li key={ingredient}>{ingredient}</li>
      ))}
    </ul>
  );
}

function Recipe({ name, ingredients }: { name: string; ingredients: string[] }) {
  return (
    <div>
      <h2>{name}</h2>
      <IngredientList ingredients={ingredients} />
    </div>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.id}
          name={recipe.name}
          ingredients={recipe.ingredients}
        />
      ))}
    </div>
  );
}