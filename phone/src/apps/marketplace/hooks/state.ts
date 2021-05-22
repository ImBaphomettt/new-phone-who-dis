import { atom } from 'recoil';

export const marketplaceState = {
  listing: atom({
    key: 'listing',
    default: [],
  }),
};
