import { AlertNotificationRoot } from "react-native-alert-notification";
import store from "./redux/store";
import { Provider } from "react-redux";
import { NativeBaseProvider } from "native-base";
import ApplicationNavigator from "./navigation";

export default function App() {
  return (
    <Provider store={store}>
      <AlertNotificationRoot>
        <NativeBaseProvider>
          <ApplicationNavigator />
        </NativeBaseProvider>
      </AlertNotificationRoot>
    </Provider>
  );
}
