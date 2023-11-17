import { Navigation, Head, ListLink, List } from './Header.styled';

const Header = () => {
  return (
    <Head>
      <Navigation>
        <ListLink aria-current="page" to="/">
          Home
        </ListLink>
        <List>
          <ListLink to="/catalog">Catalog</ListLink>
          <ListLink to="/favorites">Favorites</ListLink>
        </List>
      </Navigation>
    </Head>
  );
};

export default Header;
