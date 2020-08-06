import React from "react"
import Carousel from "react-bootstrap/Carousel"

import SliderImg1 from "../images/slideshow/slide-bg-1.jpg"
import SliderImg2 from "../images/slideshow/slide-bg-2.jpg"
import SliderImg3 from "../images/slideshow/slide-bg-3.jpg"
import SlideElement1 from "../images/slideshow/slide-1-element.png"
import SlideElement2 from "../images/slideshow/slide-2-element.png"
import SlideElement3 from "../images/slideshow/slide-3-element.png"

const Slideshow = () => {
  return (
    <>
      <div className="slideshow-area" id="slideshow-area">
        <Carousel className="seokit-slideshow owl-carousel" indicators={false}>
          <Carousel.Item className="seokit-slide-item">
            <img src={SliderImg1} alt="theshahriyar" />
            <Carousel.Caption>
              <div className="container">
                <div className="row">
                  <div className="col-md-7">
                    <div className="seokit-slideshow-content">
                      <h2 className="seokit-slide-layer-1">
                        <span>SEO traffic</span> is <br /> more likely to
                        convert
                      </h2>
                      <p
                        className="seokit-slide-layer-2"
                        data-animation="fadeInDown"
                      >
                        As your click-through-rate rises, your website's time on
                        site will likely <br /> increase as well. This is how
                        long your website visitors are staying.
                      </p>
                      <div className="seokit-slideshow-btn-wrapper">
                        <a
                          href=""
                          className="btn btn-seokit-slide-transparent seokit-slide-layer-3"
                        >
                          All Services
                        </a>
                        <a
                          href=""
                          className="btn btn-seokit-slide-primary seokit-slide-layer-4"
                        >
                          Get Started
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /.col --> */}
                  <div className="col-md-5">
                    <div className="seokit-slideshow-img">
                      <img src={SlideElement1} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="seokit-slide-item">
            <img src={SliderImg2} alt="theshahriyar.com" />
            <Carousel.Caption>
              <div className="container">
                <div className="row">
                  <div className="col-md-5">
                    <div className="seokit-slideshow-img">
                      <img src={SlideElement2} alt="" />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="seokit-slideshow-content">
                      <h2
                        className="seokit-slide-layer-1"
                        data-animation="fadeInDown"
                      >
                        Growing you <br />
                        <span>awareness </span>and equity
                      </h2>
                      <p
                        className="seokit-slide-layer-2"
                        data-animation="fadeInDown"
                      >
                        As your click-through-rate rises, your website's time on
                        site will likely
                        <br /> increase as well. This is how long your website
                        visitors are staying.
                      </p>
                      <div className="seokit-slideshow-btn-wrapper">
                        <a
                          href=""
                          className="btn btn-seokit-slide-transparent seokit-slide-layer-3"
                        >
                          Get Started
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="seokit-slide-item">
            <img src={SliderImg3} alt="theshahriyar.com" />
            <Carousel.Caption>
              <div className="container">
                <div className="row">
                  <div className="col-md-7">
                    <div className="seokit-slideshow-content">
                      <h2 className="seokit-slide-layer-1">
                        <span>SEO traffic</span> is
                        <br /> more likely to convert
                      </h2>
                      <p
                        className="seokit-slide-layer-2"
                        data-animation="fadeInDown"
                      >
                        As your click-through-rate rises, your website's time on
                        site will likely
                        <br /> increase as well. This is how long your website
                        visitors are staying.
                      </p>
                      <div className="seokit-slideshow-btn-wrapper">
                        <a
                          href=""
                          className="btn btn-seokit-slide-transparent seokit-slide-layer-3"
                        >
                          Get Started
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="seokit-slideshow-img">
                      <img src={SlideElement3} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* <div id="slideshow-area" className="slideshow-area">
        <div className="seokit-slideshow owl-carousel">
          <div
            className="seokit-slide-item"
            style={{ backgroundImage: `url(${SliderImg1})` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <div className="seokit-slideshow-content">
                    <h2 className="seokit-slide-layer-1">
                      <span>SEO traffic</span> is <br /> more likely to convert
                    </h2>
                    <p
                      className="seokit-slide-layer-2"
                      data-animation="fadeInDown"
                    >
                      As your click-through-rate rises, your website's time on
                      site will likely <br /> increase as well. This is how long
                      your website visitors are staying.
                    </p>
                    <div className="seokit-slideshow-btn-wrapper">
                      <a
                        href=""
                        className="btn btn-seokit-slide-transparent seokit-slide-layer-3"
                      >
                        All Services
                      </a>
                      <a
                        href=""
                        className="btn btn-seokit-slide-primary seokit-slide-layer-4"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div> */}
      {/* <!-- /.col --> */}
      {/* <div className="col-md-5">
                  <div className="seokit-slideshow-img">
                    <img src={SlideElement1} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
      {/* <!-- /.seokit-slide-item --> */}
      {/* <div
            className="seokit-slide-item"
            style={{ backgroundImage: `url(${SliderImg2})` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <div className="seokit-slideshow-img">
                    <img src={SlideElement2} alt="" />
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="seokit-slideshow-content">
                    <h2 className="seokit-slide-layer-1">
                      Growing you <br />
                      <span>awareness </span>and equity
                    </h2>
                    <p
                      className="seokit-slide-layer-2"
                      data-animation="fadeInDown"
                    >
                      As your click-through-rate rises, your website's time on
                      site will likely
                      <br /> increase as well. This is how long your website
                      visitors are staying.
                    </p>
                    <div className="seokit-slideshow-btn-wrapper">
                      <a
                        href=""
                        className="btn btn-seokit-slide-transparent seokit-slide-layer-3"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
      {/* <!-- /.seokit-slide-item --> */}
      {/* <div
            className="seokit-slide-item"
            style={{ backgroundImage: `url(${SliderImg3})` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <div className="seokit-slideshow-content">
                    <h2 className="seokit-slide-layer-1">
                      <span>SEO traffic</span> is
                      <br /> more likely to convert
                    </h2>
                    <p
                      className="seokit-slide-layer-2"
                      data-animation="fadeInDown"
                    >
                      As your click-through-rate rises, your website's time on
                      site will likely
                      <br /> increase as well. This is how long your website
                      visitors are staying.
                    </p>
                    <div className="seokit-slideshow-btn-wrapper">
                      <a
                        href=""
                        className="btn btn-seokit-slide-transparent seokit-slide-layer-3"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="seokit-slideshow-img">
                    <img src={SlideElement3} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
      {/* </div> */}
      {/* <!-- /.seokit-slideshow --> */}
      {/* </div> */}
    </>
  )
}

export default Slideshow
