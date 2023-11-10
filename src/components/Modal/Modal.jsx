import {
  Backdrop,
  ButtonCancel,
  ButtonClose,
  ModalContainer,
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

        <ButtonCancel type="button" onClick={onClose}>
          Cancel
        </ButtonCancel>
      </ModalContainer>
    </Backdrop>
  );
};

export default Modal;
