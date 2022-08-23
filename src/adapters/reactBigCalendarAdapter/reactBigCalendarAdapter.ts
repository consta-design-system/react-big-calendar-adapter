import './ReactBigCalendarAdapter.css';

import { QuartalView } from '##/components/QuartalView';
import { cn } from '##/utils/bem';

import {
  getDayFormat,
  getHoursFormat,
  getMonthFormat,
  getShowMoreMessage,
  getTimeRangeEvent,
  getWeekDayFormat,
  getWeekFormat,
  WEEK_DAYS,
} from './helpers';
import { Params, Result } from './types';

const cnReactBigCalendarAdapter = cn('ReactBigCalendarAdapter');

export const reactBigCalendarAdapter = (params: Params): Result => {
  const { doubled = false, sliced = false, className } = params;
  return {
    prefix: cnReactBigCalendarAdapter(
      {
        doubled,
        sliced,
      },
      [className],
    ),
    messages: {
      month: 'Месяц',
      week: 'Неделя',
      // eslint-disable-next-line camelcase
      work_week: 'Рабочая неделя',
      day: 'День',
      agenda: 'Квартал',
      today: 'Сегодня',
      showMore: getShowMoreMessage,
    },
    views: {
      day: true,
      week: true,
      month: true,
      agenda: QuartalView,
    },
    formats: {
      dayHeaderFormat: (date) => getDayFormat(date),
      dayRangeHeaderFormat: (date) => getWeekFormat(date.start, date.end),
      monthHeaderFormat: (date) => getMonthFormat(date),
      dayFormat: getWeekDayFormat,
      weekdayFormat: (date) =>
        WEEK_DAYS[date.getDay() === 0 ? 6 : date.getDay() - 1],
      eventTimeRangeFormat: ({ start, end }) => getTimeRangeEvent(start, end),
      eventTimeRangeEndFormat: ({ start, end }) =>
        getTimeRangeEvent(start, end),
      eventTimeRangeStartFormat: ({ start, end }) =>
        getTimeRangeEvent(start, end),
      timeGutterFormat: (date) => getHoursFormat(date),
    },
    step: 30,
  };
};
