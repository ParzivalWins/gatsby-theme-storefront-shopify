import React from 'react';

import IndividualProduct from './IndividualProduct';
// import IndividualProduct from './IndividualProductAnimated';

const CatalogProducts = ({
  products,
  limit,
  skip,
  cartUrl,
  gatsbyImageProps,
}) => {
  return (
    <>
      {products.map((product, index) => {
        product.cartUrl = cartUrl;
        if (index + 1 > skip && index + 1 <= skip + limit) {
          return (
            <IndividualProduct
              key={product.shopifyId}
              product={product}
              gatsbyImageProps={gatsbyImageProps}
            />
          );
        } else {
          return '';
        }
      })}
    </>
  );
};

export default CatalogProducts;
