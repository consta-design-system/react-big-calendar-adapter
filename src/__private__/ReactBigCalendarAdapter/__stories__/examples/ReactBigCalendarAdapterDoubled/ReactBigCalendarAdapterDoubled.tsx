import React from 'react'
import { reactBigCalendarAdapter } from '@/__private__/ReactBigCalendarAdapter/reactBigCalendarAdapter'
import { events } from '@/__private__/ReactBigCalendarAdapter/__mocks__/mock.data'
import moment from 'moment'
import { momentLocalizer, Calendar } from 'react-big-calendar'

moment.locale('ru')
const localizer = momentLocalizer(moment)

export const ReactBigCalendarAdapterDoubled = () => {
  const { prefix, ...otherProps } = reactBigCalendarAdapter({ doubled: true })
  return (
    <Calendar
      defaultDate={new Date(2022, 3, 1)}
      events={events}
      localizer={localizer}
      showMultiDayTimes
      className={prefix}
      defaultView="month"
      {...otherProps}
    />
  )
}
