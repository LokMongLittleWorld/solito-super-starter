import { NativeNavigation } from 'app/navigation/native';
import { Provider } from 'app/provider';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <Provider>
      <NativeNavigation />
      <Toast />
    </Provider>
  );
}
