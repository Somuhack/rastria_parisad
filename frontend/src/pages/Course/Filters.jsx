import React from "react";

const Filters = ({ filters, setFilters }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      
      <select
        className="select select-bordered w-full md:w-1/4"
        value={filters.duration}
        onChange={(e) =>
          setFilters({ ...filters, duration: e.target.value })
        }
      >
        <option value="">All Duration</option>
        <option value="3">3 Months</option>
        <option value="6">6 Months</option>
        <option value="9">9 Months</option>
        <option value="12">12 Months</option>
        <option value="18">18 Months</option>
        <option value="24">24 Months</option>
      </select>

      <select
        className="select select-bordered w-full md:w-1/4"
        value={filters.category}
        onChange={(e) =>
          setFilters({ ...filters, category: e.target.value })
        }
      >
        <option value="">All Category</option>
        <option value="IT">IT</option>
        <option value="Multimedia">Multimedia</option>
        <option value="Business">Business</option>
        <option value="Vocational">Vocational</option>
      </select>

      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered w-full md:flex-1"
        value={filters.search}
        onChange={(e) =>
          setFilters({ ...filters, search: e.target.value })
        }
      />
    </div>
  );
};

export default Filters;