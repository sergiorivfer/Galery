import { Link } from "react-router-dom"
import { Tormenta1 } from './Tormenta1'
import { Tormenta2 } from './Tormenta2'
import { Tormenta3 } from './Tormenta3'
import { Tormenta4 } from './Tormenta4'
import { Tormenta5 } from './Tormenta5'
import { Tormenta6 } from './Tormenta6'

export const Navigation = () => {
  return (
    <div className="container thumbnail-container mt-2">
        <Link to='/tormenta1' className="links">
            <figure className="thumbnail-image-size">
                <Tormenta1/>
                <figcaption>Tormenta 1</figcaption>
            </figure>
        </Link>
        <Link to='/tormenta2' className="links">
            <figure className="thumbnail-image-size">
                <Tormenta2/>
                <figcaption>Tormenta 1</figcaption>
            </figure>
        </Link>
        <Link to='/tormenta3' className="links">
            <figure className="thumbnail-image-size">
                <Tormenta3/>
                <figcaption>Tormenta 1</figcaption>
            </figure>
        </Link>
        <Link to='/tormenta4' className="links">
            <figure className="thumbnail-image-size">
                <Tormenta4/>
                <figcaption>Tormenta 1</figcaption>
            </figure>
        </Link>
        <Link to='/tormenta5' className="links">
            <figure className="thumbnail-image-size">
                <Tormenta5/>
                <figcaption>Tormenta 1</figcaption>
            </figure>
        </Link>
        <Link to='/tormenta6' className="links">
            <figure className="thumbnail-image-size">
                <Tormenta6/>
                <figcaption>Tormenta 1</figcaption>
            </figure>
        </Link>
    </div>
    
  )
}
