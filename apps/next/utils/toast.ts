import { IToast } from 'app/types/common.types';
import toast from 'react-hot-toast';
import { NOTIFICATION_TYPE } from 'app/types/common.types';

export const showToast = (payload: IToast) => {
  switch (payload.type) {
    case NOTIFICATION_TYPE.SUCCESS:
      toast.success(payload.message);
      break;
    case NOTIFICATION_TYPE.ERROR:
      toast.error(payload.message);
      break;
    case NOTIFICATION_TYPE.INFO:
      toast(payload.message);
      break;
    default:
      toast(payload.message);
  }
};
