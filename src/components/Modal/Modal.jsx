import React, { useCallback, useEffect } from 'react';
import {
  Backdrop,
  ButtonClose,
  Conditions,
  ContainerConditions,
  Details,
  ModalContainer,
  Model,
  Picture,
  Rental,
  Title,
} from './Modal.styled';
import sprite from '../icons/sprite.svg';
import { splitAddress } from 'components/helpers/helpers';

const Modal = ({ isOpen, onClose, selectedAdvert }) => {
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

  const handleEscape = useCallback(
    e => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    } else {
      document.removeEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, handleEscape]);

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
              {city} | {country} | id: {id} | Year: {year} | Type:{type} |
              Consumption: {fuelConsumption} | Engine Size: {engineSize}
            </Details>
            <Title style={{ marginBottom: '24px' }}>{description}</Title>
            <Title style={{ marginBottom: '8px' }}>
              Accessories and functionalities:
            </Title>
            <Details>{functionalities.join('| ')}</Details>
            <Title>Rental Conditions:</Title>
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

          <Rental href="tel:+380730000000">Rental car</Rental>
        </ModalContainer>
      </Backdrop>
    </>
  );
};

export default Modal;
