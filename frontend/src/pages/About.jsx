import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-50 to-orange-100 py-12 px-6 md:px-20">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-center text-orange-800 mb-12"
      >
        About <span className="text-orange-600">EZCHEF</span>
      </motion.h1>

      {/* Story Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt="Restaurant"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-orange-700">
            Our Story
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At <span className="font-semibold">EZCHEF</span>, we believe food is
            not just about taste, it’s an experience. Founded with a passion for
            authentic flavors and modern dining, we bring together{" "}
            <span className="font-medium">farm-fresh ingredients</span> and{" "}
            <span className="font-medium">world-class recipes</span> to craft
            dishes that tell a story of love, culture, and tradition.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Whether it’s a quick bite, a family dinner, or a celebration, EZCHEF
            is here to make every meal special.
          </p>
        </motion.div>
      </div>

      {/* Mission / Vision */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto mt-16 grid md:grid-cols-2 gap-10"
      >
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-orange-700 mb-3">Our Mission</h3>
          <p className="text-gray-600">
            To serve <span className="font-medium">delicious, healthy</span>, and
            <span className="font-medium"> memorable meals</span> that bring joy
            to every plate, every time.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-orange-700 mb-3">Our Vision</h3>
          <p className="text-gray-600">
            To be the go-to restaurant for{" "}
            <span className="font-medium">food lovers</span> who crave authentic
            flavors, cozy ambiance, and unforgettable experiences.
          </p>
        </div>
      </motion.div>

      {/* Signature Dishes */}
      <div className="max-w-6xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-center text-orange-800 mb-10">
          Our Signature Dishes
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Classic Margherita Pizza",
              img: "https://veenaazmanov.com/wp-content/uploads/2020/04/Classic-Pizza-Margherita1.jpg",
            },
            {
              name: "Spicy Chicken Curry",
              img: "https://www.foodandwine.com/thmb/8YAIANQTZnGpVWj2XgY0dYH1V4I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spicy-chicken-curry-FT-RECIPE0321-58f84fdf7b484e7f86894203eb7834e7.jpg",
            },
            {
              name: "Creamy Pasta Alfredo",
              img: "https://preppykitchen.com/wp-content/uploads/2024/02/Fettucine-Alfredo-Feature-1140x1709.jpg",
            },
            {
              name: "Chinese pasta",
              img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/05/red-sauce-pasta-recipe.jpg",
            },
            {
              name: "French Fries",
              img: "https://cdn.britannica.com/34/206334-050-7637EB66/French-fries.jpg",
            },
            {
              name: "Indian samosha",
              img: "https://im.whatshot.in/img/2019/Aug/shutterstock-1381163087-cropped-1565077618.jpg",
            },
          ].map((dish, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all"
            >
              <img
                src={dish.img}
                alt={dish.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-800">
                  {dish.name}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
