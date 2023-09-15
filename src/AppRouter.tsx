import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import AboutUs from './pages/AboutUs';
import AdminHome from './pages/admin/Home';
import ListCategory from './pages/admin/categories/ListCategory';
import ListNews from './pages/admin/news/ListNews';
import ListProducts from './pages/admin/products/ListProducts';
import ListUsers from './pages/admin/users/ListUsers';
import AddUser from './pages/admin/users/AddUser';
import EditUser from './pages/admin/users/EditUser';
import AdminLayout from './components/Layout/AdminLayout';
import EditProduct from './pages/admin/products/EditProduct';
import AddProduct from './pages/admin/products/AddProduct';
import AddNews from './pages/admin/news/AddNews';
import EditNews from './pages/admin/news/EditNews';
import AddCategory from './pages/admin/categories/AddCategory';
import EditCategory from './pages/admin/categories/EditCategory';

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
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
