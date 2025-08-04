# 👨‍🍳 Chef Claude Recipe App

An interactive recipe generator built with React, where users enter ingredients and receive AI-generated recipes. This project was built as part of Section 3 of Scrimba’s Learn React course, with several additional enhancements added to improve the experience.

---

## 🚀 Live Demo  
🔗 [View Live on Netlify](https://chefclaude-ai.netlify.app/)

---

## 📦 Tech Stack  
- **React (Vite)**
- **Custom CSS** for styling  
- **Hugging Face API** for recipe generation  
- **React Markdown** for formatted recipe display  
- **Netlify Functions** for backend logic  


---

## 💡 Features

### ✅ Core Features (from course)
- State management using `useState`
- Controlled form components (`input`, `textarea`, `checkbox`, `select`)
- Conditional rendering with ternary and `&&` operators
- Passing and managing state across components
- Fetching data from an API
- Markdown rendering for rich recipe formatting

### ✨ My Enhancements
- **🔄 Loading State**  
  Spinner and loading message while waiting for the API response.

- **⚠️ Ingredient Count Validation**  
  The app requires at least **4 ingredients** before enabling recipe generation. Helps ensure meaningful results.

- **🔐 Secure API Integration**  
  Hugging Face API key is kept **out of frontend code** using a custom **Netlify Function** to handle the API call securely.

- **📜 Scroll to Recipe Section**  
  After clicking "Get Recipe", the view scrolls smoothly to the recipe output.

---

## 🖼️ Preview

> *Add screenshots or a GIF demo here if available.*
![Ingredient Count Validation](image-1.png)
![Loading State preview](image.png)
---

## 📂 Folder Structure

```
chef-claude/
├── src/
│ ├── ai/
│ │ └── getRecipeFromMistral.jsx
│ ├── assets/
│ │ └── chef_claude_icon@2x.png
│ ├── components/
│ │ ├── Header.jsx
│ │ ├── Body.jsx
│ │ ├── ClaudeRecipe.jsx
│ │ └── IngredientsList.jsx
│ ├── App.jsx
│ ├── App.css
│ └── main.jsx
├── netlify/
│ └── functions/
│ └── get-recipe.js
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/sumayya-yasin/chef-claude.git
cd Chef-Claude
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a `.env` File

```env
HF_ACCESS_KEY=your_hugging_face_api_key_here
```

### 4. Run the Dev Server

```bash
npm run dev
```

---

## 🔐 Netlify Function (API Proxy)

This project uses a **serverless Netlify function** to securely fetch recipes from the Hugging Face API without exposing the API key in frontend code.

**Path:** `/netlify/functions/get-recipe.js`  
**Function:** Receives form data and handles the API request/response.

---

## 🤔 Future Improvements

- Ingredient autocomplete with suggestions  
- Save favorite recipes using localStorage or Supabase  
- Add images using Unsplash or DALL·E API  
- Add skeleton loaders for smoother UI  
- Remove Ingredient feature

---

## 📄 License

MIT License — free to use, modify, and extend with credit.

---
