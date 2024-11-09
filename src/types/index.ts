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
