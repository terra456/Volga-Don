import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import AboutUs from './pages/AboutUs';
import AdminLayout from './admin/Components/Layout';
import AdminHome from './admin/pages/AdminHome';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route
            path="auth"
            element={
              <ProtectedRoute passCondition={!isAuthrorized} route="/graphiql">
                <Login />
              </ProtectedRoute>
            }
          /> */}
          <Route path="catalog" element={<Catalog />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
