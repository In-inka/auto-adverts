import React, { useEffect } from 'react';
import {
  Backdrop,
  ButtonCancel,
  ButtonClose,
  Details,
  ModalContainer,
  Model,
  Title,
} from './Modal.styled';

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

  if (!isOpen) return null;

  return (
    <>
      <Backdrop onClick={handleBackdropClick} className="modal-backdrop">
        <ModalContainer>
          <ButtonClose type="button" onClick={onClose}>
            x
          </ButtonClose>
          <div>
            <img
              src={selectedAdvert.img || selectedAdvert.photoLink}
              alt={selectedAdvert.model}
              width={469}
              height={268}
            />
            <div>
              <Title>
                {' '}
                <p>{selectedAdvert.make}</p>
                <Model>{selectedAdvert.model},</Model>
                <p>{selectedAdvert.year}</p>
              </Title>
            </div>
            <Details>
              {selectedAdvert.address}| id: {selectedAdvert.id}| Year:
              {selectedAdvert.year}| Type:{selectedAdvert.type}| Consumption:{' '}
              {selectedAdvert.fuelConsumption}| Engine Size:{' '}
              {selectedAdvert.engineSize}
            </Details>
            <p>{selectedAdvert.description}</p>
            <p>Accessories and functionalities:</p>
            <Details>{selectedAdvert.functionalities.join('|')}</Details>
            <p>Rental Conditions:</p>
            <ul>
              <li>{selectedAdvert.rentalConditions[0]}</li>
              <li>{selectedAdvert.rentalConditions[1]}</li>
            </ul>
          </div>

          <ButtonCancel type="button" onClick={onClose}>
            Cancel
          </ButtonCancel>
        </ModalContainer>
      </Backdrop>
    </>
  );
};

export default Modal;
