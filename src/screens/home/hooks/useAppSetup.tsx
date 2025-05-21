import {queryKeys} from '@src/network/constants';
import {apiConfiguration} from '@src/network/networkManager';
import {useQuery} from '@tanstack/react-query';

const useAppSetup = () => {
  const {data: configData, isLoading: isLoadingConfig} = useQuery({
    queryKey: [queryKeys.configuration],
    queryFn: apiConfiguration,
  });

  if (configData) {
  }
  return {};
};
