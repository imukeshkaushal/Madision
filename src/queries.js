// queries.js
import { gql } from '@apollo/client';

export const GET_HOME_DATA = gql`
  query {
    homeData {
      id
      attributes {
        services {
          id
          first_title
          first_desc
          bg_img {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
        second_service {
          id
          title
          Description
          bg_img {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
        third_service {
          id
          title
          Description
          bg_img {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
        # Add more attributes as needed
      }
    }
  }
`;
