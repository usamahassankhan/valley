import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
} from "reactstrap";
import logo from "../../assets/images/logo.png";

import "./index.css";
// import { HiOutlineSearch } from "react-icons/hi";
import { useHistory } from "react-router";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutUsOpen, setAboutUsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [membershipOpen, setMembershipOpen] = useState(false);
  const [publicationOpen, setPublicationOpen] = useState(false);
  const [visaRecommendationOpen, setvisaRecommendationOpen] = useState(false);
  const [pressReleaseOpen, setPressReleaseOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [tenderOpen, setTenderOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [eventOpen, setEventOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const history = useHistory();

  const toggleAboutUs = () => setAboutUsOpen(!aboutUsOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);
  const toggleMembership = () => setMembershipOpen(!membershipOpen);
  const toggleVisaRecommendation = () =>
    setvisaRecommendationOpen(!visaRecommendationOpen);
  const togglePublication = () => setPublicationOpen(!publicationOpen);
  const togglePressRelease = () => setPressReleaseOpen(!pressReleaseOpen);
  const toggleGallery = () => setGalleryOpen(!galleryOpen);
  const toggleTender = () => setTenderOpen(!tenderOpen);
  const toggleNotifications = () => setNotificationsOpen(!notificationsOpen);
  const toggleEvents = () => setEventOpen(!eventOpen);

  const about = () => {
    history.push("./about");
  };
  const vision = () => {
    history.push("./vision");
  };
  const form = () => {
    history.push("./form");
  };
  const managing = () => {
    history.push("./managing");
  };
  const leadership = () => {
    history.push("./leader");
  };
  const chamber = () => {
    history.push("./chamber");
  };
  const faqs = () => {
    history.push("./faqs");
  };
  return (
    <div>
      <Navbar
        color="light"
        light
        expand="lg"
        className="container-fluid fixed-top"
      >
        <div>
          <NavbarBrand href="/">
            <img className="navbar__logo" src={logo} />
          </NavbarBrand>
        </div>
        <div className="navbar__links">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/">E-commerce solution</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Complex websites</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Mobile Apps</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Contact</NavLink>
              </NavItem>
                <NavItem>
                <NavLink href="/">  <button className="headerbtn"> Let's Get Started</button></NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href="/">
                  <img className="avatarlogo" src={ceo} />
                </NavLink>
              </NavItem> */}

              {/* <UncontrolledDropdown
                nav
                inNavbar
                isOpen={aboutUsOpen}
                onMouseEnter={toggleAboutUs}
                onMouseLeave={toggleAboutUs}
              >
                <DropdownToggle nav caret onClick={about}>
                  About Us
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={vision}>Vision&Mission</DropdownItem>
                  <DropdownItem onClick={leadership}>Leadership</DropdownItem>
                  <DropdownItem onClick={managing}>
                    Managing Committees
                  </DropdownItem>
                  <DropdownItem onClick={chamber}>
                    Chamber's Secretariat
                  </DropdownItem>
                  <DropdownItem onClick={faqs}>FAQs</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
              {/* 
              <UncontrolledDropdown
                nav
                inNavbar
                isOpen={servicesOpen}
                onMouseEnter={toggleServices}
                onMouseLeave={toggleServices}
              >
                <DropdownToggle nav caret>
                  Services
                </DropdownToggle>
                <DropdownMenu right>
                  <UncontrolledDropdown
                    isOpen={membershipOpen}
                    onMouseEnter={toggleMembership}
                    onMouseLeave={toggleMembership}
                    className="header__membershipDropdown"
                  >
                    <DropdownToggle nav caret>
                      Membership
                    </DropdownToggle>
                    <DropdownMenu className="header__membershipDropdownMenu">
                      <DropdownItem onClick={() => history.push("/form")}>
                        Member's Login/Register
                      </DropdownItem>

                      <DropdownItem onClick={() => history.push("/membership")}>
                        Start New Business
                      </DropdownItem>
                      <DropdownItem
                        onClick={() => history.push("/membership-eform")}
                      >
                        Membership E-form
                      </DropdownItem>
                      <DropdownItem
                        onClick={() => history.push("/membership-directory")}
                      >
                        Search Member's Directory
                      </DropdownItem>
                      <DropdownItem
                        onClick={() => history.push("/voters-list")}
                      >
                        Voter's List
                      </DropdownItem>
                      <DropdownItem onClick={() => history.push("/contact-us")}>
                        Inquiry/Need Help
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>

                  <DropdownItem
                    onClick={() => history.push("./document-attestation")}
                  >
                    Document Attestaion
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => history.push("./visa-recommendation")}
                  >
                    Visa Recommendation
                  </DropdownItem>
                  <UncontrolledDropdown
                    isOpen={visaRecommendationOpen}
                    onMouseEnter={toggleVisaRecommendation}
                    onMouseLeave={toggleVisaRecommendation}
                    className="header__membershipDropdown"
                  >
                    <DropdownToggle
                      onClick={() => history.push("./visa-recommendation")}
                      nav
                      caret
                    >
                      Visa Recommendation
                    </DropdownToggle>
                    <DropdownMenu
                      right
                      className="header__membershipDropdownMenu1"
                    >
                      <DropdownItem
                        onClick={() => history.push("/visa-application-form")}
                      >
                        Visa Application Form
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <DropdownItem onClick={() => history.push("/sub-committees")}>
                    Sub Committees
                  </DropdownItem>
                  <UncontrolledDropdown
                    isOpen={publicationOpen}
                    onMouseEnter={togglePublication}
                    onMouseLeave={togglePublication}
                    className="header__membershipDropdown"
                  >
                    <DropdownToggle nav caret>
                      Publication
                    </DropdownToggle>
                    <DropdownMenu
                      right
                      className="header__membershipDropdownMenu"
                    >
                      <DropdownItem
                        onClick={() => history.push("/economic-horizon")}
                      >
                        Economic Horizon
                      </DropdownItem>

                      <DropdownItem>Research Reports & Analysis</DropdownItem>
                      <DropdownItem
                        onClick={() => history.push("/annual-reports")}
                      >
                        Annual Reports
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/components/">Research</NavLink>
              </NavItem>
              <UncontrolledDropdown
                nav
                inNavbar
                isOpen={pressReleaseOpen}
                onMouseEnter={togglePressRelease}
                onMouseLeave={togglePressRelease}
              >
                <DropdownToggle
                  nav
                  caret
                  onClick={() => {
                    history.push("/press_release");
                  }}
                >
                  Press Release
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>2020 - 2021</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown
                nav
                inNavbar
                isOpen={galleryOpen}
                onMouseEnter={toggleGallery}
                onMouseLeave={toggleGallery}
              >
                <DropdownToggle nav caret>
                  Galleries
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={() => history.push("/photo-gallery")}>
                    Photo Gallery
                  </DropdownItem>
                  <DropdownItem onClick={() => history.push("/video-gallery")}>
                    Video Gallery
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown
                nav
                inNavbar
                isOpen={tenderOpen}
                onMouseEnter={toggleTender}
                onMouseLeave={toggleTender}
              >
                <DropdownToggle
                  nav
                  caret
                  onClick={() => history.push("/tenders")}
                >
                  Tenders
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem
                    onClick={() => history.push("/vendor-registration")}
                  >
                    KCCI Vendor Registration Form
                  </DropdownItem>
                  <DropdownItem>Tender Form</DropdownItem>
                  <DropdownItem>All Tenders</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink
                  href="sro-notifications"
                  onClick={() => history.push("/sro-notifications")}
                >
                  SROs
                </NavLink>
              </NavItem>
              <UncontrolledDropdown
                nav
                inNavbar
                isOpen={notificationsOpen}
                onMouseEnter={toggleNotifications}
                onMouseLeave={toggleNotifications}
              >
                <DropdownToggle
                  nav
                  caret
                  onClick={() => history.push("/notifications")}
                >
                  Notifications
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem
                    onClick={() => history.push("/circular-notifications")}
                  >
                    Circular Notifications
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => history.push("/promotion-notifications")}
                  >
                    Promotion Notifiation
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => history.push("/event-notifications")}
                  >
                    Event Notifiation
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown
                nav
                inNavbar
                isOpen={eventOpen}
                onMouseEnter={toggleEvents}
                onMouseLeave={toggleEvents}
              >
                <DropdownToggle nav caret>
                  Events
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem
                    onClick={() => {
                      history.push("/events-mykarachi");
                    }}
                  >
                    My Karachi
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      history.push("/elections");
                    }}
                  >
                    Elections
                  </DropdownItem>
                  <DropdownItem>Expo Trophy</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/contact-us">Contact Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">
                  <HiOutlineSearch />
                </NavLink>
              </NavItem> */}
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default Header;
