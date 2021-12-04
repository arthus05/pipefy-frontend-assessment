import { gql } from "@apollo/client";

export const GET_PIPES_BY_ORGANIZATION = gql`
  query GetPipesByOrganization($id: ID!) {
    organization(id: $id) {
      id
      name
      pipes {
        cards_count
        color
        name
        public
      }
    }
  }
`;

export const GET_CARD_BY_PIPE_ID = gql`
  query GetCard($pipe_id: ID!) {
    cards(pipe_id: $pipe_id) {
      edges {
        node {
          title
          subtitles {
            date_value
            datetime_value
            filled_at
            float_value
            indexName
            name
            report_value
            updated_at
            value
          }
          age
          createdAt
          createdBy {
            displayName
          }
          labels {
            name
            color
          }
          assignees {
            displayName
          }
        }
      }
    }
  }
`;
