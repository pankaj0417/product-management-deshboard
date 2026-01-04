export default function ProductList({ products, view, onEdit }) {
  if (view === "list") {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-blue-200">
            <tr className="text-slate-700">
              <th className="p-4 text-left">Product</th>
              <th className="p-4 text-center">Price</th>
              <th className="p-4 text-center">Category</th>
              <th className="p-4 text-center">Stock</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-t hover:bg-slate-50 transition">
                <td className="p-4 font-medium">{p.name}</td>
                <td className="p-4 text-center">₹{p.price}</td>
                <td className="p-4 text-center">{p.category}</td>
                <td className="p-4 text-center">{p.stock || "-"}</td>
                <td className="p-4 text-center">
                  <button
                    onClick={() => onEdit(p)}
                    className="text-blue-600 cursor-pointer hover:text-indigo-600 font-medium transition"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((p) => (
        <div
          key={p.id}
          className="bg-white rounded-2xl shadow-lg border border-slate-200
        hover:shadow-xl transition p-5 flex flex-col"
        >
          {/* Header */}
          <div className="mb-3">
            <h3 className="text-lg font-semibold text-slate-800">{p.name}</h3>
            <p className="text-sm text-slate-500">{p.category}</p>
          </div>

          {/* Price */}
          <p className="text-xl font-bold text-blue-600 mb-2">₹{p.price}</p>

          {/* Stock */}
          <p className="text-sm text-slate-600 mb-4">
            Stock: <span className="font-medium">{p.stock || "N/A"}</span>
          </p>

          {/* Action */}
          <div className="mt-auto">
            <button
              onClick={() => onEdit(p)}
              className="w-full bg-slate-100 cursor-pointer hover:bg-slate-200
            text-slate-700 py-2 rounded-xl font-medium transition"
            >
              Edit Product
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
