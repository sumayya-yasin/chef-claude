import { InferenceClient } from "@huggingface/inference";

const hf = new InferenceClient(process.env.HF_ACCESS_KEY);

export async function handler(event) {
  const { ingredients } = JSON.parse(event.body);
  const ingredientsString = ingredients.join(", ");

  try {
    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: "You are an assistant..." },
        {
          role: "user",
          content: `I have ${ingredientsString}. Please give me a recipe.`,
        },
      ],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ recipe: response.choices[0].message.content }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
