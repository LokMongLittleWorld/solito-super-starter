import store from 'app/redux/store';
import { Dripsy } from './dripsy';
import { NavigationProvider } from './navigation';
import { Provider as ReduxProvider } from 'react-redux';
import { AuthProvider } from './auth';

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider store={store}>
      <NavigationProvider>
        <AuthProvider>
          <Dripsy>{children}</Dripsy>
        </AuthProvider>
      </NavigationProvider>
    </ReduxProvider>
  );
}
