import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import { CardRes, CardVars } from 'pipefy-service';

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

export function useCardList(params: QueryHookOptions<CardRes, CardVars>) {
  return useQuery(GET_CARD_BY_PIPE_ID, params)
}