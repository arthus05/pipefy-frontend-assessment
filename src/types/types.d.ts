declare module 'pipefy-types' {

  type Label = {
    name: string
    color: string
  }

  type Subtitle = {
    name: string
    value: string
  }

  type CardType = {
    title: string
    dueDate: Date
    pipeName: string
    labels: Label[]
    subtitles: Subtitle[]
  }

  type CardDateType = {
    month: string
    day: number
    yearDistance: number
  }

}