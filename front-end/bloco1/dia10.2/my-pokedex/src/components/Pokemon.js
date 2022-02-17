import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { pokemon: { name, image, type, averageWeight: {value, measurementUnit, } }} = this.props;
    return(
      <div className='pokemon-block'>
        <ul>
          <li>{name}</li>
          <li>{type}</li>
          <li>Avarage weight: {value} {measurementUnit}</li>
        </ul>
        <img src={image}/>
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      type: PropTypes.string,
      averageWeight: PropTypes.shape({
        value: PropTypes.number,
        measurementUnit: PropTypes.string
      }),
      image: PropTypes.string,
      moreInfo: PropTypes.string
  }).isRequired,
}

export default Pokemon