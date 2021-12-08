import {
  Box,
  LoadingBox,
  NoPipes
} from './styles'
import { PipeCard } from '../PipeCard';
import { CardsModal } from '../CardsModal';
import { useState } from 'react';
import { Loading } from '../Loading';

import { usePipeList } from '../../hooks/usePipeList'


export const Pipes = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedPipeId, setSelectedPipeId] = useState<number>(0)

  const { loading, data } = usePipeList({
    variables: { id: 300562393 }
  })

  function handleCloseModal() {
    setModalIsOpen(false)
  }

  function handleClickPipe(pipeId: number) {
    setSelectedPipeId(pipeId)
    setModalIsOpen(true)
  }

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
