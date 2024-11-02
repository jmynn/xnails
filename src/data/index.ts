import { TypeNavbarLinks } from '@/types';

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
export const $PATH_PRIVACY_POLICY = '/'

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
    },
  ]
} satisfies TypeNavbarLinks;
