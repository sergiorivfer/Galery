import tormenta3 from '../assets/img/tormenta3.jpg';
import PropTypes from 'prop-types';

export const Tormenta3 = ({className}) => {
    return (
        <img src={ tormenta3 } alt=" tormenta3 "
        className={className} 
        />
    )
}

Tormenta3.propTypes = {
    className: PropTypes.string
}