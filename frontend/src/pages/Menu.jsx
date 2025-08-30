
import React, { useEffect, useState } from "react";
import axios from "axios";
import MenuCard from "../components/MenuCard";  // 👈 import reusable card
import { backendUrl } from "../config";

const Menu = () => {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const res = await axios.get(`${backendUrl}/api/product/list`);

        if (res.data.success && Array.isArray(res.data.products)) {
          setDishes(res.data.products);
        } else {
          console.error("Unexpected response:", res.data);
        }
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDishes();
  }, []);

  if (loading) return <p className="text-center mt-10 text-lg">Loading menu...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">🍴 Our Menu</h2>

      {/* Responsive Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {dishes.map((dish) => (
          <MenuCard
            key={dish._id}
            name={dish.name}
            price={dish.price}
            description={dish.description}
            image={dish.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;












// // src/pages/Menu.jsx
// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import axios from "axios";
// import { backendUrl } from "../config";

// const Menu = () => {
//   const [dishes, setDishes] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//   const fetchDishes = async () => {
//     try {
//       const res = await axios.get(`${backendUrl}/api/product/list`);

//       if (res.data.success && Array.isArray(res.data.products)) {
//         setDishes(res.data.products);  // 👈 use products, not data
//       } else {
//         console.error("Unexpected response:", res.data);
//       }
//     } catch (err) {
//       console.error("Error fetching products:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchDishes();
// }, []);


//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen text-lg">
//         Loading menu...
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gradient-to-br from-orange-50 via-yellow-50 to-white min-h-screen py-12 px-6">
//       <div className="container mx-auto max-w-6xl">
//         {/* Heading */}
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-4xl font-bold text-center text-green-800 mb-12"
//         >
//           Our Menu
//         </motion.h1>

//         {/* Dish Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {dishes.map((dish) => (
//   <div key={dish._id}>
//     <img src={dish.image} alt={dish.name} />
//     <h2>{dish.name}</h2>
//     <p>${dish.price}</p>
//   </div>
// ))}

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Menu;

