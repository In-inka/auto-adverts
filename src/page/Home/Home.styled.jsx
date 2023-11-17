import styled from 'styled-components';
import backgroundImage from '../../img/1200x800.jpg';
import { NavLink } from 'react-router-dom';

export const HomeContainer = styled.div`
  width: 100%;
  height: calc(100vh - 63px);
  background: url(${backgroundImage}) center/cover no-repeat;
  overflow: hidden;
`;

export const Link = styled(NavLink)`
  background: rgba(247, 247, 251, 0.2);
  display: block;
  width: 350px;
  margin: 50px auto;
  text-align: center;
  color: white;
  font-size: 25px;
  font-weight: bold;

  text-decoration: none;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 0.5);
  cursor: pointer;
  outline: none;

  padding: 7px;

  border: 1px solid #f7f7fb;
  border-radius: 6px;

  &:hover {
    transform: scale(1.08);
  }
`;
