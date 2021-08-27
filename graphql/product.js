import { gql } from "@apollo/client";

export const FETCH_PRODUCT_QUERY = gql`
  query Allproducts($currency: Currency!) {
    products {
      id
      image_url
      title
      price(currency: $currency)
    }
  }
`;

export const FETCH_CURENCY_QUERY = gql`
  query currencyQuery {
    currency
  }
`;
