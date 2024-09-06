import { TextInput as ReactNativeTextInput, TextInputProps } from 'react-native';
import { styled } from 'nativewind';

export const TextInput = styled<TextInputProps>(
  ({ placeholder, ...props }) => (
    <ReactNativeTextInput placeholder={placeholder} placeholderTextColor="gray" {...props} />
  ),
  'text-[16px] p-3 border border-gray-300 rounded-md'
);
