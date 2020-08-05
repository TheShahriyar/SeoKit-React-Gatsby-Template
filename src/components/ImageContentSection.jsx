import React from "react"

import seokitimg1 from "../images/seokit/seokit-image-element-1.png"
import BG from "../images/background/seokit-background-1.jpg"

const ImageContentSection = () => {
  return (
    <>
      <section
        className="image-content parallax pad-115"
        style={{ backgroundImage: `url(${BG})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={seokitimg1} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <div className="text-block white-text mb-40">
                <h2 className="sm-heading-title fw-500">
                  5 Key Benefits of SEO
                </h2>
                <h3 className="lg-heading-title headings-primary-color fw-600">
                  Making Best Strategy
                </h3>
              </div>
              <div className="text-block white-text fw-500 mb-30">
                <p>
                  You can talk to your friends and family on social media. You
                  can search for your favorite content on Google or YouTube. You
                  can read and learn from blogs you find. And you can check your
                  email. And, most importantly, you can spend your money!
                </p>
              </div>
              <div className="text-block white-text fw-500 mb-30">
                <ol>
                  <li>User-Friendly Websites</li>
                  <li>Bring in MORE Traffic</li>
                  <li>Better Conversion Rates</li>
                  <li>Build Brand Awareness</li>
                  <li>Bypass Competition</li>
                </ol>
              </div>
              <a href="" className="btn btn-seokit-primary">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ImageContentSection
