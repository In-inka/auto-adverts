import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(18, 20, 23, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow-y: auto;
`;

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background-color: rgba(255, 255, 255, 1);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 32px 20px;
  border: 1px solid #efede833;
  width: 328px;
  min-height: 630px;
  margin-top: 100px;
  margin-right: auto;
  margin-left: auto;
  @media screen and (min-width: 768px) {
    padding: 40px 37px;
    border: 1px solid #efede833;
    width: 541px;
    min-height: 752px;
    margin-top: 150px;
  }
`;

export const ButtonClose = styled.svg`
  stroke: black;
  width: 17px;
  height: 17px;
  z-index: 20;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    right: 14px;
    top: 14px;
  }
`;

export const Rental = styled.a`
  font-size: 12px;
  padding: 9px 45px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  color: #ffffff;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  background: #3470ff;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
  &:disabled {
    background-color: #0b44cd;
    color: #ffffff;
  }
  @media screen and (min-width: 768px) {
    padding: 12px 50px;
    font-size: 16px;
  }
`;

export const Title = styled.div`
  color: #121417;
  font-family: Manrope;
  font-size: 14px;

  display: flex;
  gap: 3px;
  margin-bottom: 8px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.33;
  }
`;

export const Model = styled.p`
  color: #3470ff;
`;
export const Picture = styled.img`
  object-fit: cover;
  margin-bottom: 10px;
  border-radius: 10px;
  width: 328px;
  height: 198px;

  @media screen and (min-width: 768px) {
    margin-bottom: 14px;
    border-radius: 14px;
    width: 469px;
    height: 268px;
  }
`;
export const Details = styled.div`
  display: flex;
  width: 220px;
  gap: 4px;
  color: rgba(18, 20, 23, 0.5);
  font-size: 10px;
  font-weight: 400;
  line-height: 1.5;
  flex-wrap: wrap;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    width: 277px;
    font-size: 12px;

    margin-bottom: 14px;
  }
`;

export const ContainerConditions = styled.ul`
  margin-bottom: 18px;

  display: flex;
  flex-wrap: wrap;

  align-items: center;
  gap: 7px;

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    gap: 10px;
    font-size: 12px;
  }
`;
export const Conditions = styled.li`
  padding: 7px 14px;
  border-radius: 35px;
  background: #f9f9f9;
`;
