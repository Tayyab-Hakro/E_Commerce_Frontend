import { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShopContext } from "../context/ShopContext";

function ProductItems({ id, image, name, price }) {
  const { currency } = useContext(ShopContext);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="relative overflow-hidden rounded-lg shadow-md bg-white group hover:shadow-xl transition-all"
    >
      <Link to={`/product/${id}`}>
        {/* Image with subtle zoom effect */}
        <div className="relative w-full overflow-hidden">
          <motion.img
            src={image[0]}
            alt={name}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col gap-2">
          <p className="text-sm font-medium text-gray-800">{name}</p>

          {/* Advanced Price Styling */}
          <p className="text-lg font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            {currency}{price}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

export default ProductItems;
