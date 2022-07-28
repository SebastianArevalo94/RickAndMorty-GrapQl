import { gql } from "@apollo/client";

const random = () => Math.floor(Math.random() * (826 - 1 + 1) + 1);

export const GetCharacter = gql`
  query ($id: ID! = ${random()}) {
    character(id: $id) {
      id
      name
      image
      status
      species
      type
      gender
      origin {
        name
        id
      }
      location {
        id
        dimension
      }
      created
    }
  }
`;
