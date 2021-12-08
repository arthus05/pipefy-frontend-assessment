import { CardDateType } from "pipefy-types"

export function handleCardDate(date: Date): CardDateType {
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  const curYear = (new Date()).getFullYear()

  return {
    month: monthNames[date.getMonth()],
    day: date.getDate(),
    yearDistance: date.getFullYear() - curYear
  }

}
