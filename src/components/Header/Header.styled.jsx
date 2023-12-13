import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const Head = styled.header`
  display: flex;
  padding: 5px;
  position: absolute;
  z-index: 10;
  align-items: center;
  top: 0;
  left: 50%;
  transform: translate(-50%, -0%);
  color: #fff;
  background: linear-gradient(
    90deg,
    rgba(65, 88, 136, 1) 0%,
    rgba(100, 214, 221, 1) 100%
  );
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  @media screen and (min-width: 1440px) {
    width: 100%;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const List = styled.div`
  display: flex;
  gap: 15px;
`;

export const ListLink = styled(NavLink)`
  color: white;
  font-size: 15px;
  font-weight: bold;

  text-decoration: none;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 0.5);
  cursor: pointer;
  outline: none;

  padding: 5px;

  border: 1px solid #f7f7fb;
  border-radius: 6px;

  &:hover {
    transform: scale(1.08);
  }
  @media screen and (min-width: 1440px) {
    font-size: 25px;
  }
`;
