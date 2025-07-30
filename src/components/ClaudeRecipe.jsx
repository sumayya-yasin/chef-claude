import ReactMarkdown from "react-markdown";

export default function ClaudeRecipe(props) {
  return (
    <section
      id="recipe-section"
      className={`recipe-container ${props.recipeVisible ? "visible" : ""}`}
      aria-live="polite"
    >
      <h2>Chef Claude Recipe Recommendation:</h2>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  );
}
