import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorites,
  removeFromFavorites,
} from 'redux/adverts/adverts-slice';
import { selectFavoriteIds } from 'redux/adverts/advertsSelector';
import {
  CardsItem,
  CardsList,
  Favorite,
  IconFavorite,
  Img,
  InfoList,
  LearnMore,
  Model,
  TitleCar,
} from './AdvertsList.styled';
import { splitAddress } from 'components/helpers/helpers';
import sprite from '../icons/sprite.svg';

const AdvertsList = ({ adverts }) => {
  const dispatch = useDispatch();
  const [selectedAdvert, setSelectedAdvert] = useState(null);
  const favoriteAdverts = useSelector(selectFavoriteIds);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = advert => {
    setIsModalOpen(!isModalOpen);
    setSelectedAdvert(advert);
  };

  const handleToggleFavorite = advertId => {
    if (favoriteAdverts.includes(advertId)) {
      dispatch(removeFromFavorites(advertId));
    } else {
      dispatch(addToFavorites(advertId));
    }
  };

  return (
    <>
      <CardsList>
        {adverts?.map(advert => (
          <CardsItem key={advert.id}>
            <Img src={advert.img || advert.photoLink} alt={advert.model} />
            <TitleCar>
              <p>
                {advert.make}
                <Model> {advert.model}</Model>, {advert.year}
              </p>
              <p>{advert.rentalPrice}</p>
            </TitleCar>
            <InfoList>
              <li>{splitAddress(advert.address).city} | </li>
              <li>{splitAddress(advert.address).country} | </li>

              <li>{advert.rentalCompany} | </li>
              <li>{advert.accessories[2].split(' ')[0]} | </li>
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
      </CardsList>
      <Modal
        isOpen={isModalOpen}
        onClose={handleToggleModal}
        selectedAdvert={selectedAdvert}
      />
    </>
  );
};

export default AdvertsList;
