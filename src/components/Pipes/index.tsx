import { useQuery } from '@apollo/client';
import { GET_PIPES_BY_ORGANIZATION } from '../../services/graphql/Queries'
import {
  Box
} from './styles'
import { PipeCard } from '../PipeCard';
import { OrganizationRes, OrganizationVars } from 'pipefy-service'
import { CardsModal } from '../CardsModal';
import { useState } from 'react';


export const Pipes = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedPipeId, setSelectedPipeId] = useState<number>(0)

  const { loading, error, data } = useQuery<OrganizationRes, OrganizationVars>(GET_PIPES_BY_ORGANIZATION, {
    variables: { id: 300562393 }
  })

  if (loading) return <h1>Loading...</h1>


  function handleCloseModal() {
    setModalIsOpen(false)
  }

  function handleClickPipe(pipeId: number) {
    setSelectedPipeId(pipeId)
    setModalIsOpen(true)
  }

  console.log('loading:', loading)
  console.log('error:', error)
  console.log('data:', data)

  return (
    <Box>
      <CardsModal 
        modalIsOpen={modalIsOpen}
        closeModal={handleCloseModal}
        pipeId={selectedPipeId}
      />
      {
        data?.organization.pipes.map((pipe, i) => (
          <PipeCard onClick={() => handleClickPipe(pipe.id)} pipe={pipe} key={i} />
        ))
      }
    </Box>
  )
}
