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
};
