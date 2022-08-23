import moment from 'moment';
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';

import { reactBigCalendarAdapter } from '##/adapters/reactBigCalendarAdapter';
import { events } from '##/adapters/reactBigCalendarAdapter/__mocks__/mock.data';

moment.locale('ru');
const localizer = momentLocalizer(moment);

export const ReactBigCalendarAdapterDoubled = () => {
  const { prefix, ...otherProps } = reactBigCalendarAdapter({ doubled: true });
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
