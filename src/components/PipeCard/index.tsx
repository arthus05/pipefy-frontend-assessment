import { Pipe } from 'pipefy-types'
import { Box } from './styles'

interface PipeCardProps {
  pipe: Pipe
}

export const PipeCard = ({ pipe }: PipeCardProps) => {
  return (
    <Box color={pipe.color}>
      <h4>{pipe.name}</h4>
    </Box>
  )
}
