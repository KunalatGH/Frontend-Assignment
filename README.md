# UI Components Assignment  

This repository contains the implementation of the **Input Field** and **Data Table** components as part of the coding assignment. The components are built with **React + TypeScript**, styled with **TailwindCSS**, and documented using **Storybook**.  

## 📌 Features  

### Input Field  
- Supports multiple input types (text, password, email, etc.)  
- Built-in validation (required fields, error messages)  
- Customizable with props (label, placeholder, disabled, etc.)  
- Responsive and accessible  

### Data Table  
- Dynamic rendering of rows & columns  
- Sorting support (ascending/descending)  
- Row selection functionality  
- Handles empty data states gracefully  
- Responsive layout  

## 🚀 Tech Stack  
- **React** (with TypeScript)  
- **Storybook** for UI documentation  
- **Chromatic** for deployment & review  
- **TailwindCSS** for styling  

## 📂 Project Structure  
src/
┣ components/
┃ ┣ InputField/
┃ ┃ ┣ InputField.tsx
┃ ┃ ┣ InputField.stories.tsx
┃ ┃ ┗ InputField.test.tsx
┃ ┣ DataTable/
┃ ┃ ┣ DataTable.tsx
┃ ┃ ┣ DataTable.stories.tsx
┃ ┃ ┗ DataTable.test.tsx
┣ App.tsx
┗ main.tsx


## 🛠️ Installation & Setup  

Clone the repository and install dependencies:  

```bash
git clone <repo-url>
cd <repo-folder>
npm install
npm run dev

To run Storybook locally:
npm run storybook
