export const WEEK_DAYS = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье',
]

export const MONTHS_COUNTABLE = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
]

export const MONTHS = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
]

export const dayFormat = (date: Date) => {
  const dateNumber = date.getDate()
  const monthNumber = date.getMonth()
  return `${('0' + dateNumber.toString()).slice(-2)} ${MONTHS_COUNTABLE[monthNumber]}, ${WEEK_DAYS[
    date.getDay() - 1
  ].toLowerCase()}`
}

export const monthFormat = (date: Date) => {
  const monthNumber = date.getMonth()
  return `${MONTHS[monthNumber]} ${date.getFullYear()}`
}

export const weekFormat = (start: Date, end: Date) => {
  const startDate = `${('0' + start.getDate().toString()).slice(-2)} ${
    MONTHS_COUNTABLE[start.getMonth()]
  }`
  const endDate = `${('0' + end.getDate().toString()).slice(-2)} ${
    MONTHS_COUNTABLE[end.getMonth()]
  }`
  return `${startDate} — ${endDate}`
}
