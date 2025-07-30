import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "../ai";

export default function Body() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [recipeVisible, setRecipeVisible] = useState(false);

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  async function getRecipe() {
    setIsLoading(true);
    const generatedRecipe = await getRecipeFromMistral(ingredients);
    setRecipe(generatedRecipe);
    setIsLoading(false);
    setTimeout(() => {
      document
        .getElementById("recipe-section")
        .scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 10);
    setTimeout(() => {
      setRecipeVisible(true);
    }, 150);
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
        <IngredientsList
          ingredients={ingredients}
          getRecipe={getRecipe}
          loadingState={isLoading}
        />
      ) : null}
      {recipe && <ClaudeRecipe recipe={recipe} recipeVisible={recipeVisible}/>}
    </main>
  );
}
