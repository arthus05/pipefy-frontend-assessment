import { Pipe } from 'pipefy-service'
import { useEffect, useState } from 'react'
import {
  Box,
  Content,
  LockContainer
} from './styles'

interface PipeCardProps {
  pipe: Pipe
  onClick: () => void
}

export const PipeCard = ({ pipe, onClick }: PipeCardProps) => {
  const [isPublic, setIsPublic] = useState(true)

  useEffect(() => {
    setIsPublic(pipe.public)
  }, [pipe.public])

  return (
    <Box color={pipe.color} onClick={onClick} data-testid='pipe-card'>
      <LockContainer data-testid='lock-container'>
        {
          !isPublic ?? <img src="https://pipestyle.staticpipefy.com/icons/interface/locker-sm.svg" alt="lock icon" />
        }
      </LockContainer>
      <Content>
        <h4 data-testid='pipe-name'>{pipe.name}</h4>
        <p data-testid='pipe-cards-count'>{pipe.cards_count} cards</p>
      </Content>
    </Box>
  )
}
