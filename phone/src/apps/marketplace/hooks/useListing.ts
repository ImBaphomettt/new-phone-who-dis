import { useRecoilValue } from 'recoil';
import { MarketplaceListing } from '../../../../../typings/marketplace';
import { marketplaceState } from './state';

export const useListing = () => {
  return useRecoilValue<MarketplaceListing[]>(marketplaceState.listing);
};
