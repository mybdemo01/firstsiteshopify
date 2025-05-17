import {Image} from '@shopify/hydrogen';
import {motion} from 'framer-motion';

export function HeroSection({featuredProduct}) {
  return (
    <div className="relative h-[90vh] w-full overflow-hidden bg-black">
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.8}}
        className="absolute inset-0 z-10 flex items-center justify-center"
      >
        <div className="text-center text-white">
          <motion.h1
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.2, duration: 0.8}}
            className="mb-4 text-5xl font-bold md:text-7xl"
          >
            Step Into Style
          </motion.h1>
          <motion.p
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.4, duration: 0.8}}
            className="mb-8 text-xl md:text-2xl"
          >
            Discover our latest collection of premium footwear
          </motion.p>
          <motion.button
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.6, duration: 0.8}}
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            className="rounded-full bg-white px-8 py-3 text-lg font-semibold text-black transition-all hover:bg-gray-100"
          >
            Shop Now
          </motion.button>
        </div>
      </motion.div>
      
      {featuredProduct?.image && (
        <motion.div
          initial={{scale: 1.2, opacity: 0}}
          animate={{scale: 1, opacity: 0.3}}
          transition={{duration: 1.2}}
          className="absolute inset-0"
        >
          <Image
            data={featuredProduct.image}
            className="h-full w-full object-cover"
            sizes="100vw"
          />
        </motion.div>
      )}
    </div>
  );
} 