import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import ListCategory from './pages/categories/ListCategory';
import ListNews from './pages/news/ListNews';
import ListProducts from './pages/products/ListProducts';
import ListUsers from './pages/users/ListUsers';
import AddUser from './pages/users/AddUser';
import EditUser from './pages/users/EditUser';
import AdminLayout from './Components/Layout';
import EditProduct from './pages/products/EditProduct';
import AddProduct from './pages/products/AddProduct';
import AddNews from './pages/news/AddNews';
import EditNews from './pages/news/EditNews';
import AddCategory from './pages/categories/AddCategory';
import EditCategory from './pages/categories/EditCategory';
import Layout from '../components/Layout/Layout';
import AdminHome from './pages/AdminHome';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
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
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
