import { ContainerStyled } from 'GlodalStyle.styled';
import AdvertsList from 'components/AdvertsList/AdvertsList';
import { useSelector } from 'react-redux';

import { selectFavoriteAdverts } from 'redux/adverts/advertsSelector';
import { FavoritesContainer } from './Favorites.styled';

export const Favorites = () => {
  const favorite = useSelector(selectFavoriteAdverts);

  return (
    <FavoritesContainer>
      <ContainerStyled>
        <AdvertsList adverts={favorite} />
      </ContainerStyled>
    </FavoritesContainer>
  );
};

export default Favorites;
