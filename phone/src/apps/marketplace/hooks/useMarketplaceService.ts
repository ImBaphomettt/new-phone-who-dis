import { useNuiEvent } from 'fivem-nui-react-lib';
import { marketplaceState } from './state';
import { useListing } from './useListing';
import { useSetRecoilState } from 'recoil';
import { IAlert, useSnackbar } from '../../../ui/hooks/useSnackbar';
import { useTranslation } from 'react-i18next';
import { MarketplaceEvents } from '../../../../../typings/marketplace';

export const useMarketplaceService = () => {
  const setMarketplace = useSetRecoilState(marketplaceState.listing);
  const { addAlert } = useSnackbar();
  const { t } = useTranslation();

  const handleAddAlert = ({ message, type }: IAlert) => {
    addAlert({
      message: t(`APPS_${message}`),
      type,
    });
  };

  useNuiEvent('MARKETPLACE', MarketplaceEvents.SEND_ALERT, handleAddAlert);
  useNuiEvent('MARKETPLACE', MarketplaceEvents.SEND_LISTING, setMarketplace);
  return useListing();
};
