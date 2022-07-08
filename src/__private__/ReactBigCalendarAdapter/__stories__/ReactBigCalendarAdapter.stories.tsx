import React, { useMemo } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { boolean } from '@storybook/addon-knobs'
import moment from 'moment'
import { backgroundEvent, events } from '../__mocks__/mock.data'
import { createMetadata } from '@/__private__/storybook'
import { reactBigCalendarAdapter } from '../reactBigCalendarAdapter'
import { cn } from '../../utils/bem'
import mdx from './ReactBigCalendarAdapter.docs.mdx'

import './ReactBigCalendarStories.css'

moment.locale('ru')
const localizer = momentLocalizer(moment)

const cnReactBigCalendarStories = cn('ReactBigCalendarStories')

const defaultKnobs = () => ({
  doubled: boolean('doubled', false),
  sliced: boolean('sliced', false),
  withBackgroundEvents: boolean('withBackgroundEvents', false),
  withPopup: boolean('withPopup', true),
})

export const Playground = () => {
  const { doubled, sliced, withBackgroundEvents, withPopup } = defaultKnobs()
  const { defaultDate } = useMemo(
    () => ({
      defaultDate: new Date(2022, 3, 1),
    }),
    []
  )
  const { prefix, messages, views, formats, step } = reactBigCalendarAdapter({ doubled, sliced })

  return (
    <div className={cnReactBigCalendarStories()}>
      <Calendar
        defaultDate={defaultDate}
        events={events}
        backgroundEvents={withBackgroundEvents ? backgroundEvent : undefined}
        localizer={localizer}
        showMultiDayTimes
        step={step}
        popup={withPopup}
        className={prefix}
        formats={formats}
        defaultView="month"
        views={views}
        messages={messages}
      />
    </div>
  )
}

export default createMetadata({
  title: 'Utils|/ReactBigCalendarAdapter',
  id: 'Utils/ReactBigCalendarAdapter',
  parameters: {
    docs: {
      page: mdx,
    },
  },
})
