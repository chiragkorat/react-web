import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../../config/images";
import Grid from '@mui/material/Grid';
import Drawer from '../drawer/Drawer'
import '../../App.css';
import {
  HeaderStyle,
  Wrapper,
  Logo,
  Nav,
  MenuList,
  MenuItem,
  ItemLink,
  SubMenu,
  SubMenuList,
  SubMenuListTitle,
  SubMenuListMenu,
  SubMenuItem,
  SubMenuListIcon,
  SubMenuListWrap,
  MobileMenu,
  MobileButton,
  MobileMenuWrap,
  MobileHeader,
  CloseButton,
  Mobilecontent,
  DownloadButton,
  ScanDownloadImg,
  SubMenuPopOver,
  SubMenuArrow,
  SubMenuContent,
  EarlyWrap,
} from "./Header.styles";
import Button from "../Button/Button";
import DownArrow from "../../assets/Icons/DownArrow";

const NavData = [
  {
    link: "/",
    name: "Products",
    dataNav: "products",
    isActive: "false",
    className: "products",
    submenu: [

      {
        menuList: [
          {
            heroTitle: "Chain",
            imagePath: images.navChain,
            alt: 'Chain'
          },
          {
            link: "Chain",
            Item: "Scallop Chain",
          },
          {
            link: "https://stake.scallopx.com/welcome",
            Item: "Stake",
            target: "blank"
          },
          {
            link: "Token",
            Item: "SCLP Token",
          },
        ],
      },
      {
        menuList: [
          {
            heroTitle: "Banking",
            imagePath: images.navChain,
            alt: 'Chain'
          },

          {
            link: "Account",
            Item: "Acounts",
          },
          {
            link: "Card",
            Item: "Cards",
          },
          {
            link: "Payment",
            Item: "Pay",
          },
          {
            link: "Payment",
            Item: "Money Transfer",
          },
          {
            link: "Payment",
            Item: "Remittance",
          },
        ],
      },
      {
        menuList: [
          {
            heroTitle: "Exchange",
            imagePath: images.navEx,
            alt: 'Chain'
          },

          {
            link: "https://www.scallop.exchange/en_US/",
            Item: "Scallop Centralised Exchange",
            target: "blank"
          },

        ],
      },
    ],
  },
  {
    link: "/",
    name: "About",
    dataNav: "about",
    className: "about",
    isActive: "false",
    submenu: [
      {
        menuList: [
          {
            link: "Team",
            Item: "Team",
          },
          {
            link: "Team",
            Item: "Advisors",
          },

        ],
      },
    ],
  },
  {
    link: "/",
    name: "Resources",
    dataNav: "resources",
    className: "resources",
    isActive: "false",
    submenu: [
      {
        menuList: [
          {
            link: "https://www.scallopx.com/learn/",
            Item: "Learn",
            target: "blank",
          },
          {
            link: "https://scallop-bucket.s3.eu-west-1.amazonaws.com/upload_file/SCALLOP1/Scallop+Whitepaper.pdf",
            Item: "Light paper",
            target: "blank",
          },
        ],
      },
    ],
  },
  {
    link: "/",
    name: "Contact Us",
    dataNav: "contactUs",
    className: "contactUs",
    isActive: "false",
    submenu: [
      {
        menuList: [
          {
            link: "https://help.scallopx.com/support/home",
            Item: "Support",
            target: "blank",
          },
          {
            link: "https://careers.scallopx.com/",
            Item: "Careers",
            target: "blank",
          }
        ],
      },
    ],
  },

];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [mDrop, setMDrop] = useState(false);
  const [showHideDownload, onShowHideDownload] = useState(false);
  const [mouseChangeEvent, onMouseChangeEvent] = useState(false);

  const handleClick = () => {
    setOpen(true);
    document.body.classList.add("over-hidden");
  };

  const handleClose = () => {
    setOpen(false);
    document.body.classList.remove("over-hidden");
  };

  const getElementOffset = (el) => {
    let rect = el.getBoundingClientRect();
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  };


  const scrollClick = (e, id) => {
    e.preventDefault();
    // let header = document.querySelector('header')
    let element = document.getElementById(id);
    window.scrollTo({
      behavior: "smooth",
      top: getElementOffset(element).top,
    });
    setOpen(false);
    document.body.classList.remove("over-hidden");
  };


  const logoClick = (e, id) => {
    e.preventDefault();

    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };


  const mobileDropdown = (e, item) => {
    e.preventDefault();
    item.isActive = !item.isActive;
    setMDrop(!mDrop);
  };

  /**
   * Refactor below code to comply with React hooks.
   */


  const onMouseLeaveEvent = () => {
    const popoverEl = document.querySelector('.navPopover');
    popoverEl.classList.remove('open');
    const sectionEls = document.querySelectorAll('.navSection');
    sectionEls.forEach(el => el.classList.remove('active'));
    const contentEl = document.querySelector('.content');
    contentEl.style.display = 'none';

  }

  const onMouseEnterEvent = (event) => {
    const section = event.target.getAttribute('data-nav');
    const popoverEl = document.querySelector('.navPopover');
    const sectionEls = document.querySelectorAll('.navSection');
    const contentEl = document.querySelector('.content');
    const arrowEl = document.querySelector('.arrow');
    const backgroundEl = document.querySelector('.background');
    const navLinkEls = document.querySelectorAll('.nav-link');
    const dimensions = {
      products: { width: 940, height: 395, x: 0 },
      about: { width: 205, height: 160, x: 350 },
      resources: { width: 205, height: 160, x: 450 },
      contactUs: { width: 205, height: 160, x: 580 }
    }

    const popoverLeft = popoverEl.getBoundingClientRect().x;

    navLinkEls.forEach((navLink) => {
      let section = navLink.getAttribute('data-nav');
      let rect = navLink.getBoundingClientRect();
      dimensions[section].arrowX = rect.left + (rect.width / 2) - popoverLeft;
    });



    popoverEl.classList.add('open');
    sectionEls.forEach(el => el.classList.remove('active'));
    document.querySelector(`.navSection.${section}`).classList.add('active');


    arrowEl.style.transform = `
      translateX(${dimensions[section].arrowX}px)
      rotate(45deg)`;
    backgroundEl.style.transform = `
      translateX(${dimensions[section].x}px)
      scaleX(${dimensions[section].arrowX})
      scaleY(${dimensions[section].height / dimensions['products'].height})
    `;


    contentEl.style.width = dimensions[section].width + 'px';
    contentEl.style.height = dimensions[section].height + 'px';
    contentEl.style.display = 'block';
    if (event.target.getAttribute('data-nav') === 'products') {
      contentEl.style.transform = `translateX(${dimensions[section].arrowX / 9}px)`
    }
    else {
      contentEl.style.transform = `translateX(${dimensions[section].arrowX - 100}px)`
    }
  }


  return (




    <Grid className="header">
      <HeaderStyle className="d-flex ">
        <Grid className="container d-flex justify-content-end align-items-center ">
          <a className="navbar-brand me-auto" href="#" >
            <img src={images.logo} alt="" />
          </a>
          <Grid className="order-lg-1 d-flex text-center ">
            <button
              className="navbar-toggler ms-2 me-4 d-lg-none d-md-block ms-auto"    >
              <span className="navbar-toggler-icon text-primary mb-2">
                <Drawer />
              </span>
            </button>
            <Grid className="d-xs-none d-sm-none d-md-none button-toggle d-lg-block align-item-center">
              <Grid className="d-flex align-items-center">
                <a href="#" className="btn header-btn text-decoratin-none me-3">
                  Get the app
                </a>
                <Grid className="dropdown-qr  text-center  text-primary">
                  <Grid className="dropdown-qrcode-img">
                    <img src={images.qrCode} alt="" width="100%" />
                  </Grid>
                  <span className="download-text ">download</span>
                  <i className="fa-solid fa-download ms-2" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <nav className="navbar navbar-expand-lg">
            <Grid className="collapse navbar-collapse" id="toggle-menu">
              <ul className="navbar-nav  mb-2 mb-lg-0">
                <li className="nav-item mega">
                  <a className="nav-link active" aria-current="page" href="#">
                    Product
                  </a>
                  <Grid className="mega-menu ">
                    <ul>
                      <li>
                        <a href="#">
                          <h5 className="d-flex text-dark">
                            <i className="fa-solid fa-link" />
                            Chain
                          </h5>
                        </a>
                      </li>
                      <li>
                        <a href="#">Scrallop</a>
                      </li>
                      <li>
                        <a href="#">Stake</a>
                      </li>
                      <li>
                        <a href="#">SCLP Token</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="#">
                          <h5 className="d-flex text-dark">
                            <i className="fa-solid fa-link" />
                            Banking
                          </h5>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mega-submenu-heading">
                          Accounts
                        </a>
                        <ul className="mega-submenu">
                          <li>
                            <a href="#">
                              <h5 className="d-flex text-dark">
                                {" "}
                                <i className="fa-solid fa-link" />
                                Exchange
                              </h5>
                            </a>
                          </li>
                          <li>
                            <a href="#">Scallop Centralized Exchange</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Cards</a>
                      </li>
                      <li>
                        <a href="#">Pay</a>
                      </li>
                      <li>
                        <a href="#">Money Transfer</a>
                      </li>
                      <li>
                        <a href="#">Remmintence</a>
                      </li>
                    </ul>
                  </Grid>
                </li>
                <li className="nav-item dropdown1">
                  <a className="nav-link " aria-current="page" href="#">
                    About
                  </a>
                  <Grid className="dropdown-menu1 ">
                    <ul>
                      <li>
                        <a href="#">Team</a>
                      </li>
                      <li>
                        <a href="#">Advisors</a>
                      </li>
                      <li>
                        <a href="#">Pay</a>
                      </li>
                    </ul>
                  </Grid>
                </li>
                <li className="nav-item dropdown1">
                  <a className="nav-link " aria-current="page" href="#">
                    Help
                  </a>
                  <Grid className="dropdown-menu1 ">
                    <ul>
                      <li>
                        <a href="#">Learn</a>
                      </li>
                      <li>
                        <a href="#">Light Paper</a>
                      </li>
                    </ul>
                  </Grid>
                </li>
                <li className="nav-item dropdown1">
                  <a className="nav-link " aria-current="page" href="#">
                    Careers
                  </a>
                  <Grid className="dropdown-menu1 ">
                    <ul>
                      <li>
                        <a href="#">Support</a>
                      </li>
                      <li>
                        <a href="#">Careers</a>
                      </li>
                    </ul>
                  </Grid>
                </li>
              </ul>
            </Grid>
          </nav>
        </Grid>
      </HeaderStyle>
    </Grid>
  );
};

export default Header;
