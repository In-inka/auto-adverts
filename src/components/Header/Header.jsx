import { ContainerStyled } from 'GlodalStyle.styled';
import { Navigation, Head, ListLink, List } from './Header.styled';

const Header = () => {
  return (
    <Head>
      <ContainerStyled>
        <Navigation>
          <ListLink aria-current="page" to="/">
            Home
          </ListLink>
          <List>
            <ListLink to="/catalog">Catalog</ListLink>
            <ListLink to="/favorites">Favorite</ListLink>
          </List>
        </Navigation>
      </ContainerStyled>
    </Head>
  );
};

export default Header;
