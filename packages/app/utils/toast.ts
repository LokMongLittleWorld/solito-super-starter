import { IToast, platform } from 'app/types/common.types';
import { getCurrentPlatform } from './common';

let showToast: (payload: IToast) => void;

const currentPlatform = getCurrentPlatform();

if (currentPlatform === platform.WEB) {
  showToast = require('../../../apps/next/utils/toast').showToast;
} else if (currentPlatform === platform.NATIVE) {
  const path = '../../../apps/expo/utils/toast';
  showToast = require(path).showToast;
} else {
  throw new Error('Unsupported platform');
}

export { showToast };
