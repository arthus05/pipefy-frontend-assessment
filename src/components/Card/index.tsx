import { CardType } from 'pipefy-types'
import { useEffect, useState } from 'react'
import { DueDate } from './DueDate'
import {
  Box,
  CardData,
  SubtitleContainer,
  Label,
  LabelBox
} from './styles'

interface CardProps {
  card: CardType
}

export const Card = ({ card }: CardProps) => {
  const [dueDate, setDueDate] = useState<Date | null>()

  useEffect(() => {
    card.dueDate !== null ?
      setDueDate(new Date(card.dueDate)) :
      setDueDate(null)
  }, [card])

  return (
    <Box>
      <CardData>
        {
          card.labels.length > 0 ?
            <LabelBox>
              {card.labels.map((label, i) =>
                <Label key={i} color={label.color}>{label.name}</Label>)}
            </LabelBox> : <></>
        }

        <h2 data-testid='card-title'>{card.title}</h2>
        {
          card.subtitles.map((subtitle, i) => (
            <SubtitleContainer key={i}>
              <h3 data-testid='subtitle-name'>{subtitle.name}</h3>
              <p data-testid='subtitle-value'>{subtitle.value}</p>
            </SubtitleContainer>
          ))
        }

        {
          dueDate ?
            <DueDate dueDate={dueDate}/> :
            <></>
        }

      </CardData>
    </Box>
  )
}
