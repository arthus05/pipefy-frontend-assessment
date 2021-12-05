import { useQuery } from '@apollo/client';
import { GET_PIPES_BY_ORGANIZATION } from '../../services/graphql/Queries'
import {
  Box
} from './styles'
import { PipeCard } from '../PipeCard';
import { OrganizationData, OrganizationVars } from 'pipefy-service'
import { CardsModal } from '../CardsModal';
import { useState } from 'react';


export const Pipes = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const { loading, error, data } = useQuery<OrganizationData, OrganizationVars>(GET_PIPES_BY_ORGANIZATION, {
    variables: { id: 300562393 }
  })

  function handleCloseModal() {
    setModalIsOpen(false)
  }

  function handleOpenModal() {
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
      />
      {
        data?.organization.pipes.map((pipe, i) => (
          <PipeCard onClick={handleOpenModal} pipe={pipe} key={i} />
        ))
      }
    </Box>
  )
}
