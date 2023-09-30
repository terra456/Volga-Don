import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import AboutUs from './pages/AboutUs';
import AdminLayout from './components/admin/Layout';
import ListCategory from './pages/admin/categories/ListCategory';
import ListNews from './pages/admin/news/ListNews';
import ListProducts from './pages/admin/products/ListProducts';
import ListUsers from './pages/admin/users/ListUsers';
import AddUser from './pages/admin/users/AddUser';
import EditUser from './pages/admin/users/EditUser';
import EditProduct from './pages/admin/products/EditProduct';
import AddProduct from './pages/admin/products/AddProduct';
import AddNews from './pages/admin/news/AddNews';
import EditNews from './pages/admin/news/EditNews';
import AdminHome from './pages/admin/AdminHome';
import { useAuth } from './hooks/useAuth';
import ProtectedRoute from './components/ProtectedRoute';
import LoginForm from './pages/auth/LoginForm';
import RegisterForm from './pages/auth/RegisterForm';
import UpdateUsernameForm from './pages/user/UpdateUsernameForm';
import ChangePasswordForm from './pages/user/ChangePasswordForm';

const AppRouter = () => {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route
            index
            element={
              <ProtectedRoute user={user.userInfo.username}>
                <AdminHome />
              </ProtectedRoute>
            }
          />
          <Route
            path="user/update-name"
            element={
              <ProtectedRoute user={user.userInfo.username}>
                <UpdateUsernameForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="user/edit"
            element={
              <ProtectedRoute user={user.userInfo.username}>
                <EditUser />
              </ProtectedRoute>
            }
          />
          <Route
            path="user/change-password"
            element={
              <ProtectedRoute user={user.userInfo.username}>
                <ChangePasswordForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="categories"
            element={
              <ProtectedRoute user={user.userInfo.username}>
                <ListCategory />
              </ProtectedRoute>
            }
          />
          <Route
            path="news"
            element={
              <ProtectedRoute user={user.userInfo.username}>
                <ListNews />
              </ProtectedRoute>
            }
          />
          <Route
            path="news/add"
            element={
              <ProtectedRoute user={user.userInfo.username}>
                <AddNews />
              </ProtectedRoute>
            }
          />
          <Route
            path="news/:newsId/edit"
            element={
              <ProtectedRoute user={user.userInfo.username}>
                <EditNews />
              </ProtectedRoute>
            }
          />
          <Route
            path="products"
            element={
              <ProtectedRoute user={user.userInfo.username}>
                <ListProducts />
              </ProtectedRoute>
            }
          />
          <Route
            path="products/add"
            element={
              <ProtectedRoute user={user.userInfo.username}>
                <AddProduct />
              </ProtectedRoute>
            }
          />
          <Route
            path="products/:productId/edit"
            element={
              <ProtectedRoute user={user.userInfo.username}>
                <EditProduct />
              </ProtectedRoute>
            }
          />
          <Route
            path="users"
            element={
              <ProtectedRoute user={user.userInfo.username}>
                <ListUsers />
              </ProtectedRoute>
            }
          />
          <Route
            path="users/add"
            element={
              <ProtectedRoute user={user.userInfo.username}>
                <AddUser />
              </ProtectedRoute>
            }
          />
          <Route
            path="users/:userId/edit"
            element={
              <ProtectedRoute user={user.userInfo.username}>
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
