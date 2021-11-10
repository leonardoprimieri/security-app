import Routes from './routes';
import GlobalStyle from './assets/styles/GlobalStyle';
import { ToastProvider } from 'react-toast-notifications';

function App() {
  return (
    <ToastProvider autoDismiss autoDismissTimeout={4000} placement="top-right">
      <Routes />
      <GlobalStyle />
    </ToastProvider>
  );
}

export default App;
