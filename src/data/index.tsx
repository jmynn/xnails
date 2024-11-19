import {
  TypeNavbarLinks,
  TypePrice,
  TypePromoCard,
  TypeReadonlyData,
  TypeReview,
  TypeStudioInfo
} from '@/types';

const $BASEPATH = '';

export const $NAVBAR_LINKS: TypeReadonlyData<TypeNavbarLinks, 'object'> = {
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
};

export const $CONTACT_NUMBER = '+7 (812) 660-50-88';

export const $PATH_SIGNUP = '/';
export const $PATH_PRIVACY_POLICY = '/';
export const $PATH_PRESENT_MORE = '/';
export const $PATH_REVIEW = '/';

export const $VISIBLE_REVIEW_STRING = 6;

export const $MAIN_PAGE_PICS = {
  main: `${$BASEPATH}/main/main-img.webp`,
  other: [
    `${$BASEPATH}/main/main-left.webp`,
    `${$BASEPATH}/main/main-center.webp`,
    `${$BASEPATH}/main/main-right.webp`
  ]
} as const;

export const $FOOTER_LINKS: TypeReadonlyData<TypeNavbarLinks, 'object'> = {
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
};

export const $PROMO_CARDS: TypeReadonlyData<TypePromoCard, 'array'> = [
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/xnails%2Fcarousel_1%2F640480fda372ac233e225d79376ff2ed.jfif?alt=media&token=afa104fd-95ed-4194-805d-7826114340c3',
    title: 'Вместе дешевле!',
    text: `Расскажите о нас своим подругам, знакомым, коллегам или родственникам.\n Друг получает скидку 10% на первый визит, а вы - 10% кэшбэк с его первого визита`,
    link: '/',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    className: '_promo_0'
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
    },
    className: '_promo_1'
  }
];

export const $PRICE: TypeReadonlyData<TypePrice, 'object'> = {
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
        title: `Снятие + маникюр +\n Покрытие гелем Luxio, oniq  `,
        cost: `${210}0 ₽`
      },
      {
        title: (
          <>
            Дизайн ногтей{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="8"
              viewBox="0 0 9 8"
              fill="none"
            >
              <path
                d="M4.55664 7.28076L0.659527 0.530761L8.45376 0.530762L4.55664 7.28076Z"
                fill="#181818"
              />
            </svg>
          </>
        ),
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
      ellipse:
        'https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/xnails%2Fprice%2F%D0%BC%D0%B0%D0%BD%D0%B8%D0%BA%D1%8E%D1%80-%D0%BA%D1%80%D1%83%D0%B3%D0%BB%D0%B0%D1%8F.png?alt=media&token=0f5dd0ff-f2af-4bb1-a2d6-1fbdb429da42',
      half: 'https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/xnails%2Fprice%2F%D0%BC%D0%B0%D0%BD%D0%B8%D0%BA%D1%8E%D1%80-%D0%BF%D0%BE%D0%BB%D0%BE%D0%B2%D0%B8%D0%BD%D0%B0.jfif?alt=media&token=dc0600e2-c0f0-48a0-9030-bd10297ca7dd'
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
      ellipse:
        'https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/xnails%2Fprice%2F%D0%BD%D0%B0%D1%80%D0%B0%D1%89%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8-%D0%BA%D1%80%D1%83%D0%B3%D0%BB%D0%B0%D1%8F.png?alt=media&token=a07a6da9-4b0b-4b9b-83eb-4f168a16a303',
      half: 'https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/xnails%2Fprice%2F%D0%BD%D0%B0%D1%80%D0%B0%D1%89%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BF%D0%BE%D0%BB%D0%BE%D0%B2%D0%B8%D0%BD%D0%B0.jfif?alt=media&token=0f1133df-562e-43b5-8b42-a4f463129371'
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
      ellipse:
        'https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/xnails%2Fprice%2F%D0%BF%D0%B5%D0%B4%D0%B8%D0%BA%D1%8E%D1%80-%D0%BA%D1%80%D1%83%D0%B3%D0%BB%D0%B0%D1%8F.png?alt=media&token=e5f5ea91-4b35-49bc-bedb-c1548b5143ba',
      half: 'https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/xnails%2Fprice%2F%D0%BC%D0%B0%D0%BD%D0%B8%D0%BA%D1%8E%D1%80-%D0%BF%D0%BE%D0%BB%D0%BE%D0%B2%D0%B8%D0%BD%D0%B0.jfif?alt=media&token=dc0600e2-c0f0-48a0-9030-bd10297ca7dd'
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
      ellipse:
        'https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/xnails%2Fprice%2F%D0%B1%D1%80%D0%BE%D0%B2%D0%B8-%D0%BA%D1%80%D1%83%D0%B3%D0%BB%D0%B0%D1%8F.png?alt=media&token=18652ada-bb81-4e2e-8af3-67f22f116d18',
      half: 'https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/xnails%2Fprice%2F%D0%B1%D1%80%D0%BE%D0%B2%D0%B8-%D0%BF%D0%BE%D0%BB%D0%BE%D0%B2%D0%B8%D0%BD%D0%B0.jfif?alt=media&token=b6dd5290-97a4-4212-b219-740c10c69056'
    }
  }
};

