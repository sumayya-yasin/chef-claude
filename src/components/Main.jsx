import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipeShown, setRecipeShown] = useState(false);

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  function toggleRecipeShown() {
    setRecipeShown((prevRecipeShown) => !prevRecipeShown);
  }

  return (
    <main className="main">
      <form className="add-ingredient__form" action={addIngredient}>
        <input
          type="text"
          aria-label="Add ingredient"
          placeholder="e.g. oregano"
          name="ingredient"
          className="add-ingredient__input"
        />
        <button className="add-ingredient__btn">Add ingredient</button>
      </form>

      {ingredients.length > 0 ? (
        <IngredientsList ingredients={ingredients} shown={toggleRecipeShown} />
      ) : null}

      {recipeShown ? <ClaudeRecipe /> : null}
    </main>
  );
}
