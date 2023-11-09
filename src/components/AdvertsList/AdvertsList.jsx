import { useSelector } from 'react-redux';
import { getAdvertsItem } from 'redux/adverts/advertsSelector';

const AdvertsList = () => {
  const adverts = useSelector(getAdvertsItem);
  return (
    <>
      <ul>
        {adverts?.map(
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
                <p>{model}</p>
                <p>{id}</p>
                <p>{functionalities[0]}</p>
              </div>
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default AdvertsList;
