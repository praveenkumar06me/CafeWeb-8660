import { motion } from 'framer-motion';

const menuItems = {
  coffee: [
    { name: 'Espresso', price: '$3.50', description: 'Rich and bold single shot' },
    { name: 'Cappuccino', price: '$4.50', description: 'Espresso with steamed milk and foam' },
    { name: 'Latte', price: '$4.75', description: 'Espresso with lots of steamed milk and light foam' },
  ],
  pastries: [
    { name: 'Croissant', price: '$3.75', description: 'Buttery, flaky pastry' },
    { name: 'Blueberry Muffin', price: '$3.50', description: 'Fresh-baked daily' },
    { name: 'Chocolate Chip Cookie', price: '$2.50', description: 'Warm and gooey' },
  ],
};

const Menu = () => {
  return (
    <div className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Our Menu
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Coffee</h2>
          <div className="space-y-6">
            {menuItems.coffee.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-medium">{item.name}</h3>
                  <span className="text-brown-600 font-semibold">{item.price}</span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Pastries</h2>
          <div className="space-y-6">
            {menuItems.pastries.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-medium">{item.name}</h3>
                  <span className="text-brown-600 font-semibold">{item.price}</span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Menu;