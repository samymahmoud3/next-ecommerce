
const Filter = () => {
  return (
    <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-between">
      <div className="flex gap-6 flex-wrap">
        <select name="type" id="" className="outline-none py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]">
          <option>Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="min price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        <select name="type" id="" className="outline-none py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]">
          <option>Size</option>
          <option value="size">Size</option>
        </select>
        <select name="type" id="" className="outline-none py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]">
          <option>Color</option>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
        </select>
        <select name="type" id="" className="outline-none py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]">
          <option>Category</option>
          <option value="">New Arrival</option>
          <option value="">Popular</option>
        </select>
        <select name="type" id="" className="outline-none py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]">
          <option>All Filters</option>
        </select>
      </div>
      <div className="">
        <select
          name="type"
          id=""
          className="outline-none py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Sort By</option>
          <option value="">Price (low to high)</option>
          <option value="">Price (high to low)</option>
          <option value="">Newest</option>
          <option value="">Oldest</option>
        </select>
      </div>
    </div>
  )
};

export default Filter