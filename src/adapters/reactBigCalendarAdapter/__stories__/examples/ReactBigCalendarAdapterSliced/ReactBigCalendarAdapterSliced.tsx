import moment from 'moment';
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';

import { events } from '@/__private__/ReactBigCalendarAdapter/__mocks__/mock.data';
import { reactBigCalendarAdapter } from '@/__private__/ReactBigCalendarAdapter/reactBigCalendarAdapter';

moment.locale('ru');
const localizer = momentLocalizer(moment);

export const ReactBigCalendarAdapterSliced = () => {
  const { prefix, ...otherProps } = reactBigCalendarAdapter({ sliced: true });
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
  );
};
