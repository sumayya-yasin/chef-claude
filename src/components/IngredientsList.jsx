export default function IngredientsList(props) {
  const ingredientList = props.ingredients.map((ingredient) => (
    <li className="list__items" key={ingredient}>
      {ingredient}
    </li>
  ));

  const enoughIngredients = props.ingredients.length >= 4;

  return (
    <section>
      <h2 className="heading">Ingredients on hand:</h2>
      <ul>{ingredientList}</ul>
      {!enoughIngredients && (
        <div className="callout callout--info">
          <h3 className="callout__heading">Almost there!</h3>
          <p className="callout__text">
            Add at least <strong>4 ingredients</strong> to generate a recipe.
            You're just <strong>{4 - props.ingredients.length}</strong> away!
          </p>
        </div>
      )}

      {enoughIngredients && (
        <div className="callout callout--ready">
          <div>
            <h3 className="callout__heading">Ready for a recipe?</h3>
            <p className="callout__text">
              Generate a recipe from your list of ingredients.
            </p>
          </div>
          <button
            className="callout__btn"
            onClick={props.getRecipe}
            disabled={props.loadingState}
          >
            {props.loadingState ? "Loading..." : "Get a recipe"}
          </button>
        </div>
      )}
    </section>
  );
}
