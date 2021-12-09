import {
  Box,
  LoadingBox,
  NoPipes
} from './styles'
import { PipeCard } from '../PipeCard';
import { CardsModal } from '../CardsModal';
import { useMemo, useState } from 'react';
import { Loading } from '../Loading';

import { usePipeList } from '../../hooks/usePipeList'

interface PipesProps {
  organizationId?: number
}

export const Pipes = ({ organizationId }: PipesProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedPipeId, setSelectedPipeId] = useState(0)

  const { loading, data } = usePipeList({
    variables: { id: organizationId }
  })

  const PipeList = useMemo(() => {
    if (data && data.organization.pipes.length > 0) {

      return (
        [...data.organization.pipes].sort((a, b) => a.name.trim().localeCompare(b.name.trim())).map((pipe, i) => (
          <PipeCard onClick={() => handleClickPipe(pipe.id)} pipe={pipe} key={i} />
        ))
      )

    }

    return (
      <NoPipes data-testid='no-pipes-found'>No pipes found for this Organization</NoPipes>
    )

  }, [data])

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
          : PipeList
      }
    </Box>
  )
}
