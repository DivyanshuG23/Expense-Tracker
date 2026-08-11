import { Search, Plus, ChevronDown } from "lucide-react";

const TransactionFilters = ({
  onAdd,
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  selectedType,
  setSelectedType,
}) => {
  return (
    <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">

      {/* Filters */}
      <div className="flex flex-col gap-4 lg:flex-row lg:flex-wrap">

        {/* Search */}
        <div className="relative w-full lg:w-80">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A89468]"
          />

          <input
            type="text"
            placeholder="Search transactions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="
              w-full rounded-2xl
              border border-[#D6B56D]/15
              bg-[#151513]
              py-3 pl-11 pr-4
              text-sm text-white
              placeholder:text-slate-500
              outline-none
              transition-all duration-300
              focus:border-[#D6B56D]/60
              focus:ring-2 focus:ring-[#D6B56D]/10
            "
          />

        </div>

        {/* Category */}
        <div className="relative w-full sm:w-56">

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="
              w-full appearance-none
              rounded-2xl
              border border-[#D6B56D]/15
              bg-[#151513]
              px-4 py-3 pr-10
              text-sm text-white
              outline-none
              transition-all duration-300
              focus:border-[#D6B56D]/60
              focus:ring-2 focus:ring-[#D6B56D]/10
            "
          >
            <option className="bg-[#151513] text-white">
              All Categories
            </option>

            <option className="bg-[#151513] text-white">
              Food
            </option>

            <option className="bg-[#151513] text-white">
              Shopping
            </option>

            <option className="bg-[#151513] text-white">
              Transport
            </option>

            <option className="bg-[#151513] text-white">
              Income
            </option>
          </select>

          <ChevronDown
            size={16}
            className="
              pointer-events-none
              absolute right-3 top-1/2
              -translate-y-1/2
              text-[#D6B56D]
            "
          />

        </div>

        {/* Type */}
        <div className="relative w-full sm:w-48">

          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="
              w-full appearance-none
              rounded-2xl
              border border-[#D6B56D]/15
              bg-[#151513]
              px-4 py-3 pr-10
              text-sm text-white
              outline-none
              transition-all duration-300
              focus:border-[#D6B56D]/60
              focus:ring-2 focus:ring-[#D6B56D]/10
            "
          >
            <option className="bg-[#151513] text-white">
              All Types
            </option>

            <option className="bg-[#151513] text-white">
              Income
            </option>

            <option className="bg-[#151513] text-white">
              Expense
            </option>
          </select>

          <ChevronDown
            size={16}
            className="
              pointer-events-none
              absolute right-3 top-1/2
              -translate-y-1/2
              text-[#D6B56D]
            "
          />

        </div>

      </div>

      {/* Add Transaction Button */}
      <button
        type="button"
        onClick={onAdd}
        className="
          group
          flex w-full items-center
          justify-center gap-2
          rounded-2xl
          bg-[#D6B56D]
          px-5 py-3
          font-semibold
          text-[#0B0B0A]
          shadow-[0_8px_25px_rgba(214,181,109,.12)]
          transition-all duration-300
          hover:-translate-y-0.5
          hover:bg-[#E5C98A]
          hover:shadow-[0_12px_30px_rgba(214,181,109,.22)]
          xl:w-auto
        "
      >
        <Plus
          size={18}
          className="transition-transform duration-300 group-hover:rotate-90"
        />

        Add Transaction
      </button>

    </div>
  );
};

export default TransactionFilters;