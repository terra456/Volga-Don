import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import AboutUs from './pages/AboutUs';
import AdminLayout from './admin/Components/Layout';
import LoginPage from './pages/LoginPage';
// import AdminHome from './admin/pages/Home';
import ListCategory from './admin/pages/categories/ListCategory';
import ListNews from './admin/pages/news/ListNews';
import ListProducts from './admin/pages/products/ListProducts';
import ListUsers from './admin/pages/users/ListUsers';
import AddUser from './admin/pages/users/AddUser';
import EditUser from './admin/pages/users/EditUser';
// import AdminLayout from './Components/Layout';
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
          <Route path="categories" element={<ListCategory />} />
          <Route path="categories/add" element={<AddCategory />} />
          <Route path="categories/edit/:categorieId" element={<EditCategory />} />
          <Route path="news" element={<ListNews />} />
          <Route path="news/add" element={<AddNews />} />
          <Route path="news/edit/:newsId" element={<EditNews />} />
          <Route path="products" element={<ListProducts />} />
          <Route path="products/add" element={<AddProduct />} />
          <Route path="products/edit/:productId" element={<EditProduct />} />
          <Route path="users" element={<ListUsers />} />
          <Route path="users/add" element={<AddUser />} />
          <Route path="users/edit/:userId" element={<EditUser />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
