export type TypeNavLink = {
  href: `/${string}`;
  label: string;
};

export type TypeNavbarLinks = Record<'desktop' | 'mobile', TypeNavLink[]>
