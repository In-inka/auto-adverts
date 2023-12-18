import styled from 'styled-components';

export const Form = styled.form`
  padding-top: 75px;
  margin-bottom: 35px;

  display: flex;
  gap: 10px;
  justify-content: flex-start;

  align-items: flex-end;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    padding-top: 80px;
    margin-bottom: 50px;

    gap: 18px;
    flex-wrap: nowrap;
    justify-content: center;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`;

export const ItemMileage = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Label = styled.label`
  color: #8a8a89;
  font-size: 10px;
  font-weight: 400;
  line-height: 1.16;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.28;
  }
`;

export const Option = styled.option`
  color: rgba(18, 20, 23, 0.2);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.16;
  &:selected {
    background-color: #ff0000;
    color: #ffffff;
    font-weight: bold;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
  }
`;

export const Select = styled.select`
  display: flex;
  padding: 7px 9px;

  justify-content: center;
  align-items: center;

  color: #121417;

  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  line-height: 1.16;

  appearance: none;

  border-radius: 7px;
  background: #f7f7fb;

  border: none;

  @media screen and (min-width: 768px) {
    padding: 14px 18px;
    border-radius: 14px;
    font-size: 18px;

    font-weight: 500;
    line-height: 1.11;
  }
`;

export const Button = styled.input`
  width: 95px;
  height: 28px;
  padding: 7px 22px;

  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  border: none;
  color: #ffffff;
  cursor: pointer;

  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.16;

  @media screen and (min-width: 768px) {
    width: 136px;
    height: 48px;
    padding: 14px 44px;

    font-size: 14px;

    font-weight: 600;
    line-height: 1.42;
  }
`;

export const InputFrom = styled.input`
  border-radius: 14px 0px 0px 14px;
  width: 100px;

  padding: 7px 12px;
  align-items: center;

  color: #121417;

  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  line-height: 1.16;
  border: none;
  background: #f7f7fb;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  @media screen and (min-width: 768px) {
    width: 160px;
    padding: 14px 24px 14px 24px;
    font-size: 18px;

    font-weight: 500;
    line-height: 1.11;
  }
`;

export const InputTo = styled.input`
  border-radius: 0px 14px 14px 0px;
  width: 100px;

  padding: 7px 12px;
  align-items: center;

  color: #121417;

  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  line-height: 1.16;
  border: none;
  background: #f7f7fb;

  @media screen and (min-width: 768px) {
    width: 160px;
    padding: 14px 24px 14px 24px;
    font-size: 18px;

    font-weight: 500;
    line-height: 1.11;
  }
`;
