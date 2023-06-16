import { createConfig } from '@consta/stand';

import image from './ConstaImage.png';

const groups = [
  {
    title: 'Документация',
    id: 'docs',
    initialOpen: true,
  },
  {
    title: 'Адаптеры',
    id: 'adapters',
    initialOpen: true,
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
  repositoryUrl:
    'https://github.com/consta-design-system/react-big-calendar-adapter',
  figmaUrl:
    'https://www.figma.com/file/3RsiLTgTuXpdnqG7gW8UwL/Consta-Components-(Community)?type=design&node-id=1336-68963&t=ponDmJar7RUOypIn-0',
});
