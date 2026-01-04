export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
   <div className="flex flex-wrap justify-center gap-2 mt-10">
  {Array.from({ length: totalPages }).map((_, i) => {
    const page = i + 1;
    return (
      <button
        key={page}
        onClick={() => onPageChange(page)}
        className={`px-4 py-2 rounded-xl font-medium transition
          ${
            currentPage === page
              ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
              : "bg-white border border-slate-300 hover:bg-slate-100"
          }`}
      >
        {page}
      </button>
    );
  })}
</div>


  );
}
