import {motion} from 'framer-motion';
import {ProductCard} from './ProductCard';

export function ProductGrid({products, title = 'Featured Products'}) {
  if (!products?.length) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="mb-8 text-3xl font-bold">{title}</h2>
        <p className="text-gray-500">No products available at the moment.</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.5}}
      className="container mx-auto px-4 py-12"
    >
      <h2 className="mb-8 text-3xl font-bold">{title}</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </motion.div>
  );
} 