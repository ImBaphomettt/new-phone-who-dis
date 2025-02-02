import { atom } from 'recoil';
import { ResourceConfig } from '../../../../../typings/config';

export const phoneState = {
  visibility: atom<boolean>({
    key: 'phoneVisibility',
    default: false,
  }),
  resourceConfig: atom<ResourceConfig>({
    key: 'resourceConfig',
    default: null,
  }),
  /*phoneReady: atom<boolean>({
    key: 'phoneReady',
    default: false,
  }),*/
  phoneTime: atom<string>({
    key: 'phoneTime',
    default: null,
  }),
};
