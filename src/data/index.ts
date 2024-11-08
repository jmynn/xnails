import { TypeNavbarLinks, TypePrice, TypePromoCard } from '@/types';

const $BASEPATH = '';

export const $NAVBAR_LINKS = {
  desktop: [
    {
      href: '/',
      label: 'О нас'
    },
    {
      href: '/',
      label: 'прайс'
    },
    {
      href: '/',
      label: 'отзывы'
    },
    {
      href: '/',
      label: 'студии'
    },
    {
      href: '/',
      label: 'блог'
    }
  ],
  mobile: [
    {
      href: '/',
      label: 'О нас'
    },
    {
      href: '/',
      label: 'портфолио'
    },
    {
      href: '/',
      label: 'отзывы'
    },
    {
      href: '/',
      label: 'акции'
    },
    {
      href: '/',
      label: 'прайс'
    },
    {
      href: '/',
      label: 'наши студии'
    },
    {
      href: '/',
      label: 'блог'
    }
  ]
} satisfies TypeNavbarLinks;

export const $CONTACT_NUMBER = '+7 (812) 660-50-88';

export const $PATH_SIGNUP = '/';
export const $PATH_PRIVACY_POLICY = '/';

export const $MAIN_PAGE_PICS = {
  main: `${$BASEPATH}/main/main-img.webp`,
  other: [
    `${$BASEPATH}/main/main-left.webp`,
    `${$BASEPATH}/main/main-center.webp`,
    `${$BASEPATH}/main/main-right.webp`
  ]
};

export const $FOOTER_LINKS = {
  mobile: [
    {
      href: '/',
      label: 'О нас'
    },
    {
      href: '/',
      label: 'портфолио'
    },
    {
      href: '/',
      label: 'отзывы'
    },
    {
      href: '/',
      label: 'акции'
    },
    {
      href: '/',
      label: 'прайс'
    },
    {
      href: '/',
      label: 'блог'
    }
  ],
  desktop: [
    {
      href: '/',
      label: 'О нас'
    },
    {
      href: '/',
      label: 'портфолио'
    },
    {
      href: '/',
      label: 'отзывы'
    },
    {
      href: '/',
      label: 'акции'
    },
    {
      href: '/',
      label: 'блог'
    },
    {
      href: '/',
      label: 'прайс'
    },
    {
      href: '/',
      label: 'студии'
    }
  ]
} satisfies TypeNavbarLinks;

export const $PROMO_CARDS = [
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/xnails%2Fcarousel_1%2Fcarousel-1.png?alt=media&token=c6f078eb-023c-4b04-a5f3-f7a0418e3972',
    title: 'Вместе дешевле!',
    text: `Расскажите о нас своим подругам, знакомым, коллегам или родственникам.
${' '}Друг получает скидку 10% на первый визит, а вы - 10% кэшбэк с его первого визита`,
    link: '/',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  },
  {
    // src: 'https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/xnails%2Fcarousel_1%2Fcarousel-2.png?alt=media&token=a8039d15-4c42-4a90-9670-b35ef6c7d1df',
    src: 'https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/xnails%2Fcarousel_1%2Ftest-2.jpg?alt=media&token=46040903-87ae-4ecb-aa70-974d6a3db088',
    title: 'Скидка 10% на первый визит',
    link: '/',
    style: {
      width: '100%',
      height: 'auto',
      objectFit: 'cover'
    }
  }
] satisfies TypePromoCard[];

export const $PRICE = [
  {
    title: 'Маникюр',
    id: 'nail',
    items: [
      {
        title: 'Снятие покрытия',
        cost: `${200} ₽`
      },
      {
        title: 'Маникюр (аппаратный, комбинированный)',
        cost: `${1000} ₽`
      },
      {
        title: 'Покрытие гелем Luxio, oniq',
        cost: `${900} ₽`
      },
      {
        title: `Снятие + маникюр +
${' '}Покрытие гелем Luxio, oniq  `,
        cost: `${210}0 ₽`
      },
      {
        title: 'Дизайн ногтей',
        cost: `${20}-${300} ₽`
      },
      {
        title: 'Укрепление акриловой пудрой',
        cost: `${300} ₽`
      },
      {
        title: 'Укрепление гелем',
        cost: `${500} ₽`
      },
      {
        title: 'Ремонт натурального ногтя',
        cost: `${100} ₽`
      }
    ]
  },
  {
    title: 'Наращивание',
    id: 'increase',
    items: [
      { title: 'Снятие наращенных ногтей', cost: `${400} ₽` },
      { title: 'Ремонт ногтя гелем', cost: `${200} ₽` },
      { title: 'Наращивание + маникюр + покрытие', cost: `${3100} ₽` },
      { title: 'Коррекция + маникюр + покрытие', cost: `${2700} ₽` },
      { title: 'Донаращивание сломанного ногтя', cost: `${200} ₽` }
    ]
  },
  {
    title: 'Педикюр',
    id: 'pedicure',
    items: [
      { title: 'Снятие покрытия', cost: `${200} ₽` },
      { title: 'Педюкюр', cost: `${1400} ₽` },
      { title: 'Покрытие Luxio, ONIQ', cost: `${900} ₽` },
      { title: 'Снятие + педикюр + покрытие', cost: `${2700} ₽` }
    ]
  },
  {
    title: 'Брови',
    id: 'eyebrows',
    items: [
      { title: 'Коррекция бровей', cost: `${600} ₽` },
      { title: 'Окрашивание бровей краской', cost: `${900} ₽` },
      { title: 'Окрашивание бровей хной', cost: `${900} ₽` },
      { title: 'Коррекция и окрашивание хной /краской', cost: `${1500} ₽` },
      { title: 'Моделирование + коррекция + окрашивание', cost: `${2000} ₽` },
      { title: 'Ламинирование + кореекция', cost: `${2000} ₽` },
      { title: 'Ламинирование + коррекция + окрашивание', cost: `${2300} ₽` }
    ]
  }
] satisfies TypePrice;
