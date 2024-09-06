import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import Cookies from 'js-cookie';
import { platform, StorageKey } from 'app/types/common.types';

export const getCurrentPlatform = (): platform => {
  return Platform.OS === 'web' ? platform.WEB : platform.NATIVE;
};

export const setStorageVariable = async (key: StorageKey, value: string) => {
  const currentPlatform = getCurrentPlatform();
  if (currentPlatform === platform.WEB) {
    Cookies.set(key, value, { expires: 7 }); // Cookies expire in 7 days
  } else if (currentPlatform === platform.NATIVE) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.error('Failed to store variable:', error);
    }
  }
};

export const getStorageVariable = async (key: string): Promise<string | null> => {
  const currentPlatform = getCurrentPlatform();
  if (currentPlatform === platform.WEB) {
    return Cookies.get(key) || null;
  } else if (currentPlatform === platform.NATIVE) {
    try {
      return await AsyncStorage.getItem(key);
    } catch (error) {
      console.error('Failed to retrieve variable:', error);
      return null;
    }
  }
  return null;
};

export const convertSecondsToHMS = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  return `${String(hours).padStart(1, '0')}:${String(minutes).padStart(2, '0')}:${String(
    secs
  ).padStart(2, '0')}`;
};
