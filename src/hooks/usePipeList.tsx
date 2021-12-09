import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import { OrganizationRes, OrganizationVars } from 'pipefy-service';

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

export function usePipeList(params: QueryHookOptions<OrganizationRes, OrganizationVars>) {
  return useQuery(GET_PIPES_BY_ORGANIZATION, params)
}