import React, { ReactElement } from 'react'
import HeartImage from '../../assets/images/heart.jpg';
import { Link } from 'react-router-dom';

export default function StartNow(): ReactElement {
    return (
        <div className="row" style={{ backgroundColor: "#efd5d6" }}>
        <div className="col-md-2"></div>
        <div className="col-md-4">
          <div className="mx-4">
            <Link
              to='/diagnostic'
              role="button"
              className="btn btn-lg btn-block btn-warning vertical-mid btn-start-now-box"
            >
              <h1 className="btn-start-now">Start Now!</h1>
            </Link>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <img src={HeartImage} className="w-75" alt="Erreur" />
        </div>
      </div>
    )
}
