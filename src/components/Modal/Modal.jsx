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
  if (!isOpen) return null;

  console.log(selectedAdvert);

  return (
    <Backdrop onClick={onClose}>
      <ModalContainer>
        <ButtonClose type="button" onClick={onClose}>
          x
        </ButtonClose>
        <div>
          <img
            src={selectedAdvert.img || selectedAdvert.photoLink}
            alt={selectedAdvert.model}
            width={401}
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
            <li>Minimum age :</li>
          </ul>
        </div>

        <ButtonCancel type="button" onClick={onClose}>
          Cancel
        </ButtonCancel>
      </ModalContainer>
    </Backdrop>
  );
};

export default Modal;
