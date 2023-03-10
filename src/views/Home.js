import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiRightArrowCircle, BiMicrophone } from 'react-icons/bi';
import { BsGearWide } from 'react-icons/bs';
import { FiChevronLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { setSelectedCountry } from '../store/Countries';
import Africa from '../assets/Africa2.png';
import Algeria from '../assets/Algeria.png';
import Egypt from '../assets/Egypt.png';
import Ethiopia from '../assets/Ethiopia.png';
import Kenya from '../assets/Kenya.png';
import Nigeria from '../assets/Nigeria.png';
import RDC from '../assets/RDC.png';
import SouthAfrica from '../assets/South-Africa.png';
import Sudan from '../assets/Sudan.png';
import Tanzania from '../assets/Tanzania.png';
import Uganda from '../assets/Uganda.png';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const countries = useSelector((state) => state.countries);
  const total = countries.reduce(
    (accumulator, currentValue) => accumulator + currentValue['2022 Population'],
    0,
  );

  const images = [
    Nigeria,
    Ethiopia,
    Egypt,
    RDC,
    Tanzania,
    SouthAfrica,
    Kenya,
    Uganda,
    Sudan,
    Algeria,
  ];

  const fullCountries = countries.map((country, index) => ({
    ...country,
    image: images[index],
  }));

  const handleClick = (country) => {
    dispatch(setSelectedCountry(country));
    navigate('/country');
  };

  return (
    <div className="home-container">
      <div className="nav-status">
        <div className="nav-left">
          <FiChevronLeft className="statusIcon" />
          2022
        </div>
        <div className="nav-title">Most populate</div>
        <div className="nav-right">
          <BiMicrophone className="statusIcon" />
          <BsGearWide className="statusIcon" />
        </div>
      </div>
      <div className="head">
        <img src={Africa} alt="europe" />
        <div className="infos">
          <p>Africa</p>
          <strong>
            {total}
            {' '}
            inhabitants
          </strong>
        </div>
      </div>
      <div className="title-bar title-metrics">INFO BY COUNTRY</div>
      <div className="countriesList">
        {countries
          && fullCountries.map((country) => (
            <div
              role="button"
              tabIndex={0}
              key={country.Rank}
              className="countryItem"
              onClick={() => handleClick(country)}
              onKeyDown={() => handleClick(country)}
            >
              <BiRightArrowCircle className="icon" />
              <div className="imageContainer">
                <img src={country.image} alt={country.Country} />
              </div>

              <div className="infos">
                <p>{country.Country}</p>
                <strong>{country['2022 Population']}</strong>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Home;
