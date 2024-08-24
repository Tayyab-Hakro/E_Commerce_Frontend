import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

function SearchBar() {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
 const [Visible , setVisible] = useState(false)
  const location = useLocation()
  useEffect(()=>{
    if(location.pathname.includes("collection")){
        setVisible (true)
    }else{
        setVisible(false)
    }
  },[location])

  return showSearch && Visible ? (
    <div className="relative flex items-center p-2 bg-gray-200 rounded-md">
      <div className="flex-grow">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="w-full p-2 text-sm bg-white border border-gray-300 rounded-md focus:outline-none"
        />
      </div>
      <FaSearch className="text-gray-500 ml-2 cursor-pointer" />
      <FaTimes 
        onClick={() => setShowSearch(false)} 
        className="text-gray-500 ml-4 cursor-pointer hover:text-red-500"
      />
    </div>
  ) : null
}

export default SearchBar;
