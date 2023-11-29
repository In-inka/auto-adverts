import { Routes, Route } from 'react-router-dom';

import Catalog from '../page/Catalog/Catalog';
import Favorites from '../page/Favorites/Favorites';
import Home from '../page/Home/Home';
import Layout from './Layout/Layout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </div>
  );
};
