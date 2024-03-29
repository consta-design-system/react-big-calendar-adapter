import './QuartalView.css';

import { Text } from '@consta/uikit/Text';
import moment from 'moment';
import React, { useMemo } from 'react';
import {
  Calendar,
  DateLocalizer,
  Event,
  Messages,
  Navigate,
  TimeGridProps,
} from 'react-big-calendar';

import { reactBigCalendarAdapter } from '##/adapters/reactBigCalendarAdapter';
import { WEEK_DAYS } from '##/adapters/reactBigCalendarAdapter/helpers';
import { DefaultLocalizerType } from '##/adapters/reactBigCalendarAdapter/types';

import { cn } from '../../utils/bem';

type Props<TEvent extends object = Event, TResource extends object = object> = {
  date: Date;
  title: (date: Date) => string;
  localizer: DateLocalizer;
  messages?: Messages;
} & TimeGridProps<TEvent, TResource>;

const getRange = (date: Date) => {
  const numberOfQuarter = moment(date).quarter();
  const quarterStart = moment(date)
    .quarter(numberOfQuarter)
    .startOf('quarter')
    .toDate();
  const quarterEnd = moment(date)
    .quarter(numberOfQuarter)
    .endOf('quarter')
    .toDate();
  return [quarterStart, quarterEnd];
};

const cnQuartalView = cn('QuartalView');

export function QuartalView<
  TEvent extends object = Event,
  TResource extends object = object,
>(props: Props<TEvent, TResource>) {
  const { date, localizer, max, min, events, onNavigate, ...otherProps } =
    props;
  const range = useMemo(() => {
    return getRange(date);
  }, [date]);

  const months = useMemo(() => {
    const monthsArr: Date[] = [];
    if (range) {
      for (let i = 0; i <= 2; i++) {
        monthsArr.push(moment(range[0]).add(i, 'M').toDate());
      }
    }
    return monthsArr;
  }, [range]);

  const { formats, messages } = reactBigCalendarAdapter({});

  return (
    <div className={cnQuartalView()}>
      <div className={cnQuartalView('WeekDays')}>
        {WEEK_DAYS.map((day) => (
          <Text
            className={cnQuartalView('Day')}
            weight="medium"
            view="secondary"
            size="s"
            lineHeight="m"
            align="center"
            key={`WeekDay-${day}`}
          >
            {day}
          </Text>
        ))}
      </div>
      {months.map((month) => {
        return (
          <div
            className={cnQuartalView('Month')}
            key={`CalendarViewQuartal-${month.getMonth()}`}
          >
            <Text
              className={cnQuartalView('Label')}
              weight="semibold"
              size="s"
              lineHeight="m"
              view="primary"
            >
              {moment(month).format('MMMM')}
            </Text>
            <Calendar
              events={events}
              defaultDate={month}
              onNavigate={(_newDate, _view, action) => onNavigate?.(action)}
              className={cnQuartalView('Calendar')}
              views={{ month: true }}
              messages={messages}
              localizer={localizer}
              toolbar={false}
              formats={formats}
              {...otherProps}
              popup={false}
            />
          </div>
        );
      })}
    </div>
  );
}

QuartalView.navigate = (
  date: Date,
  action: string,
  params: { localizer: object },
) => {
  const quarterDate = moment()
    .quarter(moment(date).quarter())
    .startOf('M')
    .toDate();
  const localizer = params.localizer as DefaultLocalizerType;
  switch (action) {
    case Navigate.PREVIOUS:
      return localizer.add(quarterDate, -3, 'month');

    case Navigate.NEXT:
      return localizer.add(quarterDate, 3, 'month');

    default:
      return date;
  }
};

QuartalView.title = (date: Date) => {
  return `${moment(date).quarter()} квартал ${moment(date).year()}`;
};
