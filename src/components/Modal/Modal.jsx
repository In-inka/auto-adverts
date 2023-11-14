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

  const addressParts = selectedAdvert.address.split(',');

  // Отримати окремі теги
  const city = addressParts[1]?.trim(); // Отримати місто, якщо воно існує
  const country = addressParts[2]?.trim();

  const handleToggleFavorite = advertId => {
    if (favoriteAdverts.includes(advertId)) {
      dispatch(removeFromFavorites(advertId));
    } else {
      dispatch(addToFavorites(advertId));
    }
  };

  const isAdvertInFavorites = favoriteAdverts.includes(selectedAdvert.id);

  return (
    <>
      <Backdrop onClick={handleBackdropClick} className="modal-backdrop">
        <ModalContainer>
          <ButtonClose onClick={onClose}>
            <use href={sprite + '#icon-x'}></use>
          </ButtonClose>
          <div>
            <Picture
              src={selectedAdvert.img || selectedAdvert.photoLink}
              alt={selectedAdvert.model}
            />
            <div>
              <Title>
                {' '}
                <p>{selectedAdvert.make} </p>
                <Model>{selectedAdvert.model}, </Model>
                <p>{selectedAdvert.year}</p>
              </Title>
            </div>
            <Details>
              {city}| {country}| id: {selectedAdvert.id}| Year:
              {selectedAdvert.year}| Type:{selectedAdvert.type}| Consumption:{' '}
              {selectedAdvert.fuelConsumption}| Engine Size:{' '}
              {selectedAdvert.engineSize}
            </Details>
            <p style={{ marginBottom: '24px' }}>{selectedAdvert.description}</p>
            <p style={{ marginBottom: '8px' }}>
              Accessories and functionalities:
            </p>
            <Details>{selectedAdvert.functionalities.join('| ')}</Details>
            <p>Rental Conditions:</p>
            <ContainerConditions>
              {selectedAdvert.rentalConditions
                .split('\n')
                .map((condition, index) => (
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
                  {selectedAdvert.mileage.toLocaleString('en-US', {
                    style: 'decimal',
                  })}
                </span>
              </Conditions>
              <Conditions>
                Price:{' '}
                <span style={{ color: '#3470FF', fontWeight: '600' }}>
                  {selectedAdvert.rentalPrice}
                </span>
              </Conditions>
            </ContainerConditions>
          </div>

          <ButtonCancel
            type="button"
            onClick={() => handleToggleFavorite(selectedAdvert.id)}
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
