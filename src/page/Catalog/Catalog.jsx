import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdvertsList from 'components/AdvertsList/AdvertsList';
import { make, rentalPrices } from 'components/dataFilter/dataFilter';
import { getAdvertsItem } from 'redux/adverts/advertsSelector';
import { getAdverts } from 'redux/adverts/operations';
import { ContainerStyled } from 'GlodalStyle.styled';
import { nanoid } from 'nanoid';
import {
  Button,
  Form,
  InputFrom,
  InputTo,
  Item,
  ItemMileage,
  Label,
  Option,
  Select,
} from './Catalog.styled';

const Catalog = () => {
  const [filterMake, setFilterMake] = useState('');
  const [filterPrice, setFilterPrice] = useState('');
  const [filterMileageTo, setFilterMileageTo] = useState('');
  const [filterMileageFrom, setFilterMileageFrom] = useState('');

  const dispatch = useDispatch();
  const adverts = useSelector(getAdvertsItem);

  const handleFilterButtonClick = () => {
    const savedMake = filterMake;
    const savedPrice = filterPrice;
    const savedMileageFrom = filterMileageFrom;
    const savedMileageTo = filterMileageTo;

    localStorage.setItem('savedMake', savedMake);
    localStorage.setItem('savedPrice', savedPrice);
    localStorage.setItem('savedMileageFrom', savedMileageFrom);
    localStorage.setItem('savedMileageTo', savedMileageTo);
  };

  const handleFilterSubmit = event => {
    event.preventDefault();
    handleFilterButtonClick();
  };

  useEffect(() => {
    const savedMake = localStorage.getItem('savedMake');
    const savedPrice = localStorage.getItem('savedPrice');
    const savedMileageFrom = localStorage.getItem('savedMileageFrom');
    const savedMileageTo = localStorage.getItem('savedMileageTo');

    if (savedMake) {
      setFilterMake(savedMake);
    }
    if (savedPrice) {
      setFilterPrice(savedPrice);
    }
    if (savedMileageFrom) {
      setFilterMileageFrom(savedMileageFrom);
    }
    if (savedMileageTo) {
      setFilterMileageTo(savedMileageTo);
    }

    dispatch(getAdverts());
  }, [dispatch]);

  const handleMakeChange = event => {
    const selectedMake = event.target.value;
    setFilterMake(selectedMake === 'All' ? '' : selectedMake);
  };

  const handlePriceChange = event => {
    const selectedPrice = event.target.value;
    setFilterPrice(selectedPrice === 'All' ? '' : selectedPrice);
  };

  const handleMileageFromChange = event => {
    const input = event.target.value;
    if (/^\d*$/.test(input)) {
      setFilterMileageFrom(input === '' ? '' : parseInt(input, 10));
    }
  };

  const handleMileageToChange = event => {
    const input = event.target.value;
    if (/^\d*$/.test(input)) {
      setFilterMileageTo(input === '' ? '' : parseInt(input, 10));
    }
  };

  const filteredAdverts = adverts.filter(advert => {
    let meetsMakeFilter = true;
    let meetsPriceFilter = true;
    let meetsMileageFrom = true;
    let meetsMileageTo = true;

    if (filterMake) {
      meetsMakeFilter = advert.make === filterMake;
    }

    if (filterPrice) {
      meetsPriceFilter = advert.rentalPrice === filterPrice;
    }

    if (filterMileageFrom) {
      meetsMileageFrom = advert.mileage >= parseInt(filterMileageFrom, 10);
    }

    if (filterMileageTo) {
      meetsMileageTo = advert.mileage <= parseInt(filterMileageTo, 10);
    }

    return (
      meetsMakeFilter && meetsPriceFilter && meetsMileageFrom && meetsMileageTo
    );
  });

  return (
    <ContainerStyled>
      <Form onSubmit={handleFilterSubmit}>
        <Item>
          <Label htmlFor="brand">Car brand</Label>
          <Select
            name="car"
            id="brand"
            onChange={handleMakeChange}
            value={filterMake || 'All'}
          >
            <Option value="All">All</Option>
            {make.map(mak => (
              <Option key={nanoid()} value={mak}>
                {mak}
              </Option>
            ))}
          </Select>
        </Item>

        <Item>
          <Label htmlFor="price">Price</Label>
          <Select
            type="text"
            name="price"
            id="price"
            onChange={handlePriceChange}
            value={filterPrice || 'All'}
          >
            <Option value="All">All</Option>
            {rentalPrices.map(price => (
              <Option key={nanoid()} value={price}>
                {price}
              </Option>
            ))}
          </Select>
        </Item>

        <Item>
          <Label htmlFor="mileageFrom">Сar mileage / km </Label>
          <ItemMileage>
            <InputFrom
              type="text"
              name="mileageFrom"
              id="mileageFrom"
              placeholder="From"
              onChange={handleMileageFromChange}
              value={filterMileageFrom || ''}
            ></InputFrom>
            <InputTo
              type="text"
              name="mileageTo"
              id="mileageTo"
              placeholder="To"
              onChange={handleMileageToChange}
              value={filterMileageTo || ''}
            ></InputTo>
          </ItemMileage>
        </Item>

        <Button type="submit" value="Search" />
      </Form>

      <AdvertsList adverts={filteredAdverts} />
    </ContainerStyled>
  );
};

export default Catalog;
