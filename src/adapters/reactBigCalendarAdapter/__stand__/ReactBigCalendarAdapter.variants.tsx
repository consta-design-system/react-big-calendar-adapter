import './ReactBigCalendarAdapterVariants.css';

import { useBoolean } from '@consta/stand';
import moment from 'moment';
import React, { useMemo } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';

import { cn } from '##/utils/bem';

import { backgroundEvent, events } from '../__mocks__/mock.data';
import { reactBigCalendarAdapter } from '../reactBigCalendarAdapter';

moment.locale('ru');
const localizer = momentLocalizer(moment);

const cnReactBigCalendarAdapterVarinats = cn('ReactBigCalendarAdapterVarinats');

const Variants = () => {
  const doubled = useBoolean('doubled', false);
  const sliced = useBoolean('sliced', false);
  const withBackgroundEvents = useBoolean('withBackgroundEvents', false);
  const withPopup = useBoolean('withPopup', true);

  const { defaultDate } = useMemo(
    () => ({
      defaultDate: new Date(2022, 3, 1),
    }),
    [],
  );
  const { prefix, messages, views, formats, step } = reactBigCalendarAdapter({
    doubled,
    sliced,
  });

  return (
    <div className={cnReactBigCalendarAdapterVarinats()}>
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
  );
};

export default Variants;
