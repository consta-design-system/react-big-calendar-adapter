import { Messages, ViewsProps, Formats } from 'react-big-calendar'

export type Result = {
  prefix: string
  messages: Messages
  views: ViewsProps
  formats: Formats
  step: number
}

export type Params = {
  doubled?: boolean
  sliced?: boolean
  className?: string
}

export type DefaultLocalizerType = {
  add: (date: Date, step: number, type: 'month' | 'day' | 'year' | 'week') => Date
}
