import {useAppSelector} from '@core/config/store/hooks';
import {selectedHourlyConditionStore} from '@core/config/store/slice/selectHourlySlice';

const ConditionCardVM = () => {
  const selectedCondition = useAppSelector(selectedHourlyConditionStore);
  return {
    selectedCondition,
  };
};

export default ConditionCardVM;
