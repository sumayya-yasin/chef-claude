export async function getRecipeFromMistral(ingredientsArr) {
  try {
    const response = await fetch("/.netlify/functions/get-recipe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ingredients: ingredientsArr }),
    });

    const data = await response.json();

    if (response.ok) {
      return data.recipe;
    } else {
      throw new Error(data.error || "Unknown error");
    }
  } catch (err) {
    console.error("Error fetching recipe:", err.message);
  }
}
