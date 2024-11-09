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

export const $PRICE = {
  nail: {
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
        title: <>Дизайн ногтей <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none">
        <path d="M4.55664 7.28076L0.659527 0.530761L8.45376 0.530762L4.55664 7.28076Z" fill="#181818"/>
        </svg></>,
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
    ],
    images: {
      ellipse: 'https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/xnails%2Fprice%2F%D0%BC%D0%B0%D0%BD%D0%B8%D0%BA%D1%8E%D1%80-%D0%BA%D1%80%D1%83%D0%B3%D0%BB%D0%B0%D1%8F.png?alt=media&token=0f5dd0ff-f2af-4bb1-a2d6-1fbdb429da42',
      half: 'https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/xnails%2Fprice%2F%D0%BC%D0%B0%D0%BD%D0%B8%D0%BA%D1%8E%D1%80-%D0%BF%D0%BE%D0%BB%D0%BE%D0%B2%D0%B8%D0%BD%D0%B0.jfif?alt=media&token=dc0600e2-c0f0-48a0-9030-bd10297ca7dd',
    }
  },
  increase: {
    title: 'Наращивание',
    id: 'increase',
    items: [
      { title: 'Снятие наращенных ногтей', cost: `${400} ₽` },
      { title: 'Ремонт ногтя гелем', cost: `${200} ₽` },
      { title: 'Наращивание + маникюр + покрытие', cost: `${3100} ₽` },
      { title: 'Коррекция + маникюр + покрытие', cost: `${2700} ₽` },
      { title: 'Донаращивание сломанного ногтя', cost: `${200} ₽` }
    ],
    images: {
      ellipse: 'https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/xnails%2Fprice%2F%D0%BD%D0%B0%D1%80%D0%B0%D1%89%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8-%D0%BA%D1%80%D1%83%D0%B3%D0%BB%D0%B0%D1%8F.png?alt=media&token=a07a6da9-4b0b-4b9b-83eb-4f168a16a303',
      half: 'https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/xnails%2Fprice%2F%D0%BD%D0%B0%D1%80%D0%B0%D1%89%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BF%D0%BE%D0%BB%D0%BE%D0%B2%D0%B8%D0%BD%D0%B0.jfif?alt=media&token=0f1133df-562e-43b5-8b42-a4f463129371',
    }
  },
  pedicure: {
    title: 'Педикюр',
    id: 'pedicure',
    items: [
      { title: 'Снятие покрытия', cost: `${200} ₽` },
      { title: 'Педюкюр', cost: `${1400} ₽` },
      { title: 'Покрытие Luxio, ONIQ', cost: `${900} ₽` },
      { title: 'Снятие + педикюр + покрытие', cost: `${2700} ₽` }
    ],
    images: {
      ellipse: 'https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/xnails%2Fprice%2F%D0%BF%D0%B5%D0%B4%D0%B8%D0%BA%D1%8E%D1%80-%D0%BA%D1%80%D1%83%D0%B3%D0%BB%D0%B0%D1%8F.png?alt=media&token=e5f5ea91-4b35-49bc-bedb-c1548b5143ba',
      half: 'https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/xnails%2Fprice%2F%D0%BC%D0%B0%D0%BD%D0%B8%D0%BA%D1%8E%D1%80-%D0%BF%D0%BE%D0%BB%D0%BE%D0%B2%D0%B8%D0%BD%D0%B0.jfif?alt=media&token=dc0600e2-c0f0-48a0-9030-bd10297ca7dd',
    }
  },
  eyebrows: {
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
    ],
    images: {
      ellipse: 'https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/xnails%2Fprice%2F%D0%B1%D1%80%D0%BE%D0%B2%D0%B8-%D0%BA%D1%80%D1%83%D0%B3%D0%BB%D0%B0%D1%8F.png?alt=media&token=18652ada-bb81-4e2e-8af3-67f22f116d18',
      half: 'https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/xnails%2Fprice%2F%D0%B1%D1%80%D0%BE%D0%B2%D0%B8-%D0%BF%D0%BE%D0%BB%D0%BE%D0%B2%D0%B8%D0%BD%D0%B0.jfif?alt=media&token=b6dd5290-97a4-4212-b219-740c10c69056',
    }
  }
} satisfies TypePrice;

export type TypeKeyPrice = keyof typeof $PRICE

