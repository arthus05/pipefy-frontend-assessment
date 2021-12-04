import { Pipe } from 'pipefy-service'
import { useEffect, useState } from 'react'
import {
  Box,
  Content,
  LockContainer
} from './styles'

interface PipeCardProps {
  pipe: Pipe
}

export const PipeCard = ({ pipe }: PipeCardProps) => {
  const [isPublic, setIsPublic] = useState(true)

  useEffect(() => {
    setIsPublic(pipe.public)
  }, [pipe.public])

  console.log(pipe)

  return (
    <Box color={pipe.color}>
      <LockContainer>
        {
          !isPublic ?? <img src="https://pipestyle.staticpipefy.com/icons/interface/locker-sm.svg" alt="lock icon" />
        }
      </LockContainer>
      <Content>
        <h4>{pipe.name}</h4>
        <p>{pipe.cards_count} cards</p>
      </Content>
    </Box>
  )
}
