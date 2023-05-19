reactBigCalendarAdapter | [Дизайн-система Consta](https://consta.design/)

Этот адаптер стилизует таблицу [react-big-calendar](http://jquense.github.io/react-big-calendar/examples/index.html?path=/story/about-big-calendar--page) для [дизайн-системы Consta](https://consta.design/).

# Как использовать

## Установите пакет

```sh
# NPM
$ npm install @consta/react-big-calendar-adapter
# Yarn
$ yarn add @consta/react-big-calendar-adapter
```

## Подключите зависимости

Чтобы начать работу, установите библиотеку [`@consta/uikit`](https://www.npmjs.com/package/@consta/uikit) и [настройте тему](https://consta.design/libs/portal/theme-themeabout).

### Можно использовать компоненты

Например, так:

```js
import React from 'react';
import { reactBigCalendarAdapter } from '@consta/react-big-calendar/reactBigCalendarAdapter';
import moment from 'moment';
import { momentLocalizer, Calendar } from 'react-big-calendar';
moment.locale('ru');
const localizer = momentLocalizer(moment);
export const ReactBigCalendarAdapter = () => {
  const { prefix, ...otherProps } = reactBigCalendarAdapter({});
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
```

## Документация

[Посмотреть документацию и примеры](http://consta.design/libs/react-big-calendar-adapter)

## Разработка

### Подготовка окружения

Рабочее окружение должно содержать NodeJS и Yarn.

Чтобы установить зависимости, выполните команду:

```sh
$ yarn install
```

### Основные команды

```sh
# Запуск локального сервера для разработки
$ yarn start

# Сборка пакета
$ yarn build

# Сборка стенда
$ yarn stand:build

# Запуск тестов
$ yarn test
```

## Контрибьюторам

Будем рады, если вы захотите принять участие в разработке дизайн-системы =) Но сначала прочитайте [инструкцию для контрибьюторов](https://consta.design/libs/portal/contributers-code).

## Контрибьюторам

Будем рады, если вы захотите принять участие в разработке дизайн-системы =) Но сначала прочитайте [инструкцию для контрибьюторов](http://portal.consta.design/libs/portal/custom-contribute).

## Лицензия

Дизайн-систему можно использовать бесплатно, она распространяется на условиях открытой [лицензии MIT](https://consta.design/static/licence_mit.pdf).
