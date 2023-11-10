import { Routes, Route } from 'react-router-dom';

import Catalog from '../page/Catalog/Catalog';
import Favorites from '../page/Favorites/Favorites';
import Home from '../page/Home/Home';
import Layout from './Layout/Layout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAdverts } from 'redux/adverts/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdverts());
  }, [dispatch]);
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
