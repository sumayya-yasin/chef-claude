import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "../ai";

export default function Body() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState([]);

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  function getRecipe() {
    setRecipe(getRecipeFromMistral(ingredients));
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
        <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
      ) : null}
      {recipe != null ? <ClaudeRecipe recipe={recipe} /> : null}{" "}
    </main>
  );
}
