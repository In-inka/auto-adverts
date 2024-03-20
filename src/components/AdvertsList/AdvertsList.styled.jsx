import styled from 'styled-components';
import backgroundImage from '../../img/auto.jpg';

export const AdvertsAll = styled.div`
  padding-bottom: 25px;
`;

export const CardsList = styled.ul`
  display: flex;
  justify-content: center;
  column-gap: 19px;
  row-gap: 25px;
  flex-wrap: wrap;
  padding-bottom: 50px;

  @media screen and (min-width: 768px) {
    column-gap: 29px;
    row-gap: 50px;
    flex-wrap: wrap;
    padding-bottom: 100px;
  }
`;

export const CardsItem = styled.li`
  position: relative;
  width: 254px;
  @media screen and (min-width: 768px) {
    width: 274px;
  }
`;

export const Img = styled.img`
  width: 254px;
  height: 238px;
  border-radius: 10px;
  object-fit: cover;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    width: 274px;
    height: 268px;
    border-radius: 14px;

    margin-bottom: 14px;
  }
`;

export const Model = styled.span`
  color: #3470ff;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
`;

export const TitleCar = styled.div`
  margin-bottom: 8px;
  font-size: 12px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    font-size: 14px;

    line-height: 1.33;
  }
`;

export const InfoList = styled.ul`
  margin-bottom: 28px;
  height: 35px;
  width: 254px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  font-size: 10px;
  color: rgba(18, 20, 23, 0.5);
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    width: 270px;
    height: 40px;

    font-size: 12px;
  }
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
  width: 250px;

  padding: 10px 48px;
  justify-content: center;
  align-items: center;

  border-radius: 12px;
  background: #3470ff;

  color: #ffffff;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.28;

  border: none;
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    width: 274px;
    padding: 12px 99px;
    font-weight: 600;
  }
`;

export const Bg = styled.div`
  width: 254px;
  height: 238px;
  background: url(${backgroundImage}) center/cover no-repeat;
  overflow: hidden;
  border-radius: 10px;

  margin-bottom: 14px;
  @media screen and (min-width: 768px) {
    width: 274px;
    height: 268px;
    border-radius: 14px;
  }
`;

export const LoadMore = styled.button`
  display: block;
  margin: 0 auto;
  width: 175px;
  color: #3470ff;
  font-size: 14px;
  font-weight: bold;

  text-decoration: none;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 0.5);
  cursor: pointer;
  outline: none;

  padding: 5px;

  background-color: transparent;

  border: 1px solid #3470ff;
  border-radius: 6px;

  &:hover {
    transform: scale(1.01);
  }

  @media screen and (min-width: 768px) {
    width: 190px;
    font-size: 16px;
  }
`;
