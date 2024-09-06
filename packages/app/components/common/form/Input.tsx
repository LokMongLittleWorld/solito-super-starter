import { TextInput } from 'app/design/form';
import { View } from 'app/design/common';
import React from 'react';
import { Controller } from 'react-hook-form';
import { Text } from 'app/design/typography';

interface IIput {
  name: string;
  label: string;
  placeholder: string;
  control: any;
  error: string | undefined;
  secureTextEntry?: boolean;
}

const Input = ({ name, label, placeholder, control, error, secureTextEntry }: IIput) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <View className="w-full mb-4">
          <View className="flex flex-row items-center gap-2 mb-2">
            <Text>{label}</Text>
            {error && <Text className="text-red-400 font-semibold text-[14px]">{error}</Text>}
          </View>
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
          />
        </View>
      )}
    />
  );
};

export default Input;
