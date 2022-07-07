import { cn } from '../utils/bem'
import { Result, Params } from './types'
import { QuartalView } from '../QuartalView/QuartalView'
import './ReactBigCalendarAdapter.css'
import { dayFormat, monthFormat, weekFormat, WEEK_DAYS } from './helpert'

const cnReactBigCalendarAdapter = cn('ReactBigCalendarAdapter')

export const reactBigCalendarAdapter = (params: Params): Result => {
  const { doubled = false, sliced = false, className } = params
  return {
    prefix: cnReactBigCalendarAdapter(
      {
        doubled,
        sliced,
      },
      [className]
    ),
    messages: {
      month: 'Месяц',
      week: 'Неделя',
      // eslint-disable-next-line camelcase
      work_week: 'Рабочая неделя',
      day: 'День',
      agenda: 'Квартал',
      today: 'Сегодня',
    },
    views: {
      month: true,
      week: true,
      day: true,
      agenda: QuartalView,
    },
    formats: {
      dayHeaderFormat: date => dayFormat(date),
      dayRangeHeaderFormat: date => weekFormat(date.start, date.end),
      monthHeaderFormat: date => monthFormat(date),
      dayFormat: date => WEEK_DAYS[date.getDay() === 0 ? 6 : date.getDay() - 1],
      weekdayFormat: date => WEEK_DAYS[date.getDay() === 0 ? 6 : date.getDay() - 1],
    },
    step: 30,
  }
}
