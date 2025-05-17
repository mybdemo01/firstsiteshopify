import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {HeroSection} from '~/components/HeroSection';
import {ProductGrid} from '~/components/ProductGrid';

export async function loader({context}) {
  try {
    const {storefront} = context;
    const {products} = await storefront.query(PRODUCTS_QUERY);

    return json({
      products: products.nodes,
      featuredProduct: products.nodes[0],
    });
  } catch (error) {
    console.error('Error loading products:', error);
    return json({
      products: [],
      featuredProduct: null,
      error: 'Failed to load products',
    });
  }
}

export default function Index() {
  const {products, featuredProduct, error} = useLoaderData();

  return (
    <div>
      <HeroSection featuredProduct={featuredProduct} />
      {error ? (
        <div className="container mx-auto px-4 py-12 text-center">
          <p className="text-red-500">{error}</p>
        </div>
      ) : (
        <ProductGrid products={products} title="Featured Products" />
      )}
    </div>
  );
}

const PRODUCTS_QUERY = `#graphql
  query Products {
    products(first: 8, sortKey: CREATED_AT, reverse: true) {
      nodes {
        id
        title
        handle
        images(first: 1) {
          nodes {
            id
            url
            altText
            width
            height
          }
        }
        variants(first: 1) {
          nodes {
            id
            priceV2 {
              amount
              currencyCode
            }
            compareAtPriceV2 {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`; 