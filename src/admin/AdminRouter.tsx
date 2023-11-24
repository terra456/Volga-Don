import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import AdminLayout from './components/Layout';
import ListCategory from './pages/categories/ListCategory';
import ListNews from './pages/news/ListNews';
import ListProducts from './pages/products/ListProducts';
import ListUsers from './pages/users/ListUsers';
import AddUser from './pages/users/AddUser';
import EditUser from './pages/users/EditUser';
import EditProduct from './pages/products/EditProduct';
import AddProduct from './pages/products/AddProduct';
import AddNews from './pages/news/AddNews';
import EditNews from './pages/news/EditNews';
import AdminHome from './pages/AdminHome';
import { useAuth } from '../hooks/useAuth';
import ProtectedRoute from './components/ProtectedRoute';
import LoginForm from '../pages/auth/LoginForm';
import RegisterForm from '../pages/auth/RegisterForm';
import UpdateUsernameForm from '../pages/user/UpdateUsernameForm';
import ChangePasswordForm from '../pages/user/ChangePasswordForm';

const AdminRouter = () => {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Route> */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
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

export default AdminRouter;
