import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '../common/form/Input';
import { Text } from 'app/design/typography';
import { Button, View } from 'app/design/common';
import { ILoginParams } from 'app/types/auth.types';
import { useAuth } from 'app/provider/auth';
import { useRouter } from 'solito/router';

const schema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'It must be at least 6 characters'),
});

type FormData = z.infer<typeof schema>;

const LoginForm = () => {
  const { login } = useAuth();
  const { replace } = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
  });

  const onSubmit = async (data: FormData) => {
    const response: any = await login(data as ILoginParams);
    if (response?.meta?.requestStatus === 'fulfilled') {
      replace('/');
    }
  };

  return (
    <View className="flex flex-col w-full justify-center items-center max-w-[350px]">
      <Input
        name="email"
        label="Email"
        placeholder="Email"
        control={control}
        error={errors.email?.message}
      />

      <Input
        name="password"
        label="Passowrd"
        placeholder="enter your password"
        control={control}
        error={errors.password?.message}
        secureTextEntry
      />

      <Button className="mt-4" onPress={handleSubmit(onSubmit)}>
        <Text className="text-white font-[18px]">Login</Text>
      </Button>
    </View>
  );
};

export default LoginForm;
