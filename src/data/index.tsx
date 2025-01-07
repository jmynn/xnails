import {
  TypeNavLinks,
  TypePromoCard,
  TypeReadonlyData,
  TypeReview
} from '@/types';

const $BASEPATH = '';

export const $NAVBAR_LINKS: TypeReadonlyData<TypeNavLinks, 'array'> = [
  {
    link: {
      href: '/',
      label: 'О нас'
    }
  },
  {
    link: {
      href: '/',
      label: 'портфолио'
    },
    desktop: {
      isDesktop: false
    }
  },
  {
    link: {
      href: '/',
      label: 'отзывы'
    }
  },
  {
    link: {
      href: '/',
      label: 'акции'
    },
    desktop: {
      isDesktop: false
    }
  },
  {
    link: {
      href: '/',
      label: 'прайс'
    }
  },
  {
    link: {
      href: '/',
      label: 'наши студии'
    },
    desktop: {
      desktopLabel: 'студии',
      isDesktop: true
    }
  },
  {
    link: {
      href: '/',
      label: 'блог'
    }
  }
];

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

export const $FOOTER_LINKS: TypeReadonlyData<TypeNavLinks, 'array'> = [
  {
    link: {
      href: '/',
      label: 'О нас'
    }
  },
  {
    link: {
      href: '/',
      label: 'портфолио'
    }
  },
  {
    link: {
      href: '/',
      label: 'отзывы'
    }
  },
  {
    link: {
      href: '/',
      label: 'акции'
    }
  },
  {
    link: {
      href: '/',
      label: 'прайс'
    }
  },
  {
    link: {
      href: '/',
      label: 'блог'
    }
  },
  {
    link: {
      href: '/',
      label: 'студии'
    },
    desktop: {
      isDesktop: true
    }
  }
];

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

//₽
