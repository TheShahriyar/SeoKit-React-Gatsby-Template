import React from "react"

import img1 from "../images/blog-images/blog-thumb-1.jpg"
import img2 from "../images/blog-images/blog-thumb-2.jpg"
import img3 from "../images/blog-images/blog-thumb-3.jpg"

import { FaFacebookF, FaTwitter, FaPinterest, FaShareAlt } from "react-icons/fa"

const BlogSection = () => {
  return (
    <>
      <section className="blog-grid-section  pad-115">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="seokit-section-title text-center">
                <h3 className="lg-heading-title">Latest Blog</h3>
                <p>For the next generation of big businesses.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="blog-grid">
                <div className="blog-grid__item">
                  <div className="blog-grid__img">
                    <img className="img-fluid" src={img1} alt="" />
                  </div>
                  <div className="blog-grid__content">
                    <h4>
                      <a href="#">SEO pulls-in quality traffic</a>
                    </h4>
                    <p>
                      Ne sententiae constituam eam. Paulo omnes oblique sea ea,
                      inani persius sea, ei exerci laudem recusabo eos.
                    </p>
                    <div className="blog-grid__meta">
                      <span>31 March 2018</span>
                      <span className="text-right">
                        <span className="blog-grid__social">
                          <span className="blog-grid__social-icon">
                            <a href="#">
                              <i>
                                <FaFacebookF />
                              </i>
                            </a>
                            <a href="#">
                              <i>
                                <FaTwitter />
                              </i>
                            </a>
                            <a href="#">
                              <i>
                                <FaPinterest />
                              </i>
                            </a>
                          </span>
                          <i>
                            <FaShareAlt />
                          </i>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="blog-grid__item">
                  <div className="blog-grid__img">
                    <img className="img-fluid" src={img2} alt="" />
                  </div>
                  <div className="blog-grid__content">
                    <h4>
                      <a href="#">Now, here’s the good news.</a>
                    </h4>
                    <p>
                      Ne sententiae constituam eam. Paulo omnes oblique sea ea,
                      inani persius sea, ei exerci laudem recusabo eos.
                    </p>
                    <div className="blog-grid__meta">
                      <span>31 March 2018</span>
                      <span className="text-right">
                        <span className="blog-grid__social">
                          <span className="blog-grid__social-icon">
                            <a href="#">
                              <i>
                                <FaFacebookF />
                              </i>
                            </a>
                            <a href="#">
                              <i>
                                <FaTwitter />
                              </i>
                            </a>
                            <a href="#">
                              <i>
                                <FaPinterest />
                              </i>
                            </a>
                          </span>
                          <i>
                            <FaShareAlt />
                          </i>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="blog-grid__item">
                  <div className="blog-grid__img">
                    <img className="img-fluid" src={img3} alt="" />
                  </div>
                  <div className="blog-grid__content">
                    <h4>
                      <a href="#">They do not have enough time.</a>
                    </h4>
                    <p>
                      Ne sententiae constituam eam. Paulo omnes oblique sea ea,
                      inani persius sea, ei exerci laudem recusabo eos.
                    </p>
                    <div className="blog-grid__meta">
                      <span>31 March 2018</span>
                      <span className="text-right">
                        <span className="blog-grid__social">
                          <span className="blog-grid__social-icon">
                            <a href="#">
                              <i>
                                <FaFacebookF />
                              </i>
                            </a>
                            <a href="#">
                              <i>
                                <FaTwitter />
                              </i>
                            </a>
                            <a href="#">
                              <i>
                                <FaPinterest />
                              </i>
                            </a>
                          </span>
                          <i>
                            <FaShareAlt />
                          </i>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogSection
