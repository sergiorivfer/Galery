import tormenta5 from '../assets/img/tormenta5.jpg';
import PropTypes from 'prop-types';

export const Tormenta5 = ({className}) => {
    return (
        <img src={ tormenta5 } alt=" tormenta5 "
        className={className} 
        />
    )
}

Tormenta5.propTypes = {
    className: PropTypes.string
}