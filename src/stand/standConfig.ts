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
  group: 'библиотеки компонентов',
  image,
  description:
    '[тут описание что это такое] Ультра топчик библиотеки с пацанскими кнопками и графиками, качай.',
});
