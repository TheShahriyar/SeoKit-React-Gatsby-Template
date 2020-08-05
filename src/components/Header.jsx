import React from "react"

import Logo from "../images/seokit/logo.png"

const Header = () => {
  return (
    <>
      <header
        className="itl-header itl-header--fixed fixed-top is-visible"
        data-nav-status="toggle"
      >
        <div className="itl-head">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar--dark">
              <a className="navbar-brand" href="index.html">
                <img src={Logo} alt="" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fas fa-bars"></i>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="index.html"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Home
                    </a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="index.html">
                        Home Page 1
                      </a>
                      <a className="dropdown-item" href="home-page-2.html">
                        Home Page 2
                      </a>
                      <a className="dropdown-item" href="home-page-3.html">
                        Home Page 3
                      </a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="index.html"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Pages
                    </a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="about-us.html">
                        About us
                      </a>
                      <a className="dropdown-item" href="case-details.html">
                        Case Details
                      </a>
                      <a className="dropdown-item" href="pricing-table.html">
                        Pricing Table
                      </a>
                      <a className="dropdown-item" href="reviews.html">
                        Client Reviews
                      </a>
                      <a className="dropdown-item" href="team.html">
                        Team
                      </a>
                      <a className="dropdown-item" href="faq.html">
                        FAQ
                      </a>
                      <a className="dropdown-item" href="404.html">
                        404
                      </a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="index.html"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Services
                    </a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="services.html">
                        All Services
                      </a>
                      <a className="dropdown-item" href="service-details.html">
                        Service Details
                      </a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="index.html"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Projects
                    </a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="project.html">
                        All Projects
                      </a>
                      <a className="dropdown-item" href="project-details.html">
                        Project Details
                      </a>
                    </div>
                  </li>
                  <li className="nav-item dropdown itl-mega-dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="index.html"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Features
                    </a>
                    <div className="dropdown-menu itl-megamenu">
                      <div className="row">
                        <div className="col-md-3">
                          <h3>Service List</h3>
                          <ul>
                            <li>
                              <a href="#">SEO Strategy</a>
                            </li>
                            <li>
                              <a href="#">SEO Consultency</a>
                            </li>
                            <li>
                              <a href="#">Keyword Research</a>
                            </li>
                            <li>
                              <a href="#">Link Building</a>
                            </li>
                            <li>
                              <a href="#">Website SEO Audit</a>
                            </li>
                            <li>
                              <a href="#">Email Marketing</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <h3>Elements One</h3>
                          <ul>
                            <li>
                              <a href="#">Alert</a>
                            </li>
                            <li>
                              <a href="#">Accordion</a>
                            </li>
                            <li>
                              <a href="#">Blockquote</a>
                            </li>
                            <li>
                              <a href="#">Typography</a>
                            </li>
                            <li>
                              <a href="#">Animated Counter</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <h3>Elements Two</h3>
                          <ul>
                            <li>
                              <a href="#">Dropcap</a>
                            </li>
                            <li>
                              <a href="#">Pricing Table</a>
                            </li>
                            <li>
                              <a href="#">Pie Chart</a>
                            </li>
                            <li>
                              <a href="#">Progress Bar</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <h3>About SEOKit</h3>
                          <p>
                            SEOKIT is specially made for SEO, SEM, Business,
                            Corporate, B2B websites.
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="index.html"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Blog
                    </a>
                    <div className="dropdown-menu">
                      <a
                        className="dropdown-item"
                        href="blog-right-sidebar.html"
                      >
                        Blog Right Sidebar
                      </a>
                      <a
                        className="dropdown-item"
                        href="blog-left-sidebar.html"
                      >
                        Blog Left Sidebar
                      </a>
                      <a className="dropdown-item" href="single-blog.html">
                        Single Blog
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">
                      Contact
                    </a>
                  </li>
                </ul>
                {/* <!-- /.navbar-nav --> */}
              </div>
              {/* <!-- /.collapse navbar-collapse --> */}
              <div className="d-none d-lg-inline-block ">
                <div className="head-right">
                  <i className="fas fa-search itl-search-activate jsSearchActivate"></i>
                  <i className="fas fa-bars itl-off-canvas-activate jsOffcanvasActivate"></i>
                </div>
              </div>
              {/* <!-- /.header-right --> */}
            </nav>
          </div>
          {/* <!-- /.conteiner --> */}
        </div>
      </header>
    </>
  )
}

export default Header
