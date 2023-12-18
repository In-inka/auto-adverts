import Modal from 'components/Modal/Modal';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorites,
  removeFromFavorites,
  resetAdverts,
} from 'redux/adverts/adverts-slice';
import { selectFavoriteIds, selectPage } from 'redux/adverts/advertsSelector';
import {
  Bg,
  CardsItem,
  CardsList,
  Favorite,
  IconFavorite,
  Img,
  InfoList,
  LearnMore,
  LoadMore,
  Model,
  TitleCar,
} from './AdvertsList.styled';
import { splitAddress } from 'components/helpers/helpers';
import sprite from '../icons/sprite.svg';
import { nanoid } from 'nanoid';
import { getAdverts } from 'redux/adverts/operations';

const AdvertsList = ({ adverts }) => {
  let page = Number(useSelector(selectPage));

  const dispatch = useDispatch();
  const [selectedAdvert, setSelectedAdvert] = useState(null);
  const favoriteAdverts = useSelector(selectFavoriteIds);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [nextPage, setNextPage] = useState(1);
  const pageAdverts = 10 * (page - 1);

  const shouldShowLoadMoreButton =
    adverts.length > pageAdverts && pageAdverts < adverts.length;

  const handleToggleModal = advert => {
    setIsModalOpen(!isModalOpen);
    setSelectedAdvert(advert);
  };

  const onClickLoadMore = () => {
    setNextPage(prev => prev + 1);
  };

  useEffect(() => {
    dispatch(getAdverts({ page: nextPage }));
  }, [dispatch, nextPage]);

  const handleToggleFavorite = advertId => {
    if (favoriteAdverts.includes(advertId)) {
      dispatch(removeFromFavorites(advertId));
    } else {
      dispatch(addToFavorites(advertId));
    }
  };

  useEffect(() => {
    dispatch(resetAdverts());
  }, [dispatch]);

  return (
    <>
      <CardsList>
        {adverts?.map(advert => (
          <CardsItem key={nanoid()}>
            <Bg>
              {' '}
              <Img src={advert.img || advert.photoLink} alt={advert.model} />
            </Bg>
            <TitleCar>
              <p>
                {advert.make}
                <Model> {advert.model}</Model>, {advert.year}
              </p>
              <p>{advert.rentalPrice}</p>
            </TitleCar>
            <InfoList>
              <li>{splitAddress(advert.address).city}&nbsp;| </li>
              <li>{splitAddress(advert.address).country}&nbsp;| </li>

              <li>{advert.rentalCompany} | </li>
              <li>{advert.accessories[2].split(' ')[0]}&nbsp;| </li>
              <li>
                {advert.type.charAt(0).toUpperCase() +
                  advert.type.slice(1).toLowerCase()}{' '}
                |
              </li>
              <li>{advert.model} | </li>
              <li>{advert.id} | </li>
              <li>{advert.functionalities[0]}</li>
            </InfoList>
            <Favorite
              type="button"
              onClick={() => handleToggleFavorite(advert.id)}
            >
              {' '}
              <IconFavorite
                style={{
                  fill: favoriteAdverts.includes(advert.id) ? 'blue' : 'none',
                  stroke: favoriteAdverts.includes(advert.id)
                    ? 'none'
                    : 'rgba(255, 255, 255, 0.8)',
                }}
              >
                <use href={`${sprite}#icon-heart`}></use>
              </IconFavorite>
            </Favorite>
            <LearnMore type="button" onClick={() => handleToggleModal(advert)}>
              Learn more
            </LearnMore>
          </CardsItem>
        ))}
      </CardsList>{' '}
      {shouldShowLoadMoreButton && (
        <LoadMore type="button" onClick={onClickLoadMore}>
          Load more
        </LoadMore>
      )}
      <Modal
        isOpen={isModalOpen}
        onClose={handleToggleModal}
        selectedAdvert={selectedAdvert}
      />
    </>
  );
};

export default AdvertsList;