export type TypeKeyPrice = keyof typeof $PRICE;

export const $REVIEWS: TypeReadonlyData<TypeReview, 'array'> = [
  {
    author: 'Ольга Григорьева',
    date: '6 мая',
    review:
      'Моя любимая студия! Удобное месторасположение, в 5 минутах от метро Чернышевская. Приятная атмосфера, все девочки очень профессиональные мастера своего дела! Очень приветливый администратор, хорошие фильмы и вкусный кофе!'
  },
  {
    author: 'Ирина',
    date: '9 января',
    review:
      'Любимый салон, не изменяю больше двух лет. Прекрасные мастера, здесь можно записаться к любому и не прогадаешь. Чаще всего хожу к Марине, но к ней нужно записываться сильно заранее :) В салоне большой выбор цветов марок Luxio и ONIQ, качественное покрытие — носится без сколов до снятия, при тебе проводится стерилизация инструментов, доброжелательное обслуживание, бесплатное снятие своего покрытия, вкусный кофе, отличное расположение. Единственный минус, много желающих и сложно попасть близко к дате. Но можно попасть на окошко через инстаграм. Спасибо создателям и мастерам за такое душевное, атмосферное, уютное место. На Петроградской тоже замечательный филиал, кстати, но центральный успел стать родным❤️'
  }
];

export const $INFO_STUDIOS: TypeReadonlyData<TypeStudioInfo, 'array'> = [
  {
    _title: 'Xnails Центр',
    _id: `${0}-xnails`,
    title: 'XNAILS Центр',
    address: 'Гродненский переулок, д. 7\n м. Чернышевская, г. Санкт-Петербург',
    description:
      'Наша студия находится в Центральном районе г. Санкт-Петербург, в 5 минутах ходьбы  от станции метро «Чернышевская»',
    phone: `+7 ${911} ${924} ${63}-${45}`,
    schedule: 'Пн. — Вс.:10:00 — 22:00',
    map: 'https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/xnails%2Fmap%2F%D1%86%D0%B5%D0%BD%D1%82%D1%80.png?alt=media&token=ced6a822-963d-439f-9e01-0dad0488cf50'
  },
  {
    _title: 'Xnails Петроградка',
    _id: `${1}-xnails`,
    title: 'XNAILS Петроградка',
    address: 'Ул. Зверинская, д. 12Б\n м. Спортивная, г. Санкт-Петербург',
    description:
      'Новая студия находится в Петроградском районе г. Санкт-Петербург, в 5 минутах ходьбы  от станции метро «Спортивная»',
    phone: `+7 ${911} ${924} ${63}-${45}`,
    schedule: 'Пн. — Вс.:10:00 — 22:00',
    map: 'https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/xnails%2Fmap%2F%D0%BF%D0%B5%D1%82%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D0%BA%D0%B0.png?alt=media&token=56070de6-2d9b-4e8a-858d-a467c605066b'
  }
];

export const $PORTFOLIO_URL: TypeReadonlyData<string, 'array'> = [
  'https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/xnails%2Fportfolio%2F5.jfif?alt=media&token=67d9eadc-be96-42d4-9358-d6b339a87a9f',
  'https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/xnails%2Fportfolio%2F2%20foto.png?alt=media&token=2cfe41f9-6c43-41a3-8cad-87ffef60262f',
  'https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/xnails%2Fportfolio%2F7.jfif?alt=media&token=6b8398a6-0614-4283-acf0-e56c2181d89d',
  'https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/xnails%2Fportfolio%2F8.jfif?alt=media&token=6d9d9827-de27-4e90-8209-a8f37d104e4d',
  'https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/xnails%2Fportfolio%2F1.jfif?alt=media&token=75049188-5741-4d97-9e7c-f2e646dcc8cc',
  'https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/xnails%2Fportfolio%2F2.jfif?alt=media&token=0f9cb230-df2d-4a13-994d-e4ed56b7146f',
  'https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/xnails%2Fportfolio%2F3.jfif?alt=media&token=4c1de1e4-4611-4f4c-b2ef-7aee458b556e',
  'https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/xnails%2Fportfolio%2F4.jfif?alt=media&token=6850b9a1-4c9b-4179-9903-d7f348107303'
];
