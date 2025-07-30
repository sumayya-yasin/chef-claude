export default function IngredientsList(props) {
  const ingredientList = props.ingredients.map((ingredient) => (
    <li className="ingredients-section__list__items" key={ingredient}>
      {ingredient}
    </li>
  ));

  return (
    <section>
      <h2 className="ingredients-section__heading">Ingredients on hand:</h2>
      <ul>{ingredientList}</ul>
      {props.ingredients.length > 3 ? (
        <div className="callout">
          <div>
            <h3 className="callout__heading">Ready for a recipe?</h3>
            <p className="callout__text">
              Generate a recipe from your list of ingredients.
            </p>
          </div>
          <button className="callout__btn" onClick={props.shown}>
            Get a recipe
          </button>
        </div>
      ) : null}
    </section>
  );
}
