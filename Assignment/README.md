# 🎯 Assignment – UI Components with Storybook

This repository contains React + TypeScript components developed as part of a company assignment.  
The components are built with **modern practices** such as Storybook for UI documentation, Chromatic for cloud deployment, and Jest/Testing Library for testing.  

---

## 📌 Components Implemented

### 1. 🔤 InputField Component
- Validates user input with error messages  
- Supports various input types (text, email, password, etc.)  
- Fully responsive & accessible (ARIA labels)  
- Clean and reusable design  

### 2. 📊 DataTable Component
- Displays tabular data with configurable columns  
- Sorting functionality (ascending/descending)  
- Row selection (single & multiple)  
- Handles loading and empty states gracefully  
- Built with accessibility and responsiveness in mind  

---

## 📌 Components & Screenshots

### 1. DataTable Component

The `DataTable` component supports multiple states such as default, loading, editable, and selectable.

- **Default State**  
  ![DataTable Default State](./docs/screenshots/DataTable/DefaultState.png)

- **Columns View**  
  ![DataTable Columns](./docs/screenshots/DataTable/Columns.png)

- **Data View**  
  ![DataTable Data](./docs/screenshots/DataTable/Data.png)

- **Loading State**  
  ![DataTable Loading](./docs/screenshots/DataTable/LoadingState.png)

- **Editable State**  
  ![DataTable Edit State](./docs/screenshots/DataTable/EditState.png)

- **Selectable Rows**  
  ![DataTable Selectable](./docs/screenshots/DataTable/Selectable.png)

---

### 2. InputField Component

The `InputField` component supports multiple variants and validation states.

- **Default Input State**  
  ![Default Input](./docs/screenshots/InputField/Default_Input_State.png)

- **Disabled Input**  
  ![Disabled Input](./docs/screenshots/InputField/Disabled_State.png)

- **Invalid Input**  
  ![Invalid Input](./docs/screenshots/InputField/Invalid_State.png)

- **Variant Styles**  
  ![Variant Input](./docs/screenshots/InputField/Variant_State.png)

---

## 📌 Storybook & Chromatic

- **Storybook** was used for isolated component development and testing.  
- **Chromatic** was used for visual regression testing and component deployment.  


---

## 🚀 Live Storybook Preview

The project is deployed on **Chromatic**.  
👉 [View Storybook on Chromatic](https://68a73ea3da944f2ba8bfa316-nvxrowlypz.chromatic.com/)

## 🚀 Our Approach

This UI component library was built using a modern, scalable, and type-safe stack. The core philosophy was **Component-Driven Development**, where each component is developed and tested in isolation to ensure reusability and maintainability.

-   **Component Design:** Components are built as controlled components with a clear props API, making them flexible and easy to integrate.
-   **Styling:** We used **TailwindCSS** for a utility-first styling approach, ensuring design consistency and maintainability. Component variants and states were managed using the **`cva`** library for clean and scalable style logic.
-   **Type Safety:** **TypeScript** is used across the entire project to provide strict typing for all props and state, reducing bugs and improving the developer experience. The `DataTable` leverages generics for maximum flexibility with any data source.
-   **Documentation:** **Storybook** serves as a living documentation and an interactive development environment, showcasing every component state and variant.
-   **Accessibility:** We prioritized accessibility by using semantic HTML and appropriate ARIA attributes to ensure the components are usable by everyone.

---

## 🛠️ Tech Stack

- **React (Vite)**
- **TypeScript**
- **Storybook** (for component-driven development)
- **Chromatic** (for hosting Storybook & visual testing)
- **Jest + React Testing Library** (for unit tests)
- **CSS (modern responsive styling)**

---

## 📂 Project Structure

Assignment/
├── .storybook/ # Storybook configuration
├── src/
│ ├── component/
│ │ ├── InputField/ # InputField component
│ │ └── DataTable/ # DataTable component
│ ├── stories/ # Storybook stories
│ ├── App.tsx
│ ├── main.tsx
│ └── ...
├── package.json
├── tsconfig.json
└── README.md

---

## ⚡ Getting Started

Clone the repository and install dependencies:

```bash
git clone <your-repo-link>
cd Assignment
npm install

Run StoryBook Locally:
npm run storybook

Deploy Storybook to Chromatic:
npm run chromatic
