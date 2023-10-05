import { Provider } from 'react-redux';
import { store } from '../store/store';
import AdminRouter from './AdminRouter';

function App() {
  return (
    <>
      <Provider store={store}>
        <AdminRouter />
      </Provider>
    </>
  );
}

export default App;
