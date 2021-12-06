import { CardDateType } from 'pipefy-types'
import { useEffect, useState } from 'react'
import { handleCardDate } from '../../../utils/dateUtil'
import {
  Box,
  DueDateLabel,
  DueDateLabelYear
} from './styles'

interface DueDateProps {
  dueDate: Date
}

export const DueDate = ({ dueDate }: DueDateProps) => {
  const [isDatePassed, setIsDatePassed] = useState(false)
  const [daysPassed, setDaysPassed] = useState<number | undefined>()
  const [formatedDate, setFormatedDate] = useState({} as CardDateType)

  useEffect(() => {
    const curDate = new Date()
    let passedTime = dueDate.getTime() - curDate.getTime()

    if (passedTime >= 0) {
      setIsDatePassed(true)
      setDaysPassed(Math.floor(passedTime/(1000*60*60*24)))
    } else {
      setIsDatePassed(false)
      setFormatedDate(handleCardDate(dueDate))
    }
  }, [dueDate])


  return (
    <Box>
      {
        isDatePassed ?
          (<p>{daysPassed}d</p>) :
          (<DueDateLabel>
            <label>Due date {formatedDate.month}, {formatedDate.day}</label>

            {
              formatedDate?.yearDistance > 0 ?
                <DueDateLabelYear>
                  in {formatedDate.yearDistance} years
                </DueDateLabelYear> : <></>
            }

          </DueDateLabel>)
      }
    </Box>
  )
}
