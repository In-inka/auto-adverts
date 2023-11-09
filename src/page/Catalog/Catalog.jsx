import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAdverts } from 'redux/adverts/operations';
import Select from 'react-select';
import AdvertsList from 'components/AdvertsList/AdvertsList';
import { make } from 'components/dataFilter/dataFilter';

const getLocalStorageValue = key => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

const setLocalStorageValue = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const Catalog = () => {
  const dispatch = useDispatch();
  const [filterMake, setFilterMake] = useState(
    getLocalStorageValue('filterMake') || ''
  );

  const capitalizeFirstLeter = string => {
    const newString = string.slice(0, 1).toUpperCase() + string.slice(1);
    return newString;
  };

  const makeList = make?.map(elem => ({
    value: elem,
    label: capitalizeFirstLeter(elem) || 'All',
  }));

  useEffect(() => {
    setLocalStorageValue('filterMake', filterMake);
    dispatch(getAdverts({ make: filterMake }));
  }, [dispatch, filterMake]);

  const handleMakeChange = event => {
    setFilterMake(event.value);
  };

  return (
    <>
      <Select
        options={makeList || []}
        onChange={handleMakeChange}
        value={makeList.find(item => item.value === make)}
      />
      <AdvertsList />
    </>
  );
};

export default Catalog;
