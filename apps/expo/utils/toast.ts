import { IToast } from 'app/types/common.types';
import Toast from 'react-native-toast-message';

export const showToast = (payload: IToast) => {
  Toast.show({
    type: payload.type,
    position: 'bottom',
    text1: payload.title,
    text2: payload.message,
  });
};
