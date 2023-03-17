import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query {
    repositories(first: 30) {
      edges {
        node {
          ownerAvatarUrl
          fullName
          description
          language
          stargazersCount
          forksCount
          reviewCount
          ratingAverage
        }
      }
    }
  }
`;

export const SIGN_OUT = gql`
  query {
    me {
      id
      username
    }
  }
`;
