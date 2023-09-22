import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import AboutUs from './pages/AboutUs';
import AdminLayout from './admin/Components/Layout';
import LoginPage from './pages/LoginPage';
import ListCategory from './admin/pages/categories/ListCategory';
import ListNews from './admin/pages/news/ListNews';
import ListProducts from './admin/pages/products/ListProducts';
import ListUsers from './admin/pages/users/ListUsers';
import AddUser from './admin/pages/users/AddUser';
import EditUser from './admin/pages/users/EditUser';
import EditProduct from './admin/pages/products/EditProduct';
import AddProduct from './admin/pages/products/AddProduct';
import AddNews from './admin/pages/news/AddNews';
import EditNews from './admin/pages/news/EditNews';
import AddCategory from './admin/pages/categories/AddCategory';
import EditCategory from './admin/pages/categories/EditCategory';
import AdminHome from './admin/pages/AdminHome';
import { useAuth } from './hooks/useAuth';
import ProtectedRoute from './components/ProtectedRoute';

const AppRouter = () => {
  const auth = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route
            index
            element={
              <ProtectedRoute user={auth.user}>
                <AdminHome />
              </ProtectedRoute>
            }
          />
          <Route
            path="categories"
            element={
              <ProtectedRoute user={auth.user}>
                <ListCategory />
              </ProtectedRoute>
            }
          />
          <Route
            path="categories/add"
            element={
              <ProtectedRoute user={auth.user}>
                <AddCategory />
              </ProtectedRoute>
            }
          />
          <Route
            path="categories/:categorieId/edit"
            element={
              <ProtectedRoute user={auth.user}>
                <EditCategory />
              </ProtectedRoute>
            }
          />
          <Route
            path="news"
            element={
              <ProtectedRoute user={auth.user}>
                <ListNews />
              </ProtectedRoute>
            }
          />
          <Route
            path="news/add"
            element={
              <ProtectedRoute user={auth.user}>
                <AddNews />
              </ProtectedRoute>
            }
          />
          <Route
            path="news/:newsId/edit"
            element={
              <ProtectedRoute user={auth.user}>
                <EditNews />
              </ProtectedRoute>
            }
          />
          <Route
            path="products"
            element={
              <ProtectedRoute user={auth.user}>
                <ListProducts />
              </ProtectedRoute>
            }
          />
          <Route
            path="products/add"
            element={
              <ProtectedRoute user={auth.user}>
                <AddProduct />
              </ProtectedRoute>
            }
          />
          <Route
            path="products/:productId/edit"
            element={
              <ProtectedRoute user={auth.user}>
                <EditProduct />
              </ProtectedRoute>
            }
          />
          <Route
            path="users"
            element={
              <ProtectedRoute user={auth.user}>
                <ListUsers />
              </ProtectedRoute>
            }
          />
          <Route
            path="users/add"
            element={
              <ProtectedRoute user={auth.user}>
                <AddUser />
              </ProtectedRoute>
            }
          />
          <Route
            path="users/:userId/edit"
            element={
              <ProtectedRoute user={auth.user}>
                <EditUser />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
