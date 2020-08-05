import React from "react"

import FeatureImage1 from "../images/feature-images/seokit-fi-1.png"
import FeatureImage2 from "../images/feature-images/seokit-fi-2.png"
import FeatureImage3 from "../images/feature-images/seokit-fi-3.png"
import FeatureImage4 from "../images/feature-images/seokit-fi-4.png"

const FeatureSection = () => {
  return (
    <>
      <div className="feature-section pt-115">
        <div className="container container--extend">
          <div className="row">
            <div className="col-md-3">
              <article className="itl-image-box center-align xs-mb-30">
                <figure className="itl-image-box__img">
                  <img src={FeatureImage1} alt="" />
                </figure>
                <div className="itl-image-box__content">
                  <a href="#">
                    <h3 className="itl-image-box__title">SEO Performance</h3>
                  </a>
                  <p className="seokit-image-box__text">
                    Lorem ipsum dolor sit amet, mea lorem temporibus id. In
                    integre salutandi nam, zril impedit
                  </p>
                </div>
              </article>
            </div>
            <div className="col-md-3">
              <article className="itl-image-box center-align xs-mb-30">
                <figure className="itl-image-box__img">
                  <img src={FeatureImage2} alt="" />
                </figure>
                <div className="itl-image-box__content">
                  <a href="">
                    <h3 className="itl-image-box__title">Web Analytics</h3>
                  </a>
                  <p className="itl-image-box__text">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusa ntium doloremque laudantium
                  </p>
                </div>
              </article>
            </div>
            <div className="col-md-3">
              <article className="itl-image-box center-align xs-mb-30">
                <figure className="itl-image-box__img">
                  <img src={FeatureImage3} alt="" />
                </figure>
                <div className="itl-image-box__content">
                  <a href="">
                    <h3 className="itl-image-box__title">Email Marketing</h3>
                  </a>
                  <p className="itl-image-box__text">
                    Lorem ipsum dolor sit amet, mea lorem temporibus id. In
                    integre salutandi nam, zril impedit
                  </p>
                </div>
              </article>
            </div>
            <div className="col-md-3">
              <article className="itl-image-box center-align xs-mb-30">
                <figure className="itl-image-box__img">
                  <img src={FeatureImage4} alt="" />
                </figure>
                <div className="itl-image-box__content">
                  <a href="">
                    <h3 className="itl-image-box__title">Speed Optimization</h3>
                  </a>
                  <p className="itl-image-box__text">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusa ntium doloremque laudantium
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

export default FeatureSection
