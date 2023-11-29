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
  padding: 40px 37px;
  border: 1px solid #efede833;
  width: 541px;
  height: 742px;
  margin: 150px auto;
`;

export const ButtonClose = styled.svg`
  stroke: black;
  width: 24px;
  height: 24px;
  z-index: 20;
  position: absolute;
  right: 14px;
  top: 14px;
  cursor: pointer;
`;

export const Rental = styled.a`
  padding: 12px 50px;
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
  margin-bottom: 8px;
`;
export const Model = styled.p`
  color: #3470ff;
`;
export const Picture = styled.img`
  margin-bottom: 14px;
  border-radius: 14px;
  width: 469px;
  height: 268px;
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
  margin-bottom: 14px;
`;

export const ContainerConditions = styled.ul`
  margin-bottom: 24px;

  display: flex;
  flex-wrap: wrap;

  align-items: center;
  gap: 10px;

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.24px;
`;
export const Conditions = styled.li`
  padding: 7px 14px;
  border-radius: 35px;
  background: #f9f9f9;
`;
