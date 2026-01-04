import { useEffect, useState } from "react";

export default function ProductForm({ onSave, editingProduct }) {
  const [form, setForm] = useState({
    id: null,
    name: "",
    price: "",
    category: "",
    stock: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingProduct) setForm(editingProduct);
  }, [editingProduct]);

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = "Product name is required";
    if (!form.price) err.price = "Price is required";
    if (!form.category.trim()) err.category = "Category is required";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onSave(form);
    setForm({
      id: null,
      name: "",
      price: "",
      category: "",
      stock: "",
      description: "",
    });
    setErrors({});
  };

  return (
    <section className="relative bg-white rounded-3xl shadow-xl p-6 sm:p-8 mb-10 border border-slate-200">
      
      {/* Gradient Accent */}
      <div className="absolute inset-x-0 top-0 h-1 rounded-t-3xl" />

      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800">
          {editingProduct ? "Edit Product" : "Add New Product"}
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Enter product information carefully
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-7">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Product Name */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Product Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Eg: Wireless Bluetooth Headphones"
              className={`input input-enhanced ${
                errors.name ? "input-error" : ""
              }`}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Price (₹) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              placeholder="Eg: 2499"
              className={`input input-enhanced ${
                errors.price ? "input-error" : ""
              }`}
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
            />
            {errors.price && <p className="error">{errors.price}</p>}
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Category <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Eg: Electronics, Accessories"
              className={`input input-enhanced ${
                errors.category ? "input-error" : ""
              }`}
              value={form.category}
              onChange={(e) =>
                setForm({ ...form, category: e.target.value })
              }
            />
            {errors.category && <p className="error">{errors.category}</p>}
          </div>

          {/* Stock */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Stock Available
            </label>
            <input
              type="number"
              placeholder="Eg: 50"
              className="input input-enhanced"
              value={form.stock}
              onChange={(e) => setForm({ ...form, stock: e.target.value })}
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Product Description
            </label>
            <textarea
              rows="4"
              placeholder="Eg: High-quality wireless headphones with noise cancellation"
              className="input input-enhanced resize-none"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />
          </div>
        </div>

        {/* Action */}
        <div className="flex justify-end pt-4 border-t border-slate-200">
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-indigo-600
              hover:from-blue-700 hover:to-indigo-700
              text-white px-8 py-2.5 rounded-xl font-semibold
              shadow-md hover:shadow-lg cursor-pointer transition"
          >
            {editingProduct ? "Update Product" : "Add Product"}
          </button>
        </div>
      </form>
    </section>
  );
}
