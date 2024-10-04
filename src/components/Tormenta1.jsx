import tormenta1 from '../assets/img/tormenta1.jpg';
import PropTypes from 'prop-types';

export const Tormenta1 = ({className}) => {
  return (
    <img src={ tormenta1 } alt=" Tormenta 1" 
    className={className}
    />
  )
}

Tormenta1.propTypes = {
    className: PropTypes.string
}