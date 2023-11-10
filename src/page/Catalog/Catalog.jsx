import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import AdvertsList from 'components/AdvertsList/AdvertsList';
import { make, rentalPrices } from 'components/dataFilter/dataFilter';
import { getAdvertsItem } from 'redux/adverts/advertsSelector';
import { getAdverts } from 'redux/adverts/operations';

const Catalog = () => {
  const [filterMake, setFilterMake] = useState('');
  const [filterPrice, setFilterPrice] = useState('');

  const dispatch = useDispatch();
  const adverts = useSelector(getAdvertsItem); // assuming you have a slice named 'adverts' in your Redux store

  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const makeList = make?.map(elem => ({
    value: elem,
    label: capitalizeFirstLetter(elem) || 'All',
  }));

  const priceList = rentalPrices?.map(elem => ({
    value: elem,
    label: capitalizeFirstLetter(elem) || 'All',
  }));
  const handleFilterButtonClick = () => {
    const savedMake = filterMake;
    const savedPrice = filterPrice;

    localStorage.setItem('savedMake', savedMake);
    localStorage.setItem('savedPrice', savedPrice);
  };

  useEffect(() => {
    const savedMake = localStorage.getItem('savedMake');
    const savedPrice = localStorage.getItem('savedPrice');

    if (savedMake) {
      setFilterMake(savedMake);
    }
    if (savedPrice) {
      setFilterPrice(savedPrice);
    }

    dispatch(getAdverts());
  }, [dispatch]);

  const handleMakeChange = event => {
    setFilterMake(event.value);
  };

  const handlePriceChange = event => {
    setFilterPrice(event.value);
  };

  const filteredAdverts = adverts.filter(advert => {
    let meetsMakeFilter = true;
    let meetsPriceFilter = true;

    if (filterMake) {
      meetsMakeFilter = advert.make === filterMake;
    }

    if (filterPrice) {
      meetsPriceFilter = advert.rentalPrice === filterPrice;
    }

    return meetsMakeFilter && meetsPriceFilter;
  });

  return (
    <>
      <Select
        options={makeList || []}
        onChange={handleMakeChange}
        value={makeList.find(item => item.value === filterMake)}
      />
      <Select
        options={priceList || []}
        onChange={handlePriceChange}
        value={priceList.find(item => item.value === filterPrice)}
      />
      <button onClick={handleFilterButtonClick}>Фільтр</button>

      <AdvertsList adverts={filteredAdverts} />
    </>
  );
};

export default Catalog;
