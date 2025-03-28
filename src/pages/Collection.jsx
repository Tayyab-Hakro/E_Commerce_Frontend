import React, { useContext, useEffect, useState } from 'react';
import Title from '../components/Title';
import { ShopContext } from '../context/ShopContext';
import ProductItems from '../components/ProductItems';

function Collection() {
  const { products, search, showSearch } = useContext(ShopContext);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [sortType, setSortType] = useState("relevant");
  const [openFilter, setOpenFilter] = useState(false);

  // Toggle Filter Sidebar
  const toggleFilter = () => {
    setOpenFilter(!openFilter);
  };

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategories((prev) =>
      prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]
    );
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategories((prev) =>
      prev.includes(value) ? prev.filter((s) => s !== value) : [...prev, value]
    );
  };

  const applyFilter = () => {
    let productsCopy = products.slice();
    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (categories.length > 0) {
      productsCopy = productsCopy.filter((item) => categories.includes(item.category));
    }
    if (subCategories.length > 0) {
      productsCopy = productsCopy.filter((item) => subCategories.includes(item.subCategory));
    }
    setFilteredProducts(productsCopy);
  };

  const sortProducts = () => {
    let sortedProducts = [...filteredProducts];
    switch (sortType) {
      case "high-low":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "low-high":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      default:
        applyFilter();
        return;
    }
    setFilteredProducts(sortedProducts);
  };

  useEffect(() => {
    applyFilter();
  }, [categories, subCategories, search, showSearch]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className={`w-full md:w-1/4 bg-gray-100 p-4 rounded-lg ${openFilter ? 'block' : 'hidden'} md:block`}>
        <h2 className="text-xl font-semibold mb-6 cursor-pointer" onClick={toggleFilter}>Filters</h2>
        
        {/* Categories */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-4">Categories</h3>
          <div className="flex flex-col space-y-2">
            {["Men", "Women", "Kids"].map((category) => (
              <label key={category} className="flex items-center">
                <input type="checkbox" className="mr-2" value={category} onChange={toggleCategory} /> {category}
              </label>
            ))}
          </div>
        </div>
        
        {/* Divider */}
        <hr className="border-gray-300 my-6" />
        
        {/* Type */}
        <div>
          <h3 className="text-lg font-medium mb-4">Type</h3>
          <div className="flex flex-col space-y-2">
            {["Topwear", "Bottomwear", "Winterwear"].map((type) => (
              <label key={type} className="flex items-center">
                <input type="checkbox" className="mr-2" value={type} onChange={toggleSubCategory} /> {type}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Collection Items */}
      <div className="flex-1 p-4">
        <div className="flex justify-between items-center mb-6">
          <Title text1="All" text2="Collections" />
          {/* Sort Dropdown */}
          <select onChange={(e) => setSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-4 py-2 rounded-md">
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((item, index) => (
            <ProductItems
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              currency={item.currency}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collection;