import tormenta2 from '../assets/img/tormenta2.jpg';
import PropTypes from 'prop-types';

export const Tormenta2 = ({className}) => {
    return (
        <img src={ tormenta2 } alt=" tormenta2 "
        className={className} 
        />
    )
}

Tormenta2.propTypes = {
    className: PropTypes.string
}