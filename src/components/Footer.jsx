import React from "react"
import img1 from "../images/seokit/seokit-fp-1.jpg"
import img2 from "../images/seokit/seokit-fp-2.jpg"
import img3 from "../images/seokit/seokit-fp-3.jpg"

import {
  FaMapMarkerAlt,
  FaTelegramPlane,
  FaPhoneVolume,
  FaCaretRight,
  FaFacebookF,
  FaTwitter,
  FaDribbble,
  FaYoutube,
} from "react-icons/fa"

const Footer = () => {
  return (
    <>
      <footer className="footer parallax background-image-4 pad-90">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="widget seokit-about-widget">
                <h2 className="widget-title">About Us</h2>
                <div className="seokit-about-widget-content">
                  <p>
                    Lorem ipsum dolor sit amet, at est duis exerci, id mei
                    tritani interesset nece ssitatibus. Ad per rebum sig
                    niferumque. Ei duo homero iuvaret.
                  </p>
                  <div className="seokit-widget-address">
                    <p>
                      <i>
                        <FaMapMarkerAlt />
                      </i>{" "}
                      23, Green Street, Melbourne
                    </p>
                    <p>
                      <i>
                        <FaTelegramPlane />
                      </i>
                      youremail@email.com
                    </p>
                    <p>
                      <i>
                        <FaPhoneVolume />
                      </i>{" "}
                      +012 345 6789
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="widget seokit-lastest-post-widget">
                <h2 className="widget-title">Latest Posts</h2>
                <div className="seokit-latest-post">
                  <div className="seokit-latest-post-item">
                    <div className="post-item-image">
                      <img src={img1} alt="" />
                    </div>
                    <div className="post-item-title">
                      <h4>
                        <a href="#">
                          Modus inani quo ad, per clita denique referrentur no
                        </a>
                      </h4>
                    </div>
                  </div>
                  <div className="seokit-latest-post-item">
                    <div className="post-item-image">
                      <img src={img2} alt="" />
                    </div>
                    <div className="post-item-title">
                      <h4>
                        <a href="#">
                          Modus inani quo ad, per clita denique referrentur no
                        </a>
                      </h4>
                    </div>
                  </div>
                  <div className="seokit-latest-post-item">
                    <div className="post-item-image">
                      <img src={img3} alt="" />
                    </div>
                    <div className="post-item-title">
                      <h4>
                        <a href="#">
                          Modus inani quo ad, per clita denique referrentur no
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="widget widget_nav_menu">
                <h2 className="widget-title">Quick Links</h2>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <a href="#">
                        <i>
                          <FaCaretRight />
                        </i>{" "}
                        About Our Team
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i>
                          <FaCaretRight />
                        </i>{" "}
                        Monitoring Ranking
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i>
                          <FaCaretRight />
                        </i>{" "}
                        SEO Support
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i>
                          <FaCaretRight />
                        </i>{" "}
                        Search Engine Optimization
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i>
                          <FaCaretRight />
                        </i>{" "}
                        Search Engine Marketing
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i>
                          <FaCaretRight />
                        </i>{" "}
                        Code Optimization
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="widget widget_nav_menu">
                <h2 className="widget-title">Subscribe</h2>
                <p>
                  Sign up for our mailing list to get latest updates and offers
                </p>
                <form className="mc4wp-form">
                  <div className="mc4wp-form-fiels">
                    <p>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        required
                      />
                    </p>
                    <p>
                      <input type="submit" value="Sign up" />
                    </p>
                  </div>
                </form>
              </div>
              <div className="widget seokit-social-widget">
                <div className="seokit-social">
                  <ul>
                    <li>
                      <a href="#">
                        <i>
                          <FaFacebookF />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i>
                          <FaTwitter />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i>
                          <FaDribbble />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i>
                          <FaYoutube />
                        </i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="itl-section-wrap bg-bigstone">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="copyright-text">
                <p>
                  Copyright &copy; <a href="#"> iThemesLab</a>. All Rights
                  Reserved
                </p>
              </div>
            </div>
            <div className="col">
              <div className="copyright-nav">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Terms</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
