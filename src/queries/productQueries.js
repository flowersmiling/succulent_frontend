import { gql } from "@apollo/client";

const GET_PRODUCTS = gql`
  query getProducts {
    products {
      id
      name
      description
      postDate
      size{
        length
        width
        radius
        height
      }
      priceList{
        price
        postDate
      }
      stocks{
        total
      }
      colors
      quantity
      rare
      category
      productStatus
      review {
        stars
      }
      image{
        name
        imageLink
      }
    }
  }
`;

const GET_PRODUCT = gql`
  query getProduct($id: ID!) {
    product(id: $id) {
      id
      name
      description
      postDate
      size{
        length
        width
        radius
        height
      }
      priceList{
        price
        postDate
      }
      stocks{
        total
      }
      colors
      quantity
      rare
      category
      productStatus
      review {
        stars
      }
      image{
        name
        imageLink
      }
    }
  }
`;

const GET_ADMIN_PRODUCTS = gql`
  query getAdminProducts {
    products{
      name
      priceList{
        price
      }
      postDate
      review{ 
        stars
      }
      quantity
      description
      productStatus
      image{
        name
        imageLink
      }

    }
  }
`;


export { GET_PRODUCTS, GET_ADMIN_PRODUCTS, GET_PRODUCT };
