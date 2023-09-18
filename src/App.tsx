import AppRouter from './AppRouter';
import getApi from './services/getApi';
import { ApiProvider } from '@reduxjs/toolkit/query/react';

function App() {
  return (
    <>
      <ApiProvider api={getApi}>
        <AppRouter />
      </ApiProvider>
    </>
  );
}

export default App;
