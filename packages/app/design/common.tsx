import { View as ReactNativeView, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';

export const View = styled(ReactNativeView);

export const Button = styled(
  TouchableOpacity,
  'w-full p-3 bg-blue-500 rounded-md items-center justify-center'
);
