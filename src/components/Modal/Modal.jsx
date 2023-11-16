import React, { useEffect } from 'react';
import {
  Backdrop,
  ButtonCancel,
  ButtonClose,
  Conditions,
  ContainerConditions,
  Details,
  ModalContainer,
  Model,
  Picture,
  Title,
} from './Modal.styled';
import sprite from '../icons/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoriteIds } from 'redux/adverts/advertsSelector';
import {
  addToFavorites,
  removeFromFavorites,
} from 'redux/adverts/adverts-slice';
import { splitAddress } from 'components/helpers/helpers';

const Modal = ({ isOpen, onClose, selectedAdvert }) => {
  const favoriteAdverts = useSelector(selectFavoriteIds);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  const handleBackdropClick = event => {
    if (event.target.classList.contains('modal-backdrop')) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const highlightNumbers = text => {
    return text.replace(
      /\b\d+\b/g,
      '<span style="color: #3470FF; font-weight: 600 ">$&</span>'
    );
  };
  const {
    address,
    id,
    img,
    make,
    model,
    year,
    type,
    fuelConsumption,
    engineSize,
    description,
    functionalities,
    rentalConditions,
    mileage,
    rentalPrice,
    photoLink,
  } = selectedAdvert;

  const { city, country } = splitAddress(address);

  const handleToggleFavorite = advertId => {
    if (favoriteAdverts.includes(advertId)) {
      dispatch(removeFromFavorites(advertId));
    } else {
      dispatch(addToFavorites(advertId));
    }
  };

  const isAdvertInFavorites = favoriteAdverts.includes(id);

  return (
    <>
      <Backdrop onClick={handleBackdropClick} className="modal-backdrop">
        <ModalContainer>
          <ButtonClose onClick={onClose}>
            <use href={sprite + '#icon-x'}></use>
          </ButtonClose>
          <div>
            <Picture src={img || photoLink} alt={model} />
            <div>
              <Title>
                {' '}
                <p>{make} </p>
                <Model>{model}, </Model>
                <p>{year}</p>
              </Title>
            </div>
            <Details>
              {city}| {country}| id: {id}| Year: {year}| Type:{type}|
              Consumption: {fuelConsumption}| Engine Size: {engineSize}
            </Details>
            <p style={{ marginBottom: '24px' }}>{description}</p>
            <p style={{ marginBottom: '8px' }}>
              Accessories and functionalities:
            </p>
            <Details>{functionalities.join('| ')}</Details>
            <p>Rental Conditions:</p>
            <ContainerConditions>
              {rentalConditions.split('\n').map((condition, index) => (
                <Conditions
                  key={index}
                  dangerouslySetInnerHTML={{
                    __html: highlightNumbers(condition),
                  }}
                ></Conditions>
              ))}
              <Conditions>
                Mileage:{' '}
                <span style={{ color: '#3470FF', fontWeight: '600' }}>
                  {mileage.toLocaleString('en-US', { style: 'decimal' })}
                </span>
              </Conditions>
              <Conditions>
                Price:{' '}
                <span style={{ color: '#3470FF', fontWeight: '600' }}>
                  {rentalPrice}
                </span>
              </Conditions>
            </ContainerConditions>
          </div>

          <ButtonCancel
            type="button"
            onClick={() => handleToggleFavorite(id)}
            disabled={isAdvertInFavorites}
          >
            Rental car
          </ButtonCancel>
        </ModalContainer>
      </Backdrop>
    </>
  );
};

export default Modal;
