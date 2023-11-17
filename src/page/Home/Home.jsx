import { HomeContainer, Link } from './Home.styled';

export const Home = () => {
  return (
    <>
      <HomeContainer>
        <Link to="/catalog">Get my car</Link>
      </HomeContainer>
    </>
  );
};

export default Home;
