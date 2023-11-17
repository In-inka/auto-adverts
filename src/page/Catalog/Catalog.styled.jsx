import styled from 'styled-components';

export const Form = styled.form`
  margin-bottom: 50px;

  display: flex;
  gap: 18px;
  justify-content: center;
  align-items: flex-end;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ItemMileage = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Label = styled.label`
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
`;

export const Option = styled.option`
  color: rgba(18, 20, 23, 0.2);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  &:selected {
    background-color: #ff0000; /* Змініть колір фону на червоний */
    color: #ffffff; /* Змініть колір тексту на білий */
    font-weight: bold; /* Змініть жирність шрифту */
  }
`;

export const Select = styled.select`
  display: flex;
  padding: 14px 18px;

  justify-content: center;
  align-items: center;

  border-radius: 14px;

  color: #121417;

  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.11; /* 111.111% */

  appearance: none; /* Сховати стандартну стрілочку */

  border-radius: 14px;
  background: #f7f7fb;

  border: none;
`;

export const Button = styled.input`
  width: 136px;
  height: 48px;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  border: none;
  color: #ffffff;
  cursor: pointer;

  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42; /* 142.857% */
`;

export const InputFrom = styled.input`
  border-radius: 14px 0px 0px 14px;
  width: 160px;

  padding: 14px 24px 14px 24px;
  align-items: center;

  color: #121417;

  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.11; /* 111.111% */
  border: none;
  background: #f7f7fb;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
`;

export const InputTo = styled.input`
  border-radius: 0px 14px 14px 0px;
  width: 160px;

  padding: 14px 24px 14px 24px;
  align-items: center;

  color: #121417;

  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.11; /* 111.111% */
  border: none;
  background: #f7f7fb;
`;
