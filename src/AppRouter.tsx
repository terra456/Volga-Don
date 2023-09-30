import { Routes, Route, BrowserRouter, useParams } from 'react-router-dom';
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
import LoginForm from './pages/auth/LoginForm';
import RegisterForm from './pages/auth/RegisterForm';
import UpdateUsernameForm from './pages/user/UpdateUsernameForm';
import ChangePasswordForm from './pages/user/ChangePasswordForm';

const AppRouter = () => {
  const { user } = useAuth();
  const baseUrl = 'http://cv08121-django-53po4.tw1.ru/';

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
            // loader={async ({ params }) => {
            //   console.log(params);
            //   return fetch(`${baseUrl}article/${params.teamId}`, { mode: 'cors' });
            // }}
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
