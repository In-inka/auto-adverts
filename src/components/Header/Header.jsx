import { Navigation, Head, Link } from './Header.styled';

const Header = () => {
  return (
    <Head>
      <Navigation>
        <Link aria-current="page" to="/">
          Home
        </Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/favorites">Favorites</Link>
      </Navigation>
    </Head>
  );
};

export default Header;
