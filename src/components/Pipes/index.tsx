import { useQuery } from '@apollo/client';
import { GET_PIPES_BY_ORGANIZATION } from '../../services/graphql/Queries'
import {
  Box,
  LoadingBox,
  NoPipes
} from './styles'
import { PipeCard } from '../PipeCard';
import { OrganizationRes, OrganizationVars } from 'pipefy-service'
import { CardsModal } from '../CardsModal';
import { useState } from 'react';
import { Loading } from '../Loading';


export const Pipes = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedPipeId, setSelectedPipeId] = useState<number>(0)

  const { loading, error, data } = useQuery<OrganizationRes, OrganizationVars>(GET_PIPES_BY_ORGANIZATION, {
    variables: { id: 300562393 }
  })

  function handleCloseModal() {
    setModalIsOpen(false)
  }

  function handleClickPipe(pipeId: number) {
    setSelectedPipeId(pipeId)
    setModalIsOpen(true)
  }

  console.log('Error:', error)

  return (
    <Box>
      <CardsModal
        modalIsOpen={modalIsOpen}
        closeModal={handleCloseModal}
        pipeId={selectedPipeId}
      />
      {
        loading ?
          <LoadingBox>
            <Loading size='4rem' />
          </LoadingBox>
          : (data && data.organization.pipes.length > 0 ?
              [...data.organization.pipes].sort((a, b) => a.name.trim().localeCompare(b.name.trim())).map((pipe, i) => (
                <PipeCard onClick={() => handleClickPipe(pipe.id)} pipe={pipe} key={i} />
              )) : <NoPipes>No pipes found for this Organization</NoPipes>
            )
      }
    </Box>
  )
}
