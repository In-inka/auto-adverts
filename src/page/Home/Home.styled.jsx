import styled from 'styled-components';
import backgroundImage from '../../img/1200x800.jpg';

export const HomeContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 63px);
  background: url(${backgroundImage}) center/cover no-repeat;
`;
