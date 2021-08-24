import { gql } from "@apollo/client";

export const FETCH_PRODUCT_QUERY = gql`
  query Allproducts {
    products {
      id
      image_url
      title
    }
  }
`;
