import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavorites } from 'redux/adverts/adverts-slice';

import { selectFavoriteAdverts } from 'redux/adverts/advertsSelector';

export const Favorites = () => {
  const favorite = useSelector(selectFavoriteAdverts);
  const dispatch = useDispatch();

  return (
    <>
      <ul>
        {favorite?.map(
          ({
            id,
            make,
            img,
            model,
            year,
            rentalPrice,
            address,
            rentalCompany,
            type,
            functionalities,
            accessories,
            photoLink,
            mileage,
          }) => (
            <li key={id}>
              <img
                src={img || photoLink}
                alt={model}
                width={401}
                height={268}
              />
              <div style={{ display: 'flex', gap: 25 }}>
                <p>{make}</p>
                <p>{model}</p>
                <p>{year}</p>
                <p>{rentalPrice}</p>
              </div>
              <div style={{ display: 'flex', gap: 25 }}>
                <p>{address}</p>
                <p>{rentalCompany}</p>
                <p>{accessories[2]}</p>
                <p>{type}</p>
                <p>{mileage.toLocaleString()}</p>
                <p>{id}</p>
                <p>{functionalities[0]}</p>
              </div>

              <button onClick={() => dispatch(removeFromFavorites(id))}>
                Delete
              </button>
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default Favorites;
