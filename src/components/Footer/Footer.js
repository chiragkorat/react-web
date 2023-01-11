import React from "react";
import { images } from "../../config/images";
import {
  FooterStyle,
  FooterMainLink,
  FooterLinksSection,
  FooterLinks,
  FooterHorizontal,
  FooterCountryFlag,
  FooterDivider,
  FooterFlexStyle

} from "./Footer.styles";
import Mailchimp from "react-mailchimp-form";



const footerLinks = [
  {
    heading: 'Defi Products',
    links: [
      {
        value: 'Scallop Earn'
      },
      {
        value: ' NFT’s'
      },
      {
        value: 'Token'
      },
      {
        value: 'Chain'
      },
      {
        value: 'Stake'
      },
      {
        value: 'Scallop App'

      }
    ]
  },
  {
    heading: 'Banking',
    links: [
      {
        value: 'Account'
      },
      {
        value: 'Cards'
      },
      {
        value: 'Exchange'
      },
      {
        value: 'Hardware Wallet'
      },
      {
        value: 'Payments'
      }
    ]
  },
  {
    heading: 'Company',
    links: [
      {
        value: 'About us '
      },
      {
        value: ' Culture'
      },
      {
        value: 'Team'
      },
      {
        value: 'Carrers'
      }
    ]
  },
  {
    heading: 'Legal',
    links: [
      {
        value: 'Terms of use'
      },
      {
        value: 'Privacy Policy'
      },
      {
        value: 'GDPR Policy'
      }
    ],
    subGroup: [
      {
        heading: 'Help',
        links: [
          {
            value: 'Customer Help'
          },
          {
            value: 'Community'
          }
        ]
      }
    ],


  }, {
    heading: 'Follow',
    links: [
      {
        value: 'Facebook',
        image: ''
      },
      {
        value: 'Instagram',
        image: ''
      },
      {
        value: 'Twitter',
        image: ''
      },
      {
        value: 'LinkedIn',
        image: ''
      }
    ]
  }
]

const footerHorizontalLinks = [
  'Website terms', 'Leagle Agreements', 'Complaints', 'Privacy', 'UK Modern Policy', 'Customer Vulnerability', 'Data Privacy Statement for Candidates'
]

const Footer = () => {
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
    console.log(element, "element");
    window.scrollTo({
      behavior: "smooth",
      top: getElementOffset(element).top,
    });
  };

  return (
    <FooterStyle id="cta">
      <div className="container footer-content">
        <FooterFlexStyle>        
        <FooterLinksSection>
          {footerLinks.map((item, index) => {
            return (
              <FooterLinks>
                <h5 key={index}>{item.heading}</h5>
                <ul>
                  {item.links.map((link, linkIndex) => {
                    return (
                      <FooterMainLink key={linkIndex}>
                        <img src={link.image} alt="" />
                        <a>{link.value}</a>
                      </FooterMainLink>
                    )

                  })
                  }
                </ul>
                {item.subGroup && item.subGroup.length &&
                  item.subGroup.map((sub, subIndex) => {
                    return (
                      <>
                        <h5 key={index}>{sub.heading}</h5>
                        <ul>
                          {
                            sub.links.map((link, linkIndex) => {
                              return (
                                <FooterMainLink key={linkIndex}>
                                  <img src={link.image} alt="" />
                                  <a>{link.value}</a>
                                </FooterMainLink>
                              )
                            })
                          }
                        </ul>
                      </>
                    )
                  })
                }
              </FooterLinks>
            )
          })}
        </FooterLinksSection>
        <FooterHorizontal>
          <FooterCountryFlag>
            <img src={images.ukFlag} alt="uk flag" />
            <span>United Kingdom</span>
          </FooterCountryFlag>
          <ul>
            {footerHorizontalLinks.map((footer, index) => {
              return (
                <li key={index}>
                  <a>{footer}</a>
                </li>
              )
            })}
          </ul>
        </FooterHorizontal>
        <FooterDivider></FooterDivider>
        <p>
            © 2021 Scallop Group. All Rights Reserved
        </p>
        <p>
        This website is owned by Scallop Group EU OU based in Estonia. Licensed to provide crypto activities in EU with Licence number : FVT000512 Scallop
Fintech Inc is license to provide Fiat and Crypto activities in Canada with MSB registration number: M21059242
Please visit our terms and conditions for more details.
        </p>
        </FooterFlexStyle>
      </div>
    </FooterStyle>
  );
};

export default Footer;
