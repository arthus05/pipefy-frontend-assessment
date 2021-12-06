import { gql } from "@apollo/client";

export const GET_PIPES_BY_ORGANIZATION = gql`
  query GetPipesByOrganization($id: ID!) {
    organization(id: $id) {
      id
      name
      pipes {
        id
        cards_count
        color
        name
        public
      }
    }
  }
`;

export const GET_CARD_BY_PIPE_ID = gql`
  query GetCard($pipe_id: ID!, $first: Int,$after: String) {
    cards(pipe_id: $pipe_id, first: $first, after: $after) {
      edges {
        node {
          title
          due_date
          pipe {
            name
          }
          labels {
            name
            color
          }
          subtitles {
            name
            value
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;
