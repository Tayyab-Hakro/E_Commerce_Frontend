import React, { useContext, useEffect, useState } from 'react';
import Title from '../components/Title';
import { ShopContext } from '../context/ShopContext';
import ProductItems from '../components/ProductItems';

function Collection() {
  const { products ,search ,showSearch} = useContext(ShopContext);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [sortType ,Setsorttype] = useState("relevant")
  const [openfilter , setOpenfilter] = useState(false)

  //Toggle Filer 
  const ToggleFilter = ()=>{
setOpenfilter(!openfilter)
  }
  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategories((prevCategories) =>
      prevCategories.includes(value)
        ? prevCategories.filter((category) => category !== value)
        : [...prevCategories, value]
    );
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategories((prevSubCategories) =>
      prevSubCategories.includes(value)
        ? prevSubCategories.filter((subCategory) => subCategory !== value)
        : [...prevSubCategories, value]
    );
  };

  const applyFilter = () => {
    let productsCopy = products.slice();
    if(showSearch && search){
      productsCopy = productsCopy.filter((item)=> item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (categories.length > 0) {
      productsCopy = productsCopy.filter((item) => categories.includes(item.category));
    }

    if (subCategories.length > 0) {
      productsCopy = productsCopy.filter((item) => subCategories.includes(item.subCategory));
    }

    setFilteredProducts(productsCopy);
  };

  const SortProducts= ()=>{
    let fpCopy = filteredProducts.slice()
    switch(sortType){
      case "high-low":
      setFilteredProducts(fpCopy.sort((a,b)=>(a.price - b.price)))
      break;
      case "low-high":
        setFilteredProducts(fpCopy.sort((a,b)=>(b.price - a.price)))
        break;
        default:
          applyFilter()
        break;

    }
  }

  useEffect(() => {
    applyFilter();
  }, [categories, subCategories,search,showSearch]);
useEffect(()=>{
  SortProducts()
},[sortType])
  

  return (
    <div className="flex flex-col md:flex-row container mx-auto py-8">
      
      {/* Sidebar Filter */}
      
      <div className="w-full    md:w-1/4 bg-gray-100 p-4 rounded-lg mb-8 md:mb-0">
        <h2 className="text-xl font-semibold mb-6" onClick={ToggleFilter}>Filter</h2>
    {openfilter && (
      <>
        <div className="mb-6  ">
        <h3 className="text-lg font-medium mb-4">Categories</h3>
        <div className="flex flex-col">
          <label className="mb-2">
            <input type="checkbox" className="mr-2" value="Men" onClick={toggleCategory} /> Men
          </label>
          <label className="mb-2">
            <input type="checkbox" className="mr-2" value="Women" onClick={toggleCategory} /> Women
          </label>
          <label className="mb-2">
            <input type="checkbox" className="mr-2" value="Kids" onClick={toggleCategory} /> Kids
          </label>
        </div>
      </div>
      

      <hr className="border-t border-gray-300 my-6" />
      <div>
        <h3 className="text-lg font-medium mb-4">Type</h3>
        <div className="flex flex-col">
          <label className="mb-2">
            <input type="checkbox" className="mr-2" value="Topwear" onClick={toggleSubCategory} /> Topwear
          </label>
          <label className="mb-2">
            <input type="checkbox" className="mr-2" value="Bottomwear" onClick={toggleSubCategory} /> Bottomwear
          </label>
          <label className="mb-2">
            <input type="checkbox" className="mr-2" value="Winterwear" onClick={toggleSubCategory} /> Winterwear
          </label>
        </div>
      </div>
      </>
      )
      
          } 
        <div className='sm:hidden md:flex gap-2'>
        {/* Categories Filter */}
        <div className="mb-6  flex flex-col ">
          <h3 className="text-lg font-medium mb-4">Categories</h3>
          <div className="flex flex-col">
            <label className="mb-2">
              <input type="checkbox" className="mr-2" value="Men" onClick={toggleCategory} /> Men
            </label>
            <label className="mb-2">
              <input type="checkbox" className="mr-2" value="Women" onClick={toggleCategory} /> Women
            </label>
            <label className="mb-2">
              <input type="checkbox" className="mr-2" value="Kids" onClick={toggleCategory} /> Kids
            </label>
          </div>
        </div>
        
        {/* Divider Line */}
        <hr className="border-t border-gray-300 my-6" />
        
        {/* Type Filter */}
        <div>
          <h3 className="text-lg font-medium mb-4">Type</h3>
          <div className="flex flex-col">
            <label className="mb-2">
              <input type="checkbox" className="mr-2" value="Topwear" onClick={toggleSubCategory} /> Topwear
            </label>
            <label className="mb-2">
              <input type="checkbox" className="mr-2" value="Bottomwear" onClick={toggleSubCategory} /> Bottomwear
            </label>
            <label className="mb-2">
              <input type="checkbox" className="mr-2" value="Winterwear" onClick={toggleSubCategory} /> Winterwear
            </label>
          </div>
        </div>
      </div>
      </div>
      {/* Collection Items */}
      <div className="flex-1 p-4">
        <div className="flex justify-between items-center mb-6">
          <Title text1="All" text2="Collections" />
          {/* Product Sort */}
          <select onChange={(e) => Setsorttype(e.target.value)} className="border-2 border-gray-300 text-sm px-4 py-2 rounded-md">

            <option value="relavent">Sort by: Relevant</option>
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
