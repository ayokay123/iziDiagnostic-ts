import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import CarouselImage1 from '../../assets/images/carousel1.jpg';
import CarouselImage2 from '../../assets/images/carousel2.jpg';
import CarouselImage3 from '../../assets/images/carousel3.jpg';

export default function Carousel(): ReactElement {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>

      <div className="carousel-inner">
        <div
          className="carousel-item active py-5 row"
          style={{ backgroundColor: "#4eb7b0" }}
        >
          <div className="d-md-inline-block my-5 col-md-6">
            <img
              src={CarouselImage1}
              className="w-100"
              alt="First slide"
            />
          </div>
          <div className="d-md-inline-block my-5 col-md-5 px-4 px-md-0">
            <h1 className="title1 animated bounceInRight text-center font-weight-bold text-white unclickable">
              Feeling bad?
            </h1>
            <h3 className="title2 animated bounceInLeft text-center text-white unclickable">
              If you feel symptoms, use our health diagnostic system to check
              your current status
            </h3>
            <Link to='/diagnostic'
              role="button"
              className="title3 animated bounceIn btn btn-lg btn-block btn-outline-light button-diag"
            >
              Go to diagnostic
            </Link>
          </div>
        </div>

        <div
          className="carousel-item  py-5 row"
          style={{ backgroundColor: "#0a68a5" }}
        >
          <div className="d-md-inline-block my-5 col-md-6">
            <img
              src={CarouselImage2}
              style={{ width: "100%" }}
              alt="Second slide"
            />
          </div>
          <div className="d-md-inline-block my-5 col-md-5 px-4 px-md-0">
            <div className="">
              <h1 className="title1 animated flipInY text-center font-weight-bold text-white unclickable">
                How it works!
              </h1>
              <h3 className="title2 animated flipInX text-center text-white unclickable">
                We use an intelligent API that tells you what possible diseases
                you may have
              </h3>
              <Link to='/diagnostic'
                role="button"
                className="title3 animated zoomIn btn btn-lg btn-block btn-outline-warning button-diag"
              >
                Go to diagnostic
              </Link>
            </div>
          </div>
        </div>

        <div
          className="carousel-item  py-5 row"
          style={{ backgroundColor: "#51203e" }}
        >
          <div className="d-md-inline-block my-5 col-md-6">
            <img
              src={CarouselImage3}
              style={{ width: "100%" }}
              alt="Third slide"
            />
          </div>
          <div className="d-md-inline-block my-5 col-md-5 px-4 px-md-0">
            <div className="">
              <h1 className="title1 animated fadeInLeft text-center font-weight-bold text-white unclickable">
                Stay safe!
              </h1>
              <h3 className="title2 animated fadeInRight text-center text-white unclickable">
                protect yourself and your family, stay home if you are ill or
                call a doctor
              </h3>
              <Link to='/diagnostic'
                role="button"
                className="title3 animated fadeInDown btn btn-lg btn-block btn-outline-info button-diag"
              >
                Go to diagnostic
              </Link>
            </div>
          </div>
        </div>
      </div>

      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}
