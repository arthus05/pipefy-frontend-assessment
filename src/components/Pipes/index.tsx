import { useQuery } from '@apollo/client';
import { GET_PIPES_BY_ORGANIZATION } from '../../services/graphql/Queries'
import {
  Box
} from './styles'
import { PipeCard } from '../PipeCard';
import { OrganizationData, OrganizationVars } from 'pipefy-service'


export const Pipes = () => {
  const { loading, error, data } = useQuery<OrganizationData, OrganizationVars>(GET_PIPES_BY_ORGANIZATION, {
    variables: { id: 300562393 }
  })

  console.log('loading:', loading)
  console.log('error:', error)
  console.log('data:', data)

  return (
    <Box>
      {
        data?.organization.pipes.map((pipe, i) => (
          <PipeCard pipe={pipe} key={i} />
        ))
      }
    </Box>
  )
}
