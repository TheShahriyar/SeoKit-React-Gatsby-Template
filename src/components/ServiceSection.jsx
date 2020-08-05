import React from "react"

import img1 from "../images/service-images/seokit-si-1.png"
import img2 from "../images/service-images/seokit-si-2.png"
import img3 from "../images/service-images/seokit-si-3.png"
import img4 from "../images/service-images/seokit-si-4.png"
import img5 from "../images/service-images/seokit-si-5.png"
import img6 from "../images/service-images/seokit-si-6.png"

const ServiceSection = () => {
  return (
    <>
      <div className="service-block pad-115">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="seokit-section-title text-center">
                <h3 className="lg-heading-title">Our Services</h3>
                <p>Drive more traffic to your website with our SEO services</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 p-0">
              <article className="itl-service-box bg-shamrock center-align">
                <figure className="itl-service-box__img">
                  <img src={img1} alt="" />
                </figure>
                <div className="itl-service-box__content">
                  <a href="service-details.html">
                    <h3 className="itl-service-box__title">SEO Consultency</h3>
                  </a>
                  <p className="itl-service-box__text">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum
                  </p>
                </div>
              </article>
            </div>
            <div className="col-md-4 p-0">
              <article className="itl-service-box center-align">
                <figure className="itl-service-box__img">
                  <img src={img2} alt="" />
                </figure>
                <div className="itl-service-box__content">
                  <a href="service-details.html">
                    <h3 className="itl-service-box__title">Keyword Research</h3>
                  </a>
                  <p className="itl-service-box__text">
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime
                  </p>
                </div>
              </article>
            </div>
            <div className="col-md-4 p-0">
              <article className="itl-service-box bg-java center-align">
                <figure className="itl-service-box__img">
                  <img src={img3} alt="" />
                </figure>
                <div className="itl-service-box__content">
                  <a href="service-details.html">
                    <h3 className="itl-service-box__title">Link Building</h3>
                  </a>
                  <p className="itl-service-box__text">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum
                  </p>
                </div>
              </article>
            </div>
            <div className="col-md-4 p-0">
              <article className="itl-service-box center-align">
                <figure className="itl-service-box__img">
                  <img src={img4} alt="" />
                </figure>
                <div className="itl-service-box__content">
                  <a href="service-details.html">
                    <h3 className="itl-service-box__title">
                      Code Optimization
                    </h3>
                  </a>
                  <p className="itl-service-box__text">
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime
                  </p>
                </div>
              </article>
            </div>
            <div className="col-md-4 p-0">
              <article className="itl-service-box bg-dandelion center-align">
                <figure className="itl-service-box__img">
                  <img src={img5} alt="" />
                </figure>
                <div className="itl-service-box__content">
                  <a href="service-details.html">
                    <h3 className="itl-service-box__title">Web SEO Audit</h3>
                  </a>
                  <p className="itl-service-box__text">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum
                  </p>
                </div>
              </article>
            </div>
            <div className="col-md-4 p-0">
              <article className="itl-service-box center-align">
                <figure className="itl-service-box__img">
                  <img src={img6} alt="" />
                </figure>
                <div className="itl-service-box__content">
                  <a href="service-details.html">
                    <h3 className="itl-service-box__title">Email Marketing</h3>
                  </a>
                  <p className="itl-service-box__text">
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceSection
