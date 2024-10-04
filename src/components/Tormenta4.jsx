import tormenta4 from '../assets/img/tormenta4.jpg';
import PropTypes from 'prop-types';

export const Tormenta4 = ({className}) => {
    return (
        <img src={ tormenta4 } alt=" tormenta4 "
        className={className} 
        />
    )
}

Tormenta4.propTypes = {
    className: PropTypes.string
}