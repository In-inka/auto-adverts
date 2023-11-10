import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(18, 20, 23, 0.5);
  z-index: 10;
`;

export const ModalContainer = styled.div`
  position: relative;
  overflow-y: scroll;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px 37px;
  width: 541px;

  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background-color: #ffffff;
  z-index: 11;
  &::-webkit-scrollbar {
    width: 4px;
  }
`;

export const ButtonClose = styled.button`
  border: none;
  z-index: 20;
  position: absolute;
  top: 14px;
  right: 14px;
  background-color: rgba(0, 0, 0, 0);
  @media screen and (min-width: 768px) {
    top: 16px;
    right: 16px;
  }
`;

export const ButtonCancel = styled.button`
  padding: 14px 32px 14px 32px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  color: #ffffff;
  cursor: pointer;
  outline: none;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  background: #3470ff;
  @media screen and (min-width: 768px) {
    /* position: absolute; */
    bottom: 48px;
    right: 32px;
  }

  &:hover,
  &:focus {
    background-color: blue;
  }
  &:disabled {
    background-color: #e6533c;
    color: #efede899;
  }
`;

export const Title = styled.div`
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;

  display: flex;
  gap: 3px;
`;
export const Model = styled.p`
  color: #3470ff;
`;
export const Details = styled.div`
  display: flex;
  width: 277px;
  gap: 4px;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  flex-wrap: wrap;
`;
