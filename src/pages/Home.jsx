import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="pt-16">
      <section className="relative h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center text-white"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to Cozy Corner</h1>
          <p className="text-xl md:text-2xl">Your perfect spot for coffee and comfort</p>
        </motion.div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600">
              Founded in 2010, Cozy Corner Café has been serving premium coffee and delicious treats
              to our community. We believe in creating a warm, welcoming space where people can gather,
              work, or simply enjoy a moment of peace with the perfect cup of coffee.
            </p>
          </div>
          <div className="h-64 bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center rounded-lg shadow-xl"></div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;