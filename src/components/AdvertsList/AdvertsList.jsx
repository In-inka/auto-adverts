import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorites,
  removeFromFavorites,
} from 'redux/adverts/adverts-slice';
import { selectFavoriteIds } from 'redux/adverts/advertsSelector';

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
      <ul>
        {adverts?.map(advert => (
          <li key={advert.id}>
            <img
              src={advert.img || advert.photoLink}
              alt={advert.model}
              width={401}
              height={268}
            />
            <div style={{ display: 'flex', gap: 25 }}>
              <p>{advert.make}</p>
              <p>{advert.model}</p>
              <p>{advert.year}</p>
              <p>{advert.rentalPrice}</p>
            </div>
            <div style={{ display: 'flex', gap: 25 }}>
              <p>{advert.address}</p>
              <p>{advert.rentalCompany}</p>
              <p>{advert.accessories[2]}</p>
              <p>{advert.type}</p>
              <p>{advert.mileage.toLocaleString()}</p>
              <p>{advert.id}</p>
              <p>{advert.functionalities[0]}</p>
            </div>
            <button
              type="button"
              onClick={() => handleToggleFavorite(advert.id)}
              style={{
                color: favoriteAdverts.includes(advert.id) ? 'red' : 'black',
              }}
            >
              {favoriteAdverts.includes(advert.id)
                ? 'Remove from Favorites'
                : 'Add to Favorites'}
            </button>
            <button type="button" onClick={() => handleToggleModal(advert)}>
              Open Modal
            </button>
          </li>
        ))}
      </ul>
      <Modal
        isOpen={isModalOpen}
        onClose={handleToggleModal}
        selectedAdvert={selectedAdvert}
      />
    </>
  );
};

export default AdvertsList;
