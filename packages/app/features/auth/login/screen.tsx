import LoginForm from 'app/components/auth/LoginForm';
import { H1, P } from 'app/design/typography';
import { View } from 'app/design/common';

const LoginScreen = () => {
  return (
    <View className="flex-1 items-center justify-center p-3 gap-4 -translate-y-20">
      <H1>Solito Super Starter</H1>
      <P className="text-center w-full max-w-[650px] px-4 mb-4">
        This is a feature-packed template for quickly launching Solito projects. It offers an
        easy-to-scale foundation, perfect for both small apps and larger, complex projects.
      </P>
      <LoginForm />
    </View>
  );
};

export default LoginScreen;
