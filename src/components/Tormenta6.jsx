import tormenta6 from '../assets/img/tormenta6.jpg';
import PropTypes from 'prop-types';

export const Tormenta6 = ({className}) => {
    return (
        <img src={ tormenta6 } alt=" tormenta6 "
        className={className} 
        />
    )
}

Tormenta6.propTypes = {
    className: PropTypes.string
}