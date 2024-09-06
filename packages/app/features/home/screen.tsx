import { useAuth } from 'app/provider/auth';
import { H1, P, Text } from 'app/design/typography';
import { Button, View } from 'app/design/common';
import TokenExpirationTimer from 'app/components/common/TokenExpirationTimer';
import { showToast } from 'app/utils/toast';
import { NOTIFICATION_TYPE } from 'app/types/common.types';
import { useRouter } from 'solito/router';
import { IUser } from 'app/types/user.types';
export function HomeScreen() {
  const { isAuthenticated, profile, logout } = useAuth();
  const { replace } = useRouter();

  const handleOnPress = () => {
    showToast({ type: NOTIFICATION_TYPE.INFO, message: 'this is a toast' });
  };

  if (!isAuthenticated) {
    return (
      <View className="flex-1 items-center justify-center p-3 gap-2 -translate-y-20">
        <H1>Ops...</H1>
        <P> {`It looks like you haven't loggin in yet.`}</P>
        <View className="flex flex-col gap-y-4 mt-4 w-full max-w-[250px]">
          <Button onPress={() => replace('/auth/login')}>
            <Text className="text-white font-[18px]"> Login Now</Text>
          </Button>
        </View>
      </View>
    );
  }

  const handleLogout = async () => {
    logout();
  };

  const userProfile = profile as IUser;

  return (
    <View className="flex-1 items-center justify-center p-3 -translate-y-20">
      <H1>Welcome Back, {userProfile?.firstName}!</H1>
      <TokenExpirationTimer />
      <View className="flex flex-col gap-y-4 mt-4 w-full max-w-[250px]">
        <Button onPress={handleOnPress}>
          <Text className="text-white font-[18px]">Make a toast</Text>
        </Button>
        <Button onPress={handleLogout}>
          <Text className="text-white font-[18px]">Logout</Text>
        </Button>
      </View>
    </View>
  );
}
