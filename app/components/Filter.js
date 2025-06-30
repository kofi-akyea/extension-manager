const Filter = ({ filterStatus, onFilterChange }) => {
  return (
    <div className=" w-[100%] mt-5 flex flex-col items-center justify-center">
      <div>
        <p className="font-bold text-2xl">Extensions List</p>
      </div>
      <div>
        <button
          onClick={() => onFilterChange("All")}
          className={`px-4 py-2 rounded-md ${
            filterStatus === "All"
              ? "bg-amber-600 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          All
        </button>
        <button
          onClick={() => onFilterChange("Active")}
          className={`px-4 py-2 rounded-md ${
            filterStatus === "Active"
              ? "bg-amber-600 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          Active
        </button>
        <button
          onClick={() => onFilterChange("Inactive")}
          className={`px-4 py-2 rounded-md ${
            filterStatus === "Inactive"
              ? "bg-amber-600 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          Inactive
        </button>
      </div>
    </div>
  );
};

export default Filter;
