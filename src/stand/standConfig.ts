import { createConfig } from '@consta/stand';

import image from './ConstaImage.png';

const groups = [
  {
    title: 'Адаптеры',
    id: 'adapters',
  },
] as const;

export const { createStand } = createConfig({
  title: 'Consta react-big-calendar-adapter',
  id: 'react-big-calendar-adapter',
  groups,
  group: 'Адаптеры',
  image,
  description:
    'Адаптер для календаря из библиотеки react-big-calendar. Стилизует календарь для дизайн-системы Consta.',
});
