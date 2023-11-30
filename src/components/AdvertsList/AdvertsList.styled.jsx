import styled from 'styled-components';
import backgroundImage from '../../img/auto.jpg';

export const CardsList = styled.ul`
  display: flex;
  column-gap: 29px;
  row-gap: 50px;
  flex-wrap: wrap;
  margin-bottom: 100px;
`;

export const CardsItem = styled.li`
  position: relative;
  width: 274px;
`;

export const Img = styled.img`
  width: 274px;
  height: 268px;
  border-radius: 14px;
  object-fit: cover;
  margin-bottom: 14px;
`;

export const Model = styled.span`
  color: #3470ff;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const TitleCar = styled.div`
  margin-bottom: 8px;

  display: flex;
  justify-content: space-between;
`;

export const InfoList = styled.ul`
  margin-bottom: 28px;
  height: 40px;
  width: 270px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  font-size: 12px;
  color: rgba(18, 20, 23, 0.5);
  line-height: 1.5;
`;

export const IconFavorite = styled.svg`
  width: 18px;
  height: 18px;
`;
export const Favorite = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  border: none;
  background-color: inherit;
`;

export const LearnMore = styled.button`
  display: flex;
  width: 274px;

  padding: 12px 99px;
  justify-content: center;
  align-items: center;

  border-radius: 12px;
  background: #3470ff;

  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;

  border: none;
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;

export const Bg = styled.div`
  width: 274px;
  height: 268px;
  background: url(${backgroundImage}) center/cover no-repeat;
  overflow: hidden;
  border-radius: 14px;

  margin-bottom: 14px;
`;

export const LoadMore = styled.button`
  display: block;
  border: none;
  color: #3470ff;

  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5; /* 150% */
  text-decoration-line: underline;
  background: none;
  margin-left: auto;
  margin-right: auto;
`;
