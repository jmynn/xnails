export type TypeLink = {
  href: `/${string}`;
  label: string;
};

export type TypeNavbarLinks = Record<'desktop' | 'mobile', TypeLink[]>;
export type TypeFooterLinks = Record<'desktop' | 'mobile', TypeLink[]>;

export type TypePromoCard = {
  src: `https://${string}`;
  title: string;
  text?: string;
  link: `/${string}`;
  style: {
    width: string;
    height: string;
    objectFit: 'cover';
  };
  className?: string;
};

export type TypePriceItem = {
  title: string | JSX.Element;
  cost: `${number} ₽` | `${number}-${number} ₽`;
};

export type TypePriceImages = Record<'ellipse' | 'half', string>;

export type TypePriceSection = {
  title: string;
  items: TypePriceItem[];
  id: string;
  images: TypePriceImages;
};

export type TypePrice = {
  [key: string]: TypePriceSection;
};

export type TypeReview = {
  author: string;
  review: string;
  date: `${number} ${string}`;
};

export type TypeStudioInfo = {
  _title: string;
  _id: `${number}-xnails`;
  description: string;
  phone: `+7 ${number} ${number} ${number}-${number}`;
  title: string;
  address: string;
  schedule: 'Пн. — Вс.:10:00 — 22:00';
  map: `https://${string}`;
};

export type TypeReadonlyData<
  T,
  R extends 'array' | 'object'
> = R extends 'array' ? readonly Readonly<T>[] : Readonly<T>;
