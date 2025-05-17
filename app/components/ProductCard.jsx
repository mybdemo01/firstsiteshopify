import {Image} from '@shopify/hydrogen';
import {Link} from '@remix-run/react';
import {motion} from 'framer-motion';

export function ProductCard({product}) {
  if (!product) return null;

  const variant = product.variants?.nodes?.[0];
  const price = variant?.priceV2;
  const compareAtPrice = variant?.compareAtPriceV2;
  const image = product.images?.nodes?.[0];

  const isDiscounted = compareAtPrice?.amount > price?.amount;

  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
      transition={{duration: 0.5}}
      className="group relative"
    >
      <Link
        to={`/products/${product.handle}`}
        className="block overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
      >
        <motion.div
          whileHover={{scale: 1.05}}
          transition={{duration: 0.3}}
          className="relative aspect-square overflow-hidden bg-gray-100"
        >
          {image ? (
            <Image
              data={image}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gray-100">
              <span className="text-gray-400">No image available</span>
            </div>
          )}
          {isDiscounted && (
            <div className="absolute top-2 right-2 rounded-full bg-red-500 px-2 py-1 text-sm font-semibold text-white">
              Sale
            </div>
          )}
        </motion.div>

        <div className="p-4">
          <h3 className="mb-1 text-lg font-semibold line-clamp-2">{product.title}</h3>
          <div className="flex items-center gap-2">
            {price ? (
              <span className="text-lg font-bold">
                ${parseFloat(price.amount).toFixed(2)}
              </span>
            ) : (
              <span className="text-gray-500">Price not available</span>
            )}
            {isDiscounted && compareAtPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${parseFloat(compareAtPrice.amount).toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
} 