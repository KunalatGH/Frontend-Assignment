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

## 🚀 Live Storybook Preview

The project is deployed on **Chromatic**.  
👉 [View Storybook on Chromatic](https://68a73ea3da944f2ba8bfa316-nvxrowlypz.chromatic.com/)

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
