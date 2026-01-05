# 🛍️ Product Management Dashboard

A modern, responsive **Product Management Dashboard** built using **React (Vite)** and **Tailwind CSS**.  
This application allows users to **add, edit, search, view, and paginate products** with a clean and user-friendly UI — all handled **in-memory with no backend**.

---

## 🚀 Features

### 📦 Product List Display
- View products in:
  - **Grid View (Cards)**
  - **List View (Table)**
- Toggle between Grid and List view near the product list

### 🔍 Search Functionality
- Real-time search by **product name**
- **500ms debounce** for better performance

### ➕ Add & ✏️ Edit Product
- Form fields:
  - Product Name (required)
  - Price (required)
  - Category (required)
  - Stock (optional)
  - Description (optional)
- Inline form validation with error messages
- Modern, responsive form design

### 📄 Pagination
- Client-side pagination
- Clean, responsive pagination controls

### 🎨 UI & UX
- Fully responsive (mobile, tablet, desktop)
- Modern design with:
  - Rounded cards
  - Soft shadows
  - Gradient accents
  - Consistent theme across all sections

---

## 🧰 Tech Stack

- ⚛️ **React** (with Vite)
- 🎨 **Tailwind CSS**
- 🟨 **JavaScript (ES6+)**
- ❌ No Backend
- ❌ No API Integration

---

## 📁 Project Structure

src/
│── components/
│ ├── ProductForm.jsx
│ ├── ProductList.jsx
│ ├── Pagination.jsx
│
│── App.jsx
│── main.jsx
│── index.css


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git

cd your-repo-name
npm install
npm run dev

