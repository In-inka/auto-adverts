import { ContainerStyled } from 'GlodalStyle.styled';
import AdvertsList from 'components/AdvertsList/AdvertsList';
import { useSelector } from 'react-redux';

import { selectFavoriteAdverts } from 'redux/adverts/advertsSelector';

export const Favorites = () => {
  const favorite = useSelector(selectFavoriteAdverts);

  return (
    <ContainerStyled>
      <AdvertsList adverts={favorite} />
    </ContainerStyled>
  );
};

export default Favorites;
