import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {HeroSection} from '~/components/HeroSection';
import {ProductGrid} from '~/components/ProductGrid';

export async function loader({context}) {
  const {storefront} = context;

  const {products} = await storefront.query(PRODUCTS_QUERY);

  return json({
    products: products.nodes,
    featuredProduct: products.nodes[0],
  });
}

export default function Index() {
  const {products, featuredProduct} = useLoaderData();

  return (
    <div>
      <HeroSection featuredProduct={featuredProduct} />
      <ProductGrid products={products} />
    </div>
  );
}

const PRODUCTS_QUERY = `#graphql
  query Products {
    products(first: 8) {
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